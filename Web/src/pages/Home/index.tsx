import React from "react";

import { ContainerHome } from "./Home.style";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <ContainerHome>
      <Header />
      <MainContent />
      <Footer />
    </ContainerHome>
  );
}
