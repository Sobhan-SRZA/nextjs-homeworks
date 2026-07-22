import AddToCart from "./AddToCart";

export default function CartItem() {
    return (
        <div className="grid grid-cols-12 bg-gray-700">
            <div className="col-span-10 rtl p-4">
                <h2 className="text-xl font-bold">محصول 1</h2>

                <p>تعداد: <span>3</span></p>

                <p>قیمت محصول: <span>45$</span></p>

                <AddToCart />
            </div>

            <img
                className="col-span-2"
                src="/images/product 1.png"
                alt="product 1.png"
            />
        </div>
    )
}
