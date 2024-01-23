'use client';

import { useState, createContext } from "react";
import React from 'react';

export interface AppUser {
    userName: string | undefined;
    setUserName: (value: string) => void;
}

// export const UserContext = createContext({userName: undefined});
export const UserContext = createContext<AppUser | undefined>(undefined);

export function UserProvider ({ children }: { children: React.ReactNode }) {
    const [userName, setUserName] = useState<string| undefined>();

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}
