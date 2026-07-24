"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
    id: number;
    qty: number;
}

type ShoppingCartContextType = {
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number) => void;
    handleDecreaseProductQty: (id: number) => void;
    handleRemoveProduct: (id: number) => void;
    getProductQty: (id: number) => number;
    cartTotalQty: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
};

export default function ShoppingCartContextProvider({ children }: { children: React.ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartTotalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

    const getProductQty = (id: number) => {
        return cartItems.find(item => item.id === id)?.qty || 0;
    };

    const handleIncreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            let isNotProductExist = !currentItems.some(item => item.id === id);
            if (isNotProductExist) {
                return [...currentItems, {
                    id,
                    qty: 1
                }];
            }

            return currentItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                }

                return item;
            })
        })
    };

    const handleDecreaseProductQty = (id: number) => {
        setCartItems(currentItems => {
            let isLastOne = currentItems.find(item => item.id === id)?.qty === 1;
            if (isLastOne) {
                return currentItems.filter(item => item.id !== id);
            }

            return currentItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        qty: item.qty - 1
                    }
                }

                return item;
            })
        })
    };

    const handleRemoveProduct = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        })
    };

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            handleIncreaseProductQty,
            handleDecreaseProductQty,
            handleRemoveProduct,
            getProductQty,
            cartTotalQty
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
