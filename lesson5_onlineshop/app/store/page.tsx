import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

export default function Page() {
  const products = [
    {
      id: "1",
      title: "محصول 1",
      image: "/images/product 1.png",
      price: 1200,
      description: "ندسشسئزجگمئس ئنحسدیسند نیسدششن دمخ یسدمن"
    },
    {
      id: "2",
      title: "محصول 2",
      image: "/images/product 2.png",
      price: 600,
      description: "ندسشسئزجگمئس ئنحسدیسند نیسدششن دمخ یسدمن"
    },
    {
      id: "3",
      title: "محصول 3",
      image: "/images/product 3.png",
      price: 31231,
      description: "ندسشسئزجگمئس ئنحسدیسند نیسدششن دمخ یسدمن"
    },
    {
      id: "4",
      title: "محصول 4",
      image: "/images/product 4.png",
      price: 1200,
      description: "ندسشسئزجگمئس ئنحسدیسند نیسدششن دمخ یسدمن"
    }
  ];

  return (
    <Container>
      <h1 className="text-right py-4">فروشگاه</h1>

      <div className="grid grid-cols-4 gap-4">
        {
          products.map(
            (product) => (
              <ProductItem
                key={product.id}
                {...product}
              />
            )
          )
        }
      </div>
    </Container>
  )
}