import React, { useState, useEffect } from 'react'
import AppDev from '../../images/AppDevelopment.png'
import RealState from '../../images/RealState.png'
import ProjectModal from './ProjectModal';
import WebDesk from '../../images/WebDesk.png'
import ECommerce from '../../images/E-Commerce.png'
import Tilt from 'react-vanilla-tilt'
import fylodarkTheme from '../../images/fylodarkTheme.png';
import NoteApp from '../../images/NoteApp.png'
import FlashCard from '../../images/FlashCard.png'

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (isOpen) {
            // Prevent background scroll by adding class to body
            document.body.classList.add('no-scroll');
        } else {
            // Allow scroll by removing the class
            document.body.classList.remove('no-scroll');
        }

        // Cleanup when component is unmounted or modal is closed
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);


    const projectsData = [
        {
            img: ECommerce,
            title: 'E-Commerce App',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['REACT', 'TAILWIND CSS', 'REDUX TOOLKIT', 'EXPRESS','MongoDB'],
            urlCode:'https://github.com/NeerajKathayat/E-Commerce-',
            urlWebsite:'https://github.com/NeerajKathayat/E-Commerce-'
        },
        {
            img: NoteApp,
            title: 'Note-App',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['ReactJS', 'CSS','EXPRESS JS','MongoDB'],
            urlCode:'https://github.com/NeerajKathayat/Note-App-MERN',
            urlWebsite:'https://github.com/NeerajKathayat/Note-App-MERN'
        },
        {
            img: AppDev,
            title: 'App-Development-Landing-Page',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['NEXTJS', 'TAILWIND'],
            urlCode:'https://github.com/NeerajKathayat/AppDevelopment-LandingPage-NextJS',
            urlWebsite:'https://app-development-landing-page-next-js.vercel.app/'
        },

        {
            img: RealState,
            title: 'Real E-State',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['REACT', 'TAILWIND'],
            urlCode:'https://github.com/NeerajKathayat/Real-EState-reactjs-TailwindCSS',
            urlWebsite:'https://real-e-state-reactjs-tailwind-css.vercel.app/'
        },

        {
            img: WebDesk,
            title: 'Web 2 Desktop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['REACT', 'TAILWIND'],
            urlCode:'https://github.com/NeerajKathayat/Web2DesktopLandingPage-TailwindCSS',
            urlWebsite:'https://web2-desktop-landing-page-tailwind-css.vercel.app/'
        },

        {
            img: fylodarkTheme,
            title:'fylo-dark-theme-landing-page',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['HTML','CSS'],
            urlCode:'https://github.com/NeerajKathayat/fylo-dark-theme-landing-Page',
            urlWebsite:'https://fylo-dark-theme-landing-page-azure-two.vercel.app/'
        },
        {
            img: FlashCard,
            title:'FlashCard Learning Tool',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem voluptas excepturi adipisci consectetur repudiandae deserunt quae quam quisquam inventore optio aut consequatur temporibus rerum, accusantium aliquam quas officiis nesciunt veritatis corporis nisi? Enim.',
            tags: ['REACT JS','EXPRESS JS','MYSQL'],
            urlCode:'https://github.com/NeerajKathayat/FlashCard',
            urlWebsite:'https://flash-card-beige.vercel.app/'
        },
    ];


    const [proj , setProj] = useState({})

    const handleModal = (project)=>{
           setProj(project)
           setIsOpen(!isOpen)

    }
    return (
        <div id="Projects" className='min-h-screen bg-black text-white flex flex-col items-center gap-10  py-10 md:p-10'>
            <div className='text-4xl font-bold text-[#17d1ac]'>Projects</div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 px-5'>

           
                {projectsData.map((project, index) => (
                  <Tilt style={{ padding: '0' }}>
                    <div key={index} className='max-w-[450px] border border-gray-700 p-3 rounded-2xl flex flex-col gap-3 '>
                        <img src={project.img} className='rounded-xl h-[230px]' alt={project.title} />
                        <h1>{project.title}</h1>
                        <div className='flex flex-wrap gap-2 text-[9px]'>
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className='bg-[#17d1ac] px-3 py-[3px] text-black rounded-full'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className='text-slate-500 text-sm'>{project.description}</p>
                        <button onClick={()=> handleModal(project)} className='border border-gray-700 p-2 rounded-lg hover:bg-[#070707]'>Show More</button>

                    </div>  
                    </Tilt> 
                ))}
            
                

            </div>


            <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={proj} />


             
        </div>
    )
}

export default Projects
