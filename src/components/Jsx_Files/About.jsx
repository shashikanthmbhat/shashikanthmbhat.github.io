import { motion } from "framer-motion";

import {
    aboutImages,
    imageStyle,
    headerAboutMe,
    dataCards,
} from "../Js_Files/Aboutdata";


const About = ({ darkMode }) => {

    return (
        <section
            id="about"
            className="min-h-screen overflow-hidden flex items-start justify-center z-10 px-4 sm:px-6 pt-23"
        >

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">


                {/* ==================================================
                    LEFT SIDE - ABOUT IMAGE
                ================================================== */}

                <div
                    className="w-full flex justify-center lg:justify-start h-[97%]"
                    data-aos="fade-right"
                >

                    {/* 
                        Image container:
                        100% on mobile
                        80% on large screens
                    */}
                    {/* className="relative w-full lg:w-[80%] max-w-sm lg:max-w-md min-h-80.5 lg:min-h-0" */}
                   <div className="relative w-full lg:w-[80%] h-[75vh] max-h-175 min-h-100">
                    {/* Shadow Outline */}
                    <motion.div
                        className="absolute inset-0 z-0 rounded-2xl shadow-lg border-3 border-blue-500"
                        style={{
                            boxShadow: "0 0 20px rgb(34 211 238)",
                        }}/>

                        {/* Image Wrapper */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden border">

                            <img
                                src={aboutImages.Me4}
                                alt="About Me"
                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>


                {/* ==================================================
                    RIGHT SIDE - ABOUT CONTENT
                ================================================== */}

                <article
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="text-center lg:text-left relative flex flex-col justify-between"
                >

                    {/* ============================
                        HEADER
                    ============================ */}

                    <header>

                        <h1 className={darkMode ? "style1-dark" : "style1-light"}>
                            {headerAboutMe.title1}
                            <span className='style2'>
                                {headerAboutMe.title2}
                            </span>
                        </h1>
                    </header>

                    {/* ============================
                        DESCRIPTION
                    ============================ */}

                    <p
                        className={`text-sm sm:text-base border lg:text-lg text-justify mb-6 sm:mb-8 leading-relaxed p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
                        ${ darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >

                        {headerAboutMe.desc1}

                        <br />

                        <span className="text-justify">
                            {headerAboutMe.desc2}
                        </span>

                    </p>


                    {/* ============================
                        DATA CARDS
                    ============================ */}

                    <div className="flex flex-wrap justify-evenly lg:justify-start gap-10 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">

                        {dataCards.map((card, index) => (

                            <div
                                key={card.id}
                                className="text-center"
                                data-aos="zoom-in"
                                data-aos-delay={
                                    600 + index * 50
                                }
                            >

                                {/* Value */}

                                <div
                                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                                        darkMode
                                            ? "text-[#3b82f6]"
                                            : "text-[#0ea5e9]"
                                    }`}
                                >
                                    {card.val}
                                </div>


                                {/* Name */}

                                <div
                                    className={`text-xs sm:text-sm lg:text-base ${
                                        darkMode
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    {card.name}
                                </div>

                            </div>

                        ))}

                    </div>


                    {/* ============================
                        LEARN MORE BUTTON
                    ============================ */}

                    <div>

                        <button
                            className={`w-full sm:w-auto border-2 border-blue-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform
                            ${
                                darkMode
                                    ? "text-white bg-blue-500/10"
                                    : "text-gray-800 bg-white/90"
                            }`}
                            data-aos="fade-up"
                            data-aos-delay="800"
                            onClick={() =>
                                (window.location.hash =
                                    "projects")
                            }
                        >
                            Learn More
                        </button>

                    </div>

                </article>

            </div>

        </section>
    );
};


export default About;