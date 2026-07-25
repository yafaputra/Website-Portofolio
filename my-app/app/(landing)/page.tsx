import Hero from "./components/hero/hero";
import About from "./components/hero/about";
import Projects from "./components/hero/project";
import Certificates from "./components/hero/certificates";
import Contact from "./components/hero/contact";
import "../globals.css";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact /> 
    </div>
  );
}