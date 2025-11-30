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

export interface ProjectCardProps {
    name: string;
    description: string;
    img_path: string;
    repository: string;
    slug: string;
}

export interface CarouselProps {
    repo: string;
    imgs: string[];
}

export interface ProjectSectionProps {
    slug: string;
    name: string;
    description: string;
    technologies: string[];
}

export interface SkillsCategoryProps {
    category: string;
    skills: Skill[];
}

export interface TechnologyLabelProps {
    name: string;
}