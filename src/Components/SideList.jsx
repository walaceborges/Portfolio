import React from "react";
import listGitHub from "../assets/images/list-github.svg";
import listLinkedin from "../assets/images/list-linkedin.svg";
import listResume from "../assets/images/list-resume.svg";

function SideList() {
  return (
    <div className="relative top-60 hidden md:block">
      <div className="flex justify-end inset-0">
        <ul className="z-10 fixed h-0 pr-8">
          <li className="my-4">
            <a
              href="https://github.com/walaceborges"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-16 fill-[#243c5a]" src={listGitHub} alt="github" />
            </a>
          </li>
          <li className="my-4">
            <a
              href="https://www.linkedin.com/in/walace-borges/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-16" src={listLinkedin} alt="linkedin" />
            </a>
          </li>
          <li className="my-7">
            <a
              href="https://github.com/walaceborges"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-16" src={listResume} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideList;
