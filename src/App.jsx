import React, { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
