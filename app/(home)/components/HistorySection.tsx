export default function HistorySection() {
    return (
        <div className=" bg-white p-4 md:p-8 relative py-10 my-20">
            <div className="max-w-4xl mx-auto">
                {/* Header with sketch effect */}
                <div className="text-center mb-8 space-y-2">
                    <img
                        src="/assets/new-section/title.png"
                        alt="Punjabi dancer"
                        className="w-[220px] h-auto lg:w-[400px] mx-auto"
                    />
                </div>

                {/* Top-right illustration (Boy) */}
                <div className="absolute -top-10 right-4 md:top-8 md:right-8">
                    <img
                        src="/assets/new-section/boy.png"
                        alt="Punjabi dancer"
                        className="w-[100px] h-auto md:w-[150px] lg:w-[200px]"
                    />
                </div>

                {/* Bottom-left illustration (Girl) */}
                <div className="absolute -bottom-20 left-4 md:bottom-8 md:left-8">
                    <img
                        src="/assets/new-section/girl.png"
                        alt="Punjabi drummer"
                        className="w-[100px] h-auto md:w-[150px] lg:w-[200px]"
                    />
                </div>

                {/* Main content */}
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide space-y-4">
                        <span className="font-bold">S. HIMMAT SINGH</span> WHO WAS LOVINGLY CALLED <span className="font-bold">BABA JI</span>,
                        STARTED A SMALL EATERY (DHABA) IN <span className="font-bold">1962</span>. HIS RECIPES HAD THE
                        <span className="font-bold"> REAL TASTE OF PUNJAB</span> IN THEM. LATER IT WAS INHERITED BY
                        <span className="font-bold"> MR. KANWALJIT SINGH</span> WHO ALONG WITH HIS WIFE INTRODUCED SOME
                        UNIQUE RECIPES LIKE <span className="font-bold">FISH FRY</span> AND <span className="font-bold">SPINACH CORN ROLL</span> WHICH
                        STARTED SELLING LIKE HOT CAKES. HUGE DEMANDS AND LOVE FROM THE CUSTOMERS LED TO THE
                        <span className="font-bold"> FIRST BABA&apos;S RESTAURANT</span> IN MODEL TOWN IN <span className="font-bold">1991</span>. THE
                        SECRET HOMEMADE MAGIC MASALAS MADE <span className="font-bold">BABA&apos;S BUTTER CHICKEN</span> WORLD FAMOUS.
                    </p>
                    <p className="mt-6 mb-10 md:mb-0 lg:mb-0 text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide">
                        NOW THE LEGACY IS CONTINUED BY <span className="font-bold">MR. AVNEET SINGH</span> & <span className="font-bold">HARSHMOHAN SINGH</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
