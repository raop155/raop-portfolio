import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Hero from '../components/landing/Hero';
import Projects from '../components/landing/Projects';

const Landing = ({ setCurrentSection }) => {
  return (
    <div>
      <Hero setCurrentSection={setCurrentSection} />
      <Projects setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default Landing;
