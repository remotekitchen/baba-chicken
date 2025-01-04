"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import toast from "react-hot-toast";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: "support@example.com", // Replace with your email recipient
                    subject: "New Contact Form Submission",
                    text: `
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Message: ${data.message}
          `,
                }),
            });

            if (response.ok) {
                toast.success("Email sent successfully!");
                reset();
            } else {
                toast.error("Failed to send email. Please try again.");
            }
        } catch (error: any) {
            console.log("error", error)
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center md:text-center">
                CONTACT US
            </h1>

            <div className="grid md:grid-cols-2 gap-8 py-6">
                {/* Form Section */}
                <Card>
                    <CardContent className="p-6">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="First Name"
                                    className="w-full"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                                )}
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
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email format",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                                )}
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
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^\d{10,15}$/,
                                            message: "Invalid phone number",
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Write the message"
                                    className="w-full min-h-[100px]"
                                    {...register("message", { required: "Message is required" })}
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Map and Contact Info Section */}
                <div className="space-y-6">
                    <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.9661401747185!2d-122.30019192387803!3d49.049267387255355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435006c56f3eb%3A0xfb1604a662d7a839!2sBaba%20Chicken%20Abbotsford!5e0!3m2!1sen!2sbd!4v1735999922577!5m2!1sen!2sbd"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Embed"
                            ></iframe>
                        </div>
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
    );
}
