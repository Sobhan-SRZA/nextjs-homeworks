import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            Dashboard NavBar
            {children}
        </div>
    )
}

export default Layout