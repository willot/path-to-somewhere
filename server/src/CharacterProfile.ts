export type Character = 'wizard' | 'knight' | 'monk' | 'warrior';

export interface Skill {
    name: string,
    description: string,
}

type WeaponType = 'Sword' | 'Staff' | 'Axe' | 'Dagger';

export interface Weapon {
    name: WeaponType,
    damage: number,
}

type ArmorName = 'Light' | 'Medium' | 'Heavy'
export interface Armor {
    name: ArmorName,
    defense: number,
}

export interface Vitals {
    health: number,
    mana: number,
}

export interface CharacterDetails {
    name: Character,
    bio: string,
    skills: Skill[],
    baselineVitals: Vitals,
    weapons: Weapon,
    armor: Armor
}


export const monkProfile: CharacterDetails = {
    name: "monk",
    bio: "Silent and agile, he is a master of martial arts and spiritual discipline. Her journey is one of self-discovery, seeking harmony between body and soul. With swift movements and focused mind, she navigates the world as a guardian of inner peace.",
    skills: [
        {
            name: 'Martial Arts Mastery',
            description: 'he excels in various martial arts techniques, using precise strikes and fluid movements to overcome adversaries.',
        },
        {
            name: 'Zen Meditation',
            description: 'Practicing deep meditation, he attains a state of inner tranquility, enhancing her focus and resilience in combat.',
        },
        {
            name: 'Acrobatic Maneuvers',
            description: 'With nimble acrobatics, he effortlessly maneuvers through obstacles and engages foes with grace and agility.',
        },
        {
            name: 'Spiritual Healing',
            description: 'Drawing upon spiritual energy, he can channel healing energies to mend wounds and restore vitality.',
        },
        {
            name: 'Enlightened Insight',
            description: 'Through years of introspection, he possesses heightened intuition, enabling her to perceive hidden truths and dangers.',
        },
    ],
    baselineVitals: {
        health: 200,
        mana: 100,
    },
    weapons: {
        name: "Staff",
        damage: 30,
    },
    armor: {
        name: 'Medium',
        defense: 20,
    },
};
export const wizardProfile: CharacterDetails = {
    name: "wizard",
    bio: "Cloaked in robes adorned with constellations, he is a master of elemental magic and ancient incantations. With a staff carved from the heartwood of the Eldertree, he navigates the realms, seeking balance between the forces of light and shadow. Known for unraveling riddles and brewing potions that whisper tales of forgotten realms, He is a guardian of mystical lore and a seeker of cosmic harmony.",
    skills: [
        {
            name: 'Elemental Mastery',
            description: 'he Moonshadow is adept at harnessing the elemental forces, manipulating fire, water, air, and earth with precision.',
        },
        {
            name: 'Arcane Riddles',
            description: 'A skilled enchanter, he possesses the ability to craft and decipher intricate arcane riddles, unlocking the secrets of ancient scrolls and hidden knowledge.',
        },
        {
            name: 'Potion Crafting',
            description: 'With an extensive knowledge of herbs and magical ingredients, he concocts potions that grant various effects, from healing elixirs to temporary enhancements.',
        },
        {
            name: 'Astral Navigation',
            description: 'Using celestial maps and his affinity with the stars, he navigates the mystical realms, traveling between dimensions with finesse.',
        },
        {
            name: 'Mystical Meditation',
            description: 'He practices a unique form of meditation that allows him to attune his mind to the ethereal energies, enhancing his magical focus and insight. AKA: napping professional.',
        },
    ],
    baselineVitals: {
        health: 150,
        mana: 200,
    },
    weapons: {
        name: "Dagger",
        damage: 15,
    },
    armor: {
        name: 'Light',
        defense: 10,
    },
};
export const warriorProfile: CharacterDetails = {
    name: "warrior",
    bio: "Clad in sturdy armor and wielding a mighty blade, he is a fearless warrior driven by honor and duty. His path is one of battlefield prowess, defending the realm against dark forces. With a resolute heart, he charges into combat, a beacon of strength and resilience.",
    skills: [
        {
            name: 'Blade Mastery',
            description: 'he wields his mighty blade with exceptional skill, delivering powerful strikes and cleaving through enemy lines.',
        },
        {
            name: 'Shield Defense',
            description: 'A master of defense, he expertly employs a shield to deflect attacks and protect himself and allies from harm.',
        },
        {
            name: 'Battle Tactics',
            description: 'he is a strategic tactician, adept at analyzing the battlefield and devising effective combat strategies.',
        },
        {
            name: 'Endurance',
            description: 'Trained in rigorous endurance exercises, he possesses remarkable stamina, allowing him to endure prolonged battles.',
        },
        {
            name: 'Honor-bound Resolve',
            description: 'Fueled by an unwavering sense of honor, his resolve is unbreakable, resisting mental and emotional challenges in the heat of battle.',
        },
    ],
    baselineVitals: {
        health: 200,
        mana: 0,
    },
    weapons: {
        name: "Axe",
        damage: 60,
    },
    armor: {
        name: 'Medium',
        defense: 20,
    },

};
export const knightProfile: CharacterDetails = {
    name: "knight",
    bio: "Adorned in shining armor, he is a noble knight with a pledge to defend the realm and uphold justice. Mounted on a noble steed, she charges into the fray, her lance a symbol of righteous authority. A paragon of chivalry, he embodies courage and virtue.",
    skills: [
        {
            name: 'Lance Expertise',
            description: 'he is a master with the lance, utilizing it with precision and power while mounted on her noble steed.',
        },
        {
            name: 'Chivalrous Aura',
            description: 'Radiating a chivalrous aura, he inspires allies, boosting their morale and enhancing their combat capabilities.',
        },
        {
            name: 'Mounted Combat',
            description: 'Skilled in mounted warfare, he charges through enemies on her steed, delivering devastating attacks with finesse.',
        },
        {
            name: 'Knightly Vigilance',
            description: 'Ever watchful, he maintains keen awareness on the battlefield, detecting threats and protecting her comrades.',
        },
        {
            name: 'Virtuous Oath',
            description: 'Bound by a virtuous oath, his actions reflect principles of justice, integrity, and selfless service to the realm.',
        },
    ],
    baselineVitals: {
        health: 300,
        mana: 0,
    },
    weapons: {
        name: "Sword",
        damage: 20,
    },
    armor: {
        name: 'Heavy',
        defense: 30,
    },
};