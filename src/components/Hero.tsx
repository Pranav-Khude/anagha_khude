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
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroImagePlaceholder}></div>
        <div className={styles.nameOverlay}>
          <h1 className={styles.heading}>{personal.tagline}</h1>
          <p className={styles.heroSubtitle}>{personal.title}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.bioSection}>
            <p className={styles.intro}>{personal.intro}</p>
            {personal.introFull.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.introFull}>{paragraph}</p>
            ))}
            <div className={styles.ctas}>
              <Button variant="secondary" onClick={handleScrollToAbout}>Background</Button>
              <Button onClick={handleScrollToWork}>View Selected Work</Button>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.gridPlaceholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};