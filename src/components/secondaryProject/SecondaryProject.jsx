import React from "react";
import ReactGA from "react-ga4";
import { Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GA__handleProjectClick = (project) => {
    ReactGA.event({
        category: "Project Click",
        action: `Clicked on ${project.title}`,
    });
};

function SecondaryProject({ project }) {
    return (
        // <div
        //     className="secondary-project"
        //     onClick={() => {
        //         GA__handleProjectClick(project);
        //     }}
        // >
        //     <div className="sec--heading">
        //         <h3>{project.title}</h3>
        //         <div className="sec--links">
        //             {project.githubUrl ? (
        //                 <a
        //                     href={project.githubUrl}
        //                     target="_blank"
        //                     rel="noreferrer"
        //                 >
        //                     <i className="fab fa-github"></i>
        //                 </a>
        //             ) : null}
        //             {project.liveUrl ? (
        //                 <a
        //                     href={project.liveUrl}
        //                     target="_blank"
        //                     rel="noreferrer"
        //                 >
        //                     <i className="fa-solid fa-arrow-up-right-from-square"></i>
        //                 </a>
        //             ) : null}
        //         </div>
        //     </div>
        //     <p className="sec--desc">{project.description}</p>
        //     <div className="sec--tech">
        //         {project.techSelect.map((tech, index) => (
        //             <span
        //                 className="sec-tech-name"
        //                 key={index + tech.tech_name}
        //             >
        //                 {tech.tech_name}
        //             </span>
        //         ))}
        //     </div>
        // </div>
        <Card
            onClick={() => {
                GA__handleProjectClick(project);
            }}
            className="secondary-project"
        >
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={project.imageUrl[0]} // Replace with your image path
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={project.imageUrl[1]} // Replace with your image path
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="footer">
                    <p className="sec--tech">
                        {project.techSelect.map((tech, index) => (
                            <span
                                className="sec-tech-name"
                                key={index + tech.tech_name}
                            >
                                {tech.tech_name}
                            </span>
                        ))}
                    </p>
                    <div className="sec--links">
                        {project.githubUrl ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        ) : null}
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        ) : null}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default SecondaryProject;
