'use client'

import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react'
import { menuItems } from "@/data/menu-data"
import MenuCard from "./MenuCard"
import GallerySection from "./GallerySection"
import { useRouter } from "next/navigation"

export default function Restaurant() {
    const router = useRouter()




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
                            <Button
                                onClick={() => router.push("https://order.chatchefs.com/baba-chicken-a9126f07/baba-chicken-8a71dfba/menu")}
                                className="bg-[#B72A23] px-8 py-5 mb-4">order now</Button>
                            <p>* Offers available for pickup and delivery orders only.</p>
                        </div>
                    </div>
                </div>

            </section>




            {/* Gallery Section */}
            <GallerySection />

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
                <div className="container mx-auto px-4 relative z-50 w-full ">
                    <h2 className="text-3xl font-bold text-center text-white mb-12 font-bold">Visit Us Here</h2>
                    <div className="rounded-lg w-full">

                        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.9661401747185!2d-122.30019192387803!3d49.049267387255355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435006c56f3eb%3A0xfb1604a662d7a839!2sBaba%20Chicken%20Abbotsford!5e0!3m2!1sen!2sbd!4v1735999922577!5m2!1sen!2sbd"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Embed"
                            ></iframe>
                        </div>
                        {/* <img src="/assets/map.png" alt="" /> */}
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


        </div>
    )
}

