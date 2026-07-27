"use client";

import {
    ChangeEvent,
    useState
} from "react";
import Container from "@/components/Container";
import axios from "axios";

interface Product {
    title: string;
    image: string;
    price: number;
    description: string;
}

export default function Dashboard() {
    const [product, setProduct] = useState({} as Product)

    const handleChangeProduct = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setProduct({
            ...product,
            [name]: value
        })
    };

    const handleSubmitProduct = () => {
        const { description, image, price, title } = product;
        axios({
            method: "post",
            url: "http://localhost:3001/products",
            data: {
                image,
                title,
                price,
                description
            }
        })
    }

    return (
        <div className="bg-gray-900 p-4 rtl">
            <Container>
                <div className="grid grid-cols-3 gap-4">
                    <input
                        onChange={handleChangeProduct}
                        className="bg-gray-700"
                        type="text"
                        placeholder="عنوان"
                        name="title"
                    />
                    <input
                        onChange={handleChangeProduct}
                        className="bg-gray-700"
                        type="text"
                        placeholder="قیمت"
                        name="price"
                    />
                    <input
                        onChange={handleChangeProduct}
                        className="bg-gray-700"
                        type="text"
                        placeholder="عکس"
                        name="image"
                    />
                </div>

                <textarea
                    onChange={handleChangeProduct}
                    className="bg-gray-700 w-full mt-4"
                    placeholder="توضیحات"
                    name="description"
                ></textarea>

                <button onClick={handleSubmitProduct} className="bg-sky-700 rounded px-4 py-2 mt-2">ساخت محصول</button>
            </Container>
        </div>
    )
}
