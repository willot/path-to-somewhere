'use client';

import { Character } from "@/app/profile/page";
import { Armor, Vitals, Weapon } from "@/components/Inventory";
import React, { createContext, useEffect, useState } from 'react';


const setLocalStorageObject = (key: string, value: CharacterDetails) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageObject = (key: string): CharacterDetails | undefined => {
    if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }
};

export interface CharacterDetails {
    userName: string | undefined,
    name: Character,
    baselineVitals: Vitals | undefined,
    weapons: Weapon | undefined,
    armor: Armor | undefined
}

export interface AppUser {
    characterDetails: CharacterDetails,
    setCharacterDetails: (value: CharacterDetails) => void;
}

const emptyCharacterDetails: CharacterDetails = {
    userName: undefined,
    name: undefined,
    baselineVitals: undefined,
    weapons: undefined,
    armor: undefined
}

export const UserContext = createContext<AppUser | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [characterDetails, setCharacterDetails] = useState<CharacterDetails>(getLocalStorageObject('characterDetails') || emptyCharacterDetails);

    useEffect(() => {
        if (characterDetails.userName || characterDetails.name) {
            setLocalStorageObject('characterDetails', characterDetails)
        }
    }, [characterDetails.userName, characterDetails.name])

    return (
        <UserContext.Provider value={{ characterDetails, setCharacterDetails }}>
            {children}
        </UserContext.Provider>
    )
}
