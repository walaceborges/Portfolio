import React from 'react'
import cssImg from '../assets/images/css3-svgrepo-com.svg';
import htmlImg from '../assets/images/html-svgrepo-com.svg';
import jsImg from '../assets/images/javascript-svgrepo-com.svg';
import reactImg from '../assets/images/react-svgrepo-com1.svg';
import reduxImg from '../assets/images/redux-svgrepo-com.svg';
import jestImg from '../assets/images/jest-svgrepo-com.svg';
import sqlImg from '../assets/images/mysql-svgrepo-com.svg';
import nodeImg from '../assets/images/node-js-svgrepo-com.svg';
import typeScriptImg from '../assets/images/typescript-svgrepo-com.svg';

function SkillsImage() {
  return (
    <div className='flex-col pt-3 hidden lg:block'>
      <p className='text-sm pb-2 md:text-base'>Aqui estão algumas tecnologias com as quais tenho estudado e trabalhado:</p> 
      <div className='flex pt-5 justify-between'>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ htmlImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>HTML5</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ cssImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>CSS3</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ jsImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>JavaScript</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ reactImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>React</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ reduxImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>Redux</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ jestImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>Jest</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ sqlImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>MySQL</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200'>
          <img className="w-12"src={ nodeImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>Node.js</h2>
        </div>
        <div className='flex flex-col items-center hover:-translate-y-2 transition duration-200 '>
          <img className="w-12"src={ typeScriptImg } alt="github" />
          <h2 className='font-semibold text-center lg:text-xl font-titillium-web'>TypeScript</h2>
        </div>
      </div>
    </div>
  )
}

export default SkillsImage