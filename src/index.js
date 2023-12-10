import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Container, Footer } from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weather" element={<Container />} />
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
