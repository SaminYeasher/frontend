import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage"; 
import { CategoryPage } from "./screens/CategoryPage";
import { LoginPage } from "./screens/LoginPage";
import { DashboardPage } from "./screens/DashboardPage";
import { Navbar } from "./components/ui/navbar";
import AboutPage from "./screens/AboutPage/AboutPage";
import RentalAgreementPage from "./screens/RentalAgreementPage/RentalAgreementPage";
import SignUpPage from "./screens/SignUpPage/SignUpPage";

// Render React app into the "app" div from index.html
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/rental-agreement" element={<RentalAgreementPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
