"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
    id: number;
    qty: number;
}

type ShoppingCartContextType = {
    cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
};

export default function ShoppingCartContextProvider({ children }: { children: React.ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    return (
        <ShoppingCartContext.Provider value={{ cartItems }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
