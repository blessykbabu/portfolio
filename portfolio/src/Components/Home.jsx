import React from "react";
import img1 from "../image/pic.jpeg";
import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Portfolio
              </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
            <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                About Me
              </Link>

              <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Education
              </Link>
              <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Skills
              </Link>
              <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* <div className="container text-center main m-3 animate__animated animate__slideInDown animate__duration-20s animate__delay-2s"> */}
      {/* <div className="row">
          <div className="col img">
            <img src={img1} height={300} width={300} />
          </div>

          </div> */}
      {/* <div className="row" >
          <div className="col " style={{ color: "black" }}>
            <h4 className="hey" style={{ color: "black" }}>Hey! I am</h4> */}
      {/* <div className="wrapper one">
        <div class="drop-main">
            <div className="d">H</div>
            <div className="r">e</div>
            <div className="o">y</div>
            <div className="p">!</div>
        </div>
    </div> */}
      {/* <h4 className="name" style={{ color: "black" }}>Blessy K Babu</h4>
            <h4 className="dev" >Mern Stack Developer</h4> */}
      {/* <p>I hold a Master's degree in Computer Applications and am deeply passionate about the field of development. With a solid foundation in MCA, I am eager to apply my skills and contribute to innovative projects, driven by a fervent commitment to excellence in software development</p> */}

      {/* <p id="text">
              As a MCA graduate with a strong foundation, I am deeply passionate
              about the developer field. My hands-on experience includes an
              internship in MERN stack, </p>
              <p id="text2">where I honed my skills and am now
              poised to contribute to cutting-edge projects with a commitment to
              excellence in software development.
            </p> */}
      {/* <p id="text">I am a dedicated MERN stack developer with a strong foundation gained through a rewarding internship. My passion for software development drives my commitment </p>
            <p id="text2">to excellence. Proficient in MongoDB, Express.js, React, and Node.js, I bring hands-on experience and a proactive mindset to contribute effectively to dynamic projects</p>
          </div>
        </div>
      </div> */}

      <div className="container-fluid text-center main  animate__animated animate__slideInDown animate__duration-20s animate__delay-2s two-sided-layout">
        <div className="row left-side">
          <div className="col tit">
            <h4 className="hey">Hey! I am</h4>
            <h4 className="name m-3">Blessy K Babu</h4>
            <h4 className="dev m-3">Mern Stack Developer</h4>
         
            <p id="text">
              I am a dedicated MERN stack developer with a strong foundation
              gained through a rewarding internship. My passion for software
              development drives my commitment{" "}
            </p>
            <p id="text2">
              to excellence. Proficient in MongoDB, Express.js, React, and
              Node.js, I bring hands-on experience and a proactive mindset to
              contribute effectively to dynamic projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
