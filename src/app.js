import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./screens/ProductPage";
import DashboardPage from "./screens/DashboardPage";
import Navbar from "./components/ui/navbar";

function App() {
  const [cart, setCart] = useState([]); // Cart state

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/product/:id" 
          element={<ProductPage onAddToCart={handleAddToCart} />} // Pass the handler function to ProductPage
        />
        <Route path="/dashboard" element={<DashboardPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
