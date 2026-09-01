import { Sun, Moon, Menu, X,  } from "lucide-react";

// ========== Images =================================

import logoDark from "../../assets/Logo/Logo-2-Dark.png";
import logoLight from "../../assets/Logo/Logo-2-Light.png";

import nameDark from "../../assets/Logo/Shashi-2-Dark.png";
import nameLight from "../../assets/Logo/Shashi-2-Light.png";

// ========== NAVIGATION ITEMS ======================

const navItems = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Education",
        link: "#education",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

// ========== ROUTE NAVIGATION =======================

const navItemsNew = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Experience",
        link: "/experience",
    },
    {
        name: "Skills",
        link: "/skills",
    },
    {
        name: "Education",
        link: "/education",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

// ================== EXPORTS ========================

export {
    Moon,
    Sun,
    X,
    Menu,
    logoDark,
    logoLight,
    nameDark,
    nameLight,
    navItems,
    navItemsNew,
};