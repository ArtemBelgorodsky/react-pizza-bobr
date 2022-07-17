import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Home, Cart } from "./components/index";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="*" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
