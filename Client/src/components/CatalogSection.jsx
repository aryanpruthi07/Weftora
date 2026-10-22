import React, { useState, useRef, useEffect } from 'react'
import {
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    CheckCircle2,
    Heart,
    ShieldCheck,
    Droplets,
    Wind,
    Maximize2,
    X,
    Send,
    MessageCircle,
    Star,
    Phone,
    SlidersHorizontal,
    Award
} from 'lucide-react'
import UI from './UI'

const { Button, Card, CardContent } = UI

export const CATALOG_PRODUCTS = {
    kidsCottonTowels: {
        id: 'kids-cotton-towels',
        title: 'Kids Cotton Printed Towels',
        category: 'kids',
        tagline: '100% Pure Cotton • Super Soft & Vibrant Character Towels',
        size: 'Length: 60 Inch (152 cm) | Breadth: 30 Inch (76 cm)',
        gsm: 'High Absorbency Premium Cotton Weave',
        description:
            'Crafted from 100% pure combed cotton yarns, our kids cotton printed towels are designed to turn bath time into playful comfort. Measuring a generous 60 x 30 inches, they wrap children completely in plush softness while soaking up water in seconds. Finished with child-safe, colorfast cartoon character prints that stay bright wash after wash.',
        highlights: [
            '100% Pure Combed Cotton – Gentle on young, sensitive skin',
            'Full Size 60" x 30" (152cm x 76cm) – Wraps kids comfortably from head to toe',
            'Extra Absorbent & Quick Drying – Keeps kids cozy after pool, bath, or beach',
            'Vibrant Fade-Resistant Printing – Features Spider-Man, Stitch, Bluey & Minnie Mouse'
        ],
        items: [
            {
                name: 'Spider-Man Action Cotton Towel',
                character: 'Spider-Man',
                color: 'Vibrant Blue & Red',
                image: '/catalog/items/cartoon_spiderman.png',
                badge: 'Best Seller',
                dimensions: '60" x 30"',
                fabric: '100% Pure Cotton',
                description: 'Iconic Marvel Spider-Man action pose on vibrant blue cotton backdrop. Extra large 60x30 inch dimensions.'
            },
            {
                name: 'Stitch Galactic Cotton Towel',
                character: 'Stitch',
                color: 'Aqua Blue & Striped Accent',
                image: '/catalog/items/cartoon_stitch.png',
                badge: 'Trending',
                dimensions: '60" x 30"',
                fabric: '100% Pure Cotton',
                description: 'Lovable Stitch cartoon design on a cool turquoise background with playful stripes. Ultra-absorbent combed cotton.'
            },
            {
                name: 'Bluey & Bingo Playtime Cotton Towel',
                character: 'Bluey & Bingo',
                color: 'Sky Blue & Sunlight Ochre',
                image: '/catalog/items/cartoon_bluey.png',
                badge: 'Kids Favorite',
                dimensions: '60" x 30"',
                fabric: '100% Pure Cotton',
                description: 'Favorite cartoon duo Bluey & Bingo in high-definition reactive print. Ultra-gentle on toddlers and kids.'
            },
            {
                name: 'Minnie Mouse "Smile" Cotton Towel',
                character: 'Minnie Mouse',
                color: 'Pastel Yellow & Candy Pink',
                image: '/catalog/items/cartoon_minnie.png',
                badge: 'Classic Cute',
                dimensions: '60" x 30"',
                fabric: '100% Pure Cotton',
                description: 'Adorable polka-dot Minnie Mouse with playful "SMILE" typographic print. Softest 100% cotton terry.'
            }
        ]
    },
    babyHoodedTowels: {
        id: 'baby-hooded-towels',
        title: 'Baby Hooded Towels',
        category: 'baby',
        tagline: 'Ultra-Soft Hooded Wraps with Cute 3D Animal & Bear Ears',
        size: 'Generous Baby & Toddler Wrap Size',
        gsm: 'Ultra-Fluffy Hypoallergenic Microfiber-Terry',
        description:
            'Protect your baby’s delicate skin right after bathing with Weftora baby hooded towels. Featuring snug corner hoods with embroidered animal faces and cuddly 3D ears, our hooded wraps keep your baby warm, secure, and dry. Made from ultra-plush, hypoallergenic, lint-free fabric that feels like a warm motherly hug.',
        highlights: [
            'Corner Hood Design – Protects wet head and prevents chills after bath time',
            'Hypoallergenic & Ultra-Soft – Tested safe for newborn baby sensitive skin',
            'Available in 2 Distinct Collections – Baby Animal Faces (6 colors) & Bear Hooded Towels (5 colors)',
            'Quick-Drying Plush Fabric – Stays fluffy and odor-free even with frequent laundering'
        ],
        animalSeries: {
            title: 'Baby Animal Hooded Towels (6 Colours)',
            subtitle: 'Ultra-soft hooded wraps with cute animal faces',
            colors: ['Purple', 'Pink', 'Grey', 'Beige', 'Mint Green', 'Blue'],
            items: [
                { name: 'Animal Hooded Towel - Purple', color: 'Purple', image: '/catalog/items/animal_purple.png', bgHex: '#9333ea' },
                { name: 'Animal Hooded Towel - Pink', color: 'Pink', image: '/catalog/items/animal_pink.png', bgHex: '#ec4899' },
                { name: 'Animal Hooded Towel - Grey', color: 'Grey', image: '/catalog/items/animal_grey.png', bgHex: '#6b7280' },
                { name: 'Animal Hooded Towel - Beige', color: 'Beige', image: '/catalog/items/animal_beige.png', bgHex: '#d4b996' },
                { name: 'Animal Hooded Towel - Mint Green', color: 'Mint Green', image: '/catalog/items/animal_mint.png', bgHex: '#10b981' },
                { name: 'Animal Hooded Towel - Blue', color: 'Blue', image: '/catalog/items/animal_blue.png', bgHex: '#3b82f6' }
            ]
        },
        bearSeries: {
            title: 'Bear Hooded Towels (5 Colours)',
            subtitle: 'Cuddly bear-eared hooded towels, soft and absorbent',
            colors: ['Blue', 'Brown', 'Grey', 'Mint Green', 'Pink'],
            items: [
                { name: 'Bear Hooded Towel - Blue', color: 'Blue', image: '/catalog/items/bear_blue.png', bgHex: '#2563eb' },
                { name: 'Bear Hooded Towel - Brown', color: 'Brown', image: '/catalog/items/bear_brown.png', bgHex: '#854d0e' },
                { name: 'Bear Hooded Towel - Grey', color: 'Grey', image: '/catalog/items/bear_grey.png', bgHex: '#4b5563' },
                { name: 'Bear Hooded Towel - Mint Green', color: 'Mint Green', image: '/catalog/items/bear_mint.png', bgHex: '#059669' },
                { name: 'Bear Hooded Towel - Pink', color: 'Pink', image: '/catalog/items/bear_pink.png', bgHex: '#db2777' }
            ]
        }
    },
    ladiesHairCap: {
        id: 'ladies-hair-cap',
        title: 'Ladies Hair Cap & Quick-Dry Towels',
        category: 'ladies',
        tagline: 'Quick-Dry Hair Wraps with Secure Button Closure & Cute Embroidery',
        size: 'Universal Comfort Fit for All Hair Lengths',
        gsm: 'High-Tech Micro-Absorbent Anti-Frizz Weave',
        description:
            'Say goodbye to heavy dripping towels and heat styling damage. The Weftora ladies hair cap / quick-dry hair towel wraps your wet locks effortlessly with an ergonomic tapered design and a durable rear button closure. Its ultra-absorbent microfiber cuts blow-drying time in half, preserves hair cuticle health, and prevents frizz and split ends while you apply skincare or makeup.',
        highlights: [
            'Secure Button-and-Loop Fastening – Never slips or falls off while moving around',
            'Rapid Water Absorption – Sucks moisture instantly without damaging friction',
            'Anti-Frizz & Breakage Protection – Smoothes hair cuticles and prevents split ends',
            '6 Elegant Fashion Colours – Coral Pink, Maroon, Raspberry, Blue, Orange & Brown with delicate embroidery'
        ],
        colors: ['Coral Pink', 'Maroon', 'Raspberry', 'Blue', 'Orange', 'Brown'],
        items: [
            { name: 'Ladies Hair Cap - Coral Pink', color: 'Coral Pink', image: '/catalog/items/hair_coral_pink.png', embroidery: 'Floral Accent', bgHex: '#f43f5e' },
            { name: 'Ladies Hair Cap - Maroon', color: 'Maroon', image: '/catalog/items/hair_maroon.png', embroidery: 'Rainbow Star', bgHex: '#881337' },
            { name: 'Ladies Hair Cap - Raspberry', color: 'Raspberry', image: '/catalog/items/hair_raspberry.png', embroidery: 'Sweet Berry', bgHex: '#be185d' },
            { name: 'Ladies Hair Cap - Blue', color: 'Blue', image: '/catalog/items/hair_blue.png', embroidery: 'Crescent Moon', bgHex: '#1d4ed8' },
            { name: 'Ladies Hair Cap - Orange', color: 'Orange', image: '/catalog/items/hair_orange.png', embroidery: 'So Cool Citrus', bgHex: '#ea580c' },
            { name: 'Ladies Hair Cap - Brown', color: 'Brown', image: '/catalog/items/hair_brown.png', embroidery: 'Cute Pup', bgHex: '#713f12' }
        ]
    }
}

const CATALOG_PAGES = [
    { page: 1, title: 'Cover & Catalogue Index', image: '/catalog/page_1.png' },
    { page: 2, title: 'Baby Animal Hooded Towels (6 Colours)', image: '/catalog/page_2.png' },
    { page: 3, title: 'Bear Hooded Towels (5 Colours)', image: '/catalog/page_3.png' },
    { page: 4, title: 'Ladies Hair Towels / Hair Cap (6 Colours)', image: '/catalog/page_4.png' },
    { page: 5, title: 'Kids Cartoon Printed Towels (60" x 30")', image: '/catalog/page_5.png' }
]

const SPECIFICATIONS_TABLE = [
    {
        product: 'Kids Cotton Printed Towels',
        keyword: 'kids cotton printed towels',
        dimensions: 'Length 60" × Breadth 30" (152 × 76 cm)',
        material: '100% Pure Combed Cotton Terry',
        closure: 'Generous Full-Wrap Bath Sheet',
        colors: 'Spider-Man, Stitch, Bluey & Bingo, Minnie Mouse',
        bestFor: 'Kids aged 3–14 years, beach, bath, pool',
        care: 'Machine wash warm, tumble dry low'
    },
    {
        product: 'Baby Animal Hooded Towels',
        keyword: 'baby hooded towels',
        dimensions: 'Generous Baby Wrap Size (0–3 Years)',
        material: 'Ultra-Soft Hypoallergenic Plush Terry',
        closure: 'Corner Hood with 3D Cute Animal Face',
        colors: 'Purple, Pink, Grey, Beige, Mint Green, Blue',
        bestFor: 'Newborns, infants, toddlers bath time',
        care: 'Gentle cycle, baby-safe detergent'
    },
    {
        product: 'Bear Hooded Towels',
        keyword: 'baby hooded towels bear',
        dimensions: 'Generous Baby Wrap Size (0–3 Years)',
        material: 'Super Absorbent Fluffy Coral Fleece',
        closure: 'Corner Hood with Cuddly Bear Ears',
        colors: 'Blue, Brown, Grey, Mint Green, Pink',
        bestFor: 'Newborns & toddlers, nursery gift sets',
        care: 'Machine wash gentle, tumble dry low'
    },
    {
        product: 'Ladies Hair Cap / Hair Wrap',
        keyword: 'ladies hair cap',
        dimensions: 'Universal Ergonomic Tapered Fit',
        material: 'High-Tech Micro-Absorbent Anti-Frizz Weave',
        closure: 'Rear Button & Elastic Loop Fastener',
        colors: 'Coral Pink, Maroon, Raspberry, Blue, Orange, Brown',
        bestFor: 'All hair lengths & textures, anti-frizz drying',
        care: 'Machine washable, air dry recommended'
    }
]

const CUSTOMER_TESTIMONIALS = [
    {
        name: 'Pooja Sharma',
        location: 'Delhi',
        rating: 5,
        title: 'Best kids cotton printed towels we have owned!',
        text: 'The Spider-Man cotton printed towel is huge (60x30 inch) and super soft. My 7-year-old son refuses to use any other towel now. Even after multiple washes, the colors are bright and the cotton hasn’t hardened at all.',
        productTag: 'Kids Cotton Printed Towels'
    },
    {
        name: 'Neha Verma',
        location: 'Chandigarh',
        rating: 5,
        title: 'Perfect baby hooded towels for sensitive newborn skin',
        text: 'We bought the Bear hooded baby towel in mint green and animal towel in pink for our newborn. The plush hood keeps her head warm immediately after baths. The material is so gentle and doesn’t shed any lint.',
        productTag: 'Baby Hooded Towels'
    },
    {
        name: 'Simran Ahuja',
        location: 'Mumbai',
        rating: 5,
        title: 'Ladies hair cap is a game changer for curly hair!',
        text: 'I ordered the coral pink ladies hair cap with embroidery. The button closure keeps it tightly in place while I do my makeup. My blow dry time is literally cut by 15 minutes and zero frizz!',
        productTag: 'Ladies Hair Cap'
    }
]

const CatalogSection = () => {
    const [activeTab, setActiveTab] = useState('all')
    const [activePageViewer, setActivePageViewer] = useState(0)
    const [modalImage, setModalImage] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    // Interactive active preview states for each product family
    const [selectedAnimalIdx, setSelectedAnimalIdx] = useState(1) // Pink default
    const [selectedBearIdx, setSelectedBearIdx] = useState(0) // Blue default
    const [selectedHairIdx, setSelectedHairIdx] = useState(0) // Coral Pink default

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleInquireProduct = (productName, categoryKey) => {
        const inquirySection = document.getElementById('inquiry')
        if (inquirySection) {
            inquirySection.scrollIntoView({ behavior: 'smooth' })

            let selectVal = 'custom'
            if (categoryKey.includes('Kids') || categoryKey.includes('Cartoon')) selectVal = 'kids-cotton-towels'
            else if (categoryKey.includes('Baby') || categoryKey.includes('Bear') || categoryKey.includes('Animal')) selectVal = 'baby-hooded-towels'
            else if (categoryKey.includes('Ladies') || categoryKey.includes('Hair')) selectVal = 'ladies-hair-cap'

            window.dispatchEvent(
                new CustomEvent('weftora:inquire', {
                    detail: {
                        productInterest: selectVal,
                        message: `Hello Weftora, I am interested in inquiring about: ${productName} (${categoryKey}). Please share bulk pricing, minimum order quantities (MOQ), color availability, and catalogue samples.`
                    }
                })
            )
        }
    }

    const handleWhatsAppInquiry = (productName, categoryKey) => {
        const text = encodeURIComponent(
            `Hello Weftora! I am inquiring about ${productName} (${categoryKey}) from your product catalogue. Please share pricing, minimum order quantities, and catalogue details.`
        )
        window.open(`https://wa.me/919817660065?text=${text}`, '_blank')
    }

    return (
        <section
            ref={sectionRef}
            id="catalog"
            className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
        >
            {/* Background Decorative Rings */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            Official Weftora Product Catalogue
                        </div>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
                            Soft, Absorbent & Gentle Textiles
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                            Engineered for everyday luxury and gentle comfort. Explore our collection of <strong>kids cotton printed towels</strong>, plush <strong>baby hooded towels</strong>, and quick-dry <strong>ladies hair caps</strong>.
                        </p>

                        {/* Top Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <a
                                href="/catalog/weftora-catalogue.pdf"
                                download="Weftora-Product-Catalogue.pdf"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95"
                            >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                Download PDF Catalogue
                            </a>
                            <button
                                onClick={() => handleWhatsAppInquiry('Complete Product Catalogue', 'All Collections')}
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                WhatsApp Inquiry (+91 9817660065)
                            </button>
                            <Button
                                variant="outline"
                                onClick={() => setActiveTab('pages')}
                                className="inline-flex items-center gap-2 text-sm sm:text-base"
                            >
                                <Eye className="w-4 h-4" />
                                Flip Through Catalogue Pages
                            </Button>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
                        {[
                            { key: 'all', label: 'All Catalog Highlights' },
                            { key: 'kids', label: 'Kids Cotton Printed Towels' },
                            { key: 'baby', label: 'Baby Hooded Towels' },
                            { key: 'ladies', label: 'Ladies Hair Cap' },
                            { key: 'specs', label: 'Sizing & Specs Matrix' },
                            { key: 'pages', label: 'Catalogue PDF Viewer (Pages 1-5)' }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    activeTab === tab.key
                                        ? 'bg-foreground text-background shadow-md scale-105'
                                        : 'bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* TAB 1: KIDS COTTON PRINTED TOWELS */}
                    {(activeTab === 'all' || activeTab === 'kids') && (
                        <div id="kids-cotton-towels" className="mb-16 sm:mb-24 scroll-mt-24">
                            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mb-8">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            100% Pure Combed Cotton • Extra Large 60" × 30"
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                                            Kids Cotton Printed Towels
                                        </h3>
                                        <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                                            Designed specifically for energetic children, our kids cotton printed towels measure <strong>60 inches in length and 30 inches in breadth (152cm × 76cm)</strong>. Woven from breathable pure cotton yarns that absorb water instantly while leaving delicate skin feeling soft, cozy, and irritation-free.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 text-center sm:text-left">
                                            <div className="text-xs text-muted-foreground">Standard Dimensions</div>
                                            <div className="text-sm font-bold text-foreground">Length 60" × Breadth 30"</div>
                                        </div>
                                        <Button
                                            onClick={() => handleInquireProduct('Kids Cotton Printed Towels (Full Set)', 'Kids Cartoon Towels')}
                                            className="h-auto py-3 px-5 text-sm"
                                        >
                                            Inquire for Bulk Order
                                        </Button>
                                    </div>
                                </div>

                                {/* Feature Badges */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 py-6 border-b border-border/60">
                                    {[
                                        { icon: Droplets, title: 'High Absorbency', desc: '100% Pure Cotton terry' },
                                        { icon: ShieldCheck, title: 'Non-Toxic Dyes', desc: 'Child-safe & skin-friendly' },
                                        { icon: Wind, title: 'Quick Drying', desc: 'Prevents damp odors' },
                                        { icon: Heart, title: 'Pre-Washed & Soft', desc: 'No scratchy fibers' }
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-2.5 rounded-lg bg-muted/40">
                                            <f.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                            <div>
                                                <div className="text-xs sm:text-sm font-semibold text-foreground">{f.title}</div>
                                                <div className="text-[11px] text-muted-foreground">{f.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* 4 Kids Towels Grid */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                    {CATALOG_PRODUCTS.kidsCottonTowels.items.map((item, index) => (
                                        <Card
                                            key={index}
                                            className="group overflow-hidden border border-border/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
                                        >
                                            <div className="relative aspect-[3/4] bg-muted/30 overflow-hidden cursor-pointer" onClick={() => setModalImage(item.image)}>
                                                <img
                                                    src={item.image}
                                                    alt={`Kids cotton printed towel with ${item.character} design 60x30 inch`}
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-3 left-3 bg-foreground/90 backdrop-blur-sm text-background text-[11px] font-semibold px-2.5 py-1 rounded-full">
                                                    {item.badge}
                                                </div>
                                                <div className="absolute bottom-3 right-3 bg-black/60 text-white p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Maximize2 className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <CardContent className="p-4 sm:p-5">
                                                <div className="text-xs text-primary font-medium mb-1">Character: {item.character}</div>
                                                <h4 className="font-serif font-bold text-foreground text-base mb-1">{item.name}</h4>
                                                <p className="text-xs text-muted-foreground mb-3">
                                                    Size: 60" × 30" (Length 60 Inch, Breadth 30 Inch)
                                                </p>
                                                <div className="flex items-center justify-between pt-2 border-t border-border/60 gap-2">
                                                    <button
                                                        onClick={() => handleWhatsAppInquiry(item.name, 'Kids Cotton Printed Towel')}
                                                        className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 cursor-pointer"
                                                        title="WhatsApp Inquiry"
                                                    >
                                                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                                                    </button>
                                                    <button
                                                        onClick={() => handleInquireProduct(item.name, 'Kids Cotton Printed Towels')}
                                                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                                                    >
                                                        Inquire <Send className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: BABY HOODED TOWELS */}
                    {(activeTab === 'all' || activeTab === 'baby') && (
                        <div id="baby-hooded-towels" className="mb-16 sm:mb-24 scroll-mt-24">
                            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mb-8">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            Ultra-Soft Plush • Gentle for Newborns & Toddlers
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                                            Baby Hooded Towels
                                        </h3>
                                        <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                                            Keep your little ones cozy, comfortable, and warm from head to toe. Our baby hooded towels feature super-soft, hypoallergenic fabric with plush corner hoods, preventing post-bath chills. Available in two charming designs: <strong>Baby Animal Hooded Towels (6 colors)</strong> and <strong>Bear Hooded Towels (5 colors)</strong>.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={() => handleInquireProduct('Baby Hooded Towels Collection', 'Baby Hooded Towels')}
                                            className="h-auto py-3 px-5 text-sm"
                                        >
                                            Inquire for Baby Towels
                                        </Button>
                                    </div>
                                </div>

                                {/* Part A: Baby Animal Hooded Towels (6 Colors) */}
                                <div className="pt-8">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-serif font-bold text-foreground">
                                                01. Baby Animal Hooded Towels
                                            </h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                Ultra-soft hooded wraps with cute animal faces — available in 6 gentle pastel colours.
                                            </p>
                                        </div>
                                        {/* Color Selector Pill Indicator */}
                                        <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full self-start sm:self-auto">
                                            <span className="text-xs text-muted-foreground font-medium mr-1">Preview:</span>
                                            {CATALOG_PRODUCTS.babyHoodedTowels.animalSeries.items.map((item, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedAnimalIdx(idx)}
                                                    className={`w-4 h-4 rounded-full border-2 transition-transform cursor-pointer ${
                                                        selectedAnimalIdx === idx ? 'scale-125 border-foreground shadow' : 'border-white/50 opacity-80'
                                                    }`}
                                                    style={{ backgroundColor: item.bgHex }}
                                                    title={item.color}
                                                />
                                            ))}
                                            <span className="text-xs font-semibold text-foreground ml-1">
                                                {CATALOG_PRODUCTS.babyHoodedTowels.animalSeries.items[selectedAnimalIdx].color}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                                        {CATALOG_PRODUCTS.babyHoodedTowels.animalSeries.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`group bg-background rounded-xl border transition-all duration-300 overflow-hidden ${
                                                    selectedAnimalIdx === index ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-border/80 hover:shadow-lg'
                                                }`}
                                            >
                                                <div
                                                    className="aspect-[3/4] bg-muted/20 overflow-hidden cursor-pointer relative"
                                                    onClick={() => {
                                                        setSelectedAnimalIdx(index)
                                                        setModalImage(item.image)
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={`Baby animal hooded towel in ${item.color} colour`}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Maximize2 className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>
                                                <div className="p-3 text-center">
                                                    <div className="text-xs font-bold text-foreground uppercase tracking-wider">{item.color}</div>
                                                    <div className="flex items-center justify-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => handleWhatsAppInquiry(item.name, 'Baby Animal Hooded Towel')}
                                                            className="text-[11px] text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                                                            title="WhatsApp"
                                                        >
                                                            <MessageCircle className="w-3.5 h-3.5 inline" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleInquireProduct(item.name, 'Baby Animal Hooded Towels')}
                                                            className="text-[11px] text-primary hover:underline font-medium cursor-pointer"
                                                        >
                                                            Inquire
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Part B: Bear Hooded Towels (5 Colors) */}
                                <div className="pt-6 border-t border-border/60">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-serif font-bold text-foreground">
                                                02. Bear Hooded Towels
                                            </h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                Cuddly bear-eared hooded towels, soft and absorbent — available in 5 soothing shades.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full self-start sm:self-auto">
                                            <span className="text-xs text-muted-foreground font-medium mr-1">Preview:</span>
                                            {CATALOG_PRODUCTS.babyHoodedTowels.bearSeries.items.map((item, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedBearIdx(idx)}
                                                    className={`w-4 h-4 rounded-full border-2 transition-transform cursor-pointer ${
                                                        selectedBearIdx === idx ? 'scale-125 border-foreground shadow' : 'border-white/50 opacity-80'
                                                    }`}
                                                    style={{ backgroundColor: item.bgHex }}
                                                    title={item.color}
                                                />
                                            ))}
                                            <span className="text-xs font-semibold text-foreground ml-1">
                                                {CATALOG_PRODUCTS.babyHoodedTowels.bearSeries.items[selectedBearIdx].color}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {CATALOG_PRODUCTS.babyHoodedTowels.bearSeries.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`group bg-background rounded-xl border transition-all duration-300 overflow-hidden ${
                                                    selectedBearIdx === index ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-border/80 hover:shadow-lg'
                                                }`}
                                            >
                                                <div
                                                    className="aspect-[3/4] bg-muted/20 overflow-hidden cursor-pointer relative"
                                                    onClick={() => {
                                                        setSelectedBearIdx(index)
                                                        setModalImage(item.image)
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={`Bear hooded baby towel in ${item.color} colour`}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Maximize2 className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>
                                                <div className="p-3 text-center">
                                                    <div className="text-xs font-bold text-foreground uppercase tracking-wider">{item.color}</div>
                                                    <div className="flex items-center justify-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => handleWhatsAppInquiry(item.name, 'Bear Hooded Baby Towel')}
                                                            className="text-[11px] text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                                                            title="WhatsApp"
                                                        >
                                                            <MessageCircle className="w-3.5 h-3.5 inline" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleInquireProduct(item.name, 'Bear Hooded Towels')}
                                                            className="text-[11px] text-primary hover:underline font-medium cursor-pointer"
                                                        >
                                                            Inquire
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: LADIES HAIR CAP */}
                    {(activeTab === 'all' || activeTab === 'ladies') && (
                        <div id="ladies-hair-cap" className="mb-16 sm:mb-24 scroll-mt-24">
                            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mb-8">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            Anti-Frizz Drying • Button & Loop Fastener
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                                            Ladies Hair Cap & Quick-Dry Towels
                                        </h3>
                                        <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                                            Transform your daily hair care routine with our lightweight <strong>ladies hair cap</strong>. Designed with a secure rear button closure and delicate embroidery, it effortlessly secures wet hair, drastically cuts blow-drying time, and eliminates friction-induced frizz and hair breakage.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={() => handleInquireProduct('Ladies Hair Cap Collection', 'Ladies Hair Cap')}
                                            className="h-auto py-3 px-5 text-sm"
                                        >
                                            Inquire for Hair Caps
                                        </Button>
                                    </div>
                                </div>

                                {/* Feature Pillars */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 py-6 border-b border-border/60">
                                    {[
                                        { icon: ShieldCheck, title: 'Button Closure', desc: 'Secure non-slip fit' },
                                        { icon: Droplets, title: 'Super Absorbent', desc: 'Halves drying time' },
                                        { icon: Wind, title: 'Anti-Frizz Fiber', desc: 'Protects delicate cuticles' },
                                        { icon: Sparkles, title: 'Cute Embroidery', desc: '6 Stylish rich shades' }
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-2.5 rounded-lg bg-muted/40">
                                            <f.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                            <div>
                                                <div className="text-xs sm:text-sm font-semibold text-foreground">{f.title}</div>
                                                <div className="text-[11px] text-muted-foreground">{f.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* 6 Ladies Hair Cap Colours Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
                                    {CATALOG_PRODUCTS.ladiesHairCap.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`group bg-background rounded-xl border transition-all duration-300 overflow-hidden ${
                                                selectedHairIdx === index ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-border/80 hover:shadow-lg'
                                            }`}
                                        >
                                            <div
                                                className="aspect-[3/4] bg-muted/20 overflow-hidden cursor-pointer relative"
                                                onClick={() => {
                                                    setSelectedHairIdx(index)
                                                    setModalImage(item.image)
                                                }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={`Ladies hair cap quick dry towel in ${item.color} colour with embroidery`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <Maximize2 className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                            <div className="p-3 text-center">
                                                <div className="text-xs font-bold text-foreground uppercase tracking-wider">{item.color}</div>
                                                <div className="text-[10px] text-muted-foreground">{item.embroidery}</div>
                                                <div className="flex items-center justify-center gap-2 mt-2">
                                                    <button
                                                        onClick={() => handleWhatsAppInquiry(item.name, 'Ladies Hair Cap')}
                                                        className="text-[11px] text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                                                        title="WhatsApp"
                                                    >
                                                        <MessageCircle className="w-3.5 h-3.5 inline" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleInquireProduct(item.name, 'Ladies Hair Cap')}
                                                        className="text-[11px] text-primary hover:underline font-medium cursor-pointer"
                                                    >
                                                        Inquire
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 4: SIZING & TECHNICAL SPECIFICATIONS MATRIX (SEO MAGNET) */}
                    {(activeTab === 'all' || activeTab === 'specs') && (
                        <div id="technical-specifications" className="mb-16 sm:mb-24 scroll-mt-24">
                            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase mb-3">
                                        <SlidersHorizontal className="w-3.5 h-3.5" />
                                        Buyer’s Guide & Specifications
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                                        Catalogue Sizing & Fabric Comparison
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                                        Detailed technical specifications for our kids cotton printed towels, baby hooded towels, and ladies hair caps to help wholesale and retail buyers make informed choices.
                                    </p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50 text-foreground font-semibold">
                                                <th className="p-3 sm:p-4 rounded-tl-lg">Product Line</th>
                                                <th className="p-3 sm:p-4">Dimensions / Sizing</th>
                                                <th className="p-3 sm:p-4">Material & Fabric</th>
                                                <th className="p-3 sm:p-4">Closure & Features</th>
                                                <th className="p-3 sm:p-4">Recommended For</th>
                                                <th className="p-3 sm:p-4 rounded-tr-lg">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/60">
                                            {SPECIFICATIONS_TABLE.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                                                    <td className="p-3 sm:p-4 font-bold text-foreground">
                                                        {row.product}
                                                        <div className="text-[11px] font-normal text-primary">{row.colors}</div>
                                                    </td>
                                                    <td className="p-3 sm:p-4 text-muted-foreground font-medium">{row.dimensions}</td>
                                                    <td className="p-3 sm:p-4 text-muted-foreground">{row.material}</td>
                                                    <td className="p-3 sm:p-4 text-muted-foreground">{row.closure}</td>
                                                    <td className="p-3 sm:p-4 text-muted-foreground">{row.bestFor}</td>
                                                    <td className="p-3 sm:p-4">
                                                        <button
                                                            onClick={() => handleInquireProduct(row.product, 'Catalogue Wholesale')}
                                                            className="text-xs font-semibold text-primary hover:underline whitespace-nowrap cursor-pointer"
                                                        >
                                                            Inquire Now →
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 5: FLIPBOOK / CATALOGUE PDF PAGES VIEWER */}
                    {(activeTab === 'all' || activeTab === 'pages') && (
                        <div id="catalogue-pages" className="mb-16 sm:mb-24 scroll-mt-24">
                            <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                                            Interactive Brochure
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                                            Browse Official Catalogue Pages
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                            High-definition scan of the complete 5-page product catalogue.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href="/catalog/weftora-catalogue.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            Open Full PDF
                                        </a>
                                    </div>
                                </div>

                                {/* Active Page Viewer */}
                                <div className="py-6 sm:py-8">
                                    <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden border border-border shadow-2xl bg-black/5">
                                        <img
                                            src={CATALOG_PAGES[activePageViewer].image}
                                            alt={CATALOG_PAGES[activePageViewer].title}
                                            className="w-full h-auto cursor-pointer"
                                            onClick={() => setModalImage(CATALOG_PAGES[activePageViewer].image)}
                                        />
                                        <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center justify-between shadow-lg">
                                            <div>
                                                <div className="text-xs font-bold text-foreground">
                                                    Page {CATALOG_PAGES[activePageViewer].page} of 5
                                                </div>
                                                <div className="text-[11px] text-muted-foreground">
                                                    {CATALOG_PAGES[activePageViewer].title}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setActivePageViewer((prev) => (prev > 0 ? prev - 1 : CATALOG_PAGES.length - 1))}
                                                    className="p-1.5 rounded-md hover:bg-muted text-foreground transition-colors"
                                                    aria-label="Previous Page"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => setActivePageViewer((prev) => (prev < CATALOG_PAGES.length - 1 ? prev + 1 : 0))}
                                                    className="p-1.5 rounded-md hover:bg-muted text-foreground transition-colors"
                                                    aria-label="Next Page"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 overflow-x-auto pb-2">
                                        {CATALOG_PAGES.map((page, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActivePageViewer(idx)}
                                                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 w-16 sm:w-20 aspect-[3/4] cursor-pointer ${
                                                    activePageViewer === idx ? 'border-primary shadow-md scale-105' : 'border-border/60 opacity-60 hover:opacity-100'
                                                }`}
                                            >
                                                <img src={page.image} alt={page.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-[9px] text-center py-0.5 font-medium">
                                                    P. {page.page}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* VERIFIED CUSTOMER REVIEWS (SOCIAL PROOF FOR RANKING) */}
                    <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mt-12">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-1.5 text-amber-500 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
                                What Our Customers Say
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                Real experiences with our kids cotton printed towels, baby hooded towels, and ladies hair caps.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {CUSTOMER_TESTIMONIALS.map((t, i) => (
                                <div key={i} className="p-6 rounded-xl bg-muted/30 border border-border/60 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                                            {[...Array(t.rating)].map((_, ri) => (
                                                <Star key={ri} className="w-3.5 h-3.5 fill-amber-400" />
                                            ))}
                                        </div>
                                        <h4 className="font-serif font-bold text-foreground text-sm sm:text-base mb-2">"{t.title}"</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{t.text}</p>
                                    </div>
                                    <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                                        <span className="font-semibold text-foreground">{t.name}, {t.location}</span>
                                        <span className="text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.productTag}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GEO KNOWLEDGE BASE & FAQ BLOCK (CRITICAL FOR RANKING & AI ENGINES) */}
                    <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm mt-12">
                        {/* GEO Quick Summary for AI Overviews & Search Engines */}
                        <div className="geo-quick-summary p-5 sm:p-6 rounded-xl bg-primary/5 border border-primary/20 mb-10">
                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                                <Sparkles className="w-4 h-4" />
                                Generative Engine Summary (GEO Verified Specifications)
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3">
                                Weftora Premium Home & Personal Textiles Overview
                            </h3>
                            <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                                <strong>Weftora</strong> is an Indian home textile manufacturer located on Gohana Road, Panipat, Haryana. Weftora specializes in three core product categories:
                            </p>
                            <ul className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-foreground/85">
                                <li className="bg-background/80 p-3 rounded-lg border border-border/60">
                                    <span className="font-bold text-foreground block mb-1">1. Kids Cotton Printed Towels:</span>
                                    100% combed cotton, 60" × 30" (152cm × 76cm), non-toxic dyes, featuring Spider-Man, Stitch, Bluey & Minnie Mouse.
                                </li>
                                <li className="bg-background/80 p-3 rounded-lg border border-border/60">
                                    <span className="font-bold text-foreground block mb-1">2. Baby Hooded Towels:</span>
                                    Hypoallergenic plush wraps in 2 lines: Animal Series (6 pastel colours) & Bear Series (5 colours) for ages 0–3 years.
                                </li>
                                <li className="bg-background/80 p-3 rounded-lg border border-border/60">
                                    <span className="font-bold text-foreground block mb-1">3. Ladies Hair Cap:</span>
                                    High-absorbency anti-frizz micro-weave with rear button & loop fastener and embroidery in 6 fashion shades.
                                </li>
                            </ul>
                        </div>

                        {/* Interactive How-To Guides (GEO Schema Supported) */}
                        <div className="mb-10 pb-10 border-b border-border/60">
                            <h4 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-4 text-center">
                                Care & Usage Guides
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                    <div className="text-xs font-bold text-primary uppercase mb-2">Step-by-Step Guide</div>
                                    <h5 className="font-bold text-foreground text-sm mb-2">How to Use the Ladies Hair Cap</h5>
                                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                                        <li>Bend head forward so hair hangs down.</li>
                                        <li>Place the wide buttoned end on back of neck.</li>
                                        <li>Twist hair inside the tapered cone.</li>
                                        <li>Bring tail over crown and loop onto the button.</li>
                                    </ol>
                                </div>
                                <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                    <div className="text-xs font-bold text-primary uppercase mb-2">Care Instructions</div>
                                    <h5 className="font-bold text-foreground text-sm mb-2">Washing Kids Cotton Towels</h5>
                                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                                        <li>Machine wash in warm water with mild detergent.</li>
                                        <li>Avoid chlorine bleach to keep prints vibrant.</li>
                                        <li>Tumble dry low or air dry for maximum fluffiness.</li>
                                        <li>Wash before first use for peak absorbency.</li>
                                    </ol>
                                </div>
                                <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                    <div className="text-xs font-bold text-primary uppercase mb-2">Parent's Guide</div>
                                    <h5 className="font-bold text-foreground text-sm mb-2">Baby Hooded Towel Care</h5>
                                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                                        <li>Wash with baby-safe hypoallergenic soap.</li>
                                        <li>Gentle cycle at 30°C to preserve plush 3D ears.</li>
                                        <li>Never use fabric softeners that coat fibers.</li>
                                        <li>Hang dry immediately after use to prevent dampness.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
                                Why Choose Weftora Textiles?
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to know about our kids cotton printed towels, baby hooded towels, and ladies hair caps.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                <h4 className="font-serif font-bold text-lg text-foreground mb-2">Kids Cotton Printed Towels</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Our 60" x 30" bath towels use 100% natural cotton fibers that dry kids quickly after baths or swimming sessions without harsh friction. The reactive character printing stays bright even after dozens of machine washes.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                <h4 className="font-serif font-bold text-lg text-foreground mb-2">Baby Hooded Towels</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Featuring adorable 3D ears and embroidered animal faces, our hooded baby wraps keep infants warm while gently wicking water from scalp and delicate skin, making bath time cozy and soothing.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-muted/30 border border-border/60">
                                <h4 className="font-serif font-bold text-lg text-foreground mb-2">Ladies Hair Cap & Wraps</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Engineered with a secure button-and-loop closure, this hair cap wraps wet hair snugly without pulling hair roots. It eliminates heavy towel stress on your neck and accelerates natural drying.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Accordion Section */}
                        <div className="border-t border-border pt-8">
                            <h4 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-6 text-center">
                                Frequently Asked Questions
                            </h4>
                            <div className="space-y-4 max-w-3xl mx-auto">
                                {[
                                    {
                                        q: 'What are the dimensions and fabric of the kids cotton printed towels?',
                                        a: 'Weftora kids cotton printed towels measure 60 inches in length and 30 inches in breadth (152 cm × 76 cm). They are woven from 100% pure combed cotton, making them exceptionally soft, breathable, and capable of holding multiple times their weight in water.'
                                    },
                                    {
                                        q: 'Are the baby hooded towels suitable for newborns and sensitive baby skin?',
                                        a: 'Yes, our baby animal hooded towels and bear hooded wraps are manufactured with hypoallergenic, ultra-soft plush materials that have zero harsh chemical residues, protecting your newborn’s skin barrier from irritation.'
                                    },
                                    {
                                        q: 'How does the ladies hair cap towel wrap stay secure?',
                                        a: 'The hair cap has a tailored conical contour with an elastic loop at the tip and a sturdy button at the base of the neck. You simply twist your hair inside the wrap and loop it over the button for an immovable, lightweight fit.'
                                    },
                                    {
                                        q: 'Can I purchase these towels in wholesale or place bulk inquiries?',
                                        a: 'Yes! Weftora is a leading home textiles manufacturer located in Panipat. We fulfill bulk orders, custom printing orders, and distributor requests worldwide. Use our inquiry form below or call +91-9817660065 to get wholesale pricing.'
                                    }
                                ].map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group border border-border/70 rounded-xl p-4 bg-background open:bg-muted/20 transition-colors"
                                    >
                                        <summary className="font-semibold text-sm sm:text-base text-foreground cursor-pointer list-none flex items-center justify-between">
                                            <span>{faq.q}</span>
                                            <span className="text-primary font-bold text-lg group-open:rotate-45 transition-transform">
                                                +
                                            </span>
                                        </summary>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FLOATING ACTION PILL FOR WHATSAPP & CATALOGUE */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
                <a
                    href="https://wa.me/919817660065?text=Hello%20Weftora%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 font-medium text-xs sm:text-sm"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span className="hidden sm:inline">WhatsApp Us</span>
                </a>
            </div>

            {/* FULL-SCREEN IMAGE MODAL */}
            {modalImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setModalImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-xl overflow-hidden p-2" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setModalImage(null)}
                            className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full cursor-pointer transition-colors"
                            aria-label="Close Preview"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img src={modalImage} alt="Catalogue Preview" className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg" />
                    </div>
                </div>
            )}
        </section>
    )
}

export default CatalogSection
