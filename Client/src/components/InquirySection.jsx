import React, { useEffect, useRef, useState } from 'react'
import UI from './UI'
import { Send, CheckCircle } from 'lucide-react'

const { Card, CardHeader, CardTitle, CardContent, Input, Label, Textarea, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } = UI

const InquirySection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', productInterest: '', message: '' })
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        setIsLoading(true)

        try {
            const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
            const data = await resp.json()
            if (!resp.ok) {
                setErrorMessage(data?.error || data?.message || 'Failed to submit inquiry.')
                setIsLoading(false)
                return
            }
            setIsSubmitted(true)
            setIsLoading(false)
            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', phone: '', productInterest: '', message: '' })
            }, 3000)
        } catch (err) {
            console.error('Inquiry submit error', err)
            setErrorMessage('Network error. Please try again later.')
            setIsLoading(false)
        }
    }

    return (
        <section ref={sectionRef} id="inquiry" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">Ready to transform your home with our premium textiles? Share your requirements with us, and we’ll help you find the perfect pieces that bring comfort, style, and elegance to your space.</p>
                    </div>

                    <Card className={`transition-all duration-1000 delay-300 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="text-2xl font-serif font-semibold text-foreground">Submit Your Inquiry</CardTitle>
                            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </CardHeader>
                        <CardContent>
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</Label>
                                            <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required className="h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                                            <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required className="h-12" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                                            <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="product-interest" className="text-sm font-medium text-foreground">Product Interest</Label>
                                            <Select value={formData.productInterest} onValueChange={(value) => handleInputChange('productInterest', value)}>
                                                <SelectTrigger className="h-12">
                                                    <SelectValue placeholder="Select a product category" selectedValue={formData.productInterest} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="towels">Premium Towels</SelectItem>
                                                    <SelectItem value="bath-mats">Bath Mats</SelectItem>
                                                    <SelectItem value="cushion-covers">Cushion Covers</SelectItem>
                                                    <SelectItem value="Bedding">Bedding</SelectItem>
                                                    <SelectItem value="all">All Products</SelectItem>
                                                    <SelectItem value="custom">Custom Requirements</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                                        <Textarea id="message" placeholder="Tell us about your requirements, preferred colors, quantities, or any specific needs..." value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="min-h-32 resize-none" />
                                    </div>

                                    <div className="pt-4">
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-medium group transition-all duration-300 hover:scale-[1.02]" disabled={isLoading}>
                                            {isLoading ? 'Sending...' : (
                                                <>Submit Inquiry <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>
                                            )}
                                        </Button>
                                    </div>
                                    {errorMessage && <div className="mt-4 text-sm text-red-600">{errorMessage}</div>}
                                </form>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-8 h-8 text-green-600" /></div>
                                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Thank You!</h3>
                                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">Your inquiry has been submitted successfully. We'll get back to you within 24 hours with more information about our products.</p>
                                    <div className="text-sm text-muted-foreground">Redirecting to form in a few seconds...</div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {[{ title: 'Quick Response', desc: 'We reply to all inquiries within 24 hours on business days, ensuring timely support.' }, { title: 'Custom Solutions', desc: 'We create tailored products designed to meet your unique requirements.' }, { title: 'Expert Guidance', desc: 'Our team offers professional advice to help you select the perfect products for your home.' }].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"><div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full"></div></div>
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

export default InquirySection
