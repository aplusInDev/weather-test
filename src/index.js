import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Weather, Footer } from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
