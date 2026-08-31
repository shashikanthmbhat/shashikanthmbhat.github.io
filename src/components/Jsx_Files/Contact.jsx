//Webform courtesy : Web3Forms(https://web3forms.com/)
import { useState } from 'react';
import {
    headerCt,
    contactInfo,
} from "../Js_Files/Contactdata";

const Contact = ({ darkMode }) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "d16f95c5-4766-485d-85c4-022cecb9cb1d"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setResult("Unable to send message. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:py-8">

                {/* Get In Touch and Description */}
                <div
                    className="text-center mb-8 sm:mb-10 md:md-12"
                    data-aos="fade-up"
                >
                    {/* Get In Touch text */}
                    <h2
                        className={
                            darkMode
                                ? "style1-dark"
                                : "style1-light"
                        }
                    >
                        {headerCt.title1}
                        <span className="style2">
                            {headerCt.title2}
                        </span>
                    </h2>

                    <p
                        className={
                            darkMode
                                ? "style-Disc-dark"
                                : "style-Disc-light"
                        }
                    >
                        {headerCt.description}
                    </p>
                </div>

                {/* Contact Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-5">

                    {/* Contact Information */}
                    <div
                        data-aos="fade-right"
                        className={`col-span-2 rounded-2xl border p-5 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}>
                        <h3
                            className="text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Contact Information
                        </h3>

                        {/* Contact Items */}
                        <div className="flex flex-col space-y-6 indent-4 gap-1">

                            {contactInfo.map((info) => {
                                const IconComponent = info.icon;

                                return (
                                    <div
                                        key={info.id}
                                        className={`group border-3 rounded-2xl px-4 py-2 mb-6 transition-all duration-300 ${
                                            darkMode
                                                ? "text-white hover:text-white hover:bg-blue-500 border-blue-500 hover:border-blue-500 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                                : "text-black hover:text-black hover:bg-sky-500 border-sky-500 hover:border-sky-500 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                                        }`}
                                    >

                                        {/* Contact Information */}
                                        <div className="flex items-center gap-4 justify-start px-4 py-4 cursor-pointer">

                                            <IconComponent
                                                className={`w-12 h-12 transition-colors duration-300 ${
                                                    darkMode
                                                        ? "text-blue-500 group-hover:text-white"
                                                        : "text-sky-500 group-hover:text-black"
                                                }`}
                                            />

                                            <div>

                                                <p
                                                    className="font-semibold"
                                                    style={{
                                                        color: darkMode
                                                            ? "white"
                                                            : "black",
                                                    }}
                                                >
                                                    {info.name}
                                                </p>

                                                <p
                                                    style={{
                                                        color: darkMode
                                                            ? "white"
                                                            : "black",
                                                    }}
                                                >
                                                    {info.alt}
                                                </p>

                                            </div>

                                        </div>

                                        {/* Send Message Button */}
                                        <div className="px-4 pb-2">

                                            <a
                                                href={info.href}
                                                target="_blank"
                                                rel="_noreferrer"
                                                className={`group relative w-full px-6 py-2 block rounded-lg text-sm text-center font-medium transition-colors duration-300 overflow-hidden ${
                                                    darkMode
                                                        ? "bg-white text-white group-hover:text-blue-500"
                                                        : "bg-black text-black group-hover:text-sky-500"
                                                }`}
                                            >

                                                {/* Gradient Background */}
                                                <span
                                                    className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 transition-opacity duration-300 group-hover:opacity-0"
                                                />

                                                {/* Button Text */}
                                                <span className="relative z-10">
                                                    Send Message
                                                </span>

                                            </a>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* Contact Form */}
                    {/* Webform courtesy : Web3Forms(https://web3forms.com/) */}
                    <div
                        data-aos="fade-left"
                        className="col-span-3"
                    >
                        <form
                            onSubmit={onSubmit}
                            className={`rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                            data-aos="fade-left"
                        >
                            {/* Hidden fields for email */}
                            <input
                                type="hidden"
                                name="subject"
                                value="A new Person/Organization wants to connect with you"
                            />

                            <input
                                type="hidden"
                                name="from_name"
                                value="Portfolio Contact Form"
                            />

                            <input
                                type="hidden"
                                name="botcheck"
                                value=""
                            />
                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {/* First Name */}
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className={`w-full px-3 border-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all mb-3 sm:mb-4 focus:outline-none ${
                                        darkMode
                                            ? "text-white border-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                            : "text-black border-sky-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                                    }`}
                                    required
                                />

                                {/* Last Name */}
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className={`w-full px-3 border-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all mb-3 sm:mb-4 focus:outline-none ${
                                        darkMode
                                            ? "text-white border-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                            : "text-black border-sky-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                                    }`}
                                    required
                                />

                            </div>

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`w-full px-3 border-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all mb-3 sm:mb-4 focus:outline-none ${
                                    darkMode
                                        ? "text-white border-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                        : "text-black border-sky-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                                }`}
                                required
                            />

                            {/* Phone Number */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className={`w-full px-3 border-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all mb-3 sm:mb-4 focus:outline-none ${
                                    darkMode
                                        ? "text-white border-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                        : "text-black border-sky-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                                }`}
                                required
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="10"
                                placeholder="Your Message"
                                className={`w-full px-3 border-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all mb-3 sm:mb-4 focus:outline-none ${
                                    darkMode
                                        ? "text-white border-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                        : "text-black border-sky-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
                                }`}
                                required
                            />

                            {/* Send Message Button */}
                            <button
                                type="submit"
                                style={{
                                    background:
                                        "linear-gradient(to right, #3b82f6, #06b6d4)",
                                    color: darkMode ? "white" : "black",
                                }}
                                className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all"
                            >
                                Send Message
                            </button>

                            {/* Submission Result */}
                            <p
                                className={`mt-3 text-center font-medium ${
                                    result.includes("successfully")
                                        ? "text-green-500"
                                        : result.includes("Sending")
                                        ? "text-blue-500"
                                        : "text-red-500"
                                }`}
                            >
                                {result}
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
