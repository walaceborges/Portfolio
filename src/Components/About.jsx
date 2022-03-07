import React from "react";
import profileImg from "../assets/images/pessoal.jpg";
import gitHubImg from "../assets/images/github-svgrepo-com.svg";
import linkedinImg from "../assets/images/linkedin-logo-svgrepo-com.svg";
import SkillsImage from "./SkillsImage";
import SkillsList from "./SkillsList";

function About() {
  return (
    <div
      id="about"
      className="w-screen mt-8 mb-8 px-5 md:h-full md:w-full md:pt-28 md:pb-14"
    >
      <div className="about-container md:flex md:justify-center md:w-11/11">
        <div className="md:flex md:flex-col md:w-5/12 md:mr-40">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold whitespace-nowrap pr-3 text-[#ED254E] md:text-2xl">
              About Me
            </h2>
            <hr className="w-2/3 border-separate border-gray-800 md:w-11/12"></hr>
          </div>
          <div className="pt-10 text-sm text-justify md:text-base" id="about">
            <p className="">
              Olá, meu nome é <b>Walace</b> e gosto de desenvolver experiencias
              para o usuario. Meu interesse em desenvolvimento web começou em
              2019, quando comecei a pesquisar como eram feitas as estruturas de
              paginas na internet, desde então, comecei a estudar sozinho{" "}
              <i>HTML e CSS</i> e logo após decidi cursar minha primeira
              faculdade na área de tecnologia
            </p>
            <p className="my-3">
              Avançando para os dias atuais, tive o privilegio de começar a
              estudar na <b>trybe</b> e aprender de verdade como realmente
              funciona o desenvolvimento de uma pagina web, tanto como a parte{" "}
              <strong>front-end</strong>, <strong>back-end</strong> e também
              outros conceitos que engloba toda essa área fascinante.
            </p>
            <p className="">
              Sou novo no mercado de tecnologia e busco sempre realizar
              bootcamps, cursos e implementar projetos sozinho, com tudo isso,
              acredito que estou preparado para dar meu primeiro passo na área.
            </p>
          </div>
          <div>
            <SkillsImage />
          </div>
          <div>
            <SkillsList />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <img
            className="pt-8 w-96 md:pt-0"
            src={profileImg}
            alt="A selfie of myself"
          />
          <div className="pt-5 flex flex-col items-center xl:hidden">
            <p className="uppercase text-xs font-medium tracking-widest">
              Conecte-se comigo
            </p>
            <div className="pt-3 flex">
              <a
                href="https://github.com/walaceborges"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-16 pr-3" src={gitHubImg} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/walace-borges/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-16 pl-3" src={linkedinImg} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
