import type { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "../../styles/layout.css"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
