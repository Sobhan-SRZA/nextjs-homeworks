import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        NavBar
      </div>

      {children}

      <div>
        Footer
      </div>
    </div>
  )
}

export default Layout