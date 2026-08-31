import React from 'react'
import { BriefcaseIcon, Building, Calendar, CheckCircle, GraduationCap, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { div, title } from 'framer-motion/client'




const Sksss = ( {darkMode}) => {

  const headerEdu= {
    title1: 'My',
    title2: 'Education',
    description: 'I deliver impactful digital solutions by combining technical expertise with creative problem-solving. My professional journey features a proven track record of successful, high-quality projects.'
    };

    const educationData = [
    {
      id: 1,
      degree: 'Masters Of Science (M.Sc) (Statistics)',
      duration: '2013 - 2015',
      collage: 'Mangalore University',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      id: 2,
      degree: 'Batulers Of Science (B.Sc)',
      duration: '2010 - 2013',
      collage: 'Mangalore University',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

  const certifications = [
          {id: 1,
          title: 'Lorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis',
          issuer: 'Course Era',
          date: 'Dec-2023',
          link: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fermentum erat. Fusce dignissim nibh vel nunc pulvinar, vitae mollis leo gravida. Donec placerat eu'
          },
  
          {id: 2,
          title: 'Lorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis',
          issuer: 'Amazon Web Service',
          date: 'Jun-2024',
          link: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fermentum erat. Fusce dignissim nibh vel nunc pulvinar, vitae mollis leo gravida. Donec placerat eu'
          }
      ]


  return (
    <section 
    id='sksss'
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                
                    {/* Headding : Work Expirience */}
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        {headerEdu.title1} <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                            }}>
                                {headerEdu.title2}
                            </span>
                    </h1>

                    {/* Discription - Education */}
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563'}}>
                       {headerEdu.description}
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-start items-center gap-5'>
                  {/* ============================ Education (Start) ============================ */}
                  {/* Education Details */}
                  <div className='w-full lg:w-6/12 space-y-6'
                  data-aos='fade-left'>
                  {/* Education Heading*/}
                  <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                      <h1 className='font-bold title-font mb-4'
                      style={{color: darkMode ? 'white' : '#1f3927'}}>
                          Education Details
                      </h1>
                  </div>
                  {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className='group relative p-6 rounded-2xl bg-linear-to-r from-blue-900/10 to-blue-900/5 transition-all duration-300 hover:border-blue-500/50'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                      
                      {/* Graduation Cap and digree Name & Collage */}
                      <div className='flex items-center gap-3'>
                        {/* Graduation Cap */}
                        <div className={`p-2 rounded-lg border-transparent group-hover:border-blue-600 transition-colors
                        ${darkMode ? 'bg-gray-300' : 'bg-gray-700'}`}>
                          <GraduationCap size={24} color={darkMode ? '#03060e' : '#e9ebf3'} />
                        </div>

                        {/* Digree Name & Collage */}
                        <div>
                          <h3 className='text-lg font-bold text-white group-hover:text-blue-500 transition-colors'>
                            {edu.degree}
                          </h3>
                          <p className='text-gray-400 text-sm'>
                            {edu.collage}
                          </p>
                        </div>
                      </div>
                      {/* Duration */}
                      <div className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full w-fit
                        ${darkMode ? 'bg-gray-300' : 'bg-gray-700'} ${darkMode ? 'text-[#03060e]' : 'text-[#e9ebf3]'}`}>
                          <Calendar size={12} color={darkMode ? '#03060e' : '#e9ebf3'} />
                          {edu.duration}
                      </div> 
                    </div>
                    {/* Education Details */}
                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                    {edu.details}
                    </p>
                    <div className='flex items-center gap-2 text-[10px] uppercase-wider text-blue-500 font-bold'>
                      <CheckCircle size={12} />
                      Academic Excellence
                    </div>
                  </div>
                  ))}
                  </div>
                  {/* ============================ Education (End) ============================== */}

                  {/* ============================ Cirtification (Start) ============================ */}
                  {/* Cirtification Details */}
                  <div className='w-full lg:w-6/12 space-y-6'
                  data-aos='fade-left'>
                  {/* Cirtification Heading*/}
                  <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                      <h1 className='font-bold title-font mb-4'
                      style={{color: darkMode ? 'white' : '#1f3927'}}>
                          Cirtification Details
                      </h1>
                  </div>
                  
                  {/* ======================== Start ================================== */}
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                      {certifications.map((cert) => (
                          <div key={cert.id} data-aos='zoom-in'
                          className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'>
                              <div className='absolute -top-4 -right-4 bg-blue-500 p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                                  <Award className='text-white' size={24} />
                              </div>
                              <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                                  <span className='flex items-center gap-1'>
                                      <ShieldCheck className='text-blue-500' size={14} />
                                      {cert.issuer}
                                  </span>
                                  <span className='flex items-center gap-1'>
                                      <Calendar size={14} />
                                      {cert.date}
                                  </span>
                              </div>
                              <h3 className='text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors'>
                                  {cert.title}
                              </h3>
                              <p className='text-gray-400 tex-sm mb-6 line-clamp-2'>
                                  {cert.desc}
                              </p>
                              <a href={cert.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1'>
                                  View Cirtificate <ExternalLink size={14} />
                              </a>
                          </div>
                      ))}
                  </div>
                  {/* ==================== End ============================= */}
                  </div>
                  {/* ============================ Cirtification (End) ============================== */} 
                </div>
                
            </div>
        </div>
    </section>
  );
};

export default Sksss