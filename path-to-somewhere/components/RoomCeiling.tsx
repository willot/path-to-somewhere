import { useState } from "react"
import { Vitals } from "./Inventory";
import { useRouter } from "next/navigation";

type Choice = 'enter' | 'leave' | undefined

interface Room1Props {
    setVitals: (value: Vitals) => void;
    vitals: Vitals;
}

const RoomCeiling = ({ setVitals, vitals }: Room1Props) => {
    const router = useRouter();

    const [choice, setChoice] = useState<Choice>();
    return (
        <>
            <span>Room 1</span>
            {choice === undefined && (
                <>
                    <button 
                    className="bg-cyan-600 min-w-32 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500"
                    onClick={() => {
                        setChoice('enter');
                    }}>Enter</button>
                    <button 
                    className="bg-red-600  min-w-32 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500"
                    onClick={() => setChoice('leave')}>Leave</button>
                </>
            )}

            {choice === 'enter' && (
                <>
                    <p className="font-bold text-xl">The ceiling fall on you and you die</p>
                    <img className={"max-w-3xl rounded"} src={'/rock.jpg'} alt="a big rock crushed you" />
                    <button 
                    className="bg-cyan-600 min-w-32 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500"
                    onClick={() => {
                        router.push('/profile');
                    }}>Restart</button>
                </>
            )}
            {choice === 'leave' && (
                <p>Good choice the ceiling crumble has you close the door</p>
            )}
        </>
    )
}

export default RoomCeiling;