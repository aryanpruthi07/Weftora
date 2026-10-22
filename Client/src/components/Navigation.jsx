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
        const idMap = {
            'home': 'hero',
            'catalogue': 'catalog',
            'wholesale': 'wholesale',
            'products': 'products',
            'inquiry': 'inquiry',
            'contact': 'contact'
        }
        const targetId = idMap[sectionId.toLowerCase()] || sectionId.toLowerCase()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    const navItems = ['Home', 'About', 'Catalogue', 'Wholesale', 'Products', 'Inquiry', 'Contact']

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
                <div className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-5 ml-auto">
                    {navItems.map((item, index) => (
                        <Button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            variant={item === 'Wholesale' ? 'default' : (isScrolled ? 'ghost' : 'nav')}
                            size="sm"
                            className={`text-xs lg:text-sm font-medium transition-all duration-500 px-2 lg:px-3 ${item === 'Wholesale' ? 'bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90' : 'backdrop-blur-md'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            {item === 'Wholesale' ? '⚡ Wholesale' : item}
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
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${item === 'Wholesale' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}
                                >
                                    {item === 'Wholesale' ? '⚡ Wholesale & Bulk Orders' : item}
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
