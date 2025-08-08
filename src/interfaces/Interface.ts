export interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    [category: string]: Skill[];
}

interface Link {
    title: string,
    url: string
}

export interface Project {
    slug: string;
    name: string;
    description: string;
    imgs: string[];
    technologies: string[];
    links: Link[];
}

export interface CardIndexProps {
    title: string;
    description: string;
}