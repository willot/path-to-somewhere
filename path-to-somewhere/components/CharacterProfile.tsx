import { Character } from "@/app/profile/page";

interface CharacterProfileProps {
    character: Character,
}

const CharacterProfile = ({character}: CharacterProfileProps) => {
    return (
        <section className="max-w-3xl">
            <div className="flex flex-col items-center mb-6 text-3xl font-bold text-cyan-600">{character!.toUpperCase()}</div>
            <h3>
                Bio:
            </h3>
            <div>Cloaked in robes adorned with constellations, Eldric is a master of elemental magic and ancient incantations. With a staff carved from the heartwood of the Eldertree, he navigates the realms, seeking balance between the forces of light and shadow. Known for unraveling riddles and brewing potions that whisper tales of forgotten realms, He is a guardian of mystical lore and a seeker of cosmic harmony.</div>
            <h3>Skills:</h3>
            <div>Elemental Mastery: Eldric Moonshadow is adept at harnessing the elemental forces, manipulating fire, water, air, and earth with precision.</div>
            <div>Arcane Riddles: A skilled enchanter, Eldric possesses the ability to craft and decipher intricate arcane riddles, unlocking the secrets of ancient scrolls and hidden knowledge.</div>
            <div>Potion Crafting: With an extensive knowledge of herbs and magical ingredients, Eldric concocts potions that grant various effects, from healing elixirs to temporary enhancements.</div>
            <div>Astral Navigation: Using celestial maps and his affinity with the stars, Eldric navigates the mystical realms, traveling between dimensions with finesse.</div>
            <div>Mystical Meditation: Eldric practices a unique form of meditation that allows him to attune his mind to the ethereal energies, enhancing his magical focus and insight. AKA: napping professional.</div>
        </section>
    )
}

export default CharacterProfile;