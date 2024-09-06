import React from 'react'
import AppDev from '../../images/AppDevelopment.png'
const ProjectModal = ({isOpen,setIsOpen,project}) => {
  return (
    <div className='s'>
      {isOpen && (
                <div className='fixed inset-0 z-30 flex justify-center items-center bg-black/50 backdrop-blur-sm' onClick={() => setIsOpen(!isOpen)} >

                    <div className='max-w-[900px] h-[600px] border border-gray-700 px-5 mx-3 rounded-2xl flex flex-col gap-3 relative overflow-y-auto bg-black pb-3' onClick={(e) => e.stopPropagation()}>


                        <div className='sticky top-0 bg-black p-3 flex justify-between'>
                            <span className='text-xl'>{project.title}</span>
                            <i onClick={() => setIsOpen(!isOpen)} class="fa-solid fa-xmark text-xl cursor-pointer"></i>
                        </div>

                        <img src={project.img} className='rounded-xl  h-[350px]' alt={project.title} />

                        <div className='flex flex-wrap gap-2 text-[16px]'>
                        {project.tags.map((tag, idx) => (
                                <span key={idx} className='bg-[#17d1ac] px-3 py-[3px] text-black rounded-full'>
                                    {tag}
                                </span>
                            ))}
                            
                        </div>
                        <p className='text-slate-500 text-xl'>{project.description}</p>
                        <div className='flex gap-3'>
                            <a href={project.urlCode} className='border border-gray-700 p-2 rounded-lg hover:bg-[#070707] w-[50%] text-lg text-center'>View Code</a>
                            <a href={project.urlWebsite} className='border border-gray-700 p-2 rounded-lg w-[50%] bg-[#17d1ac] text-black hover:bg-[#24facf] text-lg text-center'>View Live App</a>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default ProjectModal
