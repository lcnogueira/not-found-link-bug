'use client';

import { useRouter } from "next/navigation";

export default function Button(){
    const router = useRouter();

    const onKeyUp = (event) => {
        const value = event.target.value; 
        event.preventDefault();

        if(event.key === 'Enter'){
            router.push(`/search?q=${value}`);
        };
    }

    return <input className="text-black min-w-96" onKeyUp={onKeyUp} />
}