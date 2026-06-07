import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Education from "./assets/components/Education";
import Achievements from "./assets/components/Achievements";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;