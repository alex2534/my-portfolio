import React from "react";
import { useState, useEffect } from "react";
import type { Project } from "../data/portfolioData";
import { projects } from "../data/portfolioData";
import "./projects.css";

const Projects: React.FC = () => {
	const [filter, setFilter] = useState<"all" | Project["category"]>("all");
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
		new Set()
	);

	useEffect(() => {
		if (filter === "all") {
			setFilteredProjects(projects);
		} else {
			setFilteredProjects(
				projects.filter((project) => project.category === filter)
			);
		}
	}, [filter]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(
							entry.target.getAttribute("data-index") || "0"
						);
						setVisibleProjects((prev) => new Set([...prev, index]));
					}
				});
			},
			{ threshold: 0.1 }
		);

		const projectElements = document.querySelectorAll(".project-card");
		projectElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [filteredProjects]);

	const handleFilterClick = (newFilter: "all" | Project["category"]) => {
		setFilter(newFilter);
		setVisibleProjects(new Set()); // Reset visibility for animation
	};

	const getFilterLabel = (filterType: string) => {
		const labels: { [key: string]: string } = {
			all: "All Projects",
			web: "Web Apps",
			mobile: "Mobile Apps",
			desktop: "Desktop Apps",
			other: "Other",
		};
		return labels[filterType] || filterType;
	};

	return (
		<section className="projects">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">My Projects</h2>
					<div className="section-divider"></div>
					<p className="section-description">
						Here are some of the projects I've worked on. Each project
						represents a unique challenge and showcases different aspects of my
						development skills.
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="filter-container">
					<div className="filter-buttons">
						{["all", "web", "mobile", "desktop", "other"].map((filterType) => (
							<button
								key={filterType}
								className={`filter-btn ${
									filter === filterType ? "active" : ""
								}`}
								onClick={() =>
									handleFilterClick(filterType as "all" | Project["category"])
								}
							>
								{getFilterLabel(filterType)}
							</button>
						))}
					</div>
				</div>

				{/* Projects Grid */}
				<div className="projects-grid">
					{filteredProjects.map((project, index) => (
						<div
							key={project.id}
							data-index={index}
							className={`project-card ${
								visibleProjects.has(index) ? "visible" : ""
							} ${project.featured ? "featured" : ""}`}
						>
							{project.featured && (
								<div className="featured-badge">
									<span>Featured</span>
								</div>
							)}

							<div className="project-image">
								<img
									src={project.image}
									alt={project.title}
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.src =
											"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxODBIMTc1VjEyMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE1MCAxNDBIMjUwVjE2MEgxNTBWMTQwWiIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K";
									}}
								/>
								<div className="project-overlay">
									<div className="project-links">
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link demo-link"
												aria-label={`View ${project.title} demo`}
											>
												<span>Live Demo</span>
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link code-link"
												aria-label={`View ${project.title} source code`}
											>
												<span>Source Code</span>
											</a>
										)}
									</div>
								</div>
							</div>

							<div className="project-content">
								<div className="project-header">
									<h3 className="project-title">{project.title}</h3>
									<span className={`project-category ${project.category}`}>
										{project.category}
									</span>
								</div>

								<p className="project-description">{project.description}</p>

								<div className="project-tech">
									<div className="tech-stack">
										{project.technologies.map((tech, techIndex) => (
											<span key={techIndex} className="tech-tag">
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="project-footer">
									<div className="project-links-mobile">
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-primary btn-sm"
											>
												Live Demo
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-secondary btn-sm"
											>
												Code
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Empty State */}
				{filteredProjects.length === 0 && (
					<div className="empty-state">
						<div className="empty-state-content">
							<h3>No projects found</h3>
							<p>
								No projects match the selected filter. Try selecting a different
								category.
							</p>
							<button
								className="btn btn-primary"
								onClick={() => handleFilterClick("all")}
							>
								Show All Projects
							</button>
						</div>
					</div>
				)}

				{/* Call to Action */}
				<div className="projects-cta">
					<div className="cta-content">
						<h3>Interested in working together?</h3>
						<p>
							I'm always open to discussing new opportunities and interesting
							projects. Let's build something amazing together!
						</p>
						<button
							className="btn btn-primary"
							onClick={() => {
								const element = document.getElementById("contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
