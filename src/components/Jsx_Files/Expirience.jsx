import {
    experienceIcons,
    headerWe,
    Expiriences,
} from "../Js_Files/Expiriencedata";


const Expirience = ({ darkMode }) => {

    const {
        BriefcaseIcon,
        Building,
        Calendar,
    } = experienceIcons;


    return (

        <section
            id="expirience"
            className="py-1 relative overflow-hidden">
            <div className="py-10 relative overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {/* =============== HEADER ============= */}
                    <div className="text-center mb-10"
                        data-aos="fade-up">
                        {/* Heading */}
                        <h1 className={darkMode ? "style1-dark" : "style1-light"}>
                            {headerWe.title1}
                            <span className='style2'>
                                {headerWe.title2}
                            </span>
                        </h1>
                        {/* Description */}
                        <p className={darkMode ? "style-Disc-dark" : "style-Disc-light"}>
                            {headerWe.description}
                        </p>
                    </div>


                    {/* ==================================================
                        WORK EXPERIENCE
                    ================================================== */}

                    <div
                        className="w-full space-y-8"
                        data-aos="fade-left"
                    >

                        {Expiriences.map((exp) => (

                            <div
                                key={exp.id}
                                className={`group relative p-6 border rounded-2xl ${
                                    darkMode ? 'style-bg-dark' : 'style-bg-light' }`}>

                                {/* ==================================================
                                    TOP SECTION
                                ================================================== */}

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">


                                    {/* Role + Company */}

                                    <div className="flex items-center gap-3">


                                        {/* Briefcase Icon */}

                                        <div
                                            className={`p-2 rounded-lg border-transparent transition-colors group-hover:rotate-12
                                            ${
                                                darkMode
                                                    ? "bg-blue-500"
                                                    : "bg-sky-300"
                                            }`}
                                        >

                                            <BriefcaseIcon
                                                size={36}
                                                color={
                                                    darkMode
                                                        ? "white"
                                                        : "black"
                                                }
                                            />

                                        </div>


                                        {/* Role + Company */}

                                        <div>

                                            {/* Role */}

                                            <h3
                                                className={`text-xl font-bold transition-colors
                                                ${
                                                    darkMode
                                                        ? "text-white hover:text-blue-500"
                                                        : "text-black hover:text-sky-500"
                                                }`}
                                            >
                                                {exp.role}
                                            </h3>


                                            {/* Company */}

                                            <div
                                                className="flex flex-col sm:flex-row sm:items-center italic justify-between gap-2 sm:gap-4 mt-2 text-sm"
                                                style={{
                                                    color: darkMode
                                                        ? "#9ca3af"
                                                        : "#1f2937",
                                                }}
                                            >

                                                <span className="flex items-center gap-1.5">

                                                    <Building
                                                        size={14}
                                                        style={{
                                                            color: darkMode
                                                                ? "#9ca3af"
                                                                : "#1f2937",
                                                        }}
                                                    />

                                                    {exp.compeny}

                                                </span>

                                            </div>

                                        </div>

                                    </div>


                                    {/* ==================================================
                                        DATE
                                    ================================================== */}

                                    <div
                                        className={`flex items-center gap-2 text-sm font-medium italic px-3 py-1 rounded-full w-fit
                                        ${
                                            darkMode
                                                ? "bg-blue-500 text-white"
                                                : "bg-sky-300 text-black"
                                        }`}
                                    >

                                        <Calendar
                                            size={12}
                                            color={
                                                darkMode
                                                    ? "white"
                                                    : "black"
                                            }
                                        />

                                        {exp.date}

                                    </div>

                                </div>


                                {/* ==================================================
                                    DESCRIPTION HEADING
                                ================================================== */}

                                <p
                                    className="lg:text-xl sm:text-base leading-relaxed mb-4"
                                    style={{
                                        color: darkMode
                                            ? "#9ca3af"
                                            : "#1f2937",
                                    }}
                                >
                                    Description :
                                </p>


                                {/* ==================================================
                                    DESCRIPTION BULLETS
                                ================================================== */}

                                <ul
                                    className="lg:text-base sm:text-sm leading-relaxed mb-4 list-disc pl-5"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "black",
                                    }}
                                >

                                    {exp.disc.map(
                                        (bullet, index) => (

                                            <li key={index}>
                                                {bullet}
                                            </li>

                                        )
                                    )}

                                </ul>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );
};


export default Expirience;