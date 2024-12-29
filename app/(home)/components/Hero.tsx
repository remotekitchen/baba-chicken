"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { NavMenu } from "./NavMenu"
import { Logo } from "./Logo"
import { ChatButton } from "./ChatButton"

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white py-4 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                </div>
            </header>

            <main className="flex-1">
                <div className="relative h-[80vh] flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/hero.png')",
                            }}
                        />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="mb-8"
                        >
                            <div className="w-32 h-32 mx-auto  rounded-full flex items-center justify-center">
                                <Image
                                    src="/assets/logo_icon.png"
                                    alt="Baba's Icon"
                                    width={80}
                                    height={80}
                                    className="w-32 h-32"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-2xl mx-auto space-y-6"
                        >
                            <p className="text-white text-lg md:text-xl leading-relaxed">
                                Experience the rich, authentic taste of Punjabi cuisine with
                                mouth-watering dishes crafted by Baba Chicken&apos;s culinary
                                experts.
                            </p>
                            <h1 className="text-white text-3xl md:text-4xl font-bold">
                                Baba Chicken Abbotsford
                            </h1>
                        </motion.div>
                    </div>
                </div>
                <ChatButton />
            </main>
        </div>
    )
}
