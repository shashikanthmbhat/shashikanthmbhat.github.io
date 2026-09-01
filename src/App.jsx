import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import -- Pages
import Particle from "./components/Jsx_Files/Particle";
import Header from "./components/Jsx_Files/Header";
import Hero from "./components/Jsx_Files/Hero";
import About from "./components/Jsx_Files/About";
import Skills from "./components/Jsx_Files/Skills";
import Project from "./components/Jsx_Files/Project";
import Contact from "./components/Jsx_Files/Contact";
import Footer from "./components/Jsx_Files/Footer";
import Expirience from "./components/Jsx_Files/Expirience";
import Education from "./components/Jsx_Files/Education";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        document.documentElement.classList.add("dark");
    }, []);

    // Refresh AOS when dark/light mode changes
    useEffect(() => {
        AOS.refresh();
    }, [darkMode]);

    // Toggle dark/light mode
    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;

            document.documentElement.classList.toggle(
                "dark",
                newMode
            );

            return newMode;
        });
    };

    return (
        <div className="relative min-h-screen">
            {/* Particle Background */}
            <Particle darkMode={darkMode} />

            {/* Main Content */}
            <div
                className={
                    darkMode
                        ? "relative z-10 bg-[#0f182b]/50 min-h-screen"
                        : "relative z-10 bg-[#d6e8ee]/50 min-h-screen"
                }
            >
                {/* Header */}
                <Header
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />

                {/* Home */}
                <section
                    id="home"
                    className="scroll-mt-28"
                >
                    <Hero darkMode={darkMode} />
                </section>

                {/* About */}
                <section
                    id="about"
                    className="scroll-mt-28"
                >
                    <About darkMode={darkMode} />
                </section>

                {/* Experience */}
                <section
                    id="experience"
                    className="scroll-mt-28"
                >
                    <Expirience darkMode={darkMode} />
                </section>

                {/* Skills */}
                <section
                    id="skills"
                    className="scroll-mt-28"
                >
                    <Skills darkMode={darkMode} />
                </section>

                {/* Education */}
                <section
                    id="education"
                    className="scroll-mt-28"
                >
                    <Education darkMode={darkMode} />
                </section>

                {/* Projects */}
                <section
                    id="projects"
                    className="scroll-mt-28"
                >
                    <Project darkMode={darkMode} />
                </section>

                {/* Contact */}
                <section
                    id="contact"
                    className="scroll-mt-28"
                >
                    <Contact darkMode={darkMode} />
                </section>

                {/* Footer */}
                <Footer darkMode={darkMode} />
            </div>
        </div>
    );
};

export default App;
