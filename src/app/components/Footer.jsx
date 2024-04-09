import React, { useState, useEffect } from "react";
import "../assets/css/Footer.css";
import HomeIcon from "../assets/images/home-icon.svg";
import LoveIcon from "../assets/images/love-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import SettingIcon from "../assets/images/settings-icon.svg";
import ProfileIcon from "../assets/images/profile-icon.svg";

function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < lastScrollTop || scrollTop === 0);
      setLastScrollTop(scrollTop);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`footer${isVisible ? " visible" : " hidden"}`}>
      <ul>
        <li>
          <a href="/">
            <img src={HomeIcon} alt="Home Icon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={LoveIcon} alt="Love Icon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={SearchIcon} alt="Search Icon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={SettingIcon} alt="Setting Icon" />
          </a>
        </li>
        <li>
          <a href="/user/profile">
            <img src={ProfileIcon} alt="Profile Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
