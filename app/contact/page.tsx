'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from 'lucide-react'

export default function ContactFormPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center md:text-center">
                CONTACT US
            </h1>

            <div className="grid md:grid-cols-2 gap-8 py-6">
                {/* Form Section */}
                <Card>
                    <CardContent className="p-6">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="First Name"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your number"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Write the message"
                                    className="w-full min-h-[100px]"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white"
                            >
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Map and Contact Info Section */}
                <div className="space-y-6">
                    <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDMwJzI2LjYiTiAwwrAwNyc0MC43Ilc!5e0!3m2!1sen!2sus!4v1635959573000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-red-600 mb-2">Call Us</h3>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                604-756-2222
                            </p>
                        </div>

                        <hr className="border-[#B72A23]" />

                        <div>
                            <h3 className="font-medium text-red-600 mb-2">Operating Hours</h3>
                            <p>Monday - Friday</p>
                            <p>11 am-11 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

