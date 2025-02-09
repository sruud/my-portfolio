// import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <section className="relative min-h-screen flex flex-col text-white">
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
