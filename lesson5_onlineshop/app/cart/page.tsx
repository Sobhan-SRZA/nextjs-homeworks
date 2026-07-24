"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";

export default function Cart() {
    const { cartItems } = useShoppingCartContext();

    return (
        <Container>
            <h1 className="text-right my-4">سبد خرید</h1>

            <div className="flex flex-col gap-4">
                {cartItems.map(item =>
                    <CartItem key={item.id} {...item} />
                )}
            </div>

            <div className="border shadow-md rtl p-4">
                <h3>قیمت کل: <span>77$</span></h3>
                <h3>تخفیف: <span>7$</span></h3>
                <h3>سود شما ازین خرید: <span>10$</span></h3>
                <h3>قیمت نهایی: <span>70$</span></h3>

                <input className="rtl border" type="text" placeholder="کد تخفیف را وارد کنید..." />
                <button className="bg-sky-700 px-4 py-1 rounded">اعمال کد تخفیف</button>
            </div>
        </Container>
    )
}