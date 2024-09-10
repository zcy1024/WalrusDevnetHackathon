import { useEffect, useRef } from "react"

import "./index.css"

import { checkCollision } from ".."

export type EnemyItem = {
    enemy: HTMLDivElement,
    pos_x: number,
    pos_y: number,
    radius: number,
    score: number
}

export type EnemyGroupType = {
    enemyRef: React.MutableRefObject<HTMLDivElement | null>,
    enemyItems: EnemyItem[]
}

type Props = {
    enemyGroup: EnemyGroupType | null,
    setEnemyGroup: React.Dispatch<React.SetStateAction<EnemyGroupType | null>>,
    playerPos: {
        x: string;
        y: string;
    }
}

export default function Enemy({ enemyGroup, setEnemyGroup, playerPos }: Props) {
    const enemyRef = useRef<HTMLDivElement | null>(null)

    const createEnemy = (pos_x: number, pos_y: number, radius: number) => {
        if (enemyGroup?.enemyItems.length === 20)
            return

        const childNode = document.createElement("div")
        childNode.style.position = "absolute"
        childNode.style.left = pos_x.toString() + "vw"
        childNode.style.top = pos_y.toString() + "vh"
        childNode.style.height = radius.toString() + "vh"
        childNode.style.width = radius.toString() + "vh"
        childNode.style.border = "1px solid black"
        childNode.style.borderRadius = "50%"
        childNode.style.backgroundColor = "white"
        enemyRef.current?.appendChild(childNode)

        if (!enemyGroup) {
            setEnemyGroup({
                enemyRef,
                enemyItems: [{
                    enemy: childNode,
                    pos_x,
                    pos_y,
                    radius,
                    score: Math.round(radius) * 10
                }]
            })
        } else {
            setEnemyGroup({
                ...enemyGroup,
                enemyItems: [
                    ...enemyGroup.enemyItems,
                    {
                        enemy: childNode,
                        pos_x,
                        pos_y,
                        radius,
                        score: Math.round(radius) * 10
                    }
                ]
            })
        }
    }

    useEffect(() => {
        let pos_x: number, pos_y: number, radius: number
        do {
            pos_x = (5 + Math.random() * 84)
            pos_y = (5 + Math.random() * 84)
            radius = (3 + Math.random() * 9)
        } while (checkCollision(pos_x, pos_y, Number(playerPos.x), Number(playerPos.y), radius + 6) || enemyGroup && enemyGroup.enemyItems.some(enemy => checkCollision(pos_x, pos_y, enemy.pos_x, enemy.pos_y, radius + enemy.radius)))

        createEnemy(pos_x, pos_y, radius)
    }, [enemyGroup])

    return (
        <div className="enemy" ref={enemyRef}>
        </div>
    )
}