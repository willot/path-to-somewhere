import { useState } from "react";

interface RoomButtonProps {
    disabledButton: boolean;
    roomIndex: number;
    setRoomSelection: (value: number | undefined) => void;
}

const RoomButton = ({ disabledButton, roomIndex, setRoomSelection }: RoomButtonProps) => {
    const [explored, setExplored] = useState(false);
    const imageToDisplay = () => {
        return explored ? './dungeonDoorOpened.png' : './dungeonDoor1.png'
    }

    return (
        <>
            <button
                className="w-20 h-20 bg-neutral-700 rounded disabled:opacity-50"
                aria-label={explored ? 'Explored' : 'Open'}
                disabled={disabledButton}
                onClick={() => {
                    setExplored(true);
                    setRoomSelection(roomIndex);
                }}>
                <span>
                    {explored ? "Explored" : "Open"}
                    <img src={explored ? './dungeonDoorOpened.png' : './dungeonDoor1.png'} alt={explored ? 'Explored' : 'Open'} />
                </span>
            </button>
        </>
    )
}

export default RoomButton;