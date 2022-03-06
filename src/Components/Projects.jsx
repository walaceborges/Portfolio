import React from 'react';
import Carousel from './Carousel';

function Projects() {
  return (
    <div className='bg-[#87D1C3] w-screen md:h-full md:w-full flex flex-col py-8 md:pt-28'>
      <div className='flex items-center justify-center md:px-72'>
        <h2 className='text-xl font-semibold whitespace-nowrap pr-3 text-[#ED254E] md:text-2xl'>
          My Projects
        </h2>
        <hr className='w-40 border-separate border-gray-800 md:w-9/12'></hr>
      </div>
      <section className="pt-10 flex flex-col items-center">
        {/* <div className='text-justify w-10/12 pb-6 md:w-9/12 md:hidden'>
          <p className='text-sm font-normal md:text-base'>
          Nessa sessão estará todos projetos que tiveram alguma relevância durante minha vida, tanto de estudante e profissional. Contendo uma pequena descrição sobre o projeto, link do repositório do mesmo e se possivel, a aplicação no ar.
          </p>
        </div> */}
        <Carousel />
      </section>
    </div>
  )
}

export default Projects