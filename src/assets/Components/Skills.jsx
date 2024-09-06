import React from 'react'
import html from '../../images/HTML.png'
import Css from '../../images/CSS.png'
import js from '../../images/JavaScript.png'
import ReactJs from '../../images/React JS.png'
import Tailwind from '../../images/Tailwind CSS.png'
import Bootstrap from '../../images/Bootstrap.png'
import Redux from '../../images/Redux.png'
import Nodejs from '../../images/Node JS.png'
import Expressjs from '../../images/Express JS.png'
import MongoDB from '../../images/MongoDB.png'
import MongoDBCompass from '../../images/MongoDB Compass.png'
import Mysql from '../../images/Mysql.png'
import C from '../../images/C.png'
import CPP from '../../images/C++.png'
import Java from '../../images/Java.png'
import Git from '../../images/Git.png'
import Github from '../../images/Github.png'
import VSCode from '../../images/VS Code.png'
import Postman from '../../images/Postman.png'


const Skills = () => {

     const frontend = [{HTML:html},{CSS:Css},{JavaSript:js},{ReactJS:ReactJs},{TailwindCSS:Tailwind},{Bootstrap:Bootstrap},{Redux:Redux}]
     const backend = [{NodeJS:Nodejs},{ExpressJS:Expressjs},{MongoDB:MongoDB},{MySQL:Mysql}]
     const Language = [{C:C},{CPP:CPP},{Java:Java},{JavaScript:js}]
     const Tools = [{Git:Git},{Github:Github},{VSCode:VSCode},{Postman:Postman},{MongoDBCompass:MongoDBCompass}]
  return (
    <div id="skill" className='min-h-screen bg-black text-white flex flex-col gap-10 p-5 pb-40 items-center'>
       <h1 className='text-4xl font-bold text-[#17d1ac]'>SKILLS</h1>

       <div className='flex flex-col items-center gap-10 '>
          <h1 className='text-4xl font-semibold'>Frontend</h1>

          <div className='flex gap-8 flex-wrap justify-center'>
          {
          frontend.map((skill, i) => {
            const key = Object.keys(skill)[0]; 
            const value = skill[key];

            return (
              <div  key={i} className="flex flex-col items-center gap-2">
                <img src={value} alt={key} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40" />
                <div className='text-gray-600'>{key}</div>
              </div>
            );
          })}
             
          </div>
          
       </div>

       <div className='flex flex-col items-center gap-10 '>
          <h1 className='text-4xl font-semibold'>Backend</h1>

          <div className='flex gap-8 flex-wrap justify-center'>
          {
           backend.map((skill, i) => {
            const key = Object.keys(skill)[0]; 
            const value = skill[key];

            return (
              <div key={i} className="flex flex-col items-center gap-4">
                <img src={value} alt={key} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40" />
                <div className='text-gray-600'>{key}</div>
              </div>
            );
          })}
             
          </div>
          
       </div>

       <div className='flex flex-col items-center gap-10 '>
          <h1 className='text-4xl font-semibold'>Languages</h1>

          <div className='flex gap-8 flex-wrap justify-center'>
          {
           Language.map((skill, i) => {
            const key = Object.keys(skill)[0]; 
            const value = skill[key];

            return (
              <div key={i} className="flex flex-col items-center gap-4">
                <img src={value} alt={key} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40" />
                <div className='text-gray-600'>{key}</div>
              </div>
            );
          })}
             
          </div>
          
       </div>

       <div className='flex flex-col items-center gap-10 '>
          <h1 className='text-4xl font-semibold'>Tools</h1>

          <div className='flex gap-8 flex-wrap justify-center'>
          {
           Tools.map((skill, i) => {
            const key = Object.keys(skill)[0]; 
            const value = skill[key];

            return (
              <div key={i} className="flex flex-col items-center gap-4">
                <img src={value} alt={key} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40" />
                <div className='text-gray-600'>{key}</div>
              </div>
            );
          })}
             
          </div>
          
       </div>
    </div>
  )
}

export default Skills
