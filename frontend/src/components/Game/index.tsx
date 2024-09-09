import { useRef, useEffect, useState } from "react"

import "./index.css"

import Bullet from "./Bullet"

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

    const movePlayer = (e: KeyboardEvent) => {
        const speed = 0.8
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
    }


    return (
        <div>
            <div className="circle" style={{height: "6vh", width: "6vh", left: `${initPos.x}vw`, top: `${initPos.y}vh`}} ref={playerRef}></div>
            { ready && <Bullet left={initPos.x + "vw"} top={initPos.y + "vh"}/> }
        </div>
    )
}