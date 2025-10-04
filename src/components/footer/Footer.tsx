import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import "./footer.css";

const Footer: React.FC = () => {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const currentYear = new Date().getFullYear();

	const navigationLinks = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	const socialLinks = [
		{
			name: "GitHub",
			url: personalInfo.socialLinks.github,
			icon: "🐙",
		},
		{
			name: "LinkedIn",
			url: personalInfo.socialLinks.linkedin,
			icon: "💼",
		},
		{
			name: "Twitter",
			url: personalInfo.socialLinks.twitter || "#",
			icon: "🐦",
		},
	];

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="container">
					<div className="footer-main">
						{/* Brand Section */}
						<div className="footer-brand">
							<h3 className="brand-name">{personalInfo.name}</h3>
							<p className="brand-description">
								{personalInfo.title} passionate about creating amazing digital
								experiences and solving complex problems through clean,
								efficient code.
							</p>
							<div className="footer-social">
								{socialLinks.map((social) => (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="social-icon"
										aria-label={`Visit ${social.name} profile`}
										title={social.name}
									>
										<span>{social.icon}</span>
									</a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div className="footer-section">
							<h4>Quick Links</h4>
							<ul className="footer-links">
								{navigationLinks.map((link) => (
									<li key={link.id}>
										<button
											onClick={() => scrollToSection(link.id)}
											className="footer-link"
										>
											{link.name}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div className="footer-section">
							<h4>Get In Touch</h4>
							<ul className="footer-contact">
								<li>
									<a
										href={`mailto:${personalInfo.email}`}
										className="footer-link"
									>
										📧 {personalInfo.email}
									</a>
								</li>
								<li>
									<a href={`tel:${personalInfo.phone}`} className="footer-link">
										📱 {personalInfo.phone}
									</a>
								</li>
								<li>
									<span className="footer-text">
										📍 {personalInfo.location}
									</span>
								</li>
							</ul>
						</div>

						{/* Resources */}
						<div className="footer-section">
							<h4>Resources</h4>
							<ul className="footer-links">
								<li>
									<a
										href={personalInfo.resume}
										className="footer-link"
										download
									>
										Resume
									</a>
								</li>
								<li>
									<a
										href={personalInfo.socialLinks.github}
										target="_blank"
										rel="noopener noreferrer"
										className="footer-link"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href={personalInfo.socialLinks.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="footer-link"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="footer-bottom">
						<div className="footer-copyright">
							<p>
								© {currentYear} {personalInfo.name}. All rights reserved.
							</p>
							<p className="footer-tagline">
								Built with ❤️ using React & TypeScript
							</p>
						</div>
						<div className="footer-credits">
							<span>Designed & Developed by {personalInfo.name}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Back to Top Button */}
			<button
				className={`back-to-top ${showBackToTop ? "visible" : ""}`}
				onClick={scrollToTop}
				aria-label="Back to top"
				title="Back to top"
			>
				<span>↑</span>
			</button>
		</footer>
	);
};

export default Footer;
