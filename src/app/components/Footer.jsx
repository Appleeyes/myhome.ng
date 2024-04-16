import React from "react";
import "../assets/css/Footer.css";
import HomeIcon from "../assets/images/home-icon.svg";
import LoveIcon from "../assets/images/love-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import SettingIcon from "../assets/images/settings-icon.svg";
import ProfileIcon from "../assets/images/profile-icon.svg";
import HomeActive from "../assets/images/home-active.svg";
import LoveActive from "../assets/images/love-active.svg";
import SearchActive from "../assets/images/search-active.svg";
import SettingActive from "../assets/images/settings-active.svg";
import ProfileActive from "../assets/images/profile-active.svg";

function Footer({ currentRoute }) {
    const getIcon = (route) => {
        switch (route) {
            case "/user/home":
                return currentRoute === "/user/home" ? HomeActive : HomeIcon;
            case "/#bookmark":
                return currentRoute === "/#bookmark" ? LoveActive : LoveIcon;
            case "/#search":
                return currentRoute === "/#search" ? SearchActive : SearchIcon;
            case "/#settings":
                return currentRoute === "/#settings" ? SettingActive : SettingIcon;
            case "/user/profile":
                return currentRoute === "/user/profile" ? ProfileActive : ProfileIcon;
            default:
                return SettingIcon;
        }
    };
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="/user/home" className={currentRoute === "/user/home" ? "active" : ""}>
                    <img src={getIcon("/user/home")} alt="Home Icon" />
                    </a>
                </li>
                <li>
                    <a href="/#bookmark" className={currentRoute === "/#bookmark" ? "active" : ""}>
                        <img src={getIcon("/#bookmark")} alt="Love Icon" />
                    </a>
                </li>
                <li>
                    <a href="/#search" className={currentRoute === "/#search" ? "active" : ""}>
                        <img src={getIcon("/#search")} alt="Search Icon" />
                    </a>
                </li>
                <li>
                    <a href="/#settings" className={currentRoute === "/#settings" ? "active" : ""}>
                        <img src={getIcon("/#settings")} alt="Setting Icon" />
                    </a>
                </li>
                <li>
                    <a href="/user/profile" className={currentRoute === "/user/profile" ? "active" : ""}>
                        <img src={getIcon("/user/profile")} alt="Profile Icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
