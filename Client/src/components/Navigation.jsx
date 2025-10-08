import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import UI from './UI'

const { Button, Logo } = UI

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
            <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-20">

                {/* Logo Top-Left */}
                <div
                    className={`absolute top-1 sm:top-2 left-2 sm:left-4 md:left-6 lg:left-8 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Logo className="scale-90 sm:scale-100" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 ml-auto">
                    {['Home', 'About', 'Products', 'Inquiry', 'Contact'].map((item, index) => (
                        <Button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                            variant={isScrolled ? 'ghost' : 'nav'}
                            size="sm"
                            className={`text-xs lg:text-sm xl:text-base font-medium backdrop-blur-md transition-all duration-500 px-2 lg:px-3 xl:px-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            {item}
                        </Button>
                    ))}
                </div>

                {/* Mobile Menu Button (top-right, always visible) */}
                <div className="md:hidden absolute top-3 sm:top-2 right-10 sm:right-4 z-50">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </Button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-t border-border shadow-lg" >
                        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1">
                            {['Home', 'About', 'Products', 'Inquiry', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                                    className="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
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

export default Navigation
