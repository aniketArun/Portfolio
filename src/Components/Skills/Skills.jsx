import SkillCard from "./SkillCard";
import './Skills.css'
import c from '../../assets/c.png';
import django from '../../assets/django.png';
import expressjs from '../../assets/expressjs.png';
import java from '../../assets/java.png';
import jsicon from '../../assets/js.png';
import mysql from '../../assets/mysql.png';
import php from '../../assets/php.png';
import nodejs from '../../assets/node-js.png';
import mongodb from '../../assets/mongodb.png';
import python from '../../assets/pythonicon.png';
import react from '../../assets/reacticon.png';


export default function Skills(){
    return (
        <div className="container-skill" id="skills">
            <h1>My Core Skills</h1>
            <div className="skills">
                <SkillCard icon={python} title={"python"}/>
                <SkillCard icon={jsicon} title={"JavaScript"}/>
                <SkillCard icon={nodejs} title={"Node.js"}/>
                <SkillCard icon={expressjs} title={"Express.js"}/>
                <SkillCard icon={react} title={"React.js"}/>
                <SkillCard icon={c} title={"C"}/>
                <SkillCard icon={php} title={"PHP"}/>
                <SkillCard icon={django} title={"Django"}/>
                <SkillCard icon={java} title={"java"}/>
                <SkillCard icon={mysql} title={"SQL"}/>
                <SkillCard icon={mongodb} title={"MongoDB"}/>
            </div>
            <a href="https://drive.google.com/file/d/1i1R2Yr29zimpx7YeKSCUFFywmJ2wGVWT/view?usp=sharing" className="connect-btn" target="_blank">Download My Resume</a>
        </div>
    );
}