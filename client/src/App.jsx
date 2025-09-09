import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/Layout/Layout';

import gitHubIcon from "../src/assets/images/icons/github-icon.png";
import linkedinIcon from "../src/assets/images/icons/linkedin-icon.png";
import gMailIcon from "../src/assets/images/icons/gmail-icon.png";

import clickAudio from "./assets/audio/click.wav";

function App() {

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


  const [activeButton, setActiveButton] = useState("about");
  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5; // If Volume change feature introduced then control it from here
      audioRef.current.play();
    }
  };

  return (
    <>
      <Layout>

      <audio ref={audioRef} src={clickAudio} preload="auto"/>
          <div className="grid md:grid-cols-2 md:grid-cols-1 gap-8">

            <div className="right-container hidden md:block"></div>
            <div className="left-container">

              <div className="info-card h-96 overflow-y-scroll flex px-2 py-4 rounded-lg bg-[#363C43] text-[#969696]" style={infoCardStyle}>

                <div className="info">
                  <div className="controls rounded-2xl p-1 lg:mx-6 mb-4 grid grid-cols-3" style={controlsStyle}>
                    <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "about" ? activeButtonStyle : {}} onClick={() => {
                      playClickSound();
                      setActiveButton("about");
                    }}>
                      About Me
                    </button>
                    <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "experience" ? activeButtonStyle : {}} onClick={() => {
                      playClickSound();
                      setActiveButton("experience");
                    }}>
                      Experience
                    </button>
                    <button className='py-2 text-sm lg:text-base rounded-xl hover:bg-[#343435] hover:text-white' style={activeButton === "recommended" ? activeButtonStyle : {}} onClick={() => {
                      playClickSound();
                      setActiveButton("recommended");
                    }}>
                      Contact
                    </button>
                  </div>

                  <div className='overflow-y-scroll mx-6 pt-2 pe-2'>
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
                          My approach to development is
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
                                (July 2024 - October 2024)
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
                              <img src={gMailIcon} alt="gmail-icon" className='object-cover w-12' />
                            </a>
                            <br />
                            Visit my GitHub Profile <a href="https://github.com/harshkumar123456" className='text-blue-400 underline'>
                              <img src={gitHubIcon} alt="github-icon" className='object-cover w-12' />
                            </a>
                            <br />
                            Connect @ Linkdin <a href="https://www.linkedin.com/in/harsh-kumar-158634233/" className='text-blue-400 underline'>
                              <img src={linkedinIcon} alt="linkedin-icon" className='object-cover w-12' />
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

            </div>
          </div>

      </Layout>

    </>
  )
}

export default App
