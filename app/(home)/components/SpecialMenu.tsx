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


    // const menuCategories2 = [
    //     {
    //         name: "Starters",
    //         icon: "/menu/s_menu1.png",
    //         image: "/assets/icon1.png",
    //     },
    //     {
    //         name: "Main Course",
    //         icon: "/icons/main-course.svg",
    //         image: "/assets/icon1.png",
    //     },
    //     {
    //         name: "Dessert",
    //         icon: "/icons/dessert.svg",
    //         image: "/assets/icon1.png",
    //     },
    // ];


    const menuCategories = [
        "/assets/slider/top_slider1.png",
        "/assets/slider/top_slider2.png",
        "/assets/slider/top_slider3.png",
        "/assets/slider/top_slider4.png",
        "/assets/slider/top_slider5.png",
    ];


    console.log("first")

    return (
        <section className=" mx-auto  ">
            <div className="flex justify-around  items-center mb-8 mt-10">

            </div>

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


                    className="w-full container mx-auto relative translate-y-[-100px]"
                >

                    <CarouselContent className="relative h-[260px] flex items-center">
                        {menuCategories.map((src: any, index: any) => (
                            <CarouselItem key={index} className="md:basis-1/2 basis-1/1 lg:basis-1/4">
                                <div className="p-4">
                                    <div className="p-1">
                                        <div className="relative group">
                                            <Image
                                                src={src}
                                                alt={"src"}
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
