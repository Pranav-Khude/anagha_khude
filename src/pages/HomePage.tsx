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
      <SelectedWork />
      <About />
      <Skills />
      <CV />
      <Contact />
      <Footer />
    </>
  );
};
