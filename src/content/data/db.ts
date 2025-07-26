import type { Skills, Project, CardIndexProps } from "../../interfaces/Interface";

export const skills: Skills = {
    Frontend: [
		{ name: "Vue", level: 30 },
		{ name: "Bootstrap", level: 30 },
		{ name: "TailwindCSS", level: 30 },
		{ name: "React", level: 60 },
    ],
    Backend: [
		{ name: "Spring Boot", level: 60 },
		{ name: "PHP", level: 50 },
		{ name: "NodeJS", level: 50 },
    ],
    DB: [
		{ name: "Oracle", level: 30 },
		{ name: "SQL Server", level: 30 },
		{ name: "MySQL", level: 40 },	
    ]
};

export const projects: Project[] = [
	{
		slug: "api_redis_cache",
		name: "Implementacion de API con Redis cache",
		description: "Este proyecto consiste en el desarrollo de una solución backend integral, cuyo objetivo es demostrar la capacidad de construir un pipeline completo de datos en la nube, implementar una API REST segura y optimizada, e integrar mecanismos avanzados como caching dinámico y monitoreo de rendimiento en un entorno de producción.La solución aborda todas las fases esenciales de una arquitectura moderna de servicios en la nube, desde la migración de datos hasta el despliegue automatizado con contenedores.",
		imgs: ["diagram.png", "01.png", "02.png", "03.png", "3.5.png", "04.png"].map(s => "api_redis/" + s),
		technologies: ["FastAPI", "Terraform","SQL Server", "Docker"],
		repository: "https://github.com/josejosepreso/api_redis_cache"
	},
	{
		slug: "ecommerce",
		name: "Infraestructura e-commerce y analitica",
		description: "Una empresa de comercio electronico en crecimiento busca una infraestructura escalable y robusta en la nube para gestionar sus operaciones de venta en linea. La plataforma debe soportar un alto volumen de transacciones, proporcionar una experiencia de usuario fluida a traves de un portal principal, permitir la gestion interna de productos y pedidos mediante un portal de backoffice, y ofrecer capacidades analiticas avanzadas sobre los datos de ventas para la toma de decisiones estrategicas.",
		imgs: ["Arquitectura.png", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png"].map(s => "ecommerce/" + s),
		technologies: ["Terraform"],
		repository: "https://github.com/josejosepreso/ecommerce_webapps"
	},
	{
		slug: "etl",
		name: "ETL",
		description: "Aplicacion de escritorio para realizar operaciones ETL sobre una base de datos Oracle",
		imgs: ["etl0.png", "etl1.png", "etl2.png", "etl3.png"],
		technologies: ["Python", "GTK3", "Oracle"],
		repository: "https://github.com/josejosepreso/ETL"
	},
	{
		slug: "farm",
		name: "Sistema de granja",
		description: "",
		imgs: ["farm0.png"],
		technologies: ["React", "Tailwind", "SQL Server", "Express"],
		repository: "https://github.com/josejosepreso/ProyectoIngenieria-fe"
	},
	{
		slug: "radar",
		name: "radar",
		description: "Herramienta para la creacion de diagramas de ara;a (radar charts)",
		imgs: ["radar0.png"],
		technologies: ["Haskell", "Gloss"],
		repository: "https://github.com/josejosepreso/radar"
	},
	{
		slug: "pizza",
		name: "ThePizzaLab",
		description: "Sistema de un restaurante",
		imgs: ["pizza0.png"],
		technologies: ["Laravel", "Java", "MySQL", "Bootstrap"],
		repository: "https://github.com/josejosepreso/ThePizzaLab-Front"
	},
	{
		slug: "linkedin",
		name: "Clon de LinkedIn",
		description: "Clon funcional de LinkedIn",
		imgs: ["linkedin0.png", "linkedin1.png"],
		technologies: ["HTML", "Bootstrap", "JavaScript", "Java"],
		repository: "https://github.com/josejosepreso/LinkedIn"
	}
]

export const indexCards: CardIndexProps[] = [
	{
		title: "Sobre mi",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]
