import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Moon,
    Sun,
    Menu,
    X,
    Dot,
    FaBluesky,
    logoDark,
    logoLight,
    nameDark,
    nameLight,
    navItems,
    navItemsNew 
              } from "../Js_Files/Headerdata";

const Header = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const colors = darkMode
        ? {
              navBg: "bg-gray-900/90",
              textSecondary: "text-gray-300",
              textActive: "text-blue-400",
              indicator: "from-blue-500 to-cyan-500",
              button: "from-blue-500 to-cyan-500",
          }
        : {
              navBg: "bg-white/90",
              textSecondary: "text-gray-800",
              textActive: "text-blue-600",
              indicator: "from-blue-500 to-cyan-500",
              button: "from-blue-500 to-cyan-500",
          };

    const handleNavClick = (item) => {
        setActiveSection(item.name.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] px-4 py-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`w-full max-w-7xl mx-auto px-5 py-3 rounded-2xl backdrop-blur-md ${colors.navBg}`}
            >
                {/* ================= HEADER ROW ================= */}

                <div className="flex items-center justify-between">
                    {/* ================= LOGO ================= */}

                    <a
                        href="#home"
                        onClick={() => {
                            setActiveSection("home");
                            setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-2 shrink-0"
                    >
                        <img
                            src={darkMode ? logoDark : logoLight}
                            alt="Logo"
                            className="w-10 h-10" />

                        <span className="text-2xl font-bold text-blue-500 flex items-center">
                            <img
                            src={darkMode ? nameDark : nameLight}
                            alt="Name"
                            className="w-32.4 h-10" />
                            
                        </span>
                    </a>

                    {/* ================= RIGHT SIDE ================= */}

                    <div className="flex items-center gap-3">
                        {/* ================= DESKTOP NAV ================= */}

                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() =>
                                        handleNavClick(item)
                                    }
                                    className="relative py-1"
                                >
                                    <span
                                        className={`font-medium transition-colors ${
                                            activeSection ===
                                            item.name.toLowerCase()
                                                ? colors.textActive
                                                : colors.textSecondary
                                        } hover:text-blue-500`}
                                    >
                                        {item.name}
                                    </span>

                                    {activeSection ===
                                        item.name.toLowerCase() && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.indicator} rounded-full`}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* ================= DARK MODE ================= */}

                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${
                                darkMode
                                    ? "bg-gray-800"
                                    : "bg-gray-100"
                            }`}
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-blue-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-blue-500" />
                            )}
                        </button>

                        {/* ================= HIRE ME ================= */}

                        <a
                            href="#contact"
                            onClick={() => {
                                setActiveSection("contact");
                                setIsMenuOpen(false);
                            }}
                            className={`hidden lg:block px-6 py-2 font-semibold rounded-xl bg-gradient-to-r ${colors.button} text-white`}
                        >
                            Hire Me
                        </a>

                        {/* ================= MOBILE BUTTON ================= */}

                        <button
                            type="button"
                            onClick={() =>
                                setIsMenuOpen((prev) => !prev)
                            }
                            className="lg:hidden p-2 rounded-lg touch-manipulation"
                            aria-label={
                                isMenuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <X
                                    className={`w-6 h-6 ${
                                        darkMode
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                />
                            ) : (
                                <Menu
                                    className={`w-6 h-6 ${
                                        darkMode
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            className="lg:hidden"
                        >
                            <div
                                className={`mt-4 pt-3 border-t ${
                                    darkMode
                                        ? "border-gray-700"
                                        : "border-gray-200"
                                }`}
                            >
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        onClick={() =>
                                            handleNavClick(item)
                                        }
                                        className={`block w-full px-4 py-3 mb-1 rounded-lg ${
                                            activeSection ===
                                            item.name.toLowerCase()
                                                ? "bg-blue-500/10 text-blue-500"
                                                : colors.textSecondary
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

export default Header;