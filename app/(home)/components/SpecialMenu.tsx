import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

const SpecialMenu = () => {


    const menuCategories2 = [
        {
            name: "Starters",
            icon: "/menu/s_menu1.png",
            image: "/assets/icon1.png",
        },
        {
            name: "Main Course",
            icon: "/icons/main-course.svg",
            image: "/assets/icon1.png",
        },
        {
            name: "Dessert",
            icon: "/icons/dessert.svg",
            image: "/assets/icon1.png",
        },
    ];


    const menuCategories = [
        {
            name: "Starters",
            icon: "/menu/s_menu1.png",
            image: "/menu/s_menu1.png",
        },
        {
            name: "Main Course",
            icon: "/icons/main-course.svg",
            image: "/menu/s_menu2.png",
        },
        {
            name: "Dessert",
            icon: "/icons/dessert.svg",
            image: "/menu/s_menu3.png",
        },
        {
            name: "Dessert",
            icon: "/icons/dessert.svg",
            image: "/menu/s_menu4.png",
        },
        {
            name: "Dessert",
            icon: "/icons/dessert.svg",
            image: "/menu/s_menu4.png",
        },
    ];




    return (
        <section className=" mx-auto  py-12">
            <div className="flex justify-around items-center mb-8">
                {menuCategories2.map((category: any, index: any) => (
                    <div key={index} className="text-center flex-col  flex">
                        <div className="p-4 flex items-center justify-center  inline-block">
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={70}
                                height={70}
                            />
                        </div>
                        <button className="bg-white mt-2 text-red-500 px-4 py-2 rounded-md shadow-[0_0_15px_5px] shadow-red-500 transition">
                            {category.name}
                        </button>


                    </div>
                ))}
            </div>
            {/* <div className="transform translateY-[-20%]">
                <img src="/assets/hero.png" alt="" className="h-[220px] w-full" />
            </div> */}

            <div
                style={{
                    backgroundImage: "url('/assets/hero.png')",
                    backgroundPosition: "center calc(45%)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="mt-20"
            >

                <Carousel


                    className="w-full max-w-5xl mx-auto relative"
                >

                    <CarouselContent className="relative h-[300px] flex items-center">
                        {menuCategories.map((category: any, index: any) => (
                            <CarouselItem key={index} className="md:basis-1/2 basis-1/1 lg:basis-1/3">
                                <div className="p-4">
                                    <div className="p-1">
                                        <div className="relative group">
                                            <Image
                                                src={category.image || "/placeholder.svg"}
                                                alt={category.name}
                                                width={200}
                                                height={200}
                                                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 shadow-glow" />
                    <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 shadow-glow" />
                </Carousel>
            </div>


        </section>
    );
};

export default SpecialMenu;

// Example usage
