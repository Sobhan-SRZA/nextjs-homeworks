"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

export default function AddToCart() {
    const { } = useShoppingCartContext();

    return (
        <div className="mt-4">
            <button className="px-4 py-2 rounded-2xl bg-sky-500">+</button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 rounded-2xl bg-sky-500">-</button>
        </div>
    )
}
