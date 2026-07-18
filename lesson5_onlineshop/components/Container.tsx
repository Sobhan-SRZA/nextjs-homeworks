interface IContainerProbs {
    children: React.ReactNode;
}

export default function Container({ children}: IContainerProbs) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}
