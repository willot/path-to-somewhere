'use client';

import { useState, createContext } from "react";
import React from 'react';

export interface AppUser {
    userName: string | undefined
}

// export const UserContext = createContext({userName: undefined});
export const UserContext = createContext<AppUser | undefined>(undefined);

export function UserProvider ({ children }: { children: React.ReactNode }) {
    const [userName, setUsername] = useState<string| undefined>("bob");

    return (
        <UserContext.Provider value={{ userName }}>
            {children}
        </UserContext.Provider>
    )
}
