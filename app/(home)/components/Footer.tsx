import { Clock, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-zinc-900 text-zinc-100 px-4 py-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-3">
                    {/* Logo and Address Section */}
                    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <Image
                            src="/assets/logo2.png"
                            alt="Baba Chicken Logo"
                            width={70}
                            height={70}
                            className="rounded-full bg-red-600"
                        />
                        <div>
                            <h3 className="font-bold text-xl">Baba Chicken</h3>
                            <address className="not-italic text-sm text-zinc-400 leading-relaxed">
                                33442 South Fraser <br />
                                Way #110, Abbotsford, <br />
                                BC V2S 2B5, Canada
                            </address>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            <Link
                                href={`/`}
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                            {["Menu", "About", "Gallery", "Contact", "Jobs"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Operating Hours and Contact Section */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        {/* Operating Hours */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Operating Hours</h4>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Clock className="h-5 w-5" />
                                <div>
                                    <p>Monday - Friday</p>
                                    <p>11 am - 11 pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Phone className="h-5 w-5" />
                                <a
                                    href="tel:604-758-2222"
                                    className="hover:text-white transition-colors"
                                >
                                    604-758-2222
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Baba Chicken. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
