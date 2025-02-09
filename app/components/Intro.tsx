export default function Intro() {
  return (
    <section id="intro" className="max-w-4xl px-6 py-16">
      <div className="intro flex items-center space-x-6">
        {/* GitHub Logo */}
        <img
          src="/gh_profile.jpg"
          alt="Steven Ruud"
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-[0_0_15px_5px_rgba(255,20,147,0.8)]"
        />

        {/* Name & Title Container */}
        <div className="flex flex-col">
          {/* Name with SVG Text */}
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
            {/* Gradient Fill */}
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
    </section>
  );
}
