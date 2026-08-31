import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Import -- Pages
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });

        document.documentElement.classList.add("dark");
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [darkMode]);

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
        // Start
        <div className="relative min-h-screen">
    <Particle darkMode={darkMode} />

    <div
        className={
                    darkMode
                        ? "relative z-10 bg-[#0f182b]/50 min-h-screen"
                        : "relative z-10 bg-[#d6e8ee]/50 min-h-screen"
                }
            >
                <Header
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />

                <Hero darkMode={darkMode} />
                <About darkMode={darkMode} />
                <Expirience darkMode={darkMode} />
                <Skills darkMode={darkMode} />
                <Education darkMode={darkMode} />
                <Project darkMode={darkMode} />
                <Contact darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </div>
        </div>
        
        // End
    
    );
};

export default App;