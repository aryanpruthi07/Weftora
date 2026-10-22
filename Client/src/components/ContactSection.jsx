import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import UI from './UI'

const { Card, CardContent, Button } = UI

const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="contact" className=" bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Contact Us</h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">Ready to discuss your textile needs? Get in touch with our team and let us help you create the perfect home environment.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        <Card className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <CardContent className="p-6 sm:p-8">
                                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-6 sm:mb-8">Get In Touch</h3>

                                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
                                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Aryan Pruthi</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Managing Director</p>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Leading Weftora with a vision to bring premium quality textiles to homes across the region.</p>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        { icon: MapPin, title: 'Address', content: 'Gohana Road, Panipat, Haryana' },
                                        { icon: Phone, title: 'Phone / WhatsApp', content: '+91 9817660065 / +91 7404970065', href: 'tel:+919817660065' },
                                        { icon: Mail, title: 'Email', content: 'weftora@gmail.com', href: 'mailto:weftora@gmail.com' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center"><item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /></div>
                                            <div className="min-w-0 flex-1">
                                                <h5 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h5>
                                                {item.href ? <a href={item.href} className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200 break-words">{item.content}</a> : <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <CardContent className="p-6 sm:p-8">
                                <div className="mb-6 sm:mb-8">
                                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Follow Us</h4>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent" asChild>
                                            <a href="https://www.instagram.com/weftora/" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4" />Instagram</a>
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent" asChild>
                                            <a href="https://www.linkedin.com/company/weftora/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" />LinkedIn</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6 bg-primary/5 rounded-lg">
                                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Ready to Get Started?</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Contact us today to discuss your textile requirements and discover how we can transform your home.</p>
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

export default ContactSection
