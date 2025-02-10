import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImageGrid from "./components/ImageGrid";
import Image from "next/image";

export default function Page() {
  return (
    <section className="relative min-h-screen flex flex-col text-white">
      <Intro />
      <AboutMe />
      {/* <ImageGrid /> */}
      <Skills />
      {/* <ImageGrid /> */}
      <Projects />
      <ImageGrid />
      {/* Still deciding where to place this TODO possibly rename components */}
      <Image
        src="/steve_and_frens.jpg"
        alt="Steve and dog coworkers"
        width={1458}
        height={1936}
        priority
      />
      {/* TODO Maybe center the grid for the social links */}
      <Contact />
    </section>
  );
}
