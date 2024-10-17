import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/product";
import SinglePage from "./pages/single";
import CreatePage from "./pages/create";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
