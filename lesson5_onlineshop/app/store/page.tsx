import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { ProductItemsPage } from "@/components/ProductItem";
import Link from "next/link";

interface StoreParams {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_pages: string }>;
}

export default async function Store({ searchParams }: StoreParams) {
  const page = (await searchParams).page ?? "1";
  const per_pages = (await searchParams).per_pages ?? "5";

  const result = await fetch(`http://localhost:3001/products?_page=${page}}&_per_page=${per_pages}`);
  const products = await result.json() as ProductItemsPage;

  return (
    <Container>
      <h1 className="text-right py-4">فروشگاه</h1>

      <div className="grid grid-cols-4 gap-4">
        {
          products.data.map(
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

      <Pagination pageCount={products.pages} />
    </Container>
  )
}