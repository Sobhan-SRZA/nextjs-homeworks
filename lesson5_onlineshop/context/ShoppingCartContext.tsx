"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"

type CartItem = {
    id: string;
    qty: number;
}

type ShoppingCartContextType = {
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: string) => void;
    handleDecreaseProductQty: (id: string) => void;
    handleRemoveProduct: (id: string) => void;
    getProductQty: (id: string) => number;
    cartTotalQty: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
};

export default function ShoppingCartContextProvider({ children }: { children: React.ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartTotalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

    const getProductQty = (id: string) => {
        return cartItems.find(item => item.id === id)?.qty || 0;
    };

    const handleIncreaseProductQty = (id: string) => {
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

    const handleDecreaseProductQty = (id: string) => {
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

    const handleRemoveProduct = (id: string) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        })
    };

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems")
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

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
