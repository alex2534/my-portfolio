// src/data/portfolioData.ts
export interface PersonalInfo {
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

export interface Project {
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

export const personalInfo: PersonalInfo = {
	name: "Alex Nascimento",
	title: "Full Stack Developer",
	email: "alex2534@outlook.com",
	phone: "+1 (62) 99130-4986 ",
	location: "Goiania, Brazil",
	bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable applications that solve real-world problems and deliver exceptional user experiences.",
	resume: "/resume.pdf",
	socialLinks: {
		github: "https://github.com/alex2534",
		linkedin: "https://www.linkedin.com/in/alex-r-nascimento-b321101a8/",
		twitter: "https://twitter.com/yourusername",
		portfolio: "https://yourportfolio.com",
	},
};

export const projects: Project[] = [
	{
		id: 1,
		title: "Cadastro de Cliente/Paciente",
		description: "Full-featured cadastro de cliente/paciente com validações",
		longDescription:
			"A comprehensive cadastro system for clients/patients with robust validation and user-friendly interface. Built with React, Node.js, and MongoDB. Features include form validations, data persistence, and responsive design.",
		technologies: ["React", "vite", "TypeScript", "css module"],
		image:
			"https://www.shutterstock.com/image-photo/buyer-signing-vehicle-registration-papers-600nw-2640238187.jpg",
		demoUrl: "https://cadastro-de-cliente-paciente.vercel.app/",
		githubUrl: "https://github.com/alex2534/cadastro-de-cliente-paciente",
		featured: true,
		category: "web",
	},
	// {
	// 	id: 2,
	// 	title: "Task Management App",
	// 	description: "Collaborative task management with real-time updates",
	// 	longDescription:
	// 		"A modern task management application with real-time collaboration features. Built with React, Socket.io, and Firebase. Includes drag-and-drop functionality, team collaboration, and progress tracking.",
	// 	technologies: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
	// 	image: "/projects/taskapp.jpg",
	// 	demoUrl: "https://taskapp-demo.com",
	// 	githubUrl: "https://github.com/yourusername/taskapp",
	// 	featured: true,
	// 	category: "web",
	// },
	// {
	// 	id: 3,
	// 	title: "Weather Dashboard",
	// 	description: "Interactive weather dashboard with forecasts",
	// 	longDescription:
	// 		"A beautiful weather dashboard that provides current weather conditions and forecasts. Features location search, interactive maps, and detailed weather metrics with responsive design.",
	// 	technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
	// 	image: "/projects/weather.jpg",
	// 	demoUrl: "https://weather-demo.com",
	// 	githubUrl: "https://github.com/yourusername/weather",
	// 	featured: false,
	// 	category: "web",
	// },
	// {
	// 	id: 4,
	// 	title: "Mobile Fitness Tracker",
	// 	description: "React Native app for fitness tracking",
	// 	longDescription:
	// 		"A comprehensive fitness tracking mobile application built with React Native. Includes workout planning, progress tracking, nutrition logging, and social features for sharing achievements.",
	// 	technologies: ["React Native", "Expo", "Firebase", "Redux"],
	// 	image: "/projects/fitness.jpg",
	// 	githubUrl: "https://github.com/yourusername/fitness-tracker",
	// 	featured: true,
	// 	category: "mobile",
	// },
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
		title: "Frontend Developer",
		company: "CBCO .",
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
