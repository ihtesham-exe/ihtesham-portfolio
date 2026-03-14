import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const target = element.getAttribute("data-href");
        if (target) {
          const section = document.querySelector(target);
          section?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="navbar-brand">
          <img src="/images/DP2.png" alt="Profile" className="navbar-avatar" />
          <a href="/#" className="navbar-title" data-cursor="disable">
            Ihtesham A.
          </a>
        </div>
        <a
          href="mailto:afridiihtisham55@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          afridiihtisham55@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
