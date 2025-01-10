import "./Hero.css"

export default function Hero(){
    return (
        <div className="hero-container">
            <div className="image-container">
            <img src="src/assets/student.gif" alt="Avatar" className="avatar"/>
            </div>
            <div className="hero-content">
                <h1 className="hero-heading">Hi, I am Aniket Pendhari</h1>
                <p>A passionate software engineer from Maharashtra, India!</p>
            </div>
            <button className="connect-btn">Connect with Me</button>
            <div>
                <a href={'https://www.linkedin.com/in/aniket-pendhari'} target="_blank" rel="noopener noreferrer"><img src="src/assets/linkedin-logo.png" alt="Linkedin" className="social-icons"/></a>
                <a href={"https://www.github.com/aniketArun"} target="_blank" rel="noopener noreferrer"><img src="src/assets/github.png" alt="Github" className="social-icons"/></a>
                <a href={"https://www.leetcode.com/u/aniketpen8478"} target="_blank" rel="noopener noreferrer"><img src="src/assets/code.png" alt="LeetCode" className="social-icons"/></a>
            </div>
        </div>
    );
}