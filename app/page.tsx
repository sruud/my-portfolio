import { BlogPosts } from "app/components/posts";
import Intro from "./components/Intro";

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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
