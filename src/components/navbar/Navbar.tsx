import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import styles from "./navbar.module.css";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = ["home", "about", "projects", "contact"];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
			<div className={styles.navContainer}>
				<div className={styles.navBrand}>
					<button
						onClick={() => scrollToSection("home")}
						className={styles.brandButton}
						aria-label="Go to home section"
					>
						{personalInfo.name.split(" ")[0]}
					</button>
				</div>

				<div className={`${styles.navMenu} ${isMenuOpen ? "active" : ""}`}>
					<button
						className={`${styles.navLink} ${
							activeSection === "home" ? "active" : ""
						}`}
						onClick={() => scrollToSection("home")}
					>
						Home
					</button>
					<button
						className={`${styles.navLink} ${
							activeSection === "about" ? "active" : ""
						}`}
						onClick={() => scrollToSection("about")}
					>
						About
					</button>
					<button
						className={`${styles.navLink} ${
							activeSection === "projects" ? "active" : ""
						}`}
						onClick={() => scrollToSection("projects")}
					>
						Projects
					</button>
					<button
						className={`${styles.navLink} ${
							activeSection === "contact" ? "active" : ""
						}`}
						onClick={() => scrollToSection("contact")}
					>
						Contact
					</button>
				</div>

				<button
					className={`hamburger ${isMenuOpen ? "active" : ""}`}
					onClick={toggleMenu}
					aria-label="Toggle navigation menu"
					aria-expanded={isMenuOpen}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</nav>
	);
}
