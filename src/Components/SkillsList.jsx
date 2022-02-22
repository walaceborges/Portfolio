import React from 'react'

function SkillsList() {
  return (
    <div>
      <ul className='pt-3 list-disc lg:hidden'>
        <p className='text-sm pb-2 md:text-base'>Aqui estão algumas tecnologias com as quais tenho estudado e trabalhado:</p>
        <div className='px-5 inline-block text-base font-semibold'>
          <li className='list-custom md:text-xl font-titillium-web'>HTML</li>
          <li className='list-custom md:text-xl font-titillium-web'>CSS</li>
          <li className='list-custom md:text-xl font-titillium-web'>Javascript</li>
        </div>
        <div className='px-5 inline-block text-base list-custom font-semibold'>
          <li className='list-custom md:text-xl font-titillium-web'>React</li>
          <li className='list-custom md:text-xl font-titillium-web'>Redux</li>
          <li className='list-custom md:text-xl font-titillium-web'>Jest</li>
        </div>
        <div className='px-5 inline-block text-base list-custom font-semibold'>
          <li className='list-custom md:text-xl font-titillium-web'>Node.js</li>
          <li className='list-custom md:text-xl font-titillium-web'>TypeScript</li>
          <li className='list-custom md:text-xl font-titillium-web'>MySQL</li>
        </div>
      </ul>
    </div>
  )
}

export default SkillsList