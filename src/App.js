import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import CustomNavbar from "./Navbar";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
