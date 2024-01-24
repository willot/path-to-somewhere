'use client';

import { useState, createContext, useEffect } from "react";
import React from 'react';

export interface AppUser {
    userName: string | undefined | null;
    setUserName: (value: string) => void;
}

export const UserContext = createContext<AppUser | undefined>(undefined);

export function UserProvider ({ children }: { children: React.ReactNode }) {
    console.log("localStorage.getItem('userName')", localStorage.getItem('userName'))
    const [userName, setUserName] = useState<string | undefined | null>(localStorage.getItem('userName'));

    useEffect(() => {
        if(userName){
            localStorage.setItem('userName', userName);
        }
    }, [userName])

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}
