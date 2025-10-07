import React, { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  ArrowRight,
  Leaf,
  Heart,
  Award,
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Linkedin,
} from "lucide-react"

// Button Component
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  asChild,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:scale-105 active:scale-95 font-medium"

  const variants = {
    default: "rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl",
    secondary: "rounded-lg bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/80 hover:to-secondary/70 shadow-md hover:shadow-lg",
    outline: "rounded-lg border-2 border-primary/20 hover:border-primary/40 bg-transparent hover:bg-primary/5 text-primary backdrop-blur-sm shadow-sm hover:shadow-md",
    ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground bg-transparent text-muted-foreground hover:text-foreground",
    nav: "rounded-2xl bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
  }

  const sizes = {
    default: "h-10 py-2 px-6",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
      onClick,
      ...props,
    })
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Card Components
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Input Components
const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

const Label = ({ children, className = "", ...props }) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  >
    {children}
  </label>
)

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

// Select Components
const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || "")

  const handleSelect = (newValue) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          setIsOpen,
          selectedValue,
          handleSelect,
        }),
      )}
    </div>
  )
}

const SelectTrigger = ({ children, className = "", isOpen, setIsOpen, selectedValue }) => (
  <button
    type="button"
    className={`flex h-10 w-full items-center justify-between rounded-md border border-border bg-card text-foreground px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm ${className}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    {children}
  </button>
)

const SelectValue = ({ placeholder, selectedValue }) => (
  <span className={selectedValue ? "" : "text-muted-foreground"}>
    {selectedValue || placeholder}
  </span>
)

const SelectContent = ({ children, isOpen, handleSelect }) => {
  if (!isOpen) return null

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border shadow-md"
      style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: 'var(--foreground)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      <div className="p-1">
        {React.Children.map(children, (child) => React.cloneElement(child, { handleSelect }))}
      </div>
    </div>
  )
}

const SelectItem = ({ children, value, handleSelect }) => (
  <div
    className="relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none text-foreground hover:bg-black/5 dark:hover:bg-white/5"
    onClick={() => handleSelect(value)}
  >
    {children}
  </div>
)

// Logo Component
const Logo = () => (
  <div className="flex items-center">
    <img
      src="/logo.png"
      alt="Weftora"
      className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-35 lg:h-25 object-contain"
      loading="eager"
    />
  </div>
)

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className={`flex items-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="animate-pulse-slow">
              <Logo />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {["Home", "About", "Products", "Inquiry", "Contact"].map((item, index) => (
                <div
                  key={item}
                  className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Button
                    onClick={() =>
                      scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
                    }
                    variant={isScrolled ? "ghost" : "nav"}
                    size="sm"
                    className="text-xs lg:text-sm font-medium backdrop-blur-md"
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {["Home", "About", "Products", "Inquiry", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
                  }
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const [scrollIndicatorLoaded, setScrollIndicatorLoaded] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 300)
    const timer2 = setTimeout(() => setContentLoaded(true), 800)
    const timer3 = setTimeout(() => setScrollIndicatorLoaded(true), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/main-page.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-2xl bg-gradient-to-b from-white to-white/90 bg-clip-text animate-pulse-slow">
              Weftora
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${contentLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light text-balance max-w-4xl mx-auto drop-shadow-lg">
              Weaving Comfort Into Your Home
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${contentLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md px-4">
              Discover our premium collection of home textiles crafted with care and attention to
              detail. From luxurious towels to elegant throws, we bring comfort and style to every
              corner of your home.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${contentLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
          >
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-gradient-to-r from-white/95 to-white/85 hover:from-white hover:to-white/95 text-gray-900 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl backdrop-blur-sm border border-white/20"
            >
              Explore Collection
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${scrollIndicatorLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center cursor-pointer group" onClick={scrollToProducts}>
          <div className="flex flex-col items-center space-y-1 animate-bounce group-hover:animate-pulse">
            <div className="w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="mt-2">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-white/70 group-hover:text-white transition-all duration-300">
              <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-white/60 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Explore</p>
        </div>
      </div>
    </section>
  )
}

// About Section Component
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              At Weftora, we believe that home is where comfort begins. Our journey started with a
              simple vision: to create premium textiles that transform houses into havens.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-4 sm:mb-6">
                Crafted with Purpose
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Every thread tells a story of dedication and craftsmanship. We source the finest
                materials and work with skilled artisans who share our passion for quality and
                sustainability.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                From our workshop in Panipat to your home, each piece is carefully crafted to bring
                you comfort that lasts. We believe in creating textiles that not only look beautiful
                but feel extraordinary against your skin.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Leaf,
                    title: "Sustainable Materials",
                    desc: "We prioritize eco-friendly materials and sustainable production methods.",
                  },
                  {
                    icon: Heart,
                    title: "Made with Love",
                    desc: "Every product is crafted with care and attention to detail by skilled artisans.",
                  },
                  {
                    icon: Award,
                    title: "Premium Quality",
                    desc: "We never compromise on quality, ensuring each piece meets our high standards.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
            >
              <div className="relative">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-muted to-card rounded-2xl overflow-hidden">
                  <img
                    src="/about.jpeg"
                    alt="Artisan crafting premium textiles"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "1000+", label: "Happy Customers" },
              { number: "50+", label: "Product Varieties" },
              { number: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Products Section Component
const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const sectionRef = useRef(null)

  const products = [
    {
      id: 1,
      name: "Premium Towels",
      description:
        "Luxuriously soft and absorbent towels crafted from the finest cotton fibers.",
      features: ["100% Premium Cotton", "Quick Dry Technology", "Fade Resistant", "Multiple Sizes"],
      image: "/collection/collection4.jpeg",
      category: "towels",
    },
    {
      id: 2,
      name: "Bath Mats",
      description: "Non-slip bath mats that combine safety with comfort and style.",
      features: ["Anti-Slip Base", "Quick Dry", "Machine Washable", "Soft Texture"],
      image: "/collection/collection2.jpeg",
      category: "bath-mats",
    },
    {
      id: 3,
      name: "Cushion Covers",
      description: "Transform your living space with our beautifully designed cushion covers.",
      features: ["Premium Fabrics", "Hidden Zipper", "Easy Care", "Various Designs"],
      image: "/collection/collection3.jpeg",
      category: "cushion-covers",
    },
    {
      id: 4,
      name: "Throws",
      description: "Cozy throws that add warmth and elegance to any room.",
      features: ["Soft & Warm", "Versatile Use", "Easy Maintenance", "Stylish Patterns"],
      image: "/collection/collection1.jpeg",
      category: "throws",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToInquiry = () => {
    const element = document.getElementById("inquiry")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} id="products" className=" bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Our Collection
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Discover our carefully curated range of premium home textiles, each designed to bring
              comfort and elegance to your living spaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-square">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-all duration-300 ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <Button
                        onClick={scrollToInquiry}
                        variant="secondary"
                        size="sm"
                        className="bg-background text-foreground hover:bg-background/90"
                      >
                        Inquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Ready to transform your home with our premium textiles? Get in touch with us to
              discuss your requirements and discover the perfect pieces for your space.
            </p>
            <Button
              onClick={scrollToInquiry}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium group transition-all duration-300 hover:scale-105"
            >
              Start Your Inquiry
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Inquiry Section Component
const InquirySection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          productInterest: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  return (
    <section ref={sectionRef} id="inquiry" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Ready to transform your home with our premium textiles? Share your requirements with
              us and we'll help you find the perfect pieces for your space.
            </p>
          </div>

          <Card
            className={`transition-all duration-1000 delay-300 shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-serif font-semibold text-foreground">
                Submit Your Inquiry
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-interest" className="text-sm font-medium text-foreground">
                        Product Interest
                      </Label>
                      <Select
                        value={formData.productInterest}
                        onValueChange={(value) => handleInputChange("productInterest", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue
                            placeholder="Select a product category"
                            selectedValue={formData.productInterest}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="towels">Premium Towels</SelectItem>
                          <SelectItem value="bath-mats">Bath Mats</SelectItem>
                          <SelectItem value="cushion-covers">Cushion Covers</SelectItem>
                          <SelectItem value="throws">Throws</SelectItem>
                          <SelectItem value="all">All Products</SelectItem>
                          <SelectItem value="custom">Custom Requirements</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, preferred colors, quantities, or any specific needs..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-medium group transition-all duration-300 hover:scale-[1.02]"
                    >
                      Submit Inquiry
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your inquiry has been submitted successfully. We'll get back to you within 24 hours with
                    more information about our products.
                  </p>
                  <div className="text-sm text-muted-foreground">Redirecting to form in a few seconds...</div>
                </div>
              )}
            </CardContent>
          </Card>

          <div
            className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {[
              {
                title: "Quick Response",
                desc: "We respond to all inquiries within 24 hours during business days.",
              },
              {
                title: "Custom Solutions",
                desc: "We offer customized products to meet your specific requirements.",
              },
              {
                title: "Expert Guidance",
                desc: "Our team provides expert advice to help you choose the right products.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full"></div>
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className=" bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Ready to discuss your textile needs? Get in touch with our team and let us help you
              create the perfect home environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
            >
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-6 sm:mb-8">Get In Touch</h3>

                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Aryan Pruthi</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Managing Director</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Leading Weftora with a vision to bring premium quality textiles to homes across the
                    region.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: "Gohana Road, Panipat" },
                    { icon: Phone, title: "Phone", content: "+91 7404970065", href: "tel:+917404970065" },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "weftora@gmail.com",
                      href: "mailto:weftora@gmail.com",
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h5>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200 break-words"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Follow Us</h4>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-primary/5 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Ready to Get Started?</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    Contact us today to discuss your textile requirements and discover how we can
                    transform your home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto" asChild>
                      <a href="tel:+917404970065">Call Now</a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                      <a href="mailto:weftora@gmail.com">Send Email</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Weftora</h3>
              <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Weaving Comfort Into Your Home. Premium home textiles crafted with care and attention
                to detail.
              </p>
              <p className="text-primary-foreground/60 text-xs">© 2025 Weftora. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {["Home", "About Us", "Products", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(item === "Home" ? "hero" : item.toLowerCase().replace(" us", ""))
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
                <p>Gohana Road, Panipat</p>
                <p>
                  <a
                    href="tel:+917404970065"
                    className="hover:text-primary-foreground transition-colors duration-200 break-words"
                  >
                    +91 7404970065
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:weftora@gmail.com"
                    className="hover:text-primary-foreground transition-colors duration-200 break-words"
                  >
                    weftora@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://weftora.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors duration-200"
                  >
                    weftora.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-primary-foreground/60 text-xs text-center sm:text-left">
                Crafted with care by Weftora - Premium Home Textiles
              </p>
              <p className="text-primary-foreground/60 text-xs text-center sm:text-right">Managing Director: Aryan Pruthi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-[#9d9d9d]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <InquirySection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App