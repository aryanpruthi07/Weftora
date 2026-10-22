import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Weftora</h3>
                            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">Weaving Comfort Into Your Home. Premium home textiles crafted with care and attention to detail.</p>
                            <p className="text-primary-foreground/60 text-xs">© 2025 Weftora. All rights reserved.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product Lines</h4>
                            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
                                <li>
                                    <button onClick={() => document.getElementById('kids-cotton-towels')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-foreground transition-colors duration-200">
                                        Kids Cotton Printed Towels
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => document.getElementById('baby-hooded-towels')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-foreground transition-colors duration-200">
                                        Baby Hooded Towels
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => document.getElementById('ladies-hair-cap')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-foreground transition-colors duration-200">
                                        Ladies Hair Cap & Wraps
                                    </button>
                                </li>
                                <li>
                                    <a href="/catalog/weftora-catalogue.pdf" download="Weftora-Product-Catalogue.pdf" className="hover:text-primary-foreground transition-colors duration-200 underline">
                                        Download PDF Catalogue
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
                            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
                                <p>Gohana Road, Panipat, Haryana</p>
                                <p><a href="tel:+919817660065" className="hover:text-primary-foreground transition-colors duration-200 break-words">+91 9817660065</a> / <a href="tel:+917404970065" className="hover:text-primary-foreground transition-colors duration-200 break-words">+91 7404970065</a></p>
                                <p><a href="mailto:weftora@gmail.com" className="hover:text-primary-foreground transition-colors duration-200 break-words">weftora@gmail.com</a></p>
                                <p><a href="https://weftora.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors duration-200">weftora.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                            <p className="text-primary-foreground/60 text-xs text-center sm:text-left">Crafted with care by Weftora - Premium Home Textiles</p>
                            <p className="text-primary-foreground/60 text-xs text-center sm:text-right">Managing Director: Aryan Pruthi</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
