import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import UI from './UI'

const { Button } = UI

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

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProducts = () => scrollToSection('catalog')

    return (
        <section id="hero" className="bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/main-page.jpeg')" }}>
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
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/95 text-xs sm:text-sm font-medium mb-4 border border-white/20 shadow-lg">
                            <span>✨ New Product Catalogue Available</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-2xl bg-gradient-to-b from-white to-white/90 bg-clip-text animate-pulse-slow">Weftora</h1>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 sm:mb-6 font-light text-balance max-w-4xl mx-auto drop-shadow-lg">
                            Baby Hooded Towels • Kids Cotton Printed Towels • Ladies Hair Cap
                        </p>
                    </div>

                    <div className={`transition-all duration-1000 delay-500 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-sm sm:text-base lg:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md px-4">
                            Soft, absorbent, and gentle textiles crafted for babies, kids, and everyday comfort. Explore our complete catalogue manufactured with care in Panipat.
                        </p>
                        
                        {/* Keyword Quick Jump Pills */}
                        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto mb-8 px-2">
                            <button
                                onClick={() => scrollToSection('kids-cotton-towels')}
                                className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-all duration-200 border border-white/20 cursor-pointer"
                            >
                                🧸 Kids Cotton Printed Towels (60×30)
                            </button>
                            <button
                                onClick={() => scrollToSection('baby-hooded-towels')}
                                className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-all duration-200 border border-white/20 cursor-pointer"
                            >
                                👶 Baby Hooded Towels (Animal & Bear)
                            </button>
                            <button
                                onClick={() => scrollToSection('ladies-hair-cap')}
                                className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-all duration-200 border border-white/20 cursor-pointer"
                            >
                                🌸 Ladies Hair Cap (Quick-Dry)
                            </button>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 delay-700 ${contentLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-neutral-100 text-neutral-950 font-bold px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/40 group"
                            >
                                <span className="text-neutral-950 font-bold">View Catalogue</span>
                                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 text-neutral-950 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <a
                                href="/catalog/weftora-catalogue.pdf"
                                download="Weftora-Product-Catalogue.pdf"
                                className="inline-flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white font-semibold border border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 text-base backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Download PDF Catalogue
                            </a>
                        </div>
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

export default HeroSection
