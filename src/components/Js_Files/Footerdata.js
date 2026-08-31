
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ChartBarIcon } from "@heroicons/react/24/solid"; 

import pbDark from "../../assets/Logo/PB-2-Dark.png";
import pbLight from "../../assets/Logo/PB-2-Light.png";

const footerName = {
    name: "Shashikanth Bhat",
    title: "Statistician & PowerBI Analyst",
};

const footerSocialIcons = [
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

const footerInfo = [
    {
        id: 1,
        titleF: "Phone",
        val: "+91 988 622 6207",
    },
    {
        id: 2,
        titleF: "Email",
        val: "shashikanthmbhat@gmail.com",
    },
    {
        id: 3,
        titleF: "LinkedIn",
        val: "Shashikanthm Bhat",
    },
];

export {
    pbDark,
    pbLight,
    footerName,
    footerSocialIcons,
    footerInfo
}