"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();
  const [name, setName] = useState("");

  const isNameFormated = (): boolean => {
    return name.trim() === ''
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        className="text-black p-1 rounded-sm"
        onChange={(event) => {
          setName(event.target.value)
        }}
        placeholder="Enter a name"
        value={name} />
      <button
        disabled={isNameFormated()}
        onClick={() => {
          router.push('/profile')
        }}>
        Create your character
      </button>
    </main>
  );
}
