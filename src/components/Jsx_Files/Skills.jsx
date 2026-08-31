import {
    skillsBI,
    skillsDM,
    skillsPL,
    skillsDB,
    stats,
    headerSkills,
} from "../Js_Files/Skillsdata";

const Skills = ({ darkMode }) => {

    return (
        <section
            id="skills"
            className="py-10 relative overflow-hidden"
        >
            <div className='py-14 relative overflow-hidden'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ===================== Header ===================== */}
                    <div
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                        data-aos="fade-up"
                    >
                        <h2 className={darkMode ? "style1-dark" : "style1-light"}>
                            {headerSkills.title1}
                            <span className='style2'>
                                {" "}
                                {headerSkills.title2}
                            </span>
                        </h2>

                        <p
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                            style={{
                                color: darkMode ? "#d1d5db" : "#6b7280",
                            }}
                        >
                            {headerSkills.description}
                        </p>
                    </div>


                    {/* ========== Business Intelligence new ========== */}
                    <div className={`rounded-2xl border p-5 sm:p-6 mb-4 transition-all duration-300 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                            data-aos="fade-up">
                    {/* Start of Page */}
                        {/* Heading - BI */}
                        <h3 className="text-xl sm:text-2xl font-bold mb-3"
                            style={{color: darkMode ? "white" : "black",}}>
                            Business Intelligence Tools
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            {skillsBI.map((skill) => (
                                <div key={skill.name}
                                     className={`group rounded-xl border p-3 transition-all duration-300 ${
                                     darkMode
                                        ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                        : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}>
                                    <div className="grid grid-cols-[60px_1fr] gap-2 items-center">
                                    {/* Left Column - Icon */}
                                    <div className={`flex justify-center border-2 rounded-xl items-center
                                        ${darkMode ? 'border-blue-500' : 'border-sky-500'}`}>
                                            <img src={darkMode ? skill.icon_Dark : skill.icon_Light}
                                            alt={skill.name}
                                            className="p-2 object-contain transition-transform duration-300 group-hover:scale-110" />
                                    </div>

                                    {/* Right Column - Skill Information */}
                                    <div className="min-w-0">
                                        {/* Skill Name */}
                                        <h4 className="text-base font-semibold mb-1 truncate"
                                        style={{color: darkMode ? "white" : "black"}}>
                                        {skill.name}
                                        </h4>
                                        {/* Proficiency & Percentage */}
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm" style={{color: darkMode ? "white" : "black"}}>
                                                Proficiency
                                            </span>
                                            <span
                                                className="text-sm"
                                                style={{
                                                    background: "linear-gradient(to right, #3b82f6, #06b6f4)",
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                }}>
                                                    {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode ? "bg-gray-700" : "bg-gray-200"
                                            }`}>
                                        <div className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundColor: darkMode ? "#0ea5e9" : "#06b6d4",
                                        }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                         </div>
                    </div>

                    {/* ========== Data Analysis & Modelling new ========== */}
                    <div className={`rounded-2xl border p-5 sm:p-6 mb-4 transition-all duration-300 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                            data-aos="fade-up">
                            {/* Heading - DM */}
                            <h3 className="text-xl sm:text-2xl font-bold mb-3"
                                style={{color: darkMode ? "white" : "black",}}>
                                Data Analysis & Modelling Tools
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {skillsDM.map((skill) => (
                                    <div key={skill.name}
                                        className={`group rounded-xl border p-3 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                        }`}>
                                        <div className="grid grid-cols-[60px_1fr] gap-2 items-center">
                                        {/* Left Column - Icon */}
                                        <div className={`flex justify-center border-2 rounded-xl items-center
                                            ${darkMode ? 'border-blue-500' : 'border-sky-500'}`}>
                                                <img src={darkMode ? skill.icon_Dark : skill.icon_Light}
                                                alt={skill.name}
                                                className="p-2 object-contain transition-transform duration-300 group-hover:scale-110" />
                                        </div>

                                        {/* Right Column - Skill Information */}
                                        <div className="min-w-0">
                                        {/* Skill Name */}
                                        <h4 className="text-base font-semibold mb-1 truncate"
                                            style={{color: darkMode ? "white" : "black"}}>
                                            {skill.name}
                                        </h4>
                                        {/* Proficiency & Percentage */}
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm" style={{color: darkMode ? "white" : "black"}}>
                                                Proficiency
                                            </span>
                                            <span
                                            className="text-sm"
                                            style={{
                                                background:
                                                "linear-gradient(to right, #3b82f6, #06b6f4)",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                color: "transparent",
                                            }}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode ? "bg-gray-700" : "bg-gray-200"
                                            }`}>
                                            <div className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? "#0ea5e9" : "#06b6d4",
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ))}
                                </div>
                    </div>

                    {/* ========== Programming Languages new ========== */}
                    <div className={`rounded-2xl border p-5 sm:p-6 mb-4 transition-all duration-300 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                            data-aos="fade-up">
                    {/* Start of Page */}
                        {/* Heading - PL */}
                        <h3 className="text-xl sm:text-2xl font-bold mb-3"
                            style={{color: darkMode ? "white" : "black",}}>
                            Programming Language Tools
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            {skillsPL.map((skill) => (
                                <div key={skill.name}
                                     className={`group rounded-xl border p-3 transition-all duration-300 ${
                                     darkMode
                                        ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                        : "bg-white border-gray-200 hover:border-sky-500/60"
                                    }`}>
                                    <div className="grid grid-cols-[60px_1fr] gap-2 items-center">
                                    {/* Left Column - Icon */}
                                    <div className={`flex justify-center border-2 rounded-xl items-center
                                        ${darkMode ? 'border-blue-500' : 'border-sky-500'}`}>
                                            <img src={darkMode ? skill.icon_Dark : skill.icon_Light}
                                            alt={skill.name}
                                            className="p-2 object-contain transition-transform duration-300 group-hover:scale-110" />
                                    </div>

                                    {/* Right Column - Skill Information */}
                                    <div className="min-w-0">
                                    {/* Skill Name */}
                                    <h4 className="text-base font-semibold mb-1 truncate"
                                        style={{color: darkMode ? "white" : "black"}}>
                                        {skill.name}
                                    </h4>
                                    {/* Proficiency & Percentage */}
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm" style={{color: darkMode ? "white" : "black"}}>
                                            Proficiency
                                        </span>
                                        <span
                                        className="text-sm"
                                        style={{
                                            background:
                                            "linear-gradient(to right, #3b82f6, #06b6f4)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                        }}>
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                                         darkMode ? "bg-gray-700" : "bg-gray-200"
                                        }`}>
                                        <div className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundColor: darkMode ? "#0ea5e9" : "#06b6d4",
                                        }} />
                                    </div>
                                </div>
                            </div>
                            </div>
                            ))}
                            </div>
                    </div>

                    {/* ========== Database Softwares new ========== */}
                    <div className={`rounded-2xl border p-5 sm:p-6 mb-4 transition-all duration-300 ${
                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}
                            data-aos="fade-up">
                            {/* Heading - DM */}
                            <h3 className="text-xl sm:text-2xl font-bold mb-3"
                                style={{color: darkMode ? "white" : "black",}}>
                                Database Software Tools
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {skillsDB.map((skill) => (
                                    <div key={skill.name}
                                        className={`group rounded-xl border p-3 transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-gray-700 hover:border-blue-500/60"
                                            : "bg-white border-gray-200 hover:border-sky-500/60"
                                        }`}>
                                        <div className="grid grid-cols-[60px_1fr] gap-2 items-center">
                                        {/* Left Column - Icon */}
                                        <div className={`flex justify-center border-2 rounded-xl items-center
                                            ${darkMode ? 'border-blue-500' : 'border-sky-500'}`}>
                                                <img src={darkMode ? skill.icon_Dark : skill.icon_Light}
                                                alt={skill.name}
                                                className="p-2 object-contain transition-transform duration-300 group-hover:scale-110" />
                                        </div>

                                        {/* Right Column - Skill Information */}
                                        <div className="min-w-0">
                                        {/* Skill Name */}
                                        <h4 className="text-base font-semibold mb-1 truncate"
                                            style={{color: darkMode ? "white" : "black"}}>
                                            {skill.name}
                                        </h4>
                                        {/* Proficiency & Percentage */}
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm" style={{color: darkMode ? "white" : "black"}}>
                                                Proficiency
                                            </span>
                                            <span
                                            className="text-sm"
                                            style={{
                                                background:
                                                "linear-gradient(to right, #3b82f6, #06b6f4)",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                color: "transparent",
                                            }}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className={`w-full h-2 rounded-full overflow-hidden ${
                                            darkMode ? "bg-gray-700" : "bg-gray-200"
                                            }`}>
                                            <div className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: darkMode ? "#0ea5e9" : "#06b6d4",
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ))}
                                </div>
                    </div>

                    {/* =====================================================
                        Statistical Skills
                    ===================================================== */}
                    <div
                        className={`rounded-2xl border p-4  sm:p-6 mb-8 transition-all duration-300 ${
                            darkMode
                                ? "bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                                : "bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]"
                        }`}
                        data-aos="fade-up"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold mb-6"
                            style={{
                                color: darkMode ? "white" : "black",
                            }}
                        >
                            Statistical Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className={`px-2 py-2 items-center rounded-lg border transition-all duration-300 ${
                                        darkMode
                                            ? "bg-[#0f182b] border-blue-500/30 text-gray-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10"
                                            : "bg-white border-sky-500/30 text-gray-700 hover:border-sky-500 hover:text-black hover:bg-sky-500/10"
                                    }`}
                                >
                                    {stat.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;