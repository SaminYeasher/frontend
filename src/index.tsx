import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { CategoryPage } from "./screens/CategoryPage";
import { ProductPage } from "./screens/ProductPage";
import { LoginPage } from "./screens/LoginPage";
import { DashboardPage } from "./screens/DashboardPage";
import { Navbar } from "./components/ui/navbar";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  </StrictMode>
);