export default function CartItem() {
    return (
        <div className="grid grid-cols-12 bg-gray-700">
            <div className="col-span-10 rtl p-4">
                <h2 className="text-xl font-bold">محصول 1</h2>

                <p>تعداد: <span>3</span></p>

                <p>قیمت محصول: <span>45$</span></p>

                <div className="mt-4">
                    <button className="px-4 py-2 rounded-2xl bg-sky-500">+</button>
                    <span className="mx-4">3</span>
                    <button className="px-4 py-2 rounded-2xl bg-sky-500">-</button>
                </div>
            </div>

            <img
                className="col-span-2"
                src="/images/product 1.png"
                alt="product 1.png"
            />
        </div>
    )
}
