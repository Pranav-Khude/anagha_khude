import {
  Hero,
  SelectedWork,
  About,
  Approach,
  Skills,
  CV,
  Contact,
  Footer,
} from '../components';

export const HomePage = () => {
  return (
    <>
      <Hero />
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