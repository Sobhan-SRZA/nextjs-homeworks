"use client";

import {
    useEffect,
    useState
} from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { formatNumberWithCommas } from "@/utils/number";
import { ProductItemProbs } from "@/components/ProductItem";
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";
import axios from "axios";

interface DiscountData {
    id: string;
    code: string;
    percentage: number;
}

export default function Cart() {
    const { cartItems } = useShoppingCartContext();

    const [data, setData] = useState([] as ProductItemProbs[]);

    useEffect(() => {
        axios("http://localhost:3001/products")
            .then((result) => {
                const { data } = result;
                setData(data);
            });
    }, []);

    const totalPrice = cartItems.reduce((total, item) => {
        let selectedProduct = data.find(a => a.id === item.id.toString());

        return total + ((selectedProduct?.price || 0) * item.qty)
    }, 0);

    const [discountCode, setDiscountCode] = useState("");

    const [price, setPrice] = useState({} as { final: number; discount: number; percentage: number; });
    const handleDiscountSubmit = () => {
        axios(`http://localhost:3001/discounts?code=${discountCode}`)
            .then((result) => {
                const data = result.data as DiscountData[];

                let percentage = (data[0]?.percentage ?? 0);

                let discount = totalPrice * percentage / 100;

                let finalPrice = totalPrice - discount;
                setPrice((a) => ({ ...a, final: finalPrice }))
                setPrice((a) => ({ ...a, discount }))
                setPrice((a) => ({ ...a, percentage }))
            });
    }

    return (
        <Container>
            <h1 className="text-right my-4">سبد خرید</h1>

            <div className="flex flex-col gap-4">
                {cartItems.map(item =>
                    <CartItem key={item.id} {...item} />
                )}
            </div>

            <div className="border shadow-md rtl p-4 mt-4 rounded bg-gray-900">
                <h3>قیمت کل: <span>{formatNumberWithCommas(totalPrice)}$</span></h3>
                <h3>تخفیف: <span>{price.percentage ?? 0}%</span></h3>
                <h3>سود شما ازین خرید: <span>{formatNumberWithCommas(price.discount ?? 0)}$</span></h3>
                <h3>قیمت نهایی: <span>{formatNumberWithCommas(price.final ?? 0)}$</span></h3>

                <input
                    className="rtl border"
                    type="text"
                    placeholder="کد تخفیف را وارد کنید..."
                    onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button
                    className="bg-sky-700 px-4 py-1 rounded"
                    onClick={() => handleDiscountSubmit()}
                >اعمال کد تخفیف</button>
            </div>
        </Container>
    )
}