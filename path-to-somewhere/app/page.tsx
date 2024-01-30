"use client"

import { useContext, useState } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from "@/contexts/UserProvider";

export default function Home() {
  const user = useContext(UserContext)
  const router = useRouter();
  const [name, setName] = useState("");

  const isNameFormated = (): boolean => {
    return name.trim() === ''
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-3xl font-bold text-cyan-600">Welcome to a new adventure</h1>
      <input
        className="text-black p-1 text-lg rounded-sm"
        onChange={(event) => {
          setName(event.target.value)
        }}
        placeholder="Enter a name"
        value={name} />
      <button
      className="bg-cyan-600 p-3 text-lg rounded-full disabled:bg-gray-500 disabled:opacity-50 hover:bg-indigo-500"
        disabled={isNameFormated()}
        onClick={() => {
          user?.setCharacterDetails({
            ...user.characterDetails,
            userName: name
          });
          router.push('/profile');
        }}>
        Create your character
      </button>
    </main>
  );
}
