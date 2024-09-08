import { useRef, useEffect } from "react"

import "./index.css"

export default function Game() {
    const playerRef = useRef<HTMLDivElement | null>(null)

    // random 0 ~ 100
    const random = () => {
        return (Math.random() * 60 + 20).toString()
    }

    // player
    const initX = random()
    const initY = random()

    // keyboardevent
    useEffect(() => {
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
            style.top = (Math.min(100 - Number(style.height.slice(0, -2)) - 0.5, Number(style.top.slice(0, -2)) + speed)).toString() + "vh"
        } else if (e.key === "d" || e.key === "ArrowRight") {
            style.left = (Math.min(100 - Number(style.height.slice(0, -2)) + 2, Number(style.left.slice(0, -2)) + speed)).toString() + "vw"
        }
    }


    return (
        <div>
            <div className="circle" style={{height: "6vh", width: "6vh", left: `${initX}vw`, top: `${initY}vh`}} ref={playerRef}></div>
        </div>
    )
}