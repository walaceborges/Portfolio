import React, { useEffect, useState } from "react";
import backToTop from "./BackToTop";
import arrowUp from "../assets/images/up-arrow-svgrepo-com.svg"

function ScrollTop() {
  const [isVisble, setVisible] = useState(false);

  const toggleScrollTopVisible = () => {
    if (window.scrollY > 1650) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTopVisible);
  }, []);

  return (
    <button
      id="myBtn"
      title="Go to top"
      className={isVisble ? "scroll-top-active" : "hidden" }
      onClick={backToTop}
    >
      <img className="xl:w-12 md:w-10 sm:w-9 w-7" src={arrowUp} alt="arrowUp" />
    </button>
  );
}

export default ScrollTop;
