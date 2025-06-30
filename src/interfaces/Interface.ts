export interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    [category: string]: Skill[];
}

export interface Project {
    slug: string;
    name: string;
    description: string;
    imgs: string[];
    technologies: string[];
    repository: string;
}

export interface CardIndexProps {
    title: string;
    description: string;
}