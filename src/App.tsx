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
