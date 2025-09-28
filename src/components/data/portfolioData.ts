export const personalInfo = {
	name: "Alex Rodrigues do Nascimento",
	title: "Software Developer",
	bio: "Tech enthusiast with a passion for coding and problem-solving.",
	social: {
		github: "https://github.com/alex2534",
		linkedin: "linkedin.com/in/alex-r-nascimento-b321101a8",
		email: "alex2534@outlook.com",
	},
};

export const projects = [
	{
		id: 1,
		title: "Project One",
		description: "A description of your first project. Technologies used.",
		techStack: ["React", "TypeScript", "Tailwind CSS"],
		githubUrl: "https://github.com/alex2534/my-portfolio",
		liveUrl: "https://project-one.vercel.app",
	},
	// All add more projects here a i build them out as needed
];
// src/data/portfolioData.ts
export interface PersonalInfo1 {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	bio: string;
	resume: string;
	socialLinks: {
		github: string;
		linkedin: string;
		twitter?: string;
		portfolio?: string;
	};
}

export interface Project1 {
	id: number;
	title: string;
	description: string;
	longDescription: string;
	technologies: string[];
	image: string;
	demoUrl?: string;
	githubUrl?: string;
	featured: boolean;
	category: "web" | "mobile" | "desktop" | "other";
}

export interface Skill {
	name: string;
	level: number; // 1-5 scale
	category: "frontend" | "backend" | "tools" | "soft";
}

export interface Experience {
	id: number;
	title: string;
	company: string;
	duration: string;
	description: string[];
	type: "work" | "education";
}

export const personalInfo1: PersonalInfo1 = {
	name: "Your Name",
	title: "Full Stack Developer",
	email: "your.email@example.com",
	phone: "+1 (555) 123-4567",
	location: "Your City, Country",
	bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable applications that solve real-world problems and deliver exceptional user experiences.",
	resume: "/resume.pdf",
	socialLinks: {
		github: "https://github.com/yourusername",
		linkedin: "https://linkedin.com/in/yourusername",
		twitter: "https://twitter.com/yourusername",
		portfolio: "https://yourportfolio.com",
	},
};

export const projects1: Project1[] = [
	{
		id: 1,
		title: "E-commerce Platform",
		description: "Full-featured e-commerce platform with admin dashboard",
		longDescription:
			"A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard with analytics.",
		technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
		image: "/projects/ecommerce.jpg",
		demoUrl: "https://ecommerce-demo.com",
		githubUrl: "https://github.com/yourusername/ecommerce",
		featured: true,
		category: "web",
	},
	{
		id: 2,
		title: "Task Management App",
		description: "Collaborative task management with real-time updates",
		longDescription:
			"A modern task management application with real-time collaboration features. Built with React, Socket.io, and Firebase. Includes drag-and-drop functionality, team collaboration, and progress tracking.",
		technologies: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
		image: "/projects/taskapp.jpg",
		demoUrl: "https://taskapp-demo.com",
		githubUrl: "https://github.com/yourusername/taskapp",
		featured: true,
		category: "web",
	},
	{
		id: 3,
		title: "Weather Dashboard",
		description: "Interactive weather dashboard with forecasts",
		longDescription:
			"A beautiful weather dashboard that provides current weather conditions and forecasts. Features location search, interactive maps, and detailed weather metrics with responsive design.",
		technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
		image: "/projects/weather.jpg",
		demoUrl: "https://weather-demo.com",
		githubUrl: "https://github.com/yourusername/weather",
		featured: false,
		category: "web",
	},
	{
		id: 4,
		title: "Mobile Fitness Tracker",
		description: "React Native app for fitness tracking",
		longDescription:
			"A comprehensive fitness tracking mobile application built with React Native. Includes workout planning, progress tracking, nutrition logging, and social features for sharing achievements.",
		technologies: ["React Native", "Expo", "Firebase", "Redux"],
		image: "/projects/fitness.jpg",
		githubUrl: "https://github.com/yourusername/fitness-tracker",
		featured: true,
		category: "mobile",
	},
];

export const skills: Skill[] = [
	// Frontend
	{ name: "React", level: 5, category: "frontend" },
	{ name: "TypeScript", level: 4, category: "frontend" },
	{ name: "JavaScript", level: 5, category: "frontend" },
	{ name: "Vue.js", level: 4, category: "frontend" },
	{ name: "HTML/CSS", level: 5, category: "frontend" },
	{ name: "Tailwind CSS", level: 4, category: "frontend" },

	// Backend
	{ name: "Node.js", level: 4, category: "backend" },
	{ name: "Express.js", level: 4, category: "backend" },
	{ name: "Python", level: 3, category: "backend" },
	{ name: "PostgreSQL", level: 3, category: "backend" },
	{ name: "MongoDB", level: 4, category: "backend" },

	// Tools
	{ name: "Git", level: 5, category: "tools" },
	{ name: "Docker", level: 3, category: "tools" },
	{ name: "AWS", level: 3, category: "tools" },
	{ name: "Figma", level: 4, category: "tools" },

	// Soft Skills
	{ name: "Problem Solving", level: 5, category: "soft" },
	{ name: "Team Collaboration", level: 5, category: "soft" },
	{ name: "Communication", level: 4, category: "soft" },
	{ name: "Leadership", level: 4, category: "soft" },
];

export const experiences: Experience[] = [
	{
		id: 1,
		title: "Senior Frontend Developer",
		company: "Tech Solutions Inc.",
		duration: "2022 - Present",
		description: [
			"Led development of customer-facing web applications serving 10K+ users",
			"Implemented modern React architecture improving performance by 40%",
			"Mentored junior developers and established coding standards",
			"Collaborated with UX team to create intuitive user interfaces",
		],
		type: "work",
	},
	{
		id: 2,
		title: "Full Stack Developer",
		company: "StartupXYZ",
		duration: "2020 - 2022",
		description: [
			"Built and maintained full-stack web applications using MERN stack",
			"Designed and implemented RESTful APIs handling 1M+ requests daily",
			"Optimized database queries reducing response time by 60%",
			"Participated in agile development process and sprint planning",
		],
		type: "work",
	},
	{
		id: 3,
		title: "Computer Science Degree",
		company: "University of Technology",
		duration: "2016 - 2020",
		description: [
			"Bachelor's in Computer Science with focus on Software Engineering",
			"Relevant coursework: Data Structures, Algorithms, Database Systems",
			"Graduated Magna Cum Laude with 3.8 GPA",
			"Active member of Computer Science Society",
		],
		type: "education",
	},
];
