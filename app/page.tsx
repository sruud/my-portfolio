import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <section className="relative min-h-screen flex flex-col text-white">
      <Intro />
      <AboutMe />
      <Skills />
      {/* Projects */}
      <section id="projects" className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Projects</h2>
      </section>
      {/* Contact put at the bottom remove blog and footer */}
      <section id="contact" className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Contact</h2>
      </section>
    </section>
  );
}
