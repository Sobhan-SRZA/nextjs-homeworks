import Navbar from "./Navbar";

interface ILayoutProbs {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProbs) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}