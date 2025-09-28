// src/components/Hero/Hero.tsx
import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
	const [currentTypeText, setCurrentTypeText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	const typeTexts = [
		"Full Stack Developer",
		"React Specialist",
		"UI/UX Enthusiast",
		"Problem Solver",
	];

	useEffect(() => {
		const typeSpeed = isDeleting ? 50 : 150;
		const currentText = typeTexts[currentIndex];

		const timeout = setTimeout(() => {
			if (!isDeleting) {
				if (currentTypeText.length < currentText.length) {
					setCurrentTypeText(
						currentText.substring(0, currentTypeText.length + 1)
					);
				} else {
					setTimeout(() => setIsDeleting(true), 2000);
				}
			} else {
				if (currentTypeText.length > 0) {
					setCurrentTypeText(
						currentText.substring(0, currentTypeText.length - 1)
					);
				} else {
					setIsDeleting(false);
					setCurrentIndex((prevIndex) =>
						prevIndex === typeTexts.length - 1 ? 0 : prevIndex + 1
					);
				}
			}
		}, typeSpeed);

		return () => clearTimeout(timeout);
	}, [currentTypeText, currentIndex, isDeleting, typeTexts]);

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToProjects = () => {
		const element = document.getElementById("projects");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={styles.hero}>
			<div className={styles.heroContainer}>
				<div className={styles.heroContent}>
					<div className={styles.heroText}>
						<h1 className={`${styles.heroName} fade-in-up`}>
							Hi, I'm{" "}
							<span className={styles.textGradient}>{personalInfo.name}</span>
						</h1>
						<div
							className={`${styles.heroTitle} fade-in-up`}
							style={{ animationDelay: "0.2s" }}
						>
							<span>I'm a </span>
							<span className={styles.typewriter}>
								{currentTypeText}
								<span className={styles.cursor}>|</span>
							</span>
						</div>
						<p
							className={`${styles.heroDescription} fade-in-up`}
							style={{ animationDelay: "0.4s" }}
						>
							{personalInfo.bio}
						</p>
						<div
							className={`${styles.heroButtons} fade-in-up`}
							style={{ animationDelay: "0.6s" }}
						>
							<button className="btn btn-primary" onClick={scrollToContact}>
								Get In Touch
							</button>
							<button className="btn btn-secondary" onClick={scrollToProjects}>
								View My Work
							</button>
						</div>
					</div>
					<div
						className={`${styles.heroVisual} fade-in-up`}
						style={{ animationDelay: "0.8s" }}
					>
						<div className={styles.heroImage}>
							<div className={styles.imagePlaceholder}>
								<div className={styles.codeIcon}>
									<span>&lt;/&gt;</span>
								</div>
							</div>
							<div className={styles.floatingElements}>
								<div
									className={`${styles.floatingElement} react`}
									style={{ animationDelay: "0s" }}
								>
									React
								</div>
								<div
									className={`${styles.floatingElement} ts"`}
									style={{ animationDelay: "1s" }}
								>
									TypeScript
								</div>
								<div
									className={`${styles.floatingElement} node`}
									style={{ animationDelay: "2s" }}
								>
									Node.js
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.heroScrollIndicator}>
					<div className={styles.scrollArrow}>
						<div className={styles.arrowDown}></div>
					</div>
					<span>Scroll Down</span>
				</div>
			</div>
		</section>
	);
};

export default Hero;
