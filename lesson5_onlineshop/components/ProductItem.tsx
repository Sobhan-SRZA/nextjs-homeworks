import { formatNumberWithCommas } from "@/utils/number";

export interface ProductItemProbs {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
}

export default function ProductItem({ image, price, title }: ProductItemProbs) {
    return (
        <div className="shadow-md">
            <img src={image} alt={title} />

            <div className="p-2 text-right rtl">
                <h3 className="font-bold">{title}</h3>
                <p>قیمت <span>{formatNumberWithCommas(price ?? 0)}$</span></p>
            </div>
        </div>
    )
}