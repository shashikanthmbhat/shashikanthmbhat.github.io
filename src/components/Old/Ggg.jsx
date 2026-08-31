//Business Inteligence (BI)
import PpowerBI from '../../assets/Skill_Icon/Old/Logos_BI/powerbi.png'
import Eexcel from '../../assets/Skill_Icon/Old/Logos_BI/excel.png'
import Rr from '../../assets/Skill_Icon/Old/Logos_BI/r.png'
import Sspss from '../../assets/Skill_Icon/Old/Logos_BI/spss.png'
import Ppython from '../../assets/Skill_Icon/Old/Logos_BI/python.png'

//Data Analysis & Modelling(DM)
import Ddax from  '../../assets/Skill_Icon/Old/Logos_DM/dax.png'
import Eetl from  '../../assets/Skill_Icon/Old/Logos_DM/etl.png'
import Ppowerquerry from  '../../assets/Skill_Icon/Old/Logos_DM/powerquerry.png'
import Wwarehousing from  '../../assets/Skill_Icon/Old/Logos_DM/Warehousing.png'

//Programming Languages(PL)
import Vvba from '../../assets/Skill_Icon/Old/Logos_PL/vba.png'
import Pdax from '../../assets/Skill_Icon/Old/Logos_PL/dax.png'
import Rrpl from '../../assets/Skill_Icon/Old/Logos_PL/r.png'
import Ccsharp from '../../assets/Skill_Icon/Old/Logos_PL/csharp.png'
import Ccplusplus from '../../assets/Skill_Icon/Old/Logos_PL/cplusplus.png'

//Database Softwares(DB)
import Mmysql from  '../../assets/Skill_Icon/Old/Logos_DB/mysql.png'
import Mmongodb from  '../../assets/Skill_Icon/Old/Logos_DB/mongodb.png'
import Ooracle from  '../../assets/Skill_Icon/Old/Logos_DB/oracle.png'
import Mmcsqlserver from  '../../assets/Skill_Icon/Old/Logos_DB/mcsqlserver.png'


const Ggg = ( {darkMode}) => {
    const skillsBI = [
        {id: 1, name: 'PowerBI', icon: PpowerBI, level: "95%", color: '#f2c811'},
        {id: 2, name: 'Excel', icon: Eexcel, level: "95%", color: '#185c37'},
        {id: 3, name: 'R', icon: Rr, level: "90%", color: '#2369bd'},
        {id: 4, name: 'SPSS', icon: Sspss, level: "85%", color: '#d50b38'},
        {id: 5, name: 'Python', icon: Ppython, level: "85%", color: '#264d6f'},
    ];

    const skillsDM = [
        {id: 1, name: 'Power BI DAX', icon: Ddax, level: "95%", color: '#cca300'},
        {id: 2, name: 'Power Querry', icon: Vvba, level: "95%", color: '#11676a'},
        {id: 3, name: 'ETL', icon: Eetl, level: "90%", color: '#00167a'},
        {id: 4, name: 'Data Warehousing', icon: Wwarehousing, level: "90%", color: '#7a0000'},
    ];

    const skillsPL = [
        {id: 1, name: 'PowerBI DAX', icon: Pdax, level: "95%", color: '#f2c811'},
        {id: 2, name: 'Excel VBA', icon: Vvba, level: "95%", color: '#185c37'},
        {id: 3, name: 'R Programming', icon: Rrpl, level: "90%", color: '#2369bd'},
        {id: 4, name: 'C #', icon: Ccsharp, level: "85%", color: '#d50b38'},
        {id: 5, name: 'C++', icon: Ccplusplus, level: "85%", color: '#264d6f'},
    ];

    const skillsDB = [
        {id: 1, name: 'My SQL', icon: Mmysql, level: "95%", color: '#00758f'},
        {id: 2, name: 'Mongo DB', icon: Mmongodb, level: "95%", color: '#10aa50'},
        {id: 3, name: 'Oracle DB', icon: Ooracle, level: "90%", color: '#c94634'},
        {id: 4, name: 'Microsoft SQL', icon: Mmcsqlserver, level: "90%", color: '#b71c1c'},
    ];

    const stats = [
        {id: 1, name: 'Statistical modelling'},
        {id: 2, name: 'Designs of Experiments (DOE)'},
        {id: 3, name: 'Multivariate data analysis'},
        {id: 4, name: 'Quality control tools'},
        {id: 5, name: 'Operational research'},
        {id: 6, name: 'Regression Analysis'},
        {id: 7, name:  'Generalized Linear Model'},
        {id: 8, name: 'Decision Trees'},
    ];

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
    <section 
    id='skills'
    className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>

                    {/* Headding : My Skills */}
                    <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        My <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                            }}>
                                Skills
                            </span>
                    </h1>

                    {/* Discription - My Skills */}
                    <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563'}}>
                          A specialized toolkit of modern frameworks, languages, and cloud technologies leveraged to build scalable, high-performance web applications
                    </p>
                </div>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                
               
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">

                  {/* ========================* Business Intelligence (BI) *================================= */}
                  <div className="flex flex-col">
                    <div
                      className="sm:text-xl text-xl text-left mt-4 mb-4"
                      data-aos="fade-up"
                    >
                      <h1
                        className="font-bold text-xl font-Archivo-Narrow title-font mb-4"
                        style={{ color: darkMode ? 'white' : '#1f3927' }}
                      >
                        Business Intelligence Tools:
                      </h1>
                    </div>

                    <div className="space-y-8">
                      {skillsBI.slice(0, 5).map((sklbi) => (
                        <div key={sklbi.id} className="group h-22.5">
                          <div className="flex items-center justify-between mb-2">
                            <d iv className="flex items-center gap-3">
                              <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-[#111a3e] transition-colors duration-300">
                                <img
                                  src={sklbi.icon}
                                  alt={sklbi.name}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>

                              <span
                                className="font-bold tracking-wide"
                                style={{color: darkMode ? 'white' : '#1f2937'}}>
                                {sklbi.name}
                              </span>
                            </d>

                            <span
                              className="font-bold"
                              style={{
                                background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                              }}
                            >
                              {sklbi.level}
                            </span>
                          </div>

                          <div
                            className="h-2 w-full rounded-full p-0.5"
                            style={{
                              backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: sklbi.level,
                                backgroundColor: sklbi.color,
                                boxShadow: `0 0 10px ${sklbi.color}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* ========================* Data Analysis & Modelling (DM) *================================= */}
                  <div className="flex flex-col">
                    <div
                      className="sm:text-xl text-xl text-left mt-4 mb-4"
                      data-aos="fade-up"
                    >
                      <h1
                        className="font-bold font-Archivo-Narrow title-font mb-4"
                        style={{ color: darkMode ? 'white' : '#1f3927' }}
                      >
                        {/* Data Analysis & Modelling Tools: */}
                        Data Modelling Tools:
                      </h1>
                    </div>

                    <div className="space-y-8">
                      {skillsDM.slice(0, 5).map((skldm) => (
                        <div key={skldm.id} className="group h-22.5">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-[#111a3e] transition-colors duration-300">
                                <img
                                  src={skldm.icon}
                                  alt={skldm.name}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>

                              <span
                                className="font-bold tracking-wide"
                                style={{
                                  color: darkMode ? 'white' : '#1f2937'
                                }}
                              >
                                {skldm.name}
                              </span>
                            </div>

                            <span
                              className="font-bold"
                              style={{
                                background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                              }}
                            >
                              {skldm.level}
                            </span>
                          </div>

                          <div
                            className="h-2 w-full rounded-full p-0.5"
                            style={{
                              backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: skldm.level,
                                backgroundColor: skldm.color,
                                boxShadow: `0 0 10px ${skldm.color}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* ========================* Programming Languages (PL) *================================= */}
                  <div className="flex flex-col">
                    <div
                      className="sm:text-xl text-xl text-left mt-4 mb-4"
                      data-aos="fade-up"
                    >
                      <h1
                        className="font-bold font-Archivo-Narrow title-font mb-4"
                        style={{ color: darkMode ? 'white' : '#1f3927' }}
                      >
                        Programming Languages Tools:
                      </h1>
                    </div>

                    <div className="space-y-8">
                      {skillsPL.slice(0, 5).map((sklpl) => (
                        <div key={sklpl.id} className="group h-22.5">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-[#111a3e] transition-colors duration-300">
                                <img
                                  src={sklpl.icon}
                                  alt={sklpl.name}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>

                              <span
                                className="font-bold tracking-wide"
                                style={{
                                  color: darkMode ? 'white' : '#1f2937'
                                }}
                              >
                                {sklpl.name}
                              </span>
                            </div>

                            <span
                              className="font-bold"
                              style={{
                                background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                              }}
                            >
                              {sklpl.level}
                            </span>
                          </div>

                          <div
                            className="h-2 w-full rounded-full p-0.5"
                            style={{
                              backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: sklpl.level,
                                backgroundColor: sklpl.color,
                                boxShadow: `0 0 10px ${sklpl.color}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* ========================* Database Softwares (DB) *================================= */}
                  <div className="flex flex-col">
                    <div
                      className="sm:text-xl text-xl text-left mt-4 mb-4"
                      data-aos="fade-up"
                    >
                      <h1
                        className="font-bold font-Archivo-Narrow title-font mb-4"
                        style={{ color: darkMode ? 'white' : '#1f3927' }}
                      >
                        Database Softwares Tools:
                      </h1>
                    </div>

                    <div className="space-y-8">
                      {skillsDB.slice(0, 5).map((skldb) => (
                        <div key={skldb.id} className="group h-22.5">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-[#111a3e] transition-colors duration-300">
                                <img
                                  src={skldb.icon}
                                  alt={skldb.name}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>

                              <span
                                className="font-bold tracking-wide"
                                style={{
                                  color: darkMode ? 'white' : '#1f2937'
                                }}
                              >
                                {skldb.name}
                              </span>
                            </div>

                            <span
                              className="font-bold"
                              style={{
                                background: 'linear-gradient(to right, #3b82f6, #06b6f4)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                              }}
                            >
                              {skldb.level}
                            </span>
                          </div>

                          <div
                            className="h-2 w-full rounded-full p-0.5"
                            style={{
                              backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: skldb.level,
                                backgroundColor: skldb.color,
                                boxShadow: `0 0 10px ${skldb.color}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

</div>
                </div>
               {/* ======================= ** End ** =======================================  */}

                {/* Statistical Skills Heading*/}
                <div className='sm:text-2xl text-xl text-left mt-4 mb-4' data-aos='fade-up'>
                    <h1 className='font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f3927'}}>
                        Statistical Skills :
                    </h1>
                </div>
                
                {/* Statistical Skills*/}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                    {stats.map((itm, idx) => (
                        <span
                            key={idx}
                            style={{
                                // backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                               border: darkMode ? '2px solid #3b82f6' : '2px solid #06b6d4',
                                color: darkMode ? '#d1d5db' : '#4b5563'}}
                            className='px-2 py-1 text-xl rounded-full'
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            {itm.name}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    </section>
    </div>
  );
};

export default Ggg