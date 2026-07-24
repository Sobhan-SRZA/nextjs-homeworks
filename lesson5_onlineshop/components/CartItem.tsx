import {
    useEffect,
    useState
} from "react";
import { formatNumberWithCommas } from "@/utils/number";
import { ProductItemProbs } from "./ProductItem";
import AddToCart from "./AddToCart";
import axios from "axios";

interface CartItemProbs {
    id: number;
    qty: number;
}

export default function CartItem({ id, qty }: CartItemProbs) {
    const [data, setData] = useState({} as ProductItemProbs);

    useEffect(() => {
        axios(`http://localhost:3001/products/${id}`)
            .then((result) => {
                const { data } = result;
                setData(data);
            });
    }, []);

    return (
        <div className="grid grid-cols-12 bg-gray-700 rounded">
            <div className="col-span-10 rtl p-4">
                <h2 className="text-xl font-bold">{data.title}</h2>

                <p>تعداد: <span>{qty}</span></p>

                <p>قیمت محصول: <span>{formatNumberWithCommas(data.price ?? 0)}$</span></p>

                <AddToCart id={id.toString()} />
            </div>

            <img
                className="col-span-2"
                src={data.image}
                alt={data.title}
            />
        </div>
    )
}
