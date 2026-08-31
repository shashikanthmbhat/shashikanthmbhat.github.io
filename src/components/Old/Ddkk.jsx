import { div, title } from 'framer-motion/client'
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'

const Ddkk = () => {

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
        },
        
        {id: 3,
        title: 'Lorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis',
        issuer: 'Amazon Web Service',
        date: 'Jun-2024',
        link: '#',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fermentum erat. Fusce dignissim nibh vel nunc pulvinar, vitae mollis leo gravida. Donec placerat eu'
        },
        
        {id: 4,
        title: 'Lorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis',
        issuer: 'Amazon Web Service',
        date: 'Jun-2024',
        link: '#',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fermentum erat. Fusce dignissim nibh vel nunc pulvinar, vitae mollis leo gravida. Donec placerat eu'
        },
    ]
  return (
    <section className='text-white py-20' id='ddkk'>
        <div className='max-w-7xl mx-auto px-6 lg:p-16'>
            <div className='mb-16'>
                <p className='text-blue-500 text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Achivements
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                    Cirtification.
                </h2>
            </div>
            {/* ======================== Start ================================== */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
    </section>
  )
}

export default Ddkk