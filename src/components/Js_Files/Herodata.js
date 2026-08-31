// Aaimg.js
import { Download, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'
import { ChartBarIcon } from "@heroicons/react/24/solid";

import hero1 from "../../assets/Hero/hero1.png";
import cv from "../../assets/Hero/cv.pdf";

// ============================
// IMAGES / ASSETS
// ============================

export const assets = {
    hero1,
    cv,
    DownloadIcon: Download,
    Mail: Mail,
};


// ============================
// SOCIAL ICONS
// ============================

export const socialIcons = [
    {
        id: 1,
        icon: FaGithub,
        alt: "Github",
        href: "https://github.com/shashikanthmbhat",
    },
    {
        id: 2,
        icon: FaLinkedinIn,
        alt: "LinkedIn",
        href: "https://linkedin.com/in/Shashikanth_Bhat",
    },
    {
        id: 3,
        icon: FaYoutube,
        alt: "Youtube",
        href: "https://www.youtube.com/@shashikanthbhat1684",
    },
    {
        id: 4,
        icon: FaInstagram,
        alt: "Instagram",
        href: "https://www.instagram.com/the_dead_weight_dumber?igsh=aWwzdGJjeGk4Ym13",
    },
    {
        id: 5,
        icon: ChartBarIcon,
        alt: "PowerBI",
        href: "https://app.powerbi.com/home?experience=power-bi",
    },
];


// ============================
// THEMES
// ============================

export const themes = {
    light: {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        buttonSecondary: "bg-white text-gray-900 border border-blue-500",
    },

    dark: {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        buttonSecondary: "bg-transparent text-white border border-white",
    },
};


// ============================
// HERO CONSTANTS
// ============================

export const titles = [
    "PowerBI Analyst",
    "Statistician",
    "Experienced Data Analyst",
    "Data-Driven Decision Maker",
    "Research & Analytics Expert",
];

export const headerHero = {
    title1: "I Am ",
    title2: "Shashikanth Bhat",
    desc:
        "Power BI Analyst with 3+ years of experience and a Statistician with 10+ years of expertise, transforming complex data into actionable insights across healthcare, finance, and research. Skilled in building interactive dashboards, data modeling, and advanced analytics, with strong proficiency in Power BI, SQL, R, Python, and SAS to drive data-driven decisions and measurable business impact.",
};