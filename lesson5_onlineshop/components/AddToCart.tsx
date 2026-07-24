"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface AddToCartProbs {
    id: string;
}

export default function AddToCart({
    id
}: AddToCartProbs) {
    const { handleIncreaseProductQty, handleDecreaseProductQty, getProductQty } = useShoppingCartContext();

    return (
        <div>
            <div className="mt-4">
                <button
                    className="px-4 py-2 rounded-2xl bg-sky-500"
                    onClick={() => handleIncreaseProductQty(parseInt(id))}
                >+</button>
                <span className="mx-4">{getProductQty(parseInt(id))}</span>
                <button
                    className="px-4 py-2 rounded-2xl bg-sky-500"
                    onClick={() => handleDecreaseProductQty(parseInt(id))}
                >-</button>
            </div>

            <button className="bg-red-500 rounded px-6 py-2 mt-2">
                حذف از سبد
            </button>
        </div>
    )
}
