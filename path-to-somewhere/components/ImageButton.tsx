import { Character } from "@/app/profile/page"

interface ImageButtonProps {
    character: Character,
    setter: (value: Character) => void,
}

const ImageButton = ({ character, setter }: ImageButtonProps) => {
    return (
        <button className="hover:opacity-50" aria-label={character?.toString()}
            onClick={() => { setter(character) }}>
            <img className="max-w-48 max-h-48 rounded-sm" src={`/${character}.png`} />
        </button>
    )
}

export default ImageButton;