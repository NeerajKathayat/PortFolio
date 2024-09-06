import React from 'react'
import DP from '../../images/DP.jpg'
import Tilt from 'react-vanilla-tilt'
import Typewritter from "typewriter-effect"
import { Link } from 'react-scroll'
import Resume from '../../images/Resume.pdf'
const Hero = () => {
    return (
        <div id="hero" className='bg-[#edf1fd] h-[90vh] sm:h-screen'>

            <div className='flex md:hidden gap-5 text-2xl pt-6 pb-9 px-5'>
                <a href="https://github.com/NeerajKathayat"> <i class="uil uil-github-alt"></i></a>
                <a href="https://www.linkedin.com/in/neeraj-kathayat-b293a6201"><i class="uil uil-linkedin-alt"></i></a>
                <a href="https://www.instagram.com/neerajkathayat006/"><i class="uil uil-instagram"></i></a>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center justify-between py-5  md:py-28 px-5  max-w-[1450px] mx-auto'>


                <Tilt style={{ marginRight: '20px', borderRadius: '50%' }}>
                    <img className='w-[330px] h-[330px] rounded-[50%] md:w-[500px] md:h-[500px]' src={DP} alt="" />
                </Tilt>

                <div className='flex flex-col gap-3 max-w-[500px] md:pl-10'>
                    <p>Hello</p>
                    <h1 className='text-[20px] sm:text-[30px]  md:text-[40px] tracking-[3px] text-center font-medium'><Typewritter options={{ strings: ["I'm Neeraj Kathayat", "I'm Full Stack Developer"], loop: true, autoStart: true }} /></h1>
                    <p className="">
                        A motivated Developer Fresher adept at problem-solving, eager to contribute technical skills for organizational growth.
                    </p>
                    <div className="flex gap-1">
                        <a href={Resume} download={Resume} className="text-white bg-black hover:bg-red-600 py-3 px-4 text-xs md:text-sm transition duration-300 ease-in cursor-pointer"  >Download CV</a>
                        <Link smooth={true} duration={500} offset={-100} spy={true} to="contact" className="text-white bg-black hover:bg-red-600 py-3 px-4 text-xs md:text-sm transition duration-300 ease-in cursor-pointer">Contact Me</Link>
                    </div>

                    <div className='hidden md:flex gap-5 text-2xl pt-6 pb-9 px-5'>
                    <a href="https://github.com/NeerajKathayat"> <i class="uil uil-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/neeraj-kathayat-b293a6201"><i class="uil uil-linkedin-alt"></i></a>
                    <a href="https://www.instagram.com/neerajkathayat006/"><i class="uil uil-instagram"></i></a>
                </div>

                </div>

               
            </div>

        
        </div>
    )
}

export default Hero
