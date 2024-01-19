"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
      className="text-black p-1 rounded-sm"
        onChange={ (event) => {
          setName(event.target.value)
        }}
        placeholder="Enter a name" 
        value={name}/>  
      <button>Create you character</button>
    </main>
  );
}
