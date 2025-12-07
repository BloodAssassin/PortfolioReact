import easyKitchenThumb from "../assets/Projects/EasyKitchenLab/EasyKitchenLabThumbnail.png";
import taglientThumb from "../assets/Projects/TaglientGames/TaglientGamesThumbnail.png";
import fermicodingThumb from "../assets/Projects/Fermicoding/FermicodingThumbnail.png";

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  screenshots: string[];
  technologies: string[];
  projectUrl: string;
  githubUrl: string | null;
  featured: boolean | false;
}

export const projects: Project[] = [
  {
    title: "Easy Kitchen Lab",
    description:
      "Full-stack e-commerce solution built with React, PHP, and MySQL. Features user authentication, shopping cart, and payment integration.",
    thumbnail: easyKitchenThumb,
    screenshots: [],
    technologies: ["React", "PHP", "MySQL", "Stripe API"],
    projectUrl: "https://easykitchenlab.com",
    githubUrl: null,
    featured: true,
  },
  {
    title: "Fermicoding",
    description:
      "Fermicoding official website.",
    thumbnail: fermicodingThumb,
    screenshots: [],
    technologies: ["React", "PHP", "MySQL", "Stripe API"],
    projectUrl: "https://easykitchenlab.com",
    githubUrl: null,
    featured: true,
  },
  {
    title: "Taglient Games",
    description:
      "Custom CMS built with .NET Core and React. Includes role-based permissions, content scheduling, and SEO optimization.",
    thumbnail: taglientThumb,
    screenshots: [],
    technologies: [".NET Core", "React", "SQL Server"],
    projectUrl: "https://taglientgames.com",
    githubUrl: "https://github.com/milosristic65/TaglientGames",
    featured: true,
  },
];
