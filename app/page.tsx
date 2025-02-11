// import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImageGallery from "./components/ImageGallery";
import LookingFor from "./components/LookingFor";

export default function Page() {
  return (
    <section className="relative min-h-screen flex flex-col text-white">
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <ImageGallery />
      <LookingFor />
      <Contact />
    </section>
  );
}
