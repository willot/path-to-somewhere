'use client';

import { Character } from "@/app/profile/page";
import { useState, createContext, useEffect } from "react";
import React from 'react';

export interface AppUser {
    userName: string | undefined | null;
    setUserName: (value: string) => void;
    character: Character;
    setCharacterSelection: (value: Character) => void;
}

export const UserContext = createContext<AppUser | undefined>(undefined);

export function UserProvider ({ children }: { children: React.ReactNode }) {
    const [userName, setUserName] = useState<string | undefined | null>(localStorage.getItem('userName'));
    const [character, setCharacterSelection] = useState<Character | undefined | null>(localStorage.getItem('character'));

    useEffect(() => {
        if(userName){
            localStorage.setItem('userName', userName);
        }

        if(character){
            localStorage.setItem('character', character)
        }
    }, [userName, character])

    return (
        <UserContext.Provider value={{ userName, setUserName, character, setCharacterSelection }}>
            {children}
        </UserContext.Provider>
    )
}
