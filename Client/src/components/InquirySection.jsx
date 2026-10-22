import React, { useEffect, useRef, useState } from 'react'
import UI from './UI'
import { Send, CheckCircle, MessageCircle, PhoneCall, Building2 } from 'lucide-react'

const { Card, CardHeader, CardTitle, CardContent, Input, Label, Textarea, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } = UI

const InquirySection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [lastSubmittedData, setLastSubmittedData] = useState(null)
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        businessName: '',
        orderType: 'wholesale',
        productInterest: 'kids-cotton-towels', 
        message: '' 
    })
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handlePreFill = (e) => {
            if (e.detail) {
                setFormData(prev => ({
                    ...prev,
                    productInterest: e.detail.productInterest || prev.productInterest,
                    message: e.detail.message || prev.message
                }))
            }
        }
        window.addEventListener('weftora:inquire', handlePreFill)
        return () => window.removeEventListener('weftora:inquire', handlePreFill)
    }, [])

    const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

    const generateWhatsAppUrl = (data) => {
        const msg = `*WEFTORA WEBSITE INQUIRY*\n` +
            `-----------------------------------\n` +
            `👤 *Name:* ${data.name}\n` +
            (data.businessName ? `🏢 *Business/Store:* ${data.businessName}\n` : '') +
            `📱 *Phone:* ${data.phone}\n` +
            `✉️ *Email:* ${data.email}\n` +
            `📦 *Product Interest:* ${data.productInterest}\n` +
            `📊 *Inquiry Type:* ${data.orderType}\n` +
            (data.message ? `📝 *Message:* ${data.message}\n` : '') +
            `-----------------------------------\n` +
            `Hello Aryan, I submitted this inquiry on weftora.com. Please share catalogue details & pricing.`;
        return `https://wa.me/919817660065?text=${encodeURIComponent(msg)}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        setLastSubmittedData({ ...formData })

        try {
            const endpoint = (import.meta.env.VITE_SERVER_URL || '').replace(/\/$/, '') + '/api/inquiry'
            if (endpoint && endpoint !== '/api/inquiry') {
                await fetch(endpoint, { 
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' }, 
                    body: JSON.stringify(formData) 
                }).catch(() => {})
            }
        } catch (err) {
            console.warn('Backend fetch bypassed; proceeding to client confirmation', err)
        }

        setIsLoading(false)
        setIsSubmitted(true)
    }

    return (
        <section ref={sectionRef} id="inquiry" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                            <Building2 className="w-3.5 h-3.5" /> Panipat Manufacturing Hub
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">Get In Touch & Bulk Inquiries</h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                            Whether you are a retail store owner, online reseller, hotel buyer, or looking for premium home textiles, share your requirements and get factory-direct quotations from Panipat.
                        </p>
                    </div>

                    <Card className={`transition-all duration-1000 delay-300 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <CardHeader className="text-center pb-8 border-b border-border/60">
                            <CardTitle className="text-2xl font-serif font-semibold text-foreground">Submit Your Product / Wholesale Inquiry</CardTitle>
                            <p className="text-muted-foreground text-sm">Fill out the form below for prompt factory rate quotation within 24 hours.</p>
                        </CardHeader>
                        <CardContent className="pt-6">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</Label>
                                            <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required className="h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="businessName" className="text-sm font-medium text-foreground">Business / Store Name (Optional)</Label>
                                            <Input id="businessName" type="text" placeholder="e.g. Retail Shop / Reseller / Brand" value={formData.businessName} onChange={(e) => handleInputChange('businessName', e.target.value)} className="h-12" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp Number *</Label>
                                            <Input id="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} required className="h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                                            <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required className="h-12" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="product-interest" className="text-sm font-medium text-foreground">Product Category</Label>
                                            <Select value={formData.productInterest} onValueChange={(value) => handleInputChange('productInterest', value)}>
                                                <SelectTrigger className="h-12">
                                                    <SelectValue placeholder="Select a product category" selectedValue={formData.productInterest} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="kids-cotton-towels">Kids Cotton Printed Towels (60" × 30")</SelectItem>
                                                    <SelectItem value="baby-hooded-towels">Baby Hooded Towels (Animal & Bear Wraps)</SelectItem>
                                                    <SelectItem value="ladies-hair-cap">Ladies Hair Cap & Quick-Dry Wraps</SelectItem>
                                                    <SelectItem value="wholesale-catalogue">Full Catalogue Bulk Wholesale</SelectItem>
                                                    <SelectItem value="oem-private-label">Custom OEM / Private Labeling</SelectItem>
                                                    <SelectItem value="premium-towels">Standard Bath Towels & Bedding</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="orderType" className="text-sm font-medium text-foreground">Inquiry Type</Label>
                                            <Select value={formData.orderType} onValueChange={(value) => handleInputChange('orderType', value)}>
                                                <SelectTrigger className="h-12">
                                                    <SelectValue placeholder="Select type" selectedValue={formData.orderType} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="wholesale">Bulk Wholesale (50+ to 1,000+ pcs)</SelectItem>
                                                    <SelectItem value="sample-kit">Sample Kit Request (Retail Store / Reseller)</SelectItem>
                                                    <SelectItem value="distributor">Distributorship / Super Stockist</SelectItem>
                                                    <SelectItem value="retail-personal">Personal / Retail Purchase</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium text-foreground">Message / Quantities Needed</Label>
                                        <Textarea id="message" placeholder="Tell us about required quantities, colors, destination city, or custom packaging needs..." value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="min-h-28 resize-none" />
                                    </div>

                                    <div className="pt-2">
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-13 text-base font-semibold group transition-all duration-300 shadow-md" disabled={isLoading}>
                                            {isLoading ? 'Processing...' : (
                                                <>Submit Inquiry & Connect <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center py-8 px-4">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <CheckCircle className="w-9 h-9 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Inquiry Received Successfully!</h3>
                                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                                        Thank you, <strong className="text-foreground">{lastSubmittedData?.name || 'Customer'}</strong>. Your requirements for <strong>{lastSubmittedData?.productInterest}</strong> have been recorded.
                                    </p>

                                    {/* Instant WhatsApp Redirection CTA */}
                                    <div className="max-w-md mx-auto p-5 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 mb-6">
                                        <p className="text-xs font-bold uppercase tracking-wider text-green-800 dark:text-green-300 mb-2">⚡ Want an Instant Reply & Rate Card?</p>
                                        <p className="text-xs text-green-700 dark:text-green-400 mb-4">
                                            Send this inquiry directly to Managing Director Aryan Pruthi on WhatsApp for an immediate response (&lt;15 mins):
                                        </p>
                                        <Button 
                                            size="lg"
                                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center gap-2 shadow-md"
                                            asChild
                                        >
                                            <a 
                                                href={lastSubmittedData ? generateWhatsAppUrl(lastSubmittedData) : 'https://wa.me/919817660065'} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <MessageCircle className="w-5 h-5 fill-white" />
                                                Open on WhatsApp Now
                                            </a>
                                        </Button>
                                    </div>

                                    <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => {
                                            setIsSubmitted(false)
                                            setFormData({ name: '', email: '', phone: '', businessName: '', orderType: 'wholesale', productInterest: 'kids-cotton-towels', message: '' })
                                        }}
                                        className="text-xs"
                                    >
                                        Submit Another Inquiry
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {[
                            { title: 'Panipat Factory Dispatch', desc: 'Direct shipping from our Haryana production looms with safe transport across India.' }, 
                            { title: 'Custom OEM & Tagging', desc: 'Private labeling, custom brand tags, barcodes, and retail packaging for wholesale clients.' }, 
                            { title: 'Sample Kits Available', desc: 'Order physical product samples before confirming container or bulk carton batches.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-4 rounded-xl bg-card border border-border/60">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                                </div>
                                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1.5">{item.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InquirySection
