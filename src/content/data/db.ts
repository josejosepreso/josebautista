import type { Skills, Project, CardIndexProps } from "../../interfaces/Interface";

export const skills: Skills = {
    Frontend: [
		{ name: "Vue", level: 30 },
		{ name: "Bootstrap", level: 30 },
		{ name: "Angular", level: 30 },
		{ name: "React", level: 40 },
    ],
    Backend: [
		{ name: "SpringBoot", level: 60 },
		{ name: "PHP", level: 50 },
		{ name: "NodeJS", level: 50 },
    ],
    DB: [
		{ name: "Oracle", level: 30 },
		{ name: "SQL Server", level: 30 },
		{ name: "MySQL", level: 90 },	
    ]
};

export const projects: Project[] = [
	{
		slug: "etl",
		name: "ETL",
		description: "Aplicacion de escritorio para realizar operaciones ETL",
		img: "etl.png",
		technologies: ["Python", "GTK3", "Oracle"],
		repository: "https://github.com/josejosepreso/ETL"
	},
	{
		slug: "linkedin",
		name: "LinkedIn",
		description: "Clon funcional de LinkedIn",
		img: "linkedin.png",
		technologies: ["HTML", "Bootstrap", "JavaScript", "Java"],
		repository: "https://github.com/josejosepreso/LinkedIn"
	},
	{
		slug: "pizza",
		name: "ThePizzaLab",
		description: "Sistema de un restaurante",
		img: "pizza.png",
		technologies: ["Laravel", "Java", "MySQL", "Bootstrap"],
		repository: "https://github.com/josejosepreso/ThePizzaLab-Front"
	},
	{
		slug: "radar",
		name: "radar",
		description: "Herramienta para la creacion de diagramas de ara;a (radar charts)",
		img: "radar.png",
		technologies: ["Haskell", "Gloss"],
		repository: "https://github.com/josejosepreso/radar"
	},
]

export const indexCards: CardIndexProps[] = [
	{
		title: "Sobre mi",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Sobre mi",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]