import { useState, useEffect, useRef } from "react"

import "./index.css"

import { EnemyItem, EnemyGroupType } from "../Enemy"
import { checkCollision } from ".."

type Props = {
    left: string,
    top: string,
    enemyGroup: EnemyGroupType | null,
    setEnemyGroup: React.Dispatch<React.SetStateAction<EnemyGroupType | null>>,
    updateScore: (s: number) => void,
    updateGameOver: () => void
}

type bulletItem = {
    bullet: HTMLDivElement,
    st_x: number,
    st_y: number,
    x_v: number,
    y_v: number,
    cre_ms: number
}

// bullets
let bullets: bulletItem[] = []
let clip = 100

export default function Bullet({ left, top, enemyGroup, setEnemyGroup, updateScore, updateGameOver }: Props) {
    const bulletRef = useRef<HTMLDivElement | null>(null)

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // check bullet is ready
    const [ready, setReady] = useState<boolean>(false)

    const refresh = async () => {
        if (ready || clip <= -20)
            return

        setReady(true)
        await sleep(100)

        if (clip > 0) {

            // shoot
            const childNode = document.createElement("div")
            childNode.style.position = "absolute"
            childNode.style.left = left
            childNode.style.top = top
            childNode.style.height = "2vh"
            childNode.style.width = "2vh"
            childNode.style.border = "1px solid white"
            childNode.style.borderRadius = "50%"
            childNode.style.backgroundColor = "gray"
            bulletRef.current?.appendChild(childNode)

            bullets.push({
                bullet: childNode,
                st_x: Number(childNode.style.left.slice(0, -2)),
                st_y: Number(childNode.style.top.slice(0, -2)),
                x_v: Math.random(),
                y_v: Math.random(),
                cre_ms: new Date().getTime()
            })

            await sleep(100)
        }

        bullets = bullets.filter(bullet => {
            const x = Number(bullet.bullet.style.left.slice(0, -2))
            const y = Number(bullet.bullet.style.top.slice(0, -2))
            const inner = x >= 0 && x <= 100 && y >= 0 && y <= 100
            if (!inner) {
                bulletRef.current?.removeChild(bullet.bullet)
                return false
            }

            if (!enemyGroup)
                return true

            const hitEnemy = (enemy: EnemyItem) => {
                const radius = Number(enemy.enemy.style.width.slice(0, -2)) - 1
                if (radius < 0)
                    return
                if (radius >= 1) {
                    enemy.enemy.style.width = radius.toString() + "vh"
                    enemy.enemy.style.height = radius.toString() + "vh"
                    setEnemyGroup({
                        ...enemyGroup,
                        enemyItems: enemyGroup.enemyItems.map(e => {
                            if (e !== enemy)
                                return e
                            return {
                                ...e,
                                radius
                            }
                        })
                    })
                    return
                }
                setEnemyGroup({
                    ...enemyGroup,
                    enemyItems: enemyGroup.enemyItems.filter(e => e !== enemy)
                })
                try {
                    updateScore(enemy.score)
                    enemyGroup.enemyRef.current?.removeChild(enemy.enemy)
                } catch (error) {
                    // console.log(error)
                }
            }

            const hit = enemyGroup.enemyItems.find(enemy => checkCollision(x, y, enemy.pos_x, enemy.pos_y, 2 + enemy.radius))
            if (hit) {
                bulletRef.current?.removeChild(bullet.bullet)
                hitEnemy(hit)
                return false
            }

            return true
        })

        await sleep(100)
        setReady(false)

        if (--clip === 0) {
            // Make sure the bullets disappear as much as possible
            await sleep(4000)
            updateGameOver()
        }
    }

    useEffect(() => {
        refresh()
    }, [ready])

    // bullets actions
    const bulletsActions = () => {
        let cur_ms = new Date().getTime()

        // change speed
        const change = (v: number) => {
            v -= 0.5
            if (v >= 0)
                v += 1.5
            else
                v -= 1.5
            return v
        }

        bullets.map(bullet => {
            const tr_x_v = change(bullet.x_v)
            const tr_y_v = change(bullet.y_v)
            const time = (cur_ms - bullet.cre_ms) / 100
            bullet.bullet.style.left = (bullet.st_x + tr_x_v * time).toString() + "vw"
            bullet.bullet.style.top = (bullet.st_y + tr_y_v * time).toString() + "vh"
        })

        window.requestAnimationFrame(bulletsActions)
    }
    // run actions
    useEffect(() => {
        const idx = window.requestAnimationFrame(bulletsActions)
        return () => {
            window.cancelAnimationFrame(idx)
        }
    }, [])

    return (
        <div className="bullet" ref={bulletRef}>
        </div>
    )
}