import {
  Hero,
  SelectedWork,
  About,
  Approach,
  Skills,
  Experience,
  CV,
  Contact,
  Footer,
} from '../components';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Approach />
      <About />
      <SelectedWork />
      <Skills />
      <CV />
      <Contact />
      <Footer />
    </>
  );
};
