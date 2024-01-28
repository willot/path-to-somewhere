"use client"
import { UserContext } from "@/contexts/UserProvider";
import { useContext, useState } from "react";

import dynamic from 'next/dynamic'
import RoomButton from "@/components/RoomButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Room1 = dynamic(() => import('@/components/Room1'), {
    loading: () => <p>Loading...</p>,
    ssr: false, // Set server-side rendering to false
})


const Dungeon = () => {
    const user = useContext(UserContext)
    const [roomSelection, setRoomSelection] = useState<number | undefined>();


    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['rooms'],
        queryFn: () =>
            axios
                .get('http://localhost:3001/api/rooms')
                .then((res) => res.data),
    });

    // const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const shuffle = (array: number[]) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };

    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-24">
            <h1>Dungeon</h1>
            <h1 className="text-3xl font-bold text-cyan-600">Welcome {user?.userName} powerful {user?.character}</h1>
            <section className="grid grid-cols-3 gap-1">
                {data && (data.rooms.map((room: number) => {
                    return (
                        <RoomButton
                            key={room}
                            roomIndex={room}
                            disabledButton={false}
                            setRoomSelection={setRoomSelection}
                        />
                    )
                }))}
            </section>

            {roomSelection && (
                <Room1 />
            )}
        </main>
    )
}

export default Dungeon;