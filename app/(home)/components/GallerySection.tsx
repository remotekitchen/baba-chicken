import Image from "next/image";

const FoodGrid = () => {
    const foodItems = [
        { src: "/assets/update/gallery10.jpeg", alt: "Tandoori chicken with lemon" },
        { src: "/assets/update/gallery2.JPG", alt: "Biryani rice dish" },
        { src: "/assets/update/gallery3.JPG", alt: "Grilled meat" },
        { src: "/assets/update/gallery4.JPG", alt: "Wrapped sandwich with fries" },
        { src: "/assets/update/new.jpg", alt: "Hummus dip" },
        { src: "/assets/update/22.jpg", alt: "Grilled fish" },
        { src: "/assets/update/33.jpg", alt: "Breaded cutlet" },
        { src: "/assets/update/gallery8.JPG", alt: "Grilled wings" },
        { src: "/assets/update/updated.jpg", alt: "Grilled wings" },
        // { src: "/assets/update/gallery9.JPG", alt: "Vegetable skewers" },
    ];

    return (
        <div className="max-w-5xl mx-auto p-4 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {foodItems.map((item, index) => (
                    <div key={index} className="relative flex flex-col gap-2">
                        {/* Image Wrapper */}
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover rounded-tl-[50px] rounded-br-[50px] transition-transform duration-300 hover:scale-105 p-3"
                            />
                        </div>

                        {/* Bottom Border */}
                        <div className="bg-[#B72A23] h-[2px] w-[calc(100%-10px)]"></div>

                        {/* Right Border */}
                        {((index + 1) % 3 !== 0) && (
                            <div className="absolute top-0 right-0 bg-[#B72A23] w-[2px] h-[calc(100%-10px)]"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodGrid;