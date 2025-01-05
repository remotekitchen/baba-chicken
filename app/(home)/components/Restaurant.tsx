'use client'

import { Button } from "@/components/ui/button"
import { menuItems } from "@/data/menu-data"
import MenuCard from "./MenuCard"
import GallerySection from "./GallerySection"
import { useRouter } from "next/navigation"

export default function Restaurant() {
    const router = useRouter()




    const testimonials: any = [
        {
            author: "Zoheret Singh Narang",
            content: "We ordered Babas Chicken at the office today. We ordered the Chilli Chicken, Tandoori Fish along with Butter chicken and Kaali dal and i can confirm, this took me back to India!! The food was Amazing!! The quantity along with the price were both up to par. The Fish melted in my mouth while the Butter Chicken was a whole other experience!! This is my new GO TO indian place! Highly recommend"
        },
        {
            author: "Karan Pratap Singh",
            content: "I was blown away by the food! It took me right back to Ludhiana. The taste was authentic, the price point perfect and the service was with a smile. Besides their signature Baba Butter chicken (you've never had butter chicken like this), we tried the Spinach Corn Roll and the Seekh Kebab and they were amazing! You gotta try it now."
        },
        {
            author: "Chiranjiv Takkar",
            content: "Tried the new Baba Chicken Abbotsford, they nailed it with the same taste of Ludhiana OG Baba Chicken. Loved everything we ordered - Butter Chicken, Kaali Mirch Chicken, Fried Fish and Spring Rolls, everything Iconic. Must try!"
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-white py-16">
                <div className="container mx-auto md:px-4 px-10">
                    <h2 className="text-4xl font-bold text-center text-[#B72A23] mb-12">Signature dish</h2>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
                        {menuItems.map((item: any, index: any) => (
                            <MenuCard key={index} item={item} />
                        ))}
                    </div>
                    <div>
                        <div className="items-center justify-center w-full text-center mt-14">
                            <Button
                                onClick={() => router.push("/menu")}
                                className="bg-[#B72A23] px-8 py-5 mb-4">View Menu</Button>
                            {/* <p>* Offers available for pickup and delivery orders only.</p> */}
                        </div>
                    </div>
                </div>

            </section>

            {/* Gallery Section */}
            <GallerySection />

            {/* Testimonials Section */}
            <section className="bg-[#FBEEE4] px-4 py-16 md:py-24">
                <div className="mx-auto md:max-w-6xl grid grid-cols-12 gap-10">
                    <div className=" md:block hidden col-span-2">
                        <img src="/quama.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between col-span-12 md:col-span-5">
                        <div className="flex items-center gap-5 md:mb-0 mb-6">
                            <img src="/quama.png" alt="" className="md:hidden block" />

                            <div className="mb-5">
                                <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                                    Real Stories from
                                    <br />
                                    Real Customers
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    Get inspired by these stories.
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm w-[320px]   md:w-full">
                                <blockquote className="space-y-4">
                                    <p className="text-gray-600 leading-[33px] tracking-[1px]	">
                                        {testimonials[0].content}
                                    </p>
                                    <footer className="font-medium text-gray-900">
                                        {testimonials[0].author}
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className=" col-span-12 md:col-span-5">
                        <div className="space-y-6">
                            {testimonials.slice(1).map((testimonial: any, index: any) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm  w-[320px] md:w-full"
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

