import { Link } from 'react-router-dom';
import type { Project } from '../data';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.coverImage}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.location}>{project.location}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.tags}>
          {project.discipline.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.description}>{project.shortDescription}</p>
      </div>
    </Link>
  );
};
