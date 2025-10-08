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

    const scrollToProducts = () => {
        const element = document.getElementById('products')
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-2xl bg-gradient-to-b from-white to-white/90 bg-clip-text animate-pulse-slow">Weftora</h1>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light text-balance max-w-4xl mx-auto drop-shadow-lg">Weaving Comfort Into Your Home</p>
                    </div>

                    <div className={`transition-all duration-1000 delay-500 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-md px-4">Explore our luxurious home textile collection, designed with precision and care. From soft towels to elegant bedding, we bring comfort, style, and warmth to every corner of your home.</p>
                    </div>

                    <div className={`transition-all duration-1000 delay-700 ${contentLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                        <Button onClick={scrollToProducts} size="lg" className="bg-gradient-to-r from-white/95 to-white/85 hover:from-white hover:to-white/95 text-gray-900 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl backdrop-blur-sm border border-white/20">
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

export default HeroSection
