import { getFeaturedProjects } from '../data';
import { ProjectCard, Footer } from '../components';
import { useScrollReveal } from '../hooks';
import styles from './WorkPage.module.css';

export const WorkPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const projects = getFeaturedProjects();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={`${styles.header} ${isVisible ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
            <span className={styles.label}>Portfolio</span>
            <p className={styles.subtitle}>
              Exploring the intersection of urban planning, design, and architecture through strategic projects.
            </p>
          </header>

          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.item} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};