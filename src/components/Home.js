import React from "react";

export default function Home() {
  return (
    <>
      <div className="all-wrapper">
        <div className="container">
          <div className="row">
            <div className="offset-1 col">
              <h1>Aris Lamprinidis</h1>
              <h3>Web Developer</h3>
              <p>
                I'm creative designer based in New York, and I'm very passionate
                and dedicated to my work.
              </p>
              <button className="btn">Say Hello</button>
              <button>My Projects</button>
              <div className="social-links">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="" alt="" />
            </div>
            <div className="col-md-6">
              <h1>About Me</h1>
              <p>
                With 10 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
              <button>download Cv</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-skills-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>My expert areas</h1>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own from
                scratch, with an immersive library at your disposal. You can
                express yourself however you want and whenever you free. You can
                customize a template or make your own from scratch, with an
                immersive library at your disposal.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-filters">
                <ul className="m-0 p-0">
                  <li>
                    <a href="#">Skills</a>
                  </li>
                  <li>
                    <a href="#">Experience</a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
