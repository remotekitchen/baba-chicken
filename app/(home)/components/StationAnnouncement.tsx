export default function StationAnnouncement() {
    return (
        <div className="min-h-screen  p-4 md:p-8 mt-10">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] gap-8 items-center">
                    {/* Clock Tower */}
                    <div className=" md:block">
                        <img
                            src="/assets/new-section/minner.png"
                            alt="Clock Tower"
                            className="w-full max-w-[130] mx-auto"
                        />
                    </div>

                    {/* Announcement Text */}
                    <div className="text-center space-y-4">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-serif ">
                            YATRIJAN KRIPYA
                            <br />
                            DHYAN DIJIYE
                        </h1>

                        <div className="space-y-3 !mt-16">
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif">
                                Gaadi Sankhya 33442
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif">
                                Ludhiana Say Chalkar
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif">
                                Abbotsford ko jaane wale
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif">
                                Baba Chicken Express
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif">
                                Platform number 34 Paunch
                                <br />
                                Chuki Hai.
                            </p>
                        </div>
                    </div>

                    {/* Station Sign */}
                    <div className=" md:block">
                        <img
                            src="/assets/new-section/sine-board.png"
                            alt="Clock Tower"
                            className="w-full max-w-[400px] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

