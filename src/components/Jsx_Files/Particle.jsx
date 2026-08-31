import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = ({ darkMode }) => {
    const containerRef = useRef(null);
    const [pops, setPops] = useState([]);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        const handleClick = (event) => {
            const id = Date.now() + Math.random();

            setPops((prev) => [
                ...prev,
                {
                    id,
                    x: event.clientX,
                    y: event.clientY,
                },
            ]);

            // Remove the pop after animation finishes
            setTimeout(() => {
                setPops((prev) =>
                    prev.filter((pop) => pop.id !== id)
                );
            }, 700);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const options = {
        background: {
            color: {
                value: "transparent",
            },
        },

        fpsLimit: 60,

        particles: {
            color: {
                value: darkMode ? "#3B82F6" : "#0EA5E9",
            },

            move: {
                enable: true,
                speed: 0.5,
                direction: "top",

                outModes: {
                    default: "out",
                },
            },

            number: {
                density: {
                    enable: true,
                    area: 800,
                },

                value: darkMode ? 25 : 15,
            },

            opacity: {
                value: darkMode ? 0.8 : 0.6,

                animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false,
                },
            },

            shape: {
                type: "circle",
            },

            size: {
                value: {
                    min: 2,
                    max: 20,
                },

                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                },
            },

            bounce: {
                horizontal: {
                    value: 1,
                },

                vertical: {
                    value: 1,
                },
            },
        },

        detectRetina: true,
    };

    // Start
        return (
            <>
                {/* Moving particles */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={options}
                    className="fixed inset-0 z-0 pointer-events-none"
                    particlesLoaded={(container) => {
                        containerRef.current = container;
                    }}
                />

                {/* CLICK BUBBLES */}
                <div className="fixed inset-0 z-9999 pointer-events-none overflow-hidden">
                    {pops.map((pop) => (
                        <span
                            key={pop.id}
                            className="particle-pop"
                            style={{
                                left: `${pop.x}px`,
                                top: `${pop.y}px`,
                                borderColor: darkMode
                                    ? "rgba(96,165,250,0.9)"
                                    : "rgba(59,130,246,0.9)",
                            }}
                        />
                    ))}
                </div>
            </>
        );
    // End
};

export default Particle;