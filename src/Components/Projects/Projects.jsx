import './Projects.css'
import ProjectCard from "./ProjectCard"
import book from "../../assets/book.jpg"
import milkquality from "../../assets/milkquality.jpg"
import ydf from "../../assets/ydf.png"

export default function Projects() {
    return (
        <div className="project-box" id='proj'>
            <h1>Projects</h1>
            <div className="box-container hidden">
                <ProjectCard icon={milkquality} title={"Milk Quality Prediction"} desciption={["Processed 1000+ datasets and conducted extensive feature engineering for predictive analysis.",
                    "Implemented SVM(88% accuracy) and Random Forest(99% accuracy) for milk quality classification.",
                    " Designed a user-friendly Tkinter-based GUI"]} />
                <ProjectCard icon={book} title={"Publication House WebSite"} desciption={["Implementation using Django", "Built a full-stack web application with a responsive user interface using HTML5 and Bootstrap", "ImplementedcoreDjangofeatures such as Model Forms anddynamic URL routingtoenhancefunctionality."]} />
                <ProjectCard icon={ydf} title={"YDF Mobile App"} desciption={["Developed the YDF Android App", "Implemented Firebase for real-time database management and push"]} />
            </div>
            <span>+ many more</span>
        </div>
    );
}