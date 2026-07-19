import { ProductItemProbs } from "@/components/ProductItem";
import Container from "@/components/Container";

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

                    <p className="font-bold">قیمت <span>{product.price}$</span></p>

                    <div className="mt-4">
                        <button className="px-4 py-2 rounded-2xl bg-sky-500">+</button>
                        <span className="mx-4">3</span>
                        <button className="px-4 py-2 rounded-2xl bg-sky-500">-</button>
                    </div>
                </div>

                <div className="col-span-3">
                    <img src={product.image} alt={product.title} />
                </div>
            </div>
        </Container>
    )
}
