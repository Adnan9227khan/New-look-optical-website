import React from "react";
import "@/App.css";
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
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
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
      <Toaster />
    </div>
  );
}

export default App;
