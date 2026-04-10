import React, { useState, useEffect, useRef } from "react";
import "./AnimatedMenu.css";
import clickAudio from "../AnimatedMenu/click.wav";
import homeAudio from "../../assets/audio/woosh.mp3";
import projectsAudio from "../../assets/audio/woosh.mp3";
import gamesAudio from "../../assets/audio/sci-fi-click.wav";
import coinAudio from "../../assets/audio/coinAudio.mp3";
import applicationsAudio from "../../assets/audio/woosh.mp3";

import homeIcon from "../../assets/images/icons/home-icon.png";
import projectsIcon from "../../assets/images/icons/projects-icon.png";
import gamesIcon from "../../assets/images/icons/games-icon.png";
import rupeeIcon from "../../assets/images/icons/rupee-icon.png";
import downloadsIcon from "../../assets/images/icons/downloads-icon.png";
import { useNavigate } from "react-router-dom";

const AnimatedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.currentTime = 0;
    sound.volume = 0.5; // If Volume change feature is introduced then do it from here
    sound.play();
  };

  const handleIconClick = (index, route, soundSrc) => {
    playSound(soundSrc);
    setClickedIndex(index);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setClickedIndex(null);
      navigate(route);
    }, 800); // Delay to allow audio to play
  };

  const toggleMenu = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelectorAll(".menu-icon").forEach((icon, index) => {
        icon.classList.remove("animate-bounce");
        void icon.offsetWidth;
        setTimeout(() => {
          icon.classList.add("animate-bounce");
        }, index * 100);
      });
    }
  }, [isOpen]);

  const icons = [
    { src: homeIcon, text: "Home", route: "/", sound: homeAudio },
    { src: projectsIcon, text: "Projects", route: "/projects", sound: projectsAudio },
    { src: gamesIcon, text: "Games", route: "/games", sound: gamesAudio },
    { src: rupeeIcon, text: "Support Me", route: "/sponsor", sound: coinAudio },
    // { src: downloadsIcon, text: "Applications", route: "/applications", sound: applicationsAudio },
  ];

  return (
    <>
      <audio ref={audioRef} src={clickAudio} preload="auto" />

      <div
        className="menu-overlay"
        style={{
          animation: isOpen
            ? "scale1to1000x 0.2s linear forwards"
            : "scale1000to1x 0.2s linear forwards",
        }}
      />

      <div className="animated-menu cursor-pointer" onClick={toggleMenu}>
        <div className="grid grid-cols-3 gap-1">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div
                className="w-1 h-1 bg-white rounded-full"
                key={i}
              ></div>
            ))}
        </div>
      </div>

      <div
        className="menu-icons"
        style={{
          animation: isOpen
            ? "heightGrowToHundredPercent 0.4s linear forwards"
            : "heightShrinkToZeroPercent 0.4s linear forwards",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="cursor-pointer mb-4 w-full flex flex-col justify-center items-center"
            onClick={() => handleIconClick(index, icon.route, icon.sound)}
          >
            <div
              className={`menu-icon w-fit transition-all duration-500 ease-in-out ${clickedIndex === index ? "translate-x-4" : ""
                }`}
            >
              <img src={icon.src} alt="icon" width={24} height={24} />
            </div>
            <p className="text-white text-sm">{icon.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedMenu;
