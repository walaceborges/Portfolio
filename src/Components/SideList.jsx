import React from "react";
import listGitHub from "../assets/images/github-with-circle-svgrepo-com.svg";
import listLinkedin from "../assets/images/linkedin-svgrepo-com.svg";
import listResume from "../assets/images/curriculum-svgrepo-com.svg";
import resume from "../Resume/resume-walace.pdf"

function SideList() {
  return (
    <div className="relative top-60 hidden xl:block">
      <div className="flex justify-end inset-0">
        <ul className="z-10 fixed h-0 pr-8">
          <li className="my-5">
            <a
              href="https://github.com/walaceborges"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-16 transition ease-in-out delay-100 hover:scale-110 duration-300 hover:brightness-200" src={listGitHub} alt="github" />
            </a>
          </li>
          <li className="my-5">
            <a
              href="https://www.linkedin.com/in/walace-borges/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-16 transition ease-in-out delay-100 hover:scale-110 duration-300 hover:brightness-150" src={listLinkedin} alt="linkedin" />
            </a>
          </li>
          <li className="my-5">
            <a
              href={resume}
              download="walace-resume"
            >
              <img className="w-16 transition ease-in-out delay-100 hover:scale-110 duration-300 hover:brightness-125" src={listResume} alt="resume" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideList;
