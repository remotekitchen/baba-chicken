'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Phone, Quote } from 'lucide-react'
import { menuItems } from "@/data/menu-data"
import MenuCard from "./MenuCard"
import Link from "next/link"

export default function Restaurant() {


    const galleryItems = [
        {
            id: 1,
            src: "/assets/gallery1.png",
            alt: "Tandoori chicken with lemon",
            title: "Tandoori Chicken"
        },
        {
            id: 2,
            src: "/assets/gallery2.png",
            alt: "Biryani rice dish",
            title: "Special Biryani"
        },
        {
            id: 3,
            src: "/assets/gallery3.png",
            alt: "Spiced curry meat pieces",
            title: "Curry Special"
        },
        {
            id: 4,
            src: "/assets/gallery4.png",
            alt: "Wrap with french fries",
            title: "Roll Combo"
        },
        {
            id: 5,
            src: "/assets/gallery5.png",
            alt: "Creamy curry sauce",
            title: "Butter Sauce"
        },
        {
            id: 6,
            src: "/assets/gallery6.png",
            alt: "Yellow curry dish",
            title: "Yellow Curry"
        },
        {
            id: 7,
            src: "/assets/gallery7.png",
            alt: "Breaded cutlet",
            title: "Crispy Cutlet"
        },
        {
            id: 8,
            src: "/assets/gallery8.png",
            alt: "Tandoori wings",
            title: "Tandoori Wings"
        },
        {
            id: 9,
            src: "/assets/gallery9.png",
            alt: "Vegetable kebabs",
            title: "Mixed Kebabs"
        }
    ]


    const testimonials: any = [
        {
            author: "Monster Alive",
            content: "I recently ordered takeout from Baba Chicken and was thoroughly impressed. I got the desi style chicken curry, and it was mouthwatering and absolutely delicious. I've never had such an authentic taste in Canada before—it truly reminded me of home in India and was worth every penny."
        },
        {
            author: "Daksh Jain",
            content: "Best food in Surry. We tried kaali mirchi panner and it was one the best. I am from Ludhiana and lives in Calgary and I can visit Surry just to have food here."
        },
        {
            author: "Rajeev Syal",
            content: "Finally no more sweet butter chicken in town. I just loved the vibe, they are serving greenchutney and onions with food. All steel utensils are used here and it makes them unique."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
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




            {/* Gallery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center md:w-[800px] mx-auto mb-10">
                        <h2 className="text-3xl font-bold text-center text-red-600 mb-2">OUR GALLERY</h2>
                        <p>Step into our vibrant gallery showcasing the essence of Baba Chicken. From sizzling dishes to joyful moments,
                            explore how we turn every meal into an unforgettable culinary experience.</p>
                    </div>
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                            {galleryItems.map((item) => (
                                <Card key={item.id} className="rounded-none border-0">
                                    <CardContent className="relative aspect-square p-0 transition-transform hover:scale-[0.98]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className=""
                                            sizes="(max-width: 540px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-[#FBEEE4] px-4 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 md:mb-16">
                        <Quote className="h-16 w-full text-[#FFC1B4] md:h-24 md:w-24" />
                        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                            Real Stories from
                            <br />
                            Real Customers
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Get inspired by these stories.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex md:justify-end  justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-sm w-[300px] ">
                                <blockquote className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        {testimonials[0].content}
                                    </p>
                                    <footer className="font-medium text-gray-900">
                                        {testimonials[0].author}
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        {/* Right column - stacked testimonials */}
                        <div className="space-y-6">
                            {testimonials.slice(1).map((testimonial: any, index: any) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm"
                                >
                                    <blockquote className="space-y-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            {testimonial.content}
                                        </p>
                                        <footer className="font-medium text-gray-900">
                                            {testimonial.author}
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>






            {/* Map Section */}
            <section
                style={{
                    backgroundImage: "url(/assets/map_bg.png)"
                }}
                className="py-16 relative">
                <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0">

                </div>
                <div className="container mx-auto px-4 relative z-50 ">
                    <h2 className="text-3xl font-bold text-center text-white mb-12 font-bold">Visit Us Here</h2>
                    <div className="rounded-lg flex items-center justify-center">
                        <img src="/assets/map.png" alt="" />
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8862874659287!2d-122.8468813!3d49.1897097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTQnMjIuOSJOIDEyMsKwNTAnNDguOCJX!5e0!3m2!1sen!2sca!4v1620835674201!5m2!1sen!2sca"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        /> */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-zinc-900 text-zinc-100 px-4 py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Logo and Address Section */}
                        <div className="flex flex-col items-center md:items-start gap-4 text-center mx-auto  justify-center items-center">
                            <Image
                                src="/assets/logo2.png"
                                alt="Baba Chicken Logo"
                                width={70}
                                height={70}
                                className="rounded-full bg-red-600"
                            />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-xl">Baba Chicken</h3>
                                <address className="not-italic text-sm text-zinc-400">
                                    33442 South Fraser
                                    <br />
                                    Way #110, Abbotsford,
                                    <br />
                                    BC V2S 2B5, Canada
                                </address>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="text-center md:text-left">
                            {/* <h4 className="font-semibold text-lg mb-4">Quick Links</h4> */}
                            <nav className="flex flex-col gap-2">
                                {["Home", "Menu", "About", "Gallery", "Contact", "Jobs"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Combined Operating Hours and Contact Section */}
                        <div className="text-center md:text-left space-y-6">
                            {/* Operating Hours */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Operating Hours</h4>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400">
                                    <Clock className="h-4 w-4" />
                                    <div>
                                        <p>Monday - Friday</p>
                                        <p>11 am - 11 pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400">
                                    <Phone className="h-4 w-4" />
                                    <a
                                        href="tel:604-758-2222"
                                        className="hover:text-white transition-colors"
                                    >
                                        604-758-2222
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Baba Chicken. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

