import { Enemy } from "@/app/dungeon/page";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { log } from "console";
import { useContext, useEffect, useState } from "react";
import { Vitals } from "./Inventory";
import { UserContext } from "@/contexts/UserProvider";

interface FightRoomProps {
    enemies: Enemy[];
    roomIndex: number;
    setVitals: (value: Vitals) => void;
    vitals: Vitals;
}

const FightRoom = ({ enemies, roomIndex, setVitals, vitals }: FightRoomProps) => {
    const user = useContext(UserContext)

    const determineEnemy = () => {
        if (roomIndex % 3 === 0) {
            return 2
        }
        if (roomIndex % 2 === 0) {
            return 0
        }
        else return 1
    }
    const [enemyIndex, setEnemyIndex] = useState<number>(determineEnemy());
    const [enemyHealth, setEnemyHealth] = useState<number>(enemies[enemyIndex].health)

    useEffect(() => {
        const roomEnemy =determineEnemy()
        setEnemyIndex(roomEnemy);
        setEnemyHealth(enemies[roomEnemy].health);
    }, [roomIndex]);

    const calculateDamage = () => {
        let damageInflicted = 0;
        let damageReceived = 0;
        const randomNumberBetween1and10 = Math.floor(Math.random() * 11);


        if (user && user.characterDetails) {
            damageInflicted = enemyHealth - user.characterDetails.weapons!.damage
            setEnemyHealth(damageInflicted);

            if (randomNumberBetween1and10 >= enemies[enemyIndex].hitChance) {
                damageReceived = vitals.health + user.characterDetails.armor!.defense - enemies[enemyIndex].damage;
                setVitals({ ...vitals, health: damageReceived })
            }
        }
    }


    return (
        <section className="flex flex-col items-center">
            <span>Fight Room {roomIndex}</span>
            {enemyIndex >= 0 && (
                <div>
                    <h3>Enemy present in the room:  {enemies[enemyIndex].name}</h3>
                    <div className="flex flex-row justify-between">
                        <span className="text-red-600">Enemy Health: {enemyHealth > 0 ? enemyHealth : 0}</span>
                        <span className="text-cyan-600">Your Health: {vitals.health > 0 ? vitals.health : 0}</span>
                    </div>
                    <img className={"max-w-80 max-h-80 pt-4 m-auto"} src={`./${enemies[enemyIndex].name}.png`} />
                </div>
            )
            }
            {enemyHealth > 0 && (
                <button
                className="bg-cyan-600 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500 mt-4"
                 onClick={() => {
                    calculateDamage();
                }}>Attack with weapon</button>
            )}
            {enemyHealth <= 0 && (
                <section>
                    <p className="text-2xl text-bold text-red-600 py-4">You vanquished your enemy!</p>
                    <p className="text-center">You still have <span className="text-red-600 italic font-semibold">{vitals.health}</span> of life remaining</p>
                    <p className="text-center p-4">Pick another Room</p>
                </section>
            )}
        </section>
    )
}

export default FightRoom;