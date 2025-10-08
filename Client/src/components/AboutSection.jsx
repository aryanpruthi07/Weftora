import React, { useEffect, useRef, useState } from 'react'
import { Leaf, Heart, Award } from 'lucide-react'

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Our Story</h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">At Weftora, we believe a home should be a haven. Our journey began with a vision to craft premium textiles that bring comfort, style, and warmth to every corner of your home.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-4 sm:mb-6">Crafted with Purpose</h3>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">Every thread reflects our dedication to exceptional craftsmanship. We carefully source the finest materials and collaborate with skilled artisans who share our passion for quality, comfort, and sustainability.</p>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">From our workshop in Panipat to your home, each piece is thoughtfully made to provide lasting comfort. Our textiles are designed not only to look beautiful but also to feel extraordinary against your skin.</p>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    {
                                        icon: Leaf, title: 'Sustainable Materials', desc: 'We prioritize eco-friendly fabrics and responsible production methods.'

                                    },
                                    {
                                        icon: Heart, title: 'Made with Love', desc: 'Each product is handcrafted with care, precision, and attention to detail by talented artisans.'
                                    },
                                    {
                                        icon: Award, title: 'Premium Quality', desc: 'We uphold the highest standards, ensuring every piece delivers unmatched quality and elegance.'
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

                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <div className="relative">
                                <div className="relative aspect-[4/5] bg-gradient-to-br from-muted to-card rounded-2xl overflow-hidden">
                                    <img src="/about.jpeg" alt="Artisan crafting premium textiles" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>

                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {[{ number: '5+', label: 'Years of Crafting Excellence' }, { number: '500+', label: 'Happy Homes' }, { number: '40+', label: 'Unique Designs' }, { number: '100%', label: 'Quality Assured' }].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
