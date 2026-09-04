import { getFeaturedProjects } from '../data';
import { ProjectCard } from './ProjectCard';
import { useScrollReveal } from '../hooks';
import styles from './SelectedWork.module.css';

export const SelectedWork = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Selected Work</h2>
        </header>

        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.item} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
