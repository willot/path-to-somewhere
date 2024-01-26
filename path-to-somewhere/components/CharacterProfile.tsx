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

const CharacterProfile = ({ character, characterProfiles }: CharacterProfileProps) => {
    const profileToDisplay = characterProfiles.find((profile: CharacterProfileDescription) => {
        return profile.name === character
    })

    return (
        <section className="max-w-3xl">
            <div className="flex flex-col items-center mb-6 text-3xl font-bold text-cyan-600">{character!.toUpperCase()}</div>
            <h3 className="text-fuchsia-400 text-2xl mb-3 font-semibold">
                Bio:
            </h3>
            <div>{profileToDisplay?.bio}</div>
            <h3 className="text-fuchsia-400 text-2xl my-3 font-semibold">
                Skills:
            </h3>
            {profileToDisplay?.skills.map((skill, index) => {
                return <div key={index}><span className="text-cyan-600 font-bold text-xl pr-2">{skill.name}:</span> {skill.description}</div>
            })}
        </section>
    )
}

export default CharacterProfile;