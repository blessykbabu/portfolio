import React from "react";
import img1 from "../image/pic.jpeg";
import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  
    const openResume = () => {
      const resumePath = 'src/files/BLESSY K BABU.pdf';
      
      window.open(resumePath, '_blank');
    };
  return (
    <>
    
      <div className="container-fluid text-center main  animate__animated animate__slideInDown animate__duration-20s animate__delay-2s two-sided-layout">
        <div className="row left-side main2">
          <div className="col tit">
            <h4 className="hey">Hey! I am</h4>
            <h4 className="name m-3">Blessy K Babu</h4>
            <h4 className="dev m-3">Mern Stack Developer</h4>
         
            <p id="text">
              I am a dedicated MERN stack developer with a strong foundation
              gained through a rewarding internship. My passion for software
              development drives my commitment
            </p>
            <p id="text2">
              to excellence. Proficient in MongoDB, Express.js, React, and
              Node.js, I bring hands-on experience and a proactive mindset to
              contribute effectively to dynamic projects.
            </p>
            <button className="open-cv-button" onClick={openResume}>
        Open CV <span className="arrow">&#8594;</span>
      </button>        
        </div>
        </div>
      </div>
    </>
  );
}
