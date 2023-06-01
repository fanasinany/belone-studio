import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/main.scss"
import Header from "../components/Header"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      Belone Studio
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Belone Studio</title>
