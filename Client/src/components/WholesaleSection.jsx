import React, { useEffect, useRef, useState } from 'react'
import UI from './UI'
import { 
    Building2, 
    Truck, 
    BadgeCheck, 
    CheckCircle2, 
    Percent, 
    PackageCheck, 
    Layers, 
    MessageCircle, 
    PhoneCall, 
    Sparkles, 
    ShieldCheck, 
    FileSpreadsheet,
    ArrowRight
} from 'lucide-react'

const { Card, CardHeader, CardTitle, CardContent, Input, Label, Textarea, Button } = UI

const WholesaleSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    // RFQ Form State
    const [selectedProduct, setSelectedProduct] = useState('kids-cotton-towels')
    const [selectedTier, setSelectedTier] = useState('100-500')
    const [buyerName, setBuyerName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true)
        }, { threshold: 0.1 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const productOptions = [
        { id: 'kids-cotton-towels', name: 'Kids Cotton Printed Towels (60"×30")', moq: '50 pcs', tag: 'Fast Moving' },
        { id: 'baby-hooded-towels', name: 'Baby Hooded Towels (Animal & Bear 3D)', moq: '40 pcs', tag: 'High Margin' },
        { id: 'ladies-hair-cap', name: 'Ladies Quick-Dry Hair Caps (6 Shades)', moq: '60 pcs', tag: 'Best Reseller' },
        { id: 'mixed-assortment', name: 'Mixed Assortment / Catalogue Trial Pack', moq: '50 pcs', tag: 'Starter Pack' }
    ]

    const tierOptions = [
        { id: '50-100', label: '50 – 100 Pcs', desc: 'Retail Trial Batch' },
        { id: '100-500', label: '100 – 500 Pcs', desc: 'Wholesale Standard' },
        { id: '500-2000', label: '500 – 2,000 Pcs', desc: 'Distributor Rate' },
        { id: '2000+', label: '2,000+ Pcs', desc: 'Factory Direct / OEM' }
    ]

    const handleWhatsAppSubmit = (e) => {
        if (e) e.preventDefault()
        
        const productName = productOptions.find(p => p.id === selectedProduct)?.name || selectedProduct
        const tierName = tierOptions.find(t => t.id === selectedTier)?.label || selectedTier
        
        const text = `*WEFTORA FACTORY BULK & WHOLESALE INQUIRY*\n` +
            `-----------------------------------------\n` +
            `👤 *Name:* ${buyerName || 'Buyer'}\n` +
            `🏢 *Business/Store:* ${businessName || 'Wholesale Buyer'}\n` +
            `📍 *City / State:* ${city || 'India'}\n` +
            `📱 *Phone:* ${phone || 'Not provided'}\n` +
            `📦 *Product Required:* ${productName}\n` +
            `📊 *Quantity Tier:* ${tierName}\n` +
            (notes ? `📝 *Requirements/Notes:* ${notes}\n` : '') +
            `-----------------------------------------\n` +
            `Hello Aryan, I am looking for factory wholesale pricing and dispatch details from Panipat. Please share the rate card and sample availability.`;

        const waUrl = `https://wa.me/919817660065?text=${encodeURIComponent(text)}`
        window.open(waUrl, '_blank')
        setSubmitted(true)
    }

    return (
        <section ref={sectionRef} id="wholesale" className="py-20 lg:py-28 bg-gradient-to-b from-card via-background to-muted/20 border-y border-border/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                        <Building2 className="w-4 h-4" /> Direct Panipat Manufacturer
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 text-balance">
                        Wholesale & Bulk Orders for Retailers & Distributors
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                        Source directly from the textile capital of India. We manufacture premium 100% cotton kids towels, plush baby hooded wraps, and quick-dry hair caps at competitive factory pricing with low MOQs and reliable all-India dispatch.
                    </p>
                </div>

                {/* 4 Core B2B Advantages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: Percent,
                            title: 'Factory-Direct Pricing',
                            desc: 'Zero middlemen, brokers, or agent markups. Get genuine Panipat factory rates designed to protect your retail margins.'
                        },
                        {
                            icon: PackageCheck,
                            title: 'Low MOQ Starter Batches',
                            desc: 'Flexible order quantities starting from just 50 units per category so you can test sell before investing in bulk lots.'
                        },
                        {
                            icon: Layers,
                            title: 'OEM & Custom Labeling',
                            desc: 'Private label solutions including custom brand wash tags, barcodes, retail polybags, and tailored packaging for brands.'
                        },
                        {
                            icon: Truck,
                            title: 'Express All-India Transport',
                            desc: 'Daily dispatch via V-Trans, Safexpress, Delhivery, and local Panipat transport to Delhi NCR (24h), Mumbai, Bengaluru, and tier-2/3 cities.'
                        }
                    ].map((item, idx) => (
                        <Card key={idx} className="border border-border/80 bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Interactive Wholesale Quotation Generator */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Product Specs & Wholesale Terms */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                                <BadgeCheck className="w-6 h-6 text-primary" /> Why Trade with Weftora?
                            </h3>
                            <ul className="space-y-3.5 text-sm sm:text-base text-muted-foreground">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span><strong>100% Combed Cotton:</strong> Zero polyester blends in our kids towels — pure comfort and superior absorbency.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span><strong>Colourfast Reactive Prints:</strong> Cartoon prints withstand 50+ commercial washes without fading or bleeding.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span><strong>Complete GST Billing:</strong> 100% compliant tax invoices (HSN Code 6302) with input tax credit eligibility.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span><strong>Sample Kit Dispatch:</strong> Physical sample swatches and pieces available on request for quality inspection.</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-medium">Panipat Factory Hotline</p>
                                    <p className="text-base sm:text-lg font-bold text-foreground">+91 9817660065 / 7404970065</p>
                                </div>
                                <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2 w-full sm:w-auto"
                                    asChild
                                >
                                    <a href="tel:+919817660065">
                                        <PhoneCall className="w-4 h-4" /> Call Direct
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Verified Reseller Trust Banner */}
                        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-4">
                            <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                            <div className="text-xs sm:text-sm">
                                <p className="font-semibold text-foreground">Ideal for E-Commerce & Retail Stores</p>
                                <p className="text-muted-foreground">Supplying apparel boutiques, baby stores, Amazon/Meesho sellers, and hotel procurement agents.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Instant Wholesale RFQ Form */}
                    <div className="lg:col-span-7">
                        <Card className="border-2 border-primary/20 shadow-xl bg-card">
                            <CardHeader className="border-b border-border/80 pb-5">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div>
                                        <CardTitle className="text-xl sm:text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                                            <FileSpreadsheet className="w-5 h-5 text-primary" /> Request Factory Rate Card & Quotation
                                        </CardTitle>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                            Select your required products & quantities for an immediate wholesale quote.
                                        </p>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20">
                                        ● Response in &lt;15 Mins
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 sm:p-8 space-y-6">
                                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                                    
                                    {/* 1. Select Product */}
                                    <div>
                                        <Label className="text-sm font-semibold text-foreground mb-2.5 block">
                                            1. Select Product Category
                                        </Label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {productOptions.map(p => (
                                                <button
                                                    type="button"
                                                    key={p.id}
                                                    onClick={() => setSelectedProduct(p.id)}
                                                    className={`p-3 text-left rounded-xl border text-xs sm:text-sm transition-all duration-200 flex flex-col justify-between ${
                                                        selectedProduct === p.id 
                                                            ? 'border-primary bg-primary/10 text-foreground font-semibold shadow-sm' 
                                                            : 'border-border/80 bg-background hover:border-border text-muted-foreground'
                                                    }`}
                                                >
                                                    <span className="text-foreground font-medium">{p.name}</span>
                                                    <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                                                        <span>MOQ: <strong>{p.moq}</strong></span>
                                                        <span className="text-[10px] uppercase font-bold text-primary bg-primary/15 px-1.5 py-0.5 rounded">
                                                            {p.tag}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2. Select Quantity Tier */}
                                    <div>
                                        <Label className="text-sm font-semibold text-foreground mb-2.5 block">
                                            2. Estimated Order Quantity
                                        </Label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {tierOptions.map(t => (
                                                <button
                                                    type="button"
                                                    key={t.id}
                                                    onClick={() => setSelectedTier(t.id)}
                                                    className={`p-2.5 text-center rounded-xl border transition-all duration-200 ${
                                                        selectedTier === t.id
                                                            ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                                                            : 'border-border/80 bg-background hover:border-border text-muted-foreground'
                                                    }`}
                                                >
                                                    <p className="text-xs sm:text-sm font-semibold text-foreground">{t.label}</p>
                                                    <p className="text-[10px] text-muted-foreground mt-0.5">{t.desc}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 3. Buyer Details */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="b-name" className="text-xs font-semibold text-foreground">Your Name *</Label>
                                            <Input
                                                id="b-name"
                                                type="text"
                                                placeholder="e.g. Ramesh Sharma"
                                                value={buyerName}
                                                onChange={e => setBuyerName(e.target.value)}
                                                required
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="b-biz" className="text-xs font-semibold text-foreground">Business / Store Name *</Label>
                                            <Input
                                                id="b-biz"
                                                type="text"
                                                placeholder="e.g. Sharma Textiles / Kids Corner"
                                                value={businessName}
                                                onChange={e => setBusinessName(e.target.value)}
                                                required
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="b-city" className="text-xs font-semibold text-foreground">City & State *</Label>
                                            <Input
                                                id="b-city"
                                                type="text"
                                                placeholder="e.g. Ahmedabad, Gujarat"
                                                value={city}
                                                onChange={e => setCity(e.target.value)}
                                                required
                                                className="h-11"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="b-phone" className="text-xs font-semibold text-foreground">WhatsApp / Phone Number *</Label>
                                            <Input
                                                id="b-phone"
                                                type="tel"
                                                placeholder="e.g. +91 98765 43210"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                required
                                                className="h-11"
                                            />
                                        </div>
                                    </div>

                                    {/* 4. Notes / Requirements */}
                                    <div className="space-y-1.5">
                                        <Label htmlFor="b-notes" className="text-xs font-semibold text-foreground">Specific Requirements (Optional)</Label>
                                        <Textarea
                                            id="b-notes"
                                            placeholder="Mention specific cartoon designs, preferred color ratios, custom packaging, or urgent delivery deadlines..."
                                            value={notes}
                                            onChange={e => setNotes(e.target.value)}
                                            className="min-h-20 text-xs sm:text-sm resize-none"
                                        />
                                    </div>

                                    {/* Action Button: WhatsApp 1-Click RFQ */}
                                    <div className="space-y-3 pt-2">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full h-13 sm:h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                                            Get Factory Wholesale Rate Card on WhatsApp
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>

                                        <p className="text-center text-[11px] sm:text-xs text-muted-foreground flex items-center justify-center gap-2">
                                            <span>🔒 Confidential B2B pricing</span>
                                            <span>•</span>
                                            <span>⚡ Instant WhatsApp connection</span>
                                            <span>•</span>
                                            <span>📍 Panipat Factory Direct</span>
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WholesaleSection
