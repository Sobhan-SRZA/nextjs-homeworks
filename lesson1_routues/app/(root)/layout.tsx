import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      NavBar
      {children}
      Footer
    </div>
  )
}

export default Layout