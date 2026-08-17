import { personal } from '../data';
import { Button } from './Button';
import styles from './Hero.module.css';

export const Hero = () => {
  const handleScrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{personal.tagline}</h1>
          <p className={styles.subtitle}>{personal.title}</p>
          <p className={styles.intro}>{personal.intro}</p>
          <p className={styles.degrees}>{personal.degrees}</p>
          <div className={styles.ctas}>
            <Button onClick={handleScrollToWork}>View Selected Work</Button>
            <Button variant="secondary" onClick={handleScrollToAbout}>About Me</Button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={personal.portrait}
            alt={personal.name}
            className={styles.portrait}
          />
        </div>
      </div>
    </section>
  );
};
