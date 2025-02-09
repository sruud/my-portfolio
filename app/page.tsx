import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

export default function Page() {
  return (
    <section>
      {/* <div className="intro flex items-center space-x-6">

      </div> */}
      {/* Remove */}
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1> */}
      {/* Create new component and move this to the to an about me section */}
      {/* <p className="mb-4">
        {`Hi! I'm Steven. I am a web developer who is particularly good at
            front-end projects and testing software. I built my skills up in a
            time before AI agents were heavily incorporated into our workflows
            and have spent countless hours debugging and troubleshooting issues.
            I have professional experience maintaining legacy code, migrating
            projects to new technologies, and automating repetitive tasks. Over
            the years, I've contributed to Engineering, QA, and Customer Success
            teams, giving me a well-rounded perspective on software development
            and user needs.`}
      </p> */}
      <Intro />
      <AboutMe />
      {/* Skills */}
      <section className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Skills</h2>
        <div
          id="skills-container"
          className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-3xl text-gray-300 justify-items-center"
        >
          <i className="fa-brands fa-react text-blue-400 text-2xl hover:text-gray-400"></i>
          {/* <i className="fa-brands fa-ts text-blue-400 text-2xl hover:text-gray-400"></i> */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="w-8 h-8 hover:opacity-80"
          />
        </div>
      </section>
      {/* Projects */}
      <section className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Projects</h2>
      </section>
      {/* Contact put at the bottom remove blog and footer */}
      <section className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Contact</h2>
      </section>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
