import { useState } from "react"

type Choice = 'enter' | 'leave' | undefined

const Room1 = () => {

    const [choice, setChoice] = useState<Choice>();
    return (
        <>
            <span>Room1</span>
            <button onClick={() => setChoice('enter')}>Enter</button>
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

export default Room1;