import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex items-center justify-between px-5 py-4 md:py-1 shadow-md fixed bottom-0 md:bottom-auto md:top-0 z-10 w-full transition-colors duration-500 ${
            scrollPosition > 50 ? 'bg-black/80 text-white' : 'bg-[#f4f7ff] text-gray-600'
        }`}>
            <div className='font-semibold tracking-widest text-2xl '>NEERAJ KATHAYAT</div>

            <ul className='hidden md:flex gap-5 pr-16 font-medium text-xs '>
                <Link smooth={true} duration={500} offset={-100} spy={true} to="hero" className={`cursor-pointer tracking-widest px-3 py-2 flex gap-1 items-baseline ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'} `} onClick={handleLinkClick}>
                    <i class="uil uil-estate text-2xl"></i>
                    <span className='text-sm'>HOME</span>
                </Link>
                <Link smooth={true} duration={500} offset={-100} spy={true} to="about" className={`cursor-pointer tracking-widest px-3 py-2 flex gap-1 items-baseline ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'} `} onClick={handleLinkClick}>
                    <i class="uil uil-user text-2xl"></i>
                    <span className='text-sm'>ABOUT</span>
                </Link>
                <Link smooth={true} duration={500} offset={-100} spy={true} to="skill" className={`cursor-pointer tracking-widest px-3 py-2 flex gap-1 items-baseline ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'} `} onClick={handleLinkClick}>
                <i class="uil uil-file-alt text-2xl"></i>
                    <span className='text-sm'>SKILLS</span>
                </Link>
                <Link smooth={true} duration={500} offset={-100} spy={true} to="Projects" className={`cursor-pointer tracking-widest px-3 py-2 flex gap-1 items-baseline ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'} `} onClick={handleLinkClick}>
                    <i class="uil uil-scenery text-2xl"></i>
                    <span className='text-sm'>PROJECTS</span>
                </Link>
                <Link smooth={true} duration={500} offset={-100} spy={true} to="contact" className={`cursor-pointer tracking-widest px-3 py-2 flex gap-1 items-baseline ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'} `} onClick={handleLinkClick}>
                    <i class="uil uil-message text-2xl"></i>
                    <span className='text-sm'>CONTACT</span>
                </Link>
            </ul>

            <div className='flex gap-5 md:hidden'>
                <i onClick={() => setIsOpen(!isOpen)} class="uil uil-apps text-2xl cursor-pointer"></i>
            </div>

            <div className={`flex flex-col gap-6 md:hidden absolute right-0 bottom-0 left-0 z-20 py-7 px-9 transition-all duration-500 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}     ${scrollPosition > 50 ? 'bg-black text-white' : 'bg-white text-gray-600' }`}>
                <ul className='grid grid-cols-3 gap-10 '>
                    <Link smooth={true} duration={500} offset={-100} spy={true} to="hero" className={`cursor-pointer flex flex-col items-center gap-1 ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'}`} onClick={handleLinkClick}>
                        <i class="uil uil-estate text-2xl"></i>
                        <span className='text-sm'>HOME</span>
                    </Link>
                    <Link smooth={true} duration={500} offset={-100} spy={true} to="about" className={`cursor-pointer flex flex-col items-center gap-1 ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'}`}  onClick={handleLinkClick}>
                        <i class="uil uil-user text-2xl"></i>
                        <span className='text-sm'>ABOUT</span>
                    </Link>
                    <Link smooth={true} duration={500} offset={-100} spy={true} to="skill" className={`cursor-pointer flex flex-col items-center gap-1 ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'}`} onClick={handleLinkClick}>
                    <i class="uil uil-file-alt text-2xl"></i>
                        <span className='text-sm'>SKILLS</span>
                    </Link>
                    <Link smooth={true} duration={500} offset={-100} spy={true} to="Projects" className={`cursor-pointer flex flex-col items-center gap-1 ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'}`}  onClick={handleLinkClick}>
                        <i class="uil uil-scenery text-2xl"></i>
                        <span className='text-sm'>PROJECTS</span>
                    </Link>
                    <Link smooth={true} duration={500} offset={-100} spy={true} to="contact" className={`cursor-pointer flex flex-col items-center gap-1 ${scrollPosition > 50  ? 'hover:text-gray-400' : 'hover:text-black'}`}  onClick={handleLinkClick}>
                        <i class="uil uil-message text-2xl"></i>
                        <span className='text-sm'>CONTACT</span>
                    </Link>
                </ul>

                <i onClick={() => setIsOpen(!isOpen)} class="uil uil-times text-[30px] self-end cursor-pointer"></i>
            </div>
        </div>
    );
};

export default NavBar;
