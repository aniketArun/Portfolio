import React, { useState } from "react";
import "./Header.css";
// import "./h1.css"
export default function Header() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="header-container">
            <a href="#" className="icon-btn">Aniket Pendhari</a>
            <button 
                className="menu-toggle" 
                onClick={() => setShowLinks(!showLinks)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            <ul className={`nav-links ${showLinks ? "show" : ""}`}>
                <li className="header-link"><a href="#">Home</a></li>
                <li className="header-link"><a href="#exp">Experience</a></li>
                <li className="header-link"><a href="#skills">Skills</a></li>
                <li className="header-link"><a href="#proj">Projects</a></li>
            </ul>
            <a 
                href={"https://www.linkedin.com/in/aniket-pendhari"} 
                className="contact-btn"
                target="_blank" 
                rel="noopener noreferrer"
            >
                Contact me
            </a>
        </div>
    );
}
