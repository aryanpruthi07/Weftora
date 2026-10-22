import React, { useEffect, useRef, useState } from 'react'
import UI from './UI'

const { Card, CardContent, Button } = UI

const ProductsSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredProduct, setHoveredProduct] = useState(null)
    const sectionRef = useRef(null)

    const products = [
        {
            id: 1,
            name: 'Premium Towels',
            description: 'Crafted from the finest cotton yarns for unmatched softness and absorbency.',
            features: ['100% Pure Cotton', 'Quick Dry Texture', 'Fade Resistant', 'Multiple Sizes'],
            image: '/collection/collection4.webp',
            category: 'towels'
        },
        {
            id: 2,
            name: 'Bath Mats',
            description: 'Woven to blend comfort, durability, and style for your everyday routine.',
            features: ['Plush Cotton Pile', 'Anti-Slip Backing', 'Quick Dry', 'Easy Maintenance'],
            image: '/collection/collection2.webp',
            category: 'bath-mats'
        },
        {
            id: 3,
            name: 'Cushion Covers',
            description: 'Designed to add texture and warmth, creating effortless elegance in every space.',
            features: ['Premium Fabrics', 'Hidden Zipper', 'Easy Care', 'Timeless Designs'],
            image: '/collection/collection3.webp',
            category: 'cushion-covers'
        },
        {
            id: 4,
            name: 'Bedding',
            description: 'Thoughtfully crafted bedding that brings soft luxury and restful comfort to your nights.',
            features: ['Complete Comfort', 'Soft & Breathable', 'Easy Maintenance', 'Elegant Patterns'],
            image: '/collection/collection1.webp',
            category: 'bedding'
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const scrollToInquiry = () => {
        const element = document.getElementById('inquiry')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section ref={sectionRef} id="products" className="bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Our Collection</h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                            Discover our carefully curated collection of premium home textiles, thoughtfully crafted to bring comfort, elegance, and timeless style to every corner of your home.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {products.map((product, index) => (
                            <Card
                                key={product.id}
                                className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ animationDelay: `${index * 200}ms` }}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg aspect-square">
                                        <img src={product.image || '/placeholder.svg'} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                                            <Button onClick={scrollToInquiry} variant="secondary" size="sm" className="bg-background text-foreground hover:bg-background/90">Inquire Now</Button>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                                        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{product.description}</p>
                                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                                            {product.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                            Ready to transform your home with our premium textiles? Get in touch with us to discuss your requirements and discover the perfect pieces for your space.
                        </p>
                        <Button onClick={scrollToInquiry} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium group transition-all duration-300 hover:scale-105">
                            Start Your Inquiry
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
