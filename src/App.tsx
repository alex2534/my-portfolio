// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<main>
					<div className="under-construction">
						<div className="floating-tools">
							<div className="floating-tool">🔧</div>
							<div className="floating-tool">⚙️</div>
							<div className="floating-tool">🛠️</div>
							<div className="floating-tool">💻</div>
						</div>

						<div className="construction-content">
							<div className="construction-icon">🚧</div>

							<h1 className="construction-title">Under Construction</h1>

							<h3 className="construction-subtitle">
								Pardon our mess! We are working hard to give you a better
								experience soon!
							</h3>

							<div className="construction-features">
								<div className="feature-item">
									<div className="feature-icon">⚡</div>
									<h4 className="feature-title">Lightning Fast</h4>
									<p className="feature-description">
										Optimized for speed and performance
									</p>
								</div>

								<div className="feature-item">
									<div className="feature-icon">📱</div>
									<h4 className="feature-title">Responsive Design</h4>
									<p className="feature-description">
										Perfect on all devices and screens
									</p>
								</div>

								<div className="feature-item">
									<div className="feature-icon">🎨</div>
									<h4 className="feature-title">Modern UI</h4>
									<p className="feature-description">
										Clean and intuitive user interface
									</p>
								</div>
							</div>

							<div className="construction-progress">
								<div className="progress-label">
									<span>Development Progress</span>
									<span>75%</span>
								</div>
								<div className="progress-bar">
									<div className="progress-fill"></div>
								</div>
							</div>

							<div className="construction-cta">
								<button
									className="construction-btn"
									onClick={() => {
										const element = document.getElementById("contact");
										if (element) element.scrollIntoView({ behavior: "smooth" });
									}}
								>
									Get Notified When Ready
								</button>
							</div>
						</div>
					</div>
					<section id="home">
						<Hero />
					</section>
					<section id="about">
						<About />
					</section>
					<section id="projects">
						<Projects />
					</section>
					<section id="contact">
						<Contact />
					</section>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
