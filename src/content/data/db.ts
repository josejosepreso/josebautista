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
		{ name: "Oracle", level: 40 },
		{ name: "Postgres", level: 40 },
		{ name: "SQL Server", level: 30 },
		{ name: "MySQL", level: 40 },
    ]
};

export const projects: Project[] = [
	{
		slug: "farm",
		name: "Sistema administrativo de granja",
		description: "Implementacion backoffice de un sistema para una granja. Incluyendo modulos de inventario, ventas, gestion de usuarios, pedidos, compras de insumos, etc.",
		imgs: ["farm0.png"],
		technologies: ["React", "Tailwind", "SQL Server", "Express"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/ProyectoIngenieria-fe" 
			}
		]
	},
	{
		slug: "pizza",
		name: "ThePizzaLab",
		description: "Aplicativo para un restaurante. Implementacion backoffice y frontoffice para la administracion y acceso a los clientes del sistema.",
		imgs: ["pizza0.png"],
		technologies: ["Laravel", "SpringBoot", "MySQL", "Bootstrap"],
		links: [
			{
				title:"Repositorio frontend",
				url:"https://github.com/josejosepreso/ThePizzaLab-Front" 
			}, 
			{
				title:"Repositorio backend",
				url:"https://github.com/lester1508/Restaurante_backend" 
			}
		]
	},
	{
		slug: "pokeapi",
		name: "PokeAPI - Generador de reportes",
		description: "Este proyecto consiste en la mejora y extension de una aplicacion web existente llamada Generador de Reportes, disenada para crear archivos CSV a partir de datos obtenidos desde una API externa (PokeAPI). La aplicacion se ejecuta integramente en la nube de Azure, integrando un frontend moderno, un backend robusto, procesos asincronos y almacenamiento seguro. El objetivo de esta evolucion fue anadir nuevas funcionalidades, optimizar la experiencia de usuario y mantener la disponibilidad del sistema en un entorno productivo.",
		technologies: ["Terraform", "FastAPI", "SQL Server", "NextJS", "Python"],
		imgs: ["pokeapi.png", "02.png"].map(s => "pokeapi/" + s),
		links: [
			{
				title: "UI desplegada en Azure",
				url: "https://ui-pokequeuejrbc-dev.azurewebsites.net"
			},
			{
				title: "API desplegada en Azure",
				url: "https://api-pokequeuejrbc-dev.azurewebsites.net"
			},
			{
				title: "Repositorio de terraform",
				url: "https://github.com/josejosepreso/poke.queue.terraform"
			},
			{
				title: "Repositorio de scripts SQL",
				url: "https://github.com/josejosepreso/poke.queue.sql"
			},
			{
				title: "Repositorio de API",
				url: "https://github.com/josejosepreso/poke.queue.api"
			},
			{
				title: "Repositorio de UI",
				url: "https://github.com/josejosepreso/poke.queue.ui"
			},
			{
				title: "Repositorio function app",
				url: "https://github.com/josejosepreso/poke.queue.function"
			}
		]
	},
	{
		slug: "vids",
		name: "Sistema de registro de videos",
		description: "",
		imgs: ["poo.png"],
		technologies: ["HTML", "CSS", "JavaScript", "Java"],
		links: [
			{
				title: "Repositorio de github",
				url: "https://github.com/josejosepreso/VidsRegister"
			}
		]
	},
	{
		slug: "spotty",
		name: "Spotty",
		description: "",
		imgs: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"].map(s => "spotty/" + s),
		technologies: ["React Native"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/Frontend_Spotty"
			}
		]
	},
	{
		slug: "ecommerce",
		name: "Infraestructura e-commerce y analitica",
		description: "Una empresa de comercio electronico en crecimiento busca una infraestructura escalable y robusta en la nube para gestionar sus operaciones de venta en linea. La plataforma debe soportar un alto volumen de transacciones, proporcionar una experiencia de usuario fluida a traves de un portal principal, permitir la gestion interna de productos y pedidos mediante un portal de backoffice, y ofrecer capacidades analiticas avanzadas sobre los datos de ventas para la toma de decisiones estrategicas.",
		imgs: ["Arquitectura.png", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png"].map(s => "ecommerce/" + s),
		technologies: ["Terraform"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/ecommerce_webapps" 
			}
		]
	},
	{
		slug: "api_redis_cache",
		name: "Implementacion de API con Redis cache",
		description: "Este proyecto consiste en el desarrollo de una solución backend integral, cuyo objetivo es demostrar la capacidad de construir un pipeline completo de datos en la nube, implementar una API REST segura y optimizada, e integrar mecanismos avanzados como caching dinámico y monitoreo de rendimiento en un entorno de producción.La solución aborda todas las fases esenciales de una arquitectura moderna de servicios en la nube, desde la migración de datos hasta el despliegue automatizado con contenedores.",
		imgs: ["diagram.png", "01.png", "02.png", "03.png", "3.5.png", "04.png"].map(s => "api_redis/" + s),
		technologies: ["FastAPI", "Terraform","SQL Server", "Docker"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/api_redis_cache" 
			}
		]
	},
	{
		slug: "etl",
		name: "ETL",
		description: "Aplicacion de escritorio para realizar operaciones ETL sobre una base de datos Oracle",
		imgs: ["etl0.png", "etl1.png", "etl2.png", "etl3.png"],
		technologies: ["Python", "GTK3", "Oracle"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/ETL" 
			}
		]
	},
	{
		slug: "radar",
		name: "radar",
		description: "Herramienta para la creacion de diagramas de ara;a (radar charts)",
		imgs: ["radar0.png"],
		technologies: ["Haskell", "Gloss"],
		links: [
			{
				title:"Repositorio de github",
				url:"https://github.com/josejosepreso/radar" 
			}
		]
	},
	{
		slug: "linkedin",
		name: "Clon de LinkedIn",
		description: "Clon funcional de LinkedIn",
		imgs: ["linkedin0.png", "linkedin1.png"],
		technologies: ["HTML", "Bootstrap", "JavaScript", "JSP"],
		links: [
			{
				title:"Repositorio de github",
				url: "https://github.com/josejosepreso/LinkedIn" 
			}
		]
	},
	{
		slug: "art",
		name: "Art gallery",
		description: "",
		imgs: ["art.png", "art0.png"],
		technologies: ["HTML", "CSS", "Python", "Docker"],
		links: [
			{
				title:"Repositorio de github",
				url: "https://github.com/josejosepreso/art_gallery"
			},
			{
				title:"Aplicativo desplegado en render",
				url: "https://art-gallery-hz02.onrender.com/"
			}
		]
	},
	{
		slug: "snake",
		name: "Snake Game",
		description: "SDL2 snake game.",
		imgs: [""],
		technologies: ["C", "SDL"],
		links: [
			{
				title:"Repositorio de github",
				url: "https://github.com/josejosepreso/snake"
			},
		]
	}
]

export const indexCards: CardIndexProps[] = [
	{
		title: "Sobre mi",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]
