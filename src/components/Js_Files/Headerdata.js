//========= Icons ====================================
import { Moon, Sun, Menu, X, Dot } from "lucide-react";
import { FaBluesky } from "react-icons/fa6";

//==============Images =================================
import logoDark from "../../assets/Logo/Logo-2-Dark.png";
import logoLight from "../../assets/Logo/Logo-2-Light.png";
import nameDark from "../../assets/Logo/Shashi-2-Dark.png";
import nameLight from "../../assets/Logo/Shashi-2-Light.png";

// =========== NAVIGATION ITEMS ===============

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
        link: "#expirience",
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
        link: "/expirience",
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



// ================== EXPORTS =======================

export {
    Moon,
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
}