import React, { useState } from "react"

// Button Component
export const Button = ({
    children,
    onClick,
    variant = "default",
    size = "default",
    className = "",
    asChild,
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:scale-105 active:scale-95 font-medium"

    const variants = {
        default: "rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl",
        secondary: "rounded-lg bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/80 hover:to-secondary/70 shadow-md hover:shadow-lg",
        outline: "rounded-lg border-2 border-primary/20 hover:border-primary/40 bg-transparent hover:bg-primary/5 text-primary backdrop-blur-sm shadow-sm hover:shadow-md",
        ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground bg-transparent text-muted-foreground hover:text-foreground",
        nav: "rounded-2xl bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl",
    }

    const sizes = {
        default: "h-10 py-2 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
    }

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
            onClick,
            ...props,
        })
    }

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

// Card Components
export const Card = ({ children, className = "", ...props }) => (
    <div
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
        {...props}
    >
        {children}
    </div>
)

export const CardHeader = ({ children, className = "", ...props }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
        {children}
    </div>
)

export const CardTitle = ({ children, className = "", ...props }) => (
    <h3
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
    >
        {children}
    </h3>
)

export const CardContent = ({ children, className = "", ...props }) => (
    <div className={`p-6 pt-0 ${className}`} {...props}>
        {children}
    </div>
)

// Input Components
export const Input = ({ className = "", ...props }) => (
    <input
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
    />
)

export const Label = ({ children, className = "", ...props }) => (
    <label
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
        {...props}
    >
        {children}
    </label>
)

export const Textarea = ({ className = "", ...props }) => (
    <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
    />
)

// Select Components
export const Select = ({ children, value, onValueChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || "")

    const handleSelect = (newValue) => {
        setSelectedValue(newValue)
        onValueChange?.(newValue)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isOpen,
                    setIsOpen,
                    selectedValue,
                    handleSelect,
                }),
            )}
        </div>
    )
}

export const SelectTrigger = ({ children, className = "", isOpen, setIsOpen, selectedValue }) => (
    <button
        type="button"
        className={`flex h-10 w-full items-center justify-between rounded-md border border-border bg-card text-foreground px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm ${className}`}
        onClick={() => setIsOpen(!isOpen)}
    >
        {children}
    </button>
)

export const SelectValue = ({ placeholder, selectedValue }) => (
    <span className={selectedValue ? "" : "text-muted-foreground"}>
        {selectedValue || placeholder}
    </span>
)

export const SelectContent = ({ children, isOpen, handleSelect }) => {
    if (!isOpen) return null

    return (
        <div
            className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border shadow-md"
            style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                color: 'var(--foreground)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
            }}
        >
            <div className="p-1">
                {React.Children.map(children, (child) => React.cloneElement(child, { handleSelect }))}
            </div>
        </div>
    )
}

export const SelectItem = ({ children, value, handleSelect }) => (
    <div
        className="relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none text-foreground hover:bg-black/5 dark:hover:bg-white/5"
        onClick={() => handleSelect(value)}
    >
        {children}
    </div>
)

// Logo
export const Logo = () => (
    <div className="flex items-center">
        <img
            src="/logo.webp"
            alt="Weftora - Premium Textiles"
            className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-35 lg:h-25 object-contain"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="140"
            height="100"
        />
    </div>
)

export default {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Input,
    Label,
    Textarea,
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    Logo,
}
