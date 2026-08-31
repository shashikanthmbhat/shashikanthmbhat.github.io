import {
    pbDark,
    pbLight,
    footerName,
    footerSocialIcons,
    footerInfo
} from "../Js_Files/Footerdata";

const Footer = ({ darkMode }) => {
    const currentYr = new Date().getFullYear();

    return (
        <footer className="border-t"
            style={{
                background: darkMode ? "#0f182b" : "#d6e8ee",
                borderColor: darkMode ? "#374151" : "#d1d5db",
            }}>
            <div className="container mx-auto px-2 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left side */}
                    <div className="text-left">
                        <h3 className={`text-2xl font-bold mb-2 
                        ${ darkMode ? "text-blue-500" : "text-cyan-500" }`}>
                            {footerName.name}
                        </h3>

                        <p className={`text-sm 
                            ${ darkMode ? "text-gray-400" : "text-gray-800" }`}>
                            {footerName.title}
                        </p>
                    </div>

                    {/* Center side */}
                    <div className="flex gap-4">
                        <div className="mt-0">
                            {/* Heading */}
                            <h4 className="text-lg font-bold mb-2 lg:text-left sm:text-center"
                                style={{ color: darkMode ? "white" : "black" }}>
                                Follow Me:
                            </h4>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                {footerSocialIcons.map((social) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a key={social.id}
                                           href={social.href}
                                           aria-label={social.alt}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className={`p-3 rounded-xl border-2 transition-all ${
                                                darkMode
                                                    ? "text-blue-500 bg-blue-500/20 border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]"
                                                    : "text-cyan-500 bg-cyan-500/20 border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
                                            }`}>
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="text-center flex flex-col items-center md:items-end gap-1">
                        <img
                        src={darkMode ? pbDark : pbLight}
                        alt="Shashi"
                        className="h-15 w-46.5" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;