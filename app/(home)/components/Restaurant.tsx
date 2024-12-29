'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Phone } from 'lucide-react'
import { menuItems, testimonials, galleryItems } from "@/data/menu-data"
import MenuCard from "./MenuCard"

export default function Restaurant() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Carousel */}

            {/* Menu Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-red-600 mb-12">MENU</h2>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
                        {menuItems.map((item, index) => (
                            <MenuCard key={index} item={item} />
                        ))}
                    </div>
                    <div>
                        <div className="items-center justify-center w-full text-center mt-14">
                            <Button className="bg-[#B72A23] px-8 py-5 mb-4">order now</Button>
                            <p>* Offers available for pickup and delivery orders only.</p>
                        </div>
                    </div>
                </div>

            </section>


            {/* About Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-6">ABOUT BABA-CHICKEN</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Baba Chicken started in 1962 when S. Harmeet Singh (who his called Baba Ji) opened a small dhaba during pandemic Punjab food life. son, Mr Kanwaljit Singh, introduced popular dishes like Fish Fry and Chicken Curry. Today, Mr. Kanwaljit Singh carries forward the family tradition, ensuring Baba remains a beacon of authentic Punjabi cuisine.
                            </p>
                            <Button className="bg-red-600 hover:bg-red-700 shadow-glow">
                                KNOW MORE
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/placeholder.svg"
                                alt="About Us"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <Image
                                src="/placeholder.svg"
                                alt="Our Story"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg mt-8"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">OUR GALLERY</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-red-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Real Stories from Real Customers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-white">
                                <CardContent className="p-6">
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <p className="font-semibold text-red-600">{testimonial.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Visit Us Here</h2>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8862874659287!2d-122.8468813!3d49.1897097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTQnMjIuOSJOIDEyMsKwNTAnNDguOCJX!5e0!3m2!1sen!2sca!4v1620835674201!5m2!1sen!2sca"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <Image
                                src="/placeholder.svg"
                                alt="Baba Chicken Logo"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <p className="text-gray-400">
                                33442 South Fraser Way #110, Abbotsford, BC V2S 2B3, Canada
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>Menu</li>
                                <li>About</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                                <li>Jobs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Operating Hours:</h3>
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-5 h-5 text-red-500" />
                                <span>Monday - Friday: 11 am-11 pm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-red-500" />
                                <span>604-758-2222</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

