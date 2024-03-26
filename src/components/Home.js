import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("skills");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="hero-wrapper" id="home">
        <div className="container">
          <div className="row">
            <div className="offset-md-1 col-md-6">
              <div className="d-flex align-items-center">
                <h1 className="d-inline-block mb-3 main-color">
                  Aris Lamprinidis
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  className="svg replaced-svg ms-3"
                  style={{ verticalAlign: "sub" }}
                >
                  <path
                    d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                    fill="#FFDD67"
                  ></path>
                  <path
                    d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                    fill="#EBA352"
                  ></path>
                  <path
                    d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                    fill="#FFDD67"
                  ></path>
                  <path
                    d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                    fill="#EBA352"
                  ></path>
                  <path
                    d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                    fill="#FFDD67"
                  ></path>
                  <path
                    d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                    fill="#EBA352"
                  ></path>
                  <path
                    d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                    fill="#FFDD67"
                  ></path>
                  <path
                    d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                    fill="#EBA352"
                  ></path>
                  <path
                    d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                    fill="#FFDD67"
                  ></path>
                  <path
                    d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                    fill="#EBA352"
                  ></path>
                </svg>
              </div>
              <h3 className="job position-relative mb-4">Web Developer</h3>
              <p className="grey-color text">
                I am a web developer based in Athens and I help organizations
                leverage software technologies by turning their ideas into
                well-developed solutions for their business problems.
              </p>
              <div className="d-flex align-items-center">
                <a href="#contact" className="btn-default">
                  Say Hello
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="ms-2"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="white"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <a className="simple-button ms-5" href="#projects">
                  My Works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="svg replaced-svg ms-2"
                  >
                    <path
                      d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                      fill="#12141D"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="social-links d-flex align-items-center mt-5">
                <span className="grey-color font-500">Follow me:</span>
                <ul className="m-0 p-0 d-flex align-items-center">
                  <li className="list-unstyled ms-4">
                    <a
                      href="https://github.com/zeromaxx?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="devicon-github-original colored"></i>
                    </a>
                  </li>
                  <li className="list-unstyled ms-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/aris-lamprinidis-aa7b81236/"
                    >
                      <i className="devicon-linkedin-plain"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="" alt="" />
            </div>
            <div className="col-md-5">
              <h1 className="mb-4 d-inline-block">
                About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="84"
                  viewBox="0 0 86 84"
                  fill="none"
                  className="arrow"
                >
                  <path
                    d="M69.0582 4.99535C65.3229 5.61907 55.8542 10.8508 56.4184 19.5008M56.4184 19.5008C56.5793 21.9679 56.8094 25.1691 59.6334 27.5088C62.587 29.9561 68.4982 24.1091 56.4184 19.5008ZM56.4184 19.5008C49.582 17.0957 34.9948 15.9707 31.3373 30.7119C29.092 42.3255 34.8382 56.3213 37.9206 65.5494C30.8166 54.4724 12.9204 41.5234 3.33571 40.3222"
                    stroke="#FED546"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M67.8098 9.30162L68.8675 4.76205L64.3162 3.75612L64.6426 2.35513L70.5986 3.67151L69.2144 9.61209L67.8098 9.30162Z"
                    fill="#FED546"
                  ></path>
                  <path
                    d="M26.009 78.4559C26.089 77.1822 26.6883 73.8048 28.4447 70.4841"
                    stroke="#FED546"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M4.8413 78.3261C8.24607 74.6684 16.8723 66.8695 24.1393 64.9358"
                    stroke="#FED546"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M55.3976 5.34016C53.6747 5.2429 50.2912 8.86138 51.3227 12.4565"
                    stroke="#FED546"
                    strokeWidth="3"
                  ></path>
                </svg>
              </h1>
              <p className="mb-5">
                As a highly motivated developer with a strong background in
                creating custom websites using JavaScript and PHP, I prioritize
                continuous learning to ensure my skills remain cutting-edge and
                relevant. My goal is to contribute not only my technical
                expertise but also a spirit of positivity and collaboration to a
                company, enhancing services to elevate customer satisfaction.
              </p>
              <a className="btn-white" href="!#">
                Download Cv
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="ms-2"
                  style={{ verticalAlign: "sub" }}
                >
                  <path
                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                    fill="#12141D"
                  ></path>
                  <path
                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                    fill="#12141D"
                  ></path>
                  <path
                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                    fill="#12141D"
                  ></path>
                  <path
                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                    fill="#12141D"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-wrapper" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="mb-4">
                My expert <br />
                <span className="position-relative">areas</span>
              </h1>
              <p className="grey-color font-size-18 font-500">
                I am a creative problem solver. I build fullstack web
                applications. I have highlighted my key technical skills that I
                will bring to your project.
              </p>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="filters">
                <ul className="m-0 p-0 d-flex ">
                  <li
                    className={`list-unstyled ${
                      activeTab === "skills" ? "active" : ""
                    }`}
                  >
                    <a
                      className="main-color"
                      href="!#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("skills");
                      }}
                    >
                      Skills
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        className="ms-3"
                      >
                        <path
                          d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                          fill="#12141D"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className={`list-unstyled ${
                      activeTab === "experience" ? "active" : ""
                    }`}
                  >
                    <a
                      className="main-color"
                      href="!#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("experience");
                      }}
                    >
                      Experience
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        className="ms-3"
                      >
                        <path
                          d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                          fill="#12141D"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li
                    className={`list-unstyled ${
                      activeTab === "education" ? "active" : ""
                    }`}
                  >
                    <a
                      className="main-color"
                      href="!#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabClick("education");
                      }}
                    >
                      Education
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        className="ms-3"
                      >
                        <path
                          d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                          fill="#12141D"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-wrapper">
                <div
                  className={`skillbox ${
                    activeTab === "skills" ? "active-tab" : ""
                  }`}
                >
                  <div>
                    <i className="devicon-laravel-original"></i>
                    <span className="d-block font-500 mt-2">Laravel</span>
                  </div>
                  <div>
                    <i className="devicon-html5-plain"></i>
                    <span className="d-block font-500 mt-2">Html</span>
                  </div>
                  <div>
                    <i className="devicon-css3-plain"></i>
                    <span className="d-block font-500 mt-2">Css</span>
                  </div>
                  <div>
                    <i className="devicon-javascript-plain"></i>
                    <span className="d-block font-500 mt-2">Javascript</span>
                  </div>
                  <div>
                    <i className="devicon-react-original"></i>
                    <span className="d-block font-500 mt-2">React</span>
                  </div>
                  <div>
                    <i className="devicon-php-plain"></i>
                    <span className="d-block font-500 mt-2">PHP</span>
                  </div>
                </div>
                <div
                  className={`experience ${
                    activeTab === "experience" ? "active-tab" : ""
                  }`}
                >
                  <div className="d-flex flex-column ">
                    <div className="content">
                      <div className="year">2023 - Present</div>
                      <div className="company">The Smiling Hippo</div>
                    </div>
                    <h3 className="title">Junior Web Developer</h3>
                  </div>
                </div>

                <div
                  className={`education ${
                    activeTab === "education" ? "active-tab" : ""
                  }`}
                >
                  <div className="d-flex flex-column ">
                    <div className="content">
                      <div className="year">Feb 2022 - Sept 2022</div>
                      <div className="company">
                        500 hours of intensive training
                        <br />
                        organized by Peoplecert
                      </div>
                    </div>
                    <h3 className="title">Web Development Course</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-wrapper" id="projects">
        <div className="container">
          <h1>
            Look at my <br />
            recent projects
          </h1>
          <div className="row">
            <div className="col">
              <Swiper
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/images/tw-home.png" alt="swiper-img" />
                  <h3 className="mb-3">Trustweel Leasing</h3>
                  <p className="font-size-14">
                    A Simplified Car Leasing Web Platform.
                  </p>
                  <a href="!#" className="fullbox-link">
                    {" "}
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/cyberstore-home.png" alt="swiper-img" />
                  <h3 className="mb-3">Cyberstore</h3>
                  <p className="font-size-14">
                    Cyberstore an e-commerce platform for computer hardware
                    components.
                  </p>
                  <a href="!#" className="fullbox-link">
                    {" "}
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/vc-home.png" alt="swiper-img" />
                  <h3 className="mb-3">Vetclinic</h3>
                  <p className="font-size-14">
                    A Comprehensive Veterinary Appointment Platform.
                  </p>
                  <a href="!#" className="fullbox-link">
                    {" "}
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-wrapper position-relative" id="contact">
        <div className="container">
          <div className="content">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h3 className="mb-4 position-relative">
                  Let's work together
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="84"
                    viewBox="0 0 86 84"
                    fill="none"
                    className="arrow"
                  >
                    <path
                      d="M69.0582 4.99535C65.3229 5.61907 55.8542 10.8508 56.4184 19.5008M56.4184 19.5008C56.5793 21.9679 56.8094 25.1691 59.6334 27.5088C62.587 29.9561 68.4982 24.1091 56.4184 19.5008ZM56.4184 19.5008C49.582 17.0957 34.9948 15.9707 31.3373 30.7119C29.092 42.3255 34.8382 56.3213 37.9206 65.5494C30.8166 54.4724 12.9204 41.5234 3.33571 40.3222"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M67.8098 9.30162L68.8675 4.76205L64.3162 3.75612L64.6426 2.35513L70.5986 3.67151L69.2144 9.61209L67.8098 9.30162Z"
                      fill="#FED546"
                    ></path>
                    <path
                      d="M26.009 78.4559C26.089 77.1822 26.6883 73.8048 28.4447 70.4841"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M4.8413 78.3261C8.24607 74.6684 16.8723 66.8695 24.1393 64.9358"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M55.3976 5.34016C53.6747 5.2429 50.2912 8.86138 51.3227 12.4565"
                      stroke="#FED546"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </h3>
                <p>
                  Loved my work and interested in collaborating? I'm just an
                  email away. Contact me to discuss how we can bring your next
                  project to life with a unique digital touch.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-3">
              <span className="d-block title-name">Call:</span>
              <a href="tel:+306937040151">+30 693 70 40 151</a>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
              <span className="d-block title-name">Email:</span>
              <a href="mailto:arislamprinidis@yahoo.com">
                arislamprinidis@yahoo.com
              </a>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
              <div className="social-links d-flex align-items-center justify-content-lg-end">
                <span className="text-white font-500">Follow me:</span>
                <ul className="m-0 p-0 d-flex align-items-center">
                  <li className="list-unstyled ms-4">
                    <a
                      href="https://github.com/zeromaxx?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="devicon-github-original colored"></i>
                    </a>
                  </li>
                  <li className="list-unstyled ms-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/aris-lamprinidis-aa7b81236/"
                    >
                      <i className="devicon-linkedin-plain"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="332"
            height="520"
            viewBox="0 0 332 520"
            fill="none"
            className="line"
          >
            <g clipPath="url(#clip0_1_50)">
              <path
                d="M136.513 15.5182L134.186 19.2863C132.901 21.3674 130.696 22.7969 128.168 23.0517L123.761 23.4959C122.858 23.587 122.585 24.7761 123.357 25.2529L127.125 27.5797C129.206 28.8647 130.635 31.0697 130.89 33.5984L131.334 38.0046C131.425 38.9076 132.615 39.1813 133.091 38.4093L135.418 34.6412C136.703 32.5601 138.908 31.1307 141.437 30.8758L145.843 30.4315C146.746 30.3405 147.02 29.1513 146.248 28.6746L142.48 26.3478C140.399 25.0628 138.969 22.8578 138.714 20.3292L138.27 15.9228C138.179 15.0198 136.99 14.7462 136.513 15.5182ZM126.746 25.1084L128.358 24.9459C131.37 24.6424 134.154 22.9625 135.806 20.2866L136.657 18.9076L136.82 20.5201C137.124 23.5314 138.803 26.3153 141.479 27.9677L142.858 28.8191L141.246 28.9817C138.235 29.2852 135.451 30.9651 133.798 33.641L132.947 35.02L132.784 33.4075C132.481 30.3962 130.801 27.6123 128.125 25.9599L126.746 25.1084Z"
                fill="white"
              ></path>
            </g>
            <g clipPath="url(#clip1_1_50)">
              <path
                d="M161.479 48.0801L158.28 53.2613C156.513 56.1228 153.481 58.0883 150.004 58.4388L143.945 59.0495C142.704 59.1747 142.327 60.8098 143.389 61.4653L148.57 64.6647C151.432 66.4316 153.397 69.4634 153.748 72.9403L154.358 78.999C154.484 80.2406 156.119 80.6169 156.774 79.5553L159.974 74.3742C161.74 71.5127 164.772 69.5473 168.249 69.1968L174.308 68.586C175.549 68.4608 175.926 66.8257 174.864 66.1701L169.683 62.9708C166.822 61.204 164.856 58.1721 164.506 54.6952L163.895 48.6365C163.77 47.3948 162.134 47.0187 161.479 48.0801ZM148.049 61.2667L150.267 61.0432C154.407 60.6259 158.235 58.316 160.507 54.6367L161.678 52.7406L161.901 54.9578C162.319 59.0983 164.628 62.9262 168.308 65.1981L170.204 66.3689L167.987 66.5924C163.846 67.0098 160.018 69.3197 157.746 72.999L156.575 74.8951L156.352 72.6779C155.935 68.5374 153.625 64.7095 149.945 62.4375L148.049 61.2667Z"
                fill="#505050"
              ></path>
            </g>
            <path
              opacity="0.2"
              d="M138.845 318.378C109.818 297.906 94.7726 308.529 100.486 333.365C106.199 358.2 104.877 404.225 80.5875 376.834C56.298 349.442 18.3022 300.769 23.2166 343.711C39.1156 410.075 43.5192 442.324 -1.86691 387.156C-47.253 331.989 -57.4637 367.683 -35.4315 418.279C-13.3994 468.875 -53.7387 444.843 -69.3516 421.718C-93.3594 384.834 -115.646 391.277 -108.434 419.948C-101.222 448.62 -99.1389 500.324 -128.355 468.603C-157.571 436.881 -190.003 410.73 -183.544 447.137C-177.085 483.543 -165.831 536.086 -191.407 510.922C-211.868 490.791 -214.159 487.364 -212.748 488.166"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
            <defs>
              <clipPath id="clip0_1_50">
                <rect
                  width="24.3643"
                  height="24.3643"
                  fill="white"
                  transform="matrix(0.974491 0.224426 0.224426 -0.974491 120.197 36.1023)"
                ></rect>
              </clipPath>
              <clipPath id="clip1_1_50">
                <rect
                  width="33.5009"
                  height="33.5009"
                  fill="white"
                  transform="matrix(0.974491 0.224425 0.224427 -0.974491 139.044 76.3831)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="font-500">
                &copy; 2024 by Aris Lamprinidis. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
