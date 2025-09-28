import React from "react";
import { projects } from "../data/portfolioData";
import styles from "./projects.module.css";

const Projects: React.FC = () => {
	return (
		<section id="projects" className={styles.projectsSection}>
			<h2>My Projects</h2>
			<div className={styles.projectsGrid}>
				{projects.map((project) => (
					<div key={project.id} className={styles.projectCard}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div className={styles.techStack}>
							{project.techStack.map((tech, index) => (
								<span key={index} className={styles.techBadge}>
									{tech}
								</span>
							))}
						</div>
						<div className={styles.projectLinks}>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
