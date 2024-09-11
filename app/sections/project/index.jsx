"use effect"
import { useRef } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { HeadingDivider } from "components";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import './styles.css'

export function ProjectsSection() {
    const textRef = useRef(null);

    const projects = [
        {
            title: "Cloud-Based Microservice for Automotive Parts Company",
            description:
                "AWS Cognito, ECR, ECS, S3, DynamoDB, Docker, Docker Compose, JEST, HURL",
            image: "/cloudImageProject.png",
            link: "https://youtu.be/oiVnywvvH7E",
        },
        {
            title: "Chronicle App (Social App Journal)",
            description:
                "MERN stack, NEXT, Redux, Figma, GitHub",
            image: "/smallchroniclePhotoProject.png",
            link: "https://chronicle-web-app-eight.vercel.app/",
        }
    ];
    return (
        <LazyMotion features={domAnimation}>
            <section id="project" className="section">
                <HeadingDivider title="Latest projects" />
                <div className="my-5 flex flex-wrap justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="m-4 max-w-xs bg-azul-grisaceo-claro rounded-lg shadow-md">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex justify-center">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="rounded-t-lg max-w-full p-2"
                                />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                                    <p
                                        ref={textRef}
                                        tabIndex="0"
                                        className={`font-light text-lg text-black`}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex justify-center">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
										className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600" style={{backgroundColor: "rgb(49 130 206 / var(--tw-bg-opacity))"}}>Go to the Project</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/jdcastel" target="_blank" rel="noopener noreferrer" 
                    className="flex gap-2 items-center mt-4 px-4 py-2 bg-gray-500 text-white rounded-md transition duration-300 hover:bg-gray-600">More Projects on my Github <FaGithub size={32}/></a>
                </div>
            </section>
        </LazyMotion>
		    );
}
