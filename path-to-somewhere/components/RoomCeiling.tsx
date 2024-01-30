import { useState } from "react"
import { Vitals } from "./Inventory";

type Choice = 'enter' | 'leave' | undefined

interface Room1Props{
    setVitals:(value: Vitals)=> void;
    vitals: Vitals;
}

const RoomCeiling = ({setVitals, vitals}: Room1Props) => {

    const [choice, setChoice] = useState<Choice>();
    return (
        <>
            <span>Room1</span>
            <button onClick={() => {
                setChoice('enter');
                setVitals({...vitals, health: 0});
                }}>Enter</button>
            <button onClick={() => setChoice('leave')}>Leave</button>

            {choice === 'enter' && (
                <>
                    <p>The ceiling fall on you and you die</p>
                    <img src={'/rock.jpg'} alt="a big rock crushed you" />
                </>
            )}
            {choice === 'leave' && (
                <p>Good choice the ceiling crumble has you close the door</p>
            )}
        </>
    )
}

export default RoomCeiling;