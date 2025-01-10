import './ProjectCard.css'

export default function ProjectCard({icon, title, desciption}){
    return(
        <div className="project-container">
            <img src={icon} alt={title} />
            <div className="description-box">
                <h3>{title}</h3>
                    <ul className="desc">
                    {desciption.map((cont, idx)=><li key={idx}>{cont}</li>)}
                    </ul>
            </div>
        </div>
    );
}