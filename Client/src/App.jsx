import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CatalogSection from './components/CatalogSection'
import ProductsSection from './components/ProductsSection'
import InquirySection from './components/InquirySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ProductsSection />
      <InquirySection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App