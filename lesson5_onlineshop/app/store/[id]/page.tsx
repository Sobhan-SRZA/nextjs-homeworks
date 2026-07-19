import Container from "@/components/Container";

export default function Product() {
    return (
        <Container>
            <div className="grid grid-cols-12 mt-8 shadow-md">
                <div className="col-span-9 rtl text-right p-4">
                    <h2 className="font-bold text-2xl">محصول اول</h2>

                    <p className="text-gray-300"> دزدسیدنتسیزدسسد ستنزد س ستند غع للغع عغ لغ علخع لعغ لخ غل  لغعخ لغل ع لخعه ل عهل عا لسعخهی س خسل سلخهع </p>

                    <p className="font-bold">قیمت <span>20$</span></p>

                    <div className="mt-4">
                        <button className="px-4 py-2 rounded-2xl bg-sky-500">+</button>
                        <span className="mx-4">3</span>
                        <button className="px-4 py-2 rounded-2xl bg-sky-500">-</button>
                    </div>
                </div>

                <div className="col-span-3">
                    <img src="/images/product 1.png" alt="product 1" />
                </div>
            </div>
        </Container>
    )
}
