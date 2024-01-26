import { Character } from "@/app/profile/page";
import { log } from "console";

export interface Skill {
    name: string,
    description: string,
}

export interface CharacterProfileDescription {
    name: Character,
    bio: string,
    skills: Skill[],
}

interface CharacterProfileProps {
    character: Character,
    characterProfiles: CharacterProfileDescription[],
}

const CharacterProfile = ({character, characterProfiles}: CharacterProfileProps) => {
    const profileToDisplay = characterProfiles.find((profile: CharacterProfileDescription) => {
        return profile.name === character
    })

    return (
        <section className="max-w-3xl">
            <div className="flex flex-col items-center mb-6 text-3xl font-bold text-cyan-600">{character!.toUpperCase()}</div>
            <h3>
                Bio:
            </h3>
            <div>{profileToDisplay?.bio}</div>
            <h3>Skills:</h3>
            {profileToDisplay?.skills.map((skill, index) => {
                return <div key={index}>{skill.name}: {skill.description}</div>
            })}
        </section>
    )
}

export default CharacterProfile;