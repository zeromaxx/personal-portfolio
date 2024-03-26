import React, { useState, useEffect } from "react";

export default function Header() {
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={isScrollValueMoreThanHeaderHeight ? "scrolled" : ""}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-lg-start text-center mb-lg-0 mb-3">
            <a href="/" className="d-inline-block  position-relative">
              <span className="letter-a">A</span>
              <span className="letter-l position-absolute">L</span>
            </a>
          </div>
          <div className="col-lg-5 offset-lg-5">
            <ul className="m-0 p-0 d-flex justify-content-between h-100 align-items-center">
              <li className="list-unstyled">
                <a className="grey-color" href="#home">
                  Home
                </a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="#about">
                  About
                </a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="#skills">
                  Skills
                </a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="#projects">
                  Projects
                </a>
              </li>
              <li className="list-unstyled">
                <a className="grey-color" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
