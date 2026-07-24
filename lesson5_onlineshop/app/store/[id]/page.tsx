import { formatNumberWithCommas } from "@/utils/number";
import { ProductItemProbs } from "@/components/ProductItem";
import Container from "@/components/Container";
import AddToCart from "@/components/AddToCart";

interface ProductProbs { params: Promise<{ id: string; }> }

export default async function Product({
    params
}: ProductProbs) {
    const { id } = await params;
    const result = await fetch(`http://localhost:3001/products/${id}`);
    const product = await result.json() as ProductItemProbs;

    return (
        <Container>
            <div className="grid grid-cols-12 mt-8 shadow-md">
                <div className="col-span-9 rtl text-right p-4">
                    <h2 className="font-bold text-2xl">{product.title}</h2>

                    <p className="text-gray-300">{product.description}</p>

                    <p className="font-bold">قیمت <span>{formatNumberWithCommas(product.price ?? 0)}$</span></p>

                    <AddToCart id={id} />
                </div>

                <div className="col-span-3">
                    <img src={product.image} alt={product.title} />
                </div>
            </div>
        </Container>
    )
}
