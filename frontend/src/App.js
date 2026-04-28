import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OpticalHeader } from "@/components/OpticalHeader";
import { OpticalHero } from "@/components/OpticalHero";
import { OpticalAbout } from "@/components/OpticalAbout";
import { OpticalServices } from "@/components/OpticalServices";
import { OpticalFeatures } from "@/components/OpticalFeatures";
import { OpticalProducts } from "@/components/OpticalProducts";
import { OpticalTestimonials } from "@/components/OpticalTestimonials";
import { OpticalCTA } from "@/components/OpticalCTA";
import { OpticalContact } from "@/components/OpticalContact";
import { OpticalFAQ } from "@/components/OpticalFAQ";
import { OpticalFooter } from "@/components/OpticalFooter";
import { OpticalWhatsApp } from "@/components/OpticalWhatsApp";
import { AdminLogin } from "@/components/AdminLogin";
import { AdminDashboard } from "@/components/AdminDashboard";
import { Toaster } from "@/components/ui/sonner";

const MainWebsite = () => {
  return (
    <>
      <OpticalHeader />
      <main>
        <OpticalHero />
        <OpticalAbout />
        <OpticalServices />
        <OpticalFeatures />
        <OpticalProducts />
        <OpticalTestimonials />
        <OpticalCTA />
        <OpticalContact />
        <OpticalFAQ />
      </main>
      <OpticalFooter />
      <OpticalWhatsApp />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
