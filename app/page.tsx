import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div className="intro flex items-center space-x-6">
        {/* Add Picture */}
        <img
          src="https://github.com/sruud.png"
          alt="Steven Ruud"
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-[0_0_15px_5px_rgba(255,20,147,0.8)]"
        />

        {/* Name & Title Container */}
        <div className="flex flex-col">
          <svg
            width="300"
            height="80"
            viewBox="0 0 300 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fontSize="36"
              fill="url(#gradient)"
              stroke="cyan"
              strokeWidth="2"
              className="header-text"
            >
              Steven Ruud
            </text>
            {/* Gradient info*/}
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="cyan" />
                <stop offset="100%" stopColor="purple" />
              </linearGradient>
            </defs>
          </svg>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
            Web Developer & Software Engineer
          </h1>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi! I'm Steven. I am a web developer who is particularly good at
            front-end projects and testing software. I built my skills up in a
            time before AI agents were heavily incorporated into our workflows
            and have spent countless hours debugging and troubleshooting issues.
            I have professional experience maintaining legacy code, migrating
            projects to new technologies, and automating repetitive tasks. Over
            the years, I've contributed to Engineering, QA, and Customer Success
            teams, giving me a well-rounded perspective on software development
            and user needs.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
