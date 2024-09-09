import React, { useEffect, useState } from 'react';

import questionMark from "../src/assets/questionMark.png";
import rectangles from "../src/assets/rectangles.png";
import plusIcon from "../src/assets/plusIcon.png";
import forwardArrowIcon from "../src/assets/forwardArrowIcon.png";
import backwardArrowIcon from "../src/assets/backwardArrowIcon.png";
import placeholderImage from "../src/assets/placeholderImage.png";
import myPhoto from "../src/assets/myPhoto.jpg";
import gitHubIcon from "../src/assets/github-icon.png";
import linkedinIcon from "../src/assets/linkedin-icon.png";
import gMailIcon from "../src/assets/gmail-icon.png";

function App() {

  const mainContainerStyle = {
    "background": "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
    "box-shadow": "10px 10px 40px 10px #00000080",
  };

  const infoCardStyle = {
    "box-shadow": "5.67px 5.67px 3.78px 0px #00000066",
  }

  const lineBreakStyle = {
    "background": "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    "box-shadow": "0px 4px 4px 0px #00000054",
  };

  const controlsStyle = {
    "background": "#171717",
    "box-shadow": "0px 4.96px 12.4px 2.48px #00000040 inset",
  };

  const activeButtonStyle = {
    "background": "#28292F",
    "color": "white",
    "box-shadow": "13.49px 16.87px 67.47px 8.43px #0A0A0A",
    "box-shadow": "-8.43px -16.87px 50.6px -16.87px #485B71",
    "box-shadow": "rgb(10, 10, 10) 14px 16px 67px 8px, rgb(72, 91, 113) -8px -16px 50px -16px",
  };

  const galleryButtonStyle = {
    "box-shadow": "0px 4px 10px 2px #00000040 inset",
  };

  const addImageButtonStyle = {
    "background": "#FFFFFF08",
    "box-shadow": "0 3.26px 3.26px #ffffff26 inset,0 0 48.91px #ffffff0d inset,9px 10px 7.1px #0006,-.5px -.5px 6.9px #ffffff40",
  };

  const forwardBackwardButtonStyle = {
    "background": "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
    "box-shadow": "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96bee7",
  };


  const [activeButton, setActiveButton] = useState("about");

  // State to store uploaded images
  const [images, setImages] = useState([]);

  // Function to handle image selection
  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...imageUrls]); // Append new images to the state
  };


  return (
    <>
      <div className="bg-[#1e1e1e] p-4 min-h-screen">

        <div className="main-container py-14 px-2 md:ps-4 md:pe-12 grid md:grid-cols-2 md:grid-cols-1 gap-8 rounded-3xl" style={mainContainerStyle}>

          <div className="right-container hidden md:block"></div>
          <div className="left-container">

            <div className="info-card flex px-2 py-4 rounded-lg bg-[#363C43] text-[#969696]" style={infoCardStyle}>
              <div className="question-mark-and-reactagles me-3 min-w-[16px] max-h-fit">
                <img src={questionMark} alt="image" className='pb-12' />
                <img src={rectangles} alt="image" />
              </div>

              <div className="info">
                <div className="controls rounded-2xl p-1 lg:me-6 mb-4 grid grid-cols-3" style={controlsStyle}>
                  <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "about" ? activeButtonStyle : {}} onClick={() => {
                    setActiveButton("about");
                  }}>
                    About Me
                  </button>
                  <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "experience" ? activeButtonStyle : {}} onClick={() => {
                    setActiveButton("experience");
                  }}>
                    Experiences
                  </button>
                  <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "recommended" ? activeButtonStyle : {}} onClick={() => {
                    setActiveButton("recommended");
                  }}>
                    Recommended
                  </button>
                </div>

                <div className='max-h-32 overflow-y-scroll pt-2 pe-2'>
                  {
                    activeButton === "about" ?
                      <>
                        <div className="big text-xl">
                          Hi!! Hope you're having good time.
                        </div>
                        <br />
                        Hello, I am <a href="https://github.com/harshkumar123456">
                          <b className='text-2xl'>
                            Harsh Kumar
                          </b>
                        </a> and I am a Full-stack Web Developer with hands-on experience in building scalable web applications.
                        Currently working as an <b>SDE</b> Intern at <i><b>Salahkaar Consultants</b></i>, my approach to development is
                        grounded in continuous learning and adapting to emerging technologies. With a belief in the
                        Cosmopolitan Ideology, I strive to contribute to a diverse and inclusive work environment
                        where ideas from all backgrounds are welcomed and nurtured.
                      </>
                      :
                      activeButton === "experience" ?
                        <>
                          <b>
                            SDE Intern | Salahkaar Consultants
                          </b>
                          <br />
                          <i>
                            <b>
                              (July 2024 - Present)
                            </b>
                          </i>
                          <br />
                          <br />
                          Worked with team of developers and developed the company’s website using React
                          (frontend) and Python, Django (backend). Accelerated project completion by 24%,
                          delivering the website ahead of schedule, enhancing team productivity.
                        </>
                        :
                        <>
                          Hope you liked my work. I welcome any suggestions to improve me as a developer and you can connect me via some of these methods I have given below on GitHub, LinkedIn or Mail. See you there
                          <br />
                          <br />
                          <b>If you want to hire me then why wait further let us connect.</b>
                          <br />
                          <br />
                          Mail me @ <a href="mailto:harshkumar92200@gmail.com" className='text-blue-400 underline'>
                            <img src={gMailIcon} alt="gmail-icon" className='object-cover w-12'/>
                          </a>
                          <br />
                          Visit my GitHub Profile <a href="https://github.com/harshkumar123456" className='text-blue-400 underline'>
                            <img src={gitHubIcon} alt="github-icon" className='object-cover w-12'/>
                          </a>
                          <br />
                          Connect @ Linkdin <a href="https://www.linkedin.com/in/harsh-kumar-158634233/" className='text-blue-400 underline'>
                            <img src={linkedinIcon} alt="linkedin-icon" className='object-cover w-12'/>
                          </a>
                          <br />
                          <br />
                          <br />
                        </>

                  }
                </div>
              </div>

            </div>

            <div className="line-break m-4 mx-8 h-1 rounded-full bg-red-500" style={lineBreakStyle}></div>

            <div className="info-card flex px-2 py-4 rounded-lg bg-[#363C43] text-[#969696]" style={infoCardStyle}>
              <div className="question-mark-and-reactagles me-3 min-w-[16px] max-h-fit">
                <img src={questionMark} alt="image" className='pb-12' />
                <img src={rectangles} alt="image" />
              </div>

              <div className="info">
                <div className="controls rounded-2xl p-1 me-6 mb-4 text-center grid gap-4 md:flex md:flex-wrap md:justify-between">
                  <button className='px-9 py-3 rounded-xl bg-[#171717] text-white' style={galleryButtonStyle}>
                    Gallery
                  </button>

                  <div className="sub-controls flex gap-10 md:gap-8">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                    <button className='flex items-center gap-1 text-white py-2 px-4 rounded-full text-sm text-nowrap' style={addImageButtonStyle} onClick={() => document.getElementById("fileInput").click()}>
                      <img src={plusIcon} alt="plus-icon" />
                      Add Image
                    </button>

                    <div className="backward-forward-buttons flex gap-4">
                      <button className='p-3 px-4 rounded-full' style={forwardBackwardButtonStyle}>
                        <img src={backwardArrowIcon} alt="backward-arrow" width={14} height={14} />
                      </button>

                      <button className='p-3 px-4 rounded-full' style={forwardBackwardButtonStyle}>
                        <img src={forwardArrowIcon} alt="forward-arrow" width={14} height={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='max-h-44 overflow-y-scroll pt-2 pe-2 grid grid-cols-3 gap-4'>
                  <img src={placeholderImage} alt="placeholder-image" className='object-cover rounded-xl' />
                  <img src={placeholderImage} alt="placeholder-image" className='object-cover rounded-xl' />
                  <img src={placeholderImage} alt="placeholder-image" className='object-cover rounded-xl' />
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`uploaded-img-${index}`}
                      className='object-cover rounded-xl'
                    />
                  ))}
                </div>
              </div>

            </div>

            <div className="line-break m-4 mx-8 h-1 rounded-full bg-red-500" style={lineBreakStyle}></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
