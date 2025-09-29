import React from "react";
import "./underConstruction.css";

export default function UnderConstruction() {
	return (
		<div className="under-construction">
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
						Pardon our mess! We are working hard to give you a better experience
						soon!
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
		</div>
	);
}
