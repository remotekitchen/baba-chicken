'use client'

import { motion } from "framer-motion"
import { IceCreamBowlIcon as Bowl, UtensilsCrossed, Cookie } from 'lucide-react'
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function MenuGallery() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (scrollRef.current) {
                e.preventDefault()
                scrollRef.current.scrollLeft += e.deltaY
            }
        }

        const element = scrollRef.current
        element?.addEventListener('wheel', handleWheel)

        return () => element?.removeEventListener('wheel', handleWheel)
    }, [])

    const categories = [
        { name: "Starters", icon: Bowl },
        { name: "Main Course", icon: UtensilsCrossed },
        { name: "Dessert", icon: Cookie },
    ]

    const menuItems = [
        { image: "/placeholder.svg", title: "Tomato Soup" },
        { image: "/placeholder.svg", title: "Grilled Meat" },
        { image: "/placeholder.svg", title: "Garden Salad" },
        { image: "/placeholder.svg", title: "Sandwich Combo" },
        { image: "/placeholder.svg", title: "Special Dish" },
    ]

    return (
        <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center relative">
            {/* Watermark overlay */}
            <div
                className="absolute inset-0 bg-black/10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='rgba(255,255,255,0.05)' font-size='4'%3EMenu%3C/text%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center gap-12 mb-16"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                                <category.icon className="w-8 h-8 text-rose-500" />
                            </div>
                            <div className="px-4 py-1 bg-white/90 rounded-full shadow-lg">
                                <span className="text-rose-500 text-sm font-medium">{category.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gallery */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex gap-6 pb-4 min-w-max"
                    >
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="relative group"
                            >
                                <div className="w-72 h-48 overflow-hidden rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={288}
                                        height={192}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="text-white font-medium">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

