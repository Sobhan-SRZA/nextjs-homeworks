import Container from "@/components/Container";

export default function Dashboard() {
    return (
        <div className="bg-gray-900 p-4 rtl">
            <Container>
                <div className="grid grid-cols-3 gap-4">
                    <input className="bg-gray-700" type="text" placeholder="عنوان" />
                    <input className="bg-gray-700" type="text" placeholder="قیمت" />
                    <input className="bg-gray-700" type="text" placeholder="عکس" />
                </div>

                <textarea className="bg-gray-700 w-full mt-4" placeholder="توضیحات"></textarea>

                <button className="bg-sky-700 rounded p-2 mt-2">ساخت محصول</button>
            </Container>
        </div>
    )
}
