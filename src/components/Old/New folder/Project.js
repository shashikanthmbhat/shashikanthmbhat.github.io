import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FaGithub,
    FaExternalLinkAlt,
    FaChevronLeft,
    FaChevronRight,
    FaTimes
} from 'react-icons/fa'

import { projects, headerPj } from './ProjectData'








// ============================================================
// Project Slideshow Component
// ============================================================
const ProjectSlideshow = ({ images, title, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Automatic slideshow
    useEffect(() => {
        if (images.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            )
        }, 4000)

        return () => clearInterval(timer)
    }, [images.length])


    // Previous slide
    const handlePrev = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }


    // Next slide
    const handleNext = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }


    // Open popup
    const handleImageClick = () => {
        onImageClick(currentIndex)
    }


    return (
        <div className='relative h-52 w-[96%] mx-auto mt-2 rounded-sm overflow-hidden bg-gray-900 group/slider'>

            {/* Slideshow */}
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} slide ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                        duration: 0.35,
                        ease: 'easeInOut'
                    }}
                    onClick={handleImageClick}
                    className='w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700'
                />
            </AnimatePresence>


            {/* Click to view indicator */}
            <div className='absolute top-3 right-3 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300'>
                <div className='bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm'>
                    Click to view
                </div>
            </div>


            {/* Previous Arrow */}
            {images.length > 1 && (
                <button
                    onClick={handlePrev}
                    className='absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-blue-500 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10'
                    aria-label='Previous slide'
                    type='button'
                >
                    <FaChevronLeft className='text-sm' />
                </button>
            )}


            {/* Next Arrow */}
            {images.length > 1 && (
                <button
                    onClick={handleNext}
                    className='absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-blue-500 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10'
                    aria-label='Next slide'
                    type='button'
                >
                    <FaChevronRight className='text-sm' />
                </button>
            )}


            {/* Navigation Dots */}
            {images.length > 1 && (
                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10'>

                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setCurrentIndex(idx)
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                currentIndex === idx
                                    ? 'bg-blue-500 w-4'
                                    : 'bg-gray-700 w-1.5'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                            type='button'
                        />
                    ))}

                </div>
            )}

        </div>
    )
}
// =================================== End Of Project Slide Show Component==================================


// ============================================================
// Popup / Lightbox Slideshow Component
// ============================================================
const ProjectPopup = ({project, currentIndex, setCurrentIndex, onClose }) => {
// Automatic popup slideshow
useEffect(() => {
    if (!project || project.images.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
            )
        }, 4000)

        return () => clearInterval(timer)
    }, [project, setCurrentIndex])


    // Keyboard controls
    useEffect(() => {
        if (!project) return

        const handleKeyDown = (e) => {

            if (e.key === 'Escape') {
                onClose()
            }

            if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) =>
                    prev === 0
                        ? project.images.length - 1
                        : prev - 1
                )
            }

            if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) =>
                    prev === project.images.length - 1
                        ? 0
                        : prev + 1
                )
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        // Prevent background scrolling
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [project, onClose, setCurrentIndex])


    if (!project) return null


    // Previous image
    const handlePrev = (e) => {
        e.stopPropagation()

        setCurrentIndex((prev) =>
            prev === 0
                ? project.images.length - 1
                : prev - 1
        )
    }


    // Next image
    const handleNext = (e) => {
        e.stopPropagation()

        setCurrentIndex((prev) =>
            prev === project.images.length - 1
                ? 0
                : prev + 1
        )
    }


    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className='fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4'
                onClick={onClose}
            >

                {/* Popup Container */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    }}
                    transition={{ duration: 0.3 }}
                    className='relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center'
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Header */}
                    <div className='w-full flex items-center justify-between mb-4 px-2'>

                        <div>

                            <h3 className='text-white text-lg sm:text-xl font-bold'>
                                {project.title}
                            </h3>

                            <p className='text-gray-400 text-sm mt-1'>
                                Image {currentIndex + 1} of {project.images.length}
                            </p>

                        </div>


                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            type='button'
                            aria-label='Close popup'
                            className='p-3 rounded-full text-blue-500 hover:bg-red-500 hover:text-white transition-all duration-300'
                        >
                            <FaTimes className='text-lg' />
                        </button>

                    </div>


                    {/* Main Image Area */}
                    <div className='relative w-full flex items-center justify-center'>

                        {/* Previous Button */}
                        {project.images.length > 1 && (
                            <button
                                onClick={handlePrev}
                                type='button'
                                aria-label='Previous image'
                                className='absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg'
                            >
                                <FaChevronLeft className='text-lg sm:text-xl' />
                            </button>
                        )}


                        {/* Image */}
                        <AnimatePresence mode='wait'>

                            <motion.img
                                key={currentIndex}
                                src={project.images[currentIndex]}
                                alt={`${project.title} image ${currentIndex + 1}`}
                                initial={{
                                    opacity: 0,
                                    scale: 0.95
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.95
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                className='max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl select-none'
                            />

                        </AnimatePresence>


                        {/* Next Button */}
                        {project.images.length > 1 && (
                            <button
                                onClick={handleNext}
                                type='button'
                                aria-label='Next image'
                                className='absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg'
                            >
                                <FaChevronRight className='text-lg sm:text-xl' />
                            </button>
                        )}

                    </div>


                    {/* Popup Navigation Dots */}
                    {project.images.length > 1 && (
                        <div className='flex items-center justify-center gap-2 mt-5'>

                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    type='button'
                                    onClick={() => setCurrentIndex(idx)}
                                    aria-label={`View image ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === idx
                                            ? 'bg-blue-500 w-8'
                                            : 'bg-white/40 w-2 hover:bg-white/70'
                                    }`}
                                />
                            ))}

                        </div>
                    )}


                    {/* Instructions */}
                    <div className='mt-4 text-gray-400 text-xs text-center'>
                        Use the arrows or keyboard ← → to navigate • Press Esc to close
                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>
    )
}


// ============================================================
// Main Project Section
// ============================================================
const Project = ({ darkMode }) => {

    // Popup state
    const [selectedProject, setSelectedProject] = useState(null)
    const [popupImageIndex, setPopupImageIndex] = useState(0)

    // Show all projects state
    const [showAll, setShowAll] = useState(false)



    // ============================= Open Popup ======================
    const openPopup = (project, imageIndex) => {
        setSelectedProject(project)
        setPopupImageIndex(imageIndex)
    }

    // ==================== Close Popup =============================
    const closePopup = () => {
        setSelectedProject(null)
        setPopupImageIndex(0)
    }


    // ========================================================
    // Filter Projects
    //
    // showAll = false
    //     → only toshow: 'yes'
    //
    // showAll = true
    //     → show every project
    // ========================================================
    const visibleProjects = projects.filter(
        (project) =>
            showAll || project.toshow === 'yes'
    )


    return (
        <>

            {/* ======================== PROJECT SECTION ====================== */}

            <section id='projects' className='relative py-24'>

                <div className='container mx-auto px-4'>

                    {/* ==================================================
                        Section Header
                       ================================================== */}

                    <div
                        className='text-center mb-10'
                        data-aos='fade-up'
                    >

                        <h2
                            className='text-3xl sm:text-4xl font-bold mb-3'
                            style={{
                                color: darkMode
                                    ? 'white'
                                    : '#1f2937'
                            }}
                        >

                            {headerPj.title1}

                            <span
                                style={{
                                    background:
                                        'linear-gradient(to right, #3b82f6, #06b6d4)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                {headerPj.title2}
                            </span>

                        </h2>


                        <p
                            className='max-w-xl mx-auto'
                            style={{
                                color: darkMode
                                    ? '#d1d5db'
                                    : '#6b7280'
                            }}
                        >
                            {headerPj.description}
                        </p>

                    </div>


                    {/* ==================================================
                        Project Grid
                       ================================================== */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>

                        {visibleProjects.map((project, index) => (

                            <div
                                key={project.id}
                                // style={{
                                //     background: darkMode
                                //         ? 'linear-gradient(to right, #1f2937, #111827)'
                                //         : 'linear-gradient(to right, #06b6d4, #ffffff)',
                                //     borderColor: darkMode
                                //         ? '#374151'
                                //         : '#e5e7eb'
                                // }}
                                className={`group rounded-xl border duration-300 transition-all
                                    ${darkMode 
                                         ? 'bg-[#111a3e] border-transparent hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]' 
                                         : 'bg-[#c0e6fd] border-transparent hover:border-sky-800/50 hover:shadow-[0_0_20px_-5px_rgba(82,82,91,0.8)]'
                                    }`}
                                data-aos='fade-up'
                                data-aos-delay={index * 100}
                            >

                                {/* ==================================================
                                    Slideshow
                                    2px padding creates inner spacing around image
                                   ================================================== */}

                                <div className='p-0.5'>

                                    <ProjectSlideshow
                                        images={project.images}
                                        title={project.title}
                                        onImageClick={(imageIndex) =>
                                            openPopup(
                                                project,
                                                imageIndex
                                            )
                                        }
                                    />

                                </div>


                                {/* ==================================================
                                    Project Details
                                   ================================================== */}

                                <div className='p-4'>

                                    <h3
                                        className='text-lg font-bold mb-2'
                                        style={{
                                            color: darkMode
                                                ? 'white'
                                                : '#1f2937'
                                        }}
                                    >
                                        {project.title}
                                    </h3>


                                    <p
                                        className='text-sm mb-3'
                                        style={{
                                            color: darkMode
                                                ? '#9ca3af'
                                                : '#1f2937'
                                        }}
                                    >
                                        {project.desc}
                                    </p>


                                    {/* ==================================================
                                        Project Tags
                                       ================================================== */}

                                    <div className='flex flex-wrap gap-1.5 mb-4'>

                                        {project.tags.map((tag, idx) => (

                                            <span
                                                key={idx}
                                                // style={{
                                                //     backgroundColor:
                                                //         darkMode
                                                //             ? '#374151'
                                                //             : '#f3f4f6',

                                                //     color: darkMode
                                                //         ? '#d1d5db'
                                                //         : '#4b5563'
                                                // }}
                                                className={`px-2 py-1 text-xs rounded-full
                                                    ${darkMode 
                                                        ? 'bg-blue-500 text-white' 
                                                        : 'bg-sky-300 text-black'}`}
                                            >
                                                {tag}
                                            </span>

                                        ))}

                                    </div>


                                    {/* ==================================================
                                        Call to Action Links
                                       ================================================== */}

                                    <div className='flex gap-2'>

                                        {/* Github */}
                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                background:
                                                    'linear-gradient(to right, #3b82f6, #06b6d4)'
                                            }}
                                            className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all'
                                            data-aos='zoom-in'
                                            data-aos-delay='400'
                                        >

                                            <FaGithub className='text-sm' />

                                            Github Link

                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* ==================================================
                        View All / Show Featured Button
                       ================================================== */}

                    <div className='text-center'>

                        <button
                            type='button'
                            onClick={() =>
                                setShowAll((prev) => !prev)
                            }
                            style={{
                                background:
                                    'linear-gradient(to right, #3b82f6, #06b6d4)'
                            }}
                            className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all'
                            data-aos='zoom-in'
                            data-aos-delay='400'
                        >

                            {showAll
                                ? 'Show Featured Projects'
                                : 'View All Projects'}

                        </button>

                    </div>

                </div>

            </section>


            {/* ==================================================
                PROJECT IMAGE POPUP
               ================================================== */}

            <ProjectPopup
                project={selectedProject}
                currentIndex={popupImageIndex}
                setCurrentIndex={setPopupImageIndex}
                onClose={closePopup}
            />

        </>
    )
}


export default Project
