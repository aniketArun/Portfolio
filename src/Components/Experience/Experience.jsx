import React from "react";
import "./Experience.css";

export default function Experience() {
    return (
        <div className="experience-section" id="exp">
            <div className="box">
                <h1 className="exp-title">
                    Experience
                </h1>
            </div>
            <div className="experience-card">
                <span>
                    <h1>DevOps Intern</h1>
                </span>
                <em>Youth Dreamers Foundation</em>
                <ul>
                    <li>Developed the YDF Android App, improving overall functionality by 20%.</li>
                    <li>Designed and optimized layouts using CSS and media queries, enhancing user engagement by 30%.</li>
                    <li>Implemented Firebase for real-time database management and push notifications, boosting app reliability by 15%.</li>
                </ul>
            </div>
            <div className="experience-card">
                <span>
                    <h1>Data Science Intern</h1>
                </span>
                <em>Capabl India</em>
                <ul>
                    <li>Cleaned and processed 1000+ datasets, applying techniques like regression and visualization to derive insights.</li>
                    <li>Built and trained machine learning models, achieving a classification accuracy of 99%.</li>
                    <li>Improved data-driven decision-making processes by 25% through in-depth analysis and predictive modeling.</li>
                </ul>
            </div>
            <div className="experience-card">
                <span>
                    <h1>Computer System Intern</h1>
                </span>
                <em>Unique Computers</em>
                <ul>
                    <li>Diagnosed and resolved 10+ hardware and network issues, maintaining 95% system uptime.</li>
                    <li>Delivered a scalable and efficient internal project, reducing development time by 15%.</li>
                    <li>Developed Tkinter-based applications integrated with MySQL, increasing operational efficiency by 20%.</li>
                </ul>
            </div>
        </div>
    );
}
