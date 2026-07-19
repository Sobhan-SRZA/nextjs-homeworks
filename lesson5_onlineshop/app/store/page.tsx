import Container from "@/components/Container";
import ProductItem, { ProductItemProbs } from "@/components/ProductItem";
import Link from "next/link";

export default async function Page() {
  const result = await fetch("http://localhost:3001/products");
  const products = await result.json() as ProductItemProbs[];

  return (
    <Container>
      <h1 className="text-right py-4">فروشگاه</h1>

      <div className="grid grid-cols-4 gap-4">
        {
          products.map(
            (product) => (
              <Link
                key={product.id}
                href={`/store/${product.id}`}
              >
                <ProductItem
                  {...product}
                />
              </Link>
            )
          )
        }
      </div>
    </Container>
  )
}