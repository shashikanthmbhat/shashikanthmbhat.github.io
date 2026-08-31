import {
    Calendar,
    CheckCircle,
    GraduationCap,
    Award,
    ShieldCheck,
    headerEdu,
    educationData,
    certifications,
} from "../Js_Files/Educationdata";


const Education = ({ darkMode }) => {

    return (
        <section
            id="education"
            className="py-1 relative overflow-hidden"
        >
            <div className="py-10 relative overflow-hidden">

                <div className="container px-5 py-10 mx-auto">

                    {/* =====================================================
                        Header
                    ===================================================== */}

                    <div
                        className="text-center mb-5"
                        data-aos="fade-up"
                    >

                        {/* Heading : Education */}
                        <h1 className={darkMode ? "style1-dark" : "style1-light"}>
                            {headerEdu.title1}
                            <span className='style2'>
                                {headerEdu.title2}
                            </span>
                        </h1>
                        {/* Description - Education */}
                        <p className={darkMode ? "style-Disc-dark" : "style-Disc-light"}>
                            {headerEdu.description}
                        </p>
                    </div>


                    {/* =====================================================
                        Education + Certification
                    ===================================================== */}

                    <div className="flex flex-col lg:flex-row lg:items-start items-center gap-7">


                        {/* =================================================
                            Education
                        ================================================= */}

                        <div
                            className="w-full lg:w-1/2 space-y-6"
                            data-aos="fade-left"
                        >

                            {/* Education Heading */}
                            <div
                                className="sm:text-2xl text-xl text-left mt-4 mb-4"
                                data-aos="fade-up"
                            >
                                <h1
                                    className="font-bold title-font mb-2"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "black",
                                    }}
                                >
                                    Education Details
                                </h1>
                            </div>


                            {/* Education Details */}
                            {educationData.map((edu) => (

                                <div
                                    key={edu.id}
                                    className={`group relative p-6 border rounded-2xl ${
                                        darkMode ? 'style-bg-dark' : 'style-bg-light' }`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                        {/* Graduation Cap + Degree + College */}
                                        <div className="flex items-center gap-3">
                                            {/* Graduation Cap */}
                                            <div
                                                className={`p-2 rounded-lg border-transparent transition-colors group-hover:rotate-12
                                                ${
                                                    darkMode
                                                        ? "bg-blue-500"
                                                        : "bg-sky-300"
                                                }`}
                                            >
                                                <GraduationCap
                                                    size={24}
                                                    color={
                                                        darkMode
                                                            ? "white"
                                                            : "black"
                                                    }
                                                />
                                            </div>


                                            {/* Degree Name & College */}
                                            <div>

                                                <h3
                                                    className={`text-lg font-bold transition-colors
                                                    ${
                                                        darkMode
                                                            ? "text-white hover:text-blue-500"
                                                            : "text-black hover:text-sky-500"
                                                    }`}
                                                >
                                                    {edu.degree}
                                                </h3>

                                                <p
                                                    className="text-sm"
                                                    style={{
                                                        color: darkMode
                                                            ? "#9ca3af"
                                                            : "#1f2937",
                                                    }}
                                                >
                                                    {edu.collage}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Duration */}
                                        <div
                                            className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full w-fit
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

                                            {edu.duration}

                                        </div>

                                    </div>


                                    {/* Education Details */}
                                    {/* 
                                    <p
                                        className="text-gray-400 text-sm leading-relaxed mb-4"
                                        style={{
                                            color: darkMode
                                                ? "#9ca3af"
                                                : "#1f2937",
                                        }}
                                    >
                                        {edu.details}
                                    </p>
                                    */}


                                    {/* Academic Excellence */}
                                    <div
                                        className="flex items-center gap-2 text-[10px] uppercase-wider font-bold"
                                        style={{
                                            color: darkMode
                                                ? "#3b82f6"
                                                : "#0ea5e9",
                                        }}
                                    >

                                        <CheckCircle
                                            size={12}
                                            color={
                                                darkMode
                                                    ? "#3b82f6"
                                                    : "#0ea5e9"
                                            }
                                        />

                                        Academic Excellence

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* =================================================
                            Certifications
                        ================================================= */}

                        <div
                            className="w-full lg:w-1/2 space-y-6"
                            data-aos="fade-left"
                        >

                            {/* Certification Heading */}
                            <div
                                className="sm:text-2xl text-xl text-left mt-4 mb-4"
                                data-aos="fade-up"
                            >

                                <h1
                                    className="font-bold title-font mb-2"
                                    style={{
                                        color: darkMode
                                            ? "white"
                                            : "black",
                                    }}
                                >
                                    Cirtification Details
                                </h1>

                            </div>


                            {/* Certification Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                                {certifications.map((cert) => (

                                    <div
                                        key={cert.id}
                                        className={`group relative p-6 border rounded-2xl ${
                                            darkMode ? 'style-bg-dark' : 'style-bg-light' }`}>

                                        {/* Award Icon */}
                                        <div
                                            className={`absolute -top-4 -right-4 p-3 rounded-xl shadow-lg transform group-hover:rotate-12
                                            ${
                                                darkMode
                                                    ? "bg-blue-500"
                                                    : "bg-sky-300"
                                            }`}
                                        >

                                            <Award
                                                size={24}
                                                style={{
                                                    color: darkMode
                                                        ? "white"
                                                        : "black",
                                                }}
                                            />

                                        </div>


                                        {/* Issuer + Date */}
                                        <div
                                            className="flex items-center gap-4 mb-4 text-xs"
                                            style={{
                                                color: darkMode
                                                    ? "#9ca3af"
                                                    : "#1f2937",
                                            }}
                                        >

                                            {/* Issuer */}
                                            <span className="flex items-center gap-1">

                                                <ShieldCheck
                                                    size={14}
                                                    style={{
                                                        color: darkMode
                                                            ? "#2196f3"
                                                            : "#0EA5E9",
                                                    }}
                                                />

                                                {cert.issuer}

                                            </span>


                                            {/* Date */}
                                            <span
                                                className="flex items-center gap-1"
                                                style={{
                                                    color: darkMode
                                                        ? "#9ca3af"
                                                        : "#1f2937",
                                                }}
                                            >

                                                <Calendar
                                                    size={14}
                                                    style={{
                                                        color: darkMode
                                                            ? "#2196f3"
                                                            : "#0EA5E9",
                                                    }}
                                                />

                                                {cert.date}

                                            </span>

                                        </div>


                                        {/* Certification Title */}
                                        <h3
                                            className={`text-xl font-bold mb-3 transition-colors
                                            ${
                                                darkMode
                                                    ? "text-white hover:text-blue-500"
                                                    : "text-black hover:text-sky-500"
                                            }`}
                                        >
                                            {cert.title}
                                        </h3>


                                        {/* Certification Description */}
                                        <p
                                            className={`text-sm mb-6
                                            ${
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {cert.desc}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};


export default Education;