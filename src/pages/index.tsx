import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Home />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Belone Studio</title>;
