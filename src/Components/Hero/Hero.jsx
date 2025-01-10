import "./Hero.css"
import avatar from "../../assets/student.gif"
import linkedin from "../../assets/linkedin-logo.png"
import github from "../../assets/github.png"
import leetcode from "../../assets/code.png"
export default function Hero(){
    return (
        <div className="hero-container">
            <div className="image-container">
            <img src={avatar} alt="Avatar" className="avatar"/>
            </div>
            <div className="hero-content">
                <h1 className="hero-heading">Hi, I am Aniket Pendhari</h1>
                <p>A passionate software engineer from Maharashtra, India!</p>
            </div>
            <button className="connect-btn">Connect with Me</button>
            <div>
                <a href={'https://www.linkedin.com/in/aniket-pendhari'} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin" className="social-icons"/></a>
                <a href={"https://www.github.com/aniketArun"} target="_blank" rel="noopener noreferrer"><img src={github} alt="Github" className="social-icons"/></a>
                <a href={"https://www.leetcode.com/u/aniketpen8478"} target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="LeetCode" className="social-icons"/></a>
            </div>
        </div>
    );
}