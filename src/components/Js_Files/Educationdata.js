// ===== Import Icons
import {
    Calendar,
    CheckCircle,
    GraduationCap,
    Award,
    ShieldCheck,
} from "lucide-react";

const headerEdu = {
    title1: "My ",
    title2: "Education",
    description:
        "I deliver impactful digital solutions by combining technical expertise with creative problem-solving. My professional journey features a proven track record of successful, high-quality projects.",
};


// =====================================================
// Education Data
// =====================================================

const educationData = [
    {
        id: 1,
        degree: "Masters Of Science (M.Sc) (Statistics)",
        duration: "2013 - 2015",
        collage: "Mangalore University",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id: 2,
        degree: "Batulers Of Science (B.Sc)",
        duration: "2010 - 2013",
        collage: "Mangalore University",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];


// =====================================================
// Certifications Data
// =====================================================

const certifications = [
    {
        id: 1,
        title: "Microsoft Power BI 2026-Complete Course-Beginner to Advanced",
        issuer: "Course Era/Ajay P",
        date: "Apr-2026",
        link: "#",
        desc:
            "Master Microsoft Power BI Desktop and Power BI Services, Visualization with Microsoft PL-300 Certification Preparation",
    },

    {
        id: 2,
        title: "Python for Data Science, AI & Development",
        issuer: "Courseera/IBM",
        date: "Jun-2025",
        link: "#",
        desc:
            "Master foundational Python syntax, logic, and OOP to extract web data via APIs and scraping, utilizing Pandas, Numpy, and Jupyter.",
    },
];

export {
    Calendar,
    CheckCircle,
    GraduationCap,
    Award,
    ShieldCheck,
    headerEdu,
    educationData,
    certifications,
};