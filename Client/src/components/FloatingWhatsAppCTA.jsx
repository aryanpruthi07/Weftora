import React, { useState } from 'react'
import { MessageCircle, X, Sparkles, Building2 } from 'lucide-react'

const FloatingWhatsAppCTA = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    if (isDismissed) return null

    const handleQuickChat = (customText) => {
        const defaultMsg = customText || "Hello Weftora Team, I am interested in bulk wholesale orders for kids towels, baby hooded wraps, and ladies hair caps. Please send me your wholesale catalogue and factory price list."
        const url = `https://wa.me/919817660065?text=${encodeURIComponent(defaultMsg)}`
        window.open(url, '_blank')
    }

    return (
        <aside aria-label="Wholesale WhatsApp Inquiry" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end">
            
            {/* Quick Expanded Menu */}
            {isExpanded && (
                <div className="mb-3 w-72 sm:w-80 p-4 rounded-2xl bg-card border-2 border-primary/20 shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xs">
                                W
                            </div>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-foreground">Weftora Factory B2B</h3>
                                <p className="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online • Aryan Pruthi (MD)
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsExpanded(false)}
                            className="text-muted-foreground hover:text-foreground p-1"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-xs text-muted-foreground my-3">
                        How can we help your business today? Choose an inquiry option for instant WhatsApp rates:
                    </p>

                    <div className="space-y-2">
                        <button
                            onClick={() => handleQuickChat("Hi Aryan, I want to inquire about bulk wholesale pricing for Kids Cotton Printed Towels (60x30 inch). What are your MOQs and factory rates?")}
                            className="w-full text-left p-2.5 rounded-xl bg-muted/60 hover:bg-primary/10 hover:border-primary border border-transparent text-xs font-medium text-foreground transition-all duration-200"
                        >
                            🧸 Kids Cotton Towels Wholesale Rates
                        </button>
                        <button
                            onClick={() => handleQuickChat("Hi Aryan, please share wholesale pricing and color availability for Baby Animal & Bear Hooded Towels.")}
                            className="w-full text-left p-2.5 rounded-xl bg-muted/60 hover:bg-primary/10 hover:border-primary border border-transparent text-xs font-medium text-foreground transition-all duration-200"
                        >
                            👶 Baby Hooded Wraps Bulk Pricing
                        </button>
                        <button
                            onClick={() => handleQuickChat("Hi Aryan, I need wholesale rate cards for Ladies Quick-Dry Hair Caps (6 colors).")}
                            className="w-full text-left p-2.5 rounded-xl bg-muted/60 hover:bg-primary/10 hover:border-primary border border-transparent text-xs font-medium text-foreground transition-all duration-200"
                        >
                            💆 Ladies Hair Drying Cap Inquiry
                        </button>
                        <button
                            onClick={() => handleQuickChat("Hello, I am a retail store owner / online seller looking for OEM private labeling and sample kit dispatch from Panipat.")}
                            className="w-full text-left p-2.5 rounded-xl bg-muted/60 hover:bg-primary/10 hover:border-primary border border-transparent text-xs font-medium text-foreground transition-all duration-200"
                        >
                            📦 Request Sample Kit / Custom Branding
                        </button>
                    </div>

                    <div className="mt-3 pt-2 text-center text-[10px] text-muted-foreground border-t border-border/60">
                        Panipat Factory Direct • Rapid Transport All-India
                    </div>
                </div>
            )}

            {/* Main Floating Trigger Button */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xs sm:text-sm active:scale-95"
                    aria-label="Contact Weftora on WhatsApp for Bulk Orders"
                >
                    <div className="relative">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping"></span>
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full"></span>
                    </div>
                    <span className="hidden xs:inline sm:inline">Bulk Wholesale Quote</span>
                    <span className="xs:hidden sm:hidden">Wholesale</span>
                    <span className="hidden md:inline-block text-[11px] font-normal opacity-90 border-l border-white/30 pl-2">
                        Panipat Direct
                    </span>
                </button>

                <button
                    onClick={() => setIsDismissed(true)}
                    className="w-6 h-6 rounded-full bg-muted/80 hover:bg-muted text-muted-foreground flex items-center justify-center text-xs shadow"
                    title="Dismiss"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>

        </aside>
    )
}

export default FloatingWhatsAppCTA
