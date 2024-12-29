import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const GallerySection = () => {


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


    return (
        <div>
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
        </div>
    )
}

export default GallerySection