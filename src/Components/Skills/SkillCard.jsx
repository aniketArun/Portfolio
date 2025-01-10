import './SkillCard.css'

export default function SkillCard({icon, title}){
    return (
        <div className="container">
            <img src={icon} alt={title}/>
            <p>{title}</p>
        </div>
    );
}