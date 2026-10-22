import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CatalogSection from './components/CatalogSection'
import WholesaleSection from './components/WholesaleSection'
import ProductsSection from './components/ProductsSection'
import InquirySection from './components/InquirySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsAppCTA from './components/FloatingWhatsAppCTA'

const App = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <WholesaleSection />
      <ProductsSection />
      <InquirySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsAppCTA />
    </div>
  )
}

export default App
