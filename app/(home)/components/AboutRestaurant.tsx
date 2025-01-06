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
                            Himmat Singh, fondly known as Baba Ji, started a small eatery (dhaba) in 1962. His recipes carried the authentic taste of Punjab. Later, the eatery was inherited by Mr. Kanwaljit Singh, who, along with his wife, introduced unique dishes like fish fry and spinach corn roll, which quickly became customer favorites.
                            The overwhelming demand and love from customers led to the opening of the first BABA&apos;S Restaurant in Model Town in 1991. The secret homemade magic masalas made BABA&apos;S butter chicken world-famous. Today, the legacy is carried forward by Mr. Avneet Singh.
                        </p>
                        {/* BABA&apos;S  */}
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