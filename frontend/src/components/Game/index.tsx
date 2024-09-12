import { useRef, useEffect, useState, useCallback } from "react"

import "./index.css"

import Bullet from "./Bullet"
import Enemy, { EnemyGroupType } from "./Enemy"
import Settlement, { RankProps } from "./Settlement"

import { useSuiClientQuery } from "@mysten/dapp-kit"
import { RankList } from "../ids"

export default function Game() {
    const playerRef = useRef<HTMLDivElement | null>(null)

    // random 0 ~ 100
    const random = () => {
        return (Math.random() * 60 + 20).toString()
    }

    // player
    // const initX = random()
    // const initY = random()
    const [initPos, setInitPos] = useState<{x: string, y: string}>({x: random(), y: random()})

    // ready to shoot
    const [ready, setReady] = useState<boolean>(false)

    // keyboardevent
    useEffect(() => {
        setReady(true)
        document.addEventListener("keydown", movePlayer, false)
        return () => {
            document.removeEventListener("keydown", movePlayer, false)
        }
    }, [])

    const movePlayer = useCallback((e: KeyboardEvent) => {
        let speed = 0.8
        const style = playerRef.current!.style
        if (e.key === "w" || e.key === "ArrowUp") {
            style.top = (Math.max(0, Number(style.top.slice(0, -2)) - speed)).toString() + "vh"
        } else if (e.key === "a" || e.key === "ArrowLeft") {
            style.left = (Math.max(0, Number(style.left.slice(0, -2)) - speed)).toString() + "vw"
        } else if (e.key === "s" || e.key === "ArrowDown") {
            style.top = (Math.min(100 - Number(style.height.slice(0, -2)) + 2.7, Number(style.top.slice(0, -2)) + speed)).toString() + "vh"
        } else if (e.key === "d" || e.key === "ArrowRight") {
            style.left = (Math.min(100 - Number(style.height.slice(0, -2)) + 4, Number(style.left.slice(0, -2)) + speed)).toString() + "vw"
        }
        setInitPos({
            x: style.left.slice(0, -2),
            y: style.top.slice(0, -2)
        })
    }, [])

    // store enemy
    const [enemyGroup, setEnemyGroup] = useState<EnemyGroupType | null>(null)

    // store score
    const [score, setScore] = useState<number>(0)
    const updateScore = (s: number) => {
        setScore(score + s)
    }

    // check gameover
    const [gameOver, setGameOver] = useState<boolean>(false)

    // get rank list
    const { refetch } = useSuiClientQuery("getObject", {
        id: RankList,
        options: {
            showContent: true
        }
    })

    // rank
    const [rank, setRank] = useState<RankProps>({
        users: [],
        scores: []
    })

    const updateGameOver = async () => {
        setGameOver(true)
        document.removeEventListener("keydown", movePlayer, false)
        // data: any => can't read fields???
        const { data }: { data: any } =  await refetch()
        setRank({
            users: data?.data?.content.fields.user,
            scores: data?.data?.content.fields.rank
        })
    }

    return (
        <div>
            <div className="circle" style={{height: "6vh", width: "6vh", left: `${initPos.x}vw`, top: `${initPos.y}vh`}} ref={playerRef}></div>
            { ready && <Bullet left={initPos.x + "vw"} top={initPos.y + "vh"} enemyGroup={enemyGroup} setEnemyGroup={setEnemyGroup} updateScore={updateScore} updateGameOver={updateGameOver} /> }
            { ready && <Enemy enemyGroup={enemyGroup} setEnemyGroup={setEnemyGroup} playerPos={initPos} />}
            { gameOver && <Settlement score={score} rank={rank} /> }
        </div>
    )
}

export function checkCollision(x1: number, y1: number, x2: number, y2: number, dis: number) {
    const dx = x1 - x2
    const dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy) <= dis
}