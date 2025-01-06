"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutRestaurant = () => {
    const router = useRouter()
    return (
        <div className='mt-20'>
            <div className="">
                {/* About Section */}
                <section className="flex flex-col md:flex-row items-center md:items-center   rounded-lg ">
                    {/* Text Content */}
                    <div className="md:w-1/2 p-10">
                        <h2 className="text-3xl font-bold text-[#B72A23] mb-4">About
                            <br /> Baba-Chicken</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            S. HIMMAT SINGH W/O WAS LOVINGLY CALLED BABA JI, STARTED A SMALL EATERY (DHABA) IN 1962.
                            HIS RECIPES HAD THE REAL TASTE OF PUNJAB IN THEM. LATER IT WAS INHERITED BY MR. KANWALJIT SINGH WHO ALONG WITH HIS WIFE INTRODUCED SOME UNIQUE RECIPES LIKE FISH FRY AND SPINACH CORN ROLL WHICH STARTED SELLING LIKE HOT CAKES. HUGE DEMANDS AND LOVE FROM THE CUSTOMERS LED TO THE FIRST BABA&apos;S RESTAURANT IN MODEL TOWN IN 1991.

                            THE SECRET HOMEMADE MAGIC MASALAS MADE BABA&apos;S BUTTER CHICKEN WORLD FAMOUS. NOW THE LEGACY IS CONTINUED BY MR. AVNEET SINGH.
                        </p>
                        <p className="text-gray-700 text-lg mb-4">
                            THE SECRET HOMEMADE MAGIC MASALAS MADE BABA&apos;S BUTTER CHICKEN WORLD FAMOUS. NOW THE LEGACY IS CONTINUED BY MR. AVNEET SINGH.
                        </p>
                        <div className='flex items-start  '>
                            <button
                                onClick={() => router.push("https://order.chatchefs.com/baba-chicken-a9126f07/baba-chicken-8a71dfba/menu")}
                                className="px-6 py-2 bg-[#B72A23] text-white rounded-lg hover:bg-red-700">
                                Order now
                            </button>
                            <img src="/assets/flower.png" alt="" className='transform -translate-y-5' />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/2 ">
                        <img
                            src="/about_us.JPG"
                            alt="Baba Chicken Dish"
                            className="rounded-lg"
                        />
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="flex md:mt-0 mt-10 flex-col md:flex-row items-center md:items-center  text-left justify-center">
                    {/* Image */}
                    <div className="md:w-1/2 ">
                        <img
                            src="/why_us.jpeg"
                            alt="Delicious Indian Cuisine"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="md:w-1/2 p-10">
                        <h2 className="text-3xl font-bold text-[#B72A23] mb-4">Why Us</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            Our menu is a testament to authentic Indian cuisine, featuring iconic dishes like Babas butter chicken, renowned for its secret homemade masalas, alongside modern favourites such as fish fry and spinach corn roll. At Babas, each dish tells a story of tradition and taste, making us a standout Indian restaurant in Abbotsford. Whether youre planning a cosy family dinner, a vibrant evening out, or a takeaway, Babas provides a range of dining options tailored to your preferences. We are your go-to destination for Indian cuisine in Abbotsford.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutRestaurant