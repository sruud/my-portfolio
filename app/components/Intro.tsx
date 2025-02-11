export default function Intro() {
  return (
    <section id="intro" className="max-w-4xl py-16 px-6">
      {/* Issue on smaller devices iphone xr */}
      {/* <div className="intro flex items-center space-x-6"> */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        {/* GitHub Logo */}
        <img
          src="/gh_profile.jpg"
          alt="Steven Ruud"
          className="h-40 w-40 rounded-full border-4 border-pink-500 shadow-[0_0_15px_5px_rgba(255,20,147,0.8)]"
        />

        {/* Name & Title Container */}
        {/* Issue on smaller devices iphone xr */}
        {/* Need to try flex wrap flex directiion: column  */}
        {/* <div className="flex flex-col"> */}
        {/* orignial ^ */}
        {/* <div className="flex flex-col flex-wrap"> */}
        {/* study this one */}
        <div className="mx-auto flex w-full max-w-[90%] flex-col items-center text-center sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%]">
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
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="cyan" />
                <stop offset="100%" stopColor="purple" />
              </linearGradient>
            </defs>
          </svg>

          {/* Title */}
          {/* Kind of weird prob try and center items */}
          {/* <h1 className="text-2xl sm:text-3xl font-bold text-white font-poppins"> */}
          {/* testing this */}
          <h1 className="font-poppins text-2xl font-bold leading-tight text-white sm:text-3xl">
            Web Developer & Software Engineer
          </h1>
        </div>
      </div>
    </section>
  );
}
