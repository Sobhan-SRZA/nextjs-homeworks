import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <header>
        NavBar
      </header>

      {children}

      <footer>
        Footer
      </footer>
    </main>
  )
}

export default Layout