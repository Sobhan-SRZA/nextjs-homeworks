"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    const router = useRouter();
    const params = useSearchParams();

    const handleSearch = () => {
        const currentParams = new URLSearchParams(params.toString());
        
        currentParams.set("title", search);
        router.push("/store?" + currentParams.toString());
    }

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="جست و جو..." className="bg-gray-900" />
            <button onClick={handleSearch} className="bg-sky-900 p-2 rounded-2xl">جست و جو</button>
        </div>
    )
}