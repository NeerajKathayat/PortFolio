import React, { useState } from 'react'
import model from '../../images/Npic.jpg'
import Tilt from 'react-vanilla-tilt'
const About = () => {
    const tabList = ["Project 1", "Project 2", "Project 3", "Project 4"]

    const [toogleTab, setToogleTab] = useState(0)
    return (
        <div id="about" className='bg-black min-h-screen  py-20 flex flex-col gap-6'>
            <div className='flex flex-col items-center lg:flex-row-reverse justify-between gap-6  px-5  max-w-[1450px] mx-auto'>

                <Tilt style={{ padding: '0' }}>

                    <img src={model} alt="" className='w-[300px] h-[430px] md:w-[420px] md:h-[560px] ' />

                </Tilt>

                <div className='flex flex-col items-start md:px-10 max-w-[830px]'>
                    <h1 className='text-[#17d1ac] text-[50px] font-medium md:text-[80px]'>About Me</h1>
                    <p className="text-white text-[35px] md:text-[50px]">Software Developer</p>
                    <div className='flex flex-col gap-4 items-start pt-3'>
                        <p className="text-white text-sm  md:text-[18px] ">Hlo Folks,I hope all Good.I am a Computer Science Student living in Chennai City and Making a Best Version of Me for the Betterment of the Organization.I am Fond of Learning new Skills in Development and looking for to Explore New Technology.I'm Always Looking for an Opportunity to do better and Achieve Greatness.</p>
                    </div>


                    <div className='relative w-full  md:w-[80%] pt-5'>
                        <div className='flex  relative text-white'>
                            <div
                                onClick={() => setToogleTab(0)}
                                className={`cursor-pointer w-[25%] text-center text-xs  sm:text-[17px]  py-2 ${toogleTab === 0 ? 'text-[#FFBA00]' : 'text-white'}`}
                                data-tab="0"
                            >
                                Qualification
                            </div>

                            <div
                                onClick={() => setToogleTab(1)}
                                className={`cursor-pointer w-[25%] text-center text-xs sm:text-[17px]  py-2 ${toogleTab === 1 ? 'text-[#FFBA00]' : 'text-white'}`}
                                data-tab="1"
                            >
                                Hobbies
                            </div>
                            <div
                                onClick={() => setToogleTab(2)}
                                className={`cursor-pointer  w-[25%] text-center text-xs sm:text-[17px] py-2 ${toogleTab === 2 ? 'text-[#FFBA00]' : 'text-white'}`}
                                data-tab="2"
                            >
                                Achievements
                            </div>
                            <div
                                onClick={() => setToogleTab(3)}
                                className={`cursor-pointer w-[25%] text-center text-xs sm:text-[17px] py-2 ${toogleTab === 3 ? 'text-[#FFBA00]' : 'text-white'}`}
                                data-tab="3"
                            >
                                Certifications
                            </div>
                        </div>

                        {/* Sliding indicator */}
                        <div
                            className={`absolute bottom-0 left-0 h-[2px]   bg-[#FFBA00] transition-transform duration-300 ease-in-out`}
                            style={{ width: '25%', transform: `translateX(${100 * toogleTab}%)` }}
                        ></div>

                    </div>


                    <div className='flex flex-col-reverse md:flex-row gap-4 px-8 pt-7'>

                        <div className={`${toogleTab == 0 ? "flex" : "hidden"}  text-white  flex-col flex-1 gap-[25px] md:gap-[40px]`} >
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-gray-700">MCA from Vellore Institute of Technology, Chennai</h3>
                                    <p className="text-gray-600">2023 - 2025</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">BCA from Graphic Era Hill University, Dehradun</h3>
                                    <p className="text-gray-600">2020 - 2023</p>
                                </div>
                            </div>
                        </div>


                        <div className={`${toogleTab == 1 ? "flex" : "hidden"}  text-white  flex-col flex-1 gap-[25px] md:gap-[40px]`} >
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <ul className="list-disc list-inside text-gray-700">
                                    <li className="mb-2">Calisthenics</li>
                                    <li className="mb-2">Movies</li>
                                    <li>Songs</li>
                                </ul>
                            </div>
                        </div>


                        <div className={`${toogleTab == 2 ? "flex" : "hidden"}  text-white  flex-col flex-1 gap-[25px] md:gap-[40px]`} >
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700 mb-2">
                                    Published research paper titled
                                    <span className="font-semibold italic">”Comprehensive Review of Machine Learning, Deep Learning, and Digital Twin Data-Driven Approaches in Battery Health Prediction of Electric Vehicles”</span>
                                    in IEEE Access, vol. 12, pp. 43984-43999, 2024. DOI: 10.1109/ACCESS.2024.3380452.
                                </p>
                                <a
                                    href="https://ieeexplore.ieee.org/document/10477658"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read the paper
                                </a>
                            </div>
                        </div>


                        <div className={`${toogleTab == 3 ? "flex" : "hidden"}  text-white  flex-col flex-1 gap-[25px] md:gap-[40px]`} >
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
  <ul className="list-disc pl-5 text-gray-700">
    <li className="mb-2">
      <span className="font-semibold">Java - Certification on JAVA J2EE</span> from TalentNext Training Program, conducted by WIRO.
    </li>
  </ul>
  <a 
    href="https://drive.google.com/file/d/1Fmng91C04QsLFlQhNOohCEea9FqWhJaT/view?usp=sharing" 
    className="text-blue-500 hover:underline"
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Certification
  </a>
</div>

                        </div>


                        




                    </div>

                </div>
            </div>


        </div>
    )
}

export default About
