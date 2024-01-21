import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ed from "../image/download.png";
export default function Education(){

   const [animateFirst, setAnimateFirst] = useState(false);
   const [animateSecond, setAnimateSecond] = useState(false);
   const [animateThird, setAnimateThird] = useState(false);
   const [animateFourth, setAnimateFourth] = useState(false);

   useEffect(() => {
     // Animate the first container after a delay
     const firstContainerTimeout = setTimeout(() => {
       setAnimateFirst(true);
     }, 1000); // Adjust the delay as needed
 
     // Animate the second container after a delay
     const secondContainerTimeout = setTimeout(() => {
       setAnimateSecond(true);
     }, 2000); 

     const thirdContainerTimeout = setTimeout(() => {
      setAnimateThird(true);
    }, 3000); 

    const fourthContainerTimeout = setTimeout(() => {
      setAnimateFourth(true);
    }, 4000);
 
     // Clear timeouts on component unmount or cleanup
     return () => {
       clearTimeout(firstContainerTimeout);
       clearTimeout(secondContainerTimeout);
       clearTimeout(thirdContainerTimeout);

     };
   }, []);
 return(
    <>
   <div className="container-fluid">
   {/* <h4 className="mb-4 m_head" style={{textAlign:"center",color:"white"}}>Learning Journey</h4> */}
   <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          Learning Journey
          </text>
        </svg>
   <div className="container ">
    <div  className={`container border-bottom ${animateFirst ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#800000"}} className="mb-4 ms-2">2020 - 2022</h5>
    <h4 className="mb-4" style={{color:"gray"}}>MASTER OF COMPUTER APPLICATION</h4>
    <h6 className="mb-4" style={{color:"#800080"}}>APJ Abdul Kalam Technological University </h6>
    </div>

    <div className={`container border-bottom ${animateSecond ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#800000"}} className="mb-4 ms-2">2017 - 2020</h5>
    <h4 className="mb-4" style={{color:"gray"}}>BACHELOR OF COMPUTER APPLICATION</h4>
    <h6 className="mb-4" style={{color:"#800080"}}>Mahatma Gandhi University</h6>
    </div>

    <div className={`container border-bottom ${animateThird ? 'animate__animated animate__slideInLeft' : ''}`}>

    {/* <div className="plus border-bottom p-5"> */}
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#800000"}} className="mb-4 ms-2">2017</h5>
    <h4 className="mb-4" style={{color:"gray"}}> HIGHER SECONDARY EDUCATION</h4>
    <h6 className="mb-4" style={{color:"#800080"}}>The Directorate of Higher Secondary Education</h6>
    </div>

    <div className={`container border-bottom ${animateFourth ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#800000"}} className="mb-4 ms-2">2015</h5>
    <h4 className="mb-4" style={{color:"gray"}}>SECONDARY SCHOOL EDUCATION </h4>
    <h6 className="mb-4" style={{color:"#800080"}}>Kerala State Education Board </h6>
    </div>
   
   </div>
   </div>
    </>
 )   
}