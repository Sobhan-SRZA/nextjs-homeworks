"use client"

import { createContext, useState } from "react"

type CartItem = {
    id: number;
    qty: number;
}

const ShoppingCartContext = createContext({});

export default function ShoppingCartContextProvider({ children }: { children: React.ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
