export default function Skills() {
  const skills = [
    { name: "React", iconClass: "fa-brands fa-react", color: "text-blue-400" },
    {
      name: "TypeScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      iconClass: "fa-brands fa-js",
      color: "text-yellow-400",
    },
    {
      name: "HTML5",
      iconClass: "fa-brands fa-html5",
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      iconClass: "fa-brands fa-css3-alt",
      color: "text-blue-500",
    },

    { name: "SASS", iconClass: "fa-brands fa-sass", color: "text-pink-500" },
    {
      name: "Node.js",
      iconClass: "fa-brands fa-node-js",
      color: "text-green-500",
    },
    {
      name: "Python",
      iconClass: "fa-brands fa-python",
      color: "text-yellow-500",
    },
    { name: "Git", iconClass: "fa-brands fa-git-alt", color: "text-red-500" },
    { name: "GitHub", iconClass: "fa-brands fa-github", color: "text-white" },
    { name: "AWS", iconClass: "fa-brands fa-aws", color: "text-orange-400" },
    {
      name: "Docker",
      iconClass: "fa-brands fa-docker",
      color: "text-blue-400",
    },
    {
      name: "Figma",
      iconClass: "fa-brands fa-figma",
      color: "text-purple-400",
    },
    {
      name: "Database",
      iconClass: "fa-solid fa-database",
      color: "text-gray-500",
    },
    { name: "Testing", iconClass: "fa-solid fa-vial", color: "text-green-500" },
    { name: "Music", iconClass: "fa-solid fa-music", color: "text-blue-500" },
    {
      name: "Hardware Testing",
      iconClass: "fa-solid fa-gamepad",
      color: "text-purple-500",
    },
    {
      name: "Networking",
      iconClass: "fa-solid fa-network-wired",
      color: "text-yellow-500",
    },
    {
      name: "Automation",
      iconClass: "fa-solid fa-robot",
      color: "text-gray-500",
    },
    {
      name: "REST APIs",
      iconClass: "fa-solid fa-diagram-project",
      color: "text-indigo-500",
    },
    { name: "Java", iconClass: "fa-brands fa-java", color: "text-orange-500" },
    { name: "PHP", iconClass: "fa-brands fa-php", color: "text-purple-500" },
    { name: "Ruby", iconClass: "fa-solid fa-gem", color: "text-red-500" },
    { name: "C++", iconClass: "fa-solid fa-code", color: "text-blue-500" },
    {
      name: "Mobile Testing",
      iconClass: "fa-solid fa-mobile-screen",
      color: "text-gray-500",
    },
    { name: "macOS", iconClass: "fa-brands fa-apple", color: "text-gray-500" },
    {
      name: "Windows",
      iconClass: "fa-brands fa-windows",
      color: "text-blue-500",
    },
    { name: "Ubuntu", iconClass: "fa-brands fa-ubuntu", color: "text-red-500" },
    {
      name: "Linux",
      iconClass: "fa-brands fa-linux",
      color: "text-yellow-500",
    },
    {
      name: "Raspberry Pi",
      iconClass: "fa-brands fa-raspberry-pi",
      color: "text-red-500",
    },
    {
      name: "Ethereum",
      iconClass: "fa-brands fa-ethereum",
      color: "text-gray-500",
    },
  ];
  return (
    <section id="skills" className="max-w-4xl px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-left">Skills</h2>

      <div
        id="skills-container"
        className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-3xl text-gray-300 justify-items-center"
      >
        {skills.map((skill, index) =>
          skill.imgSrc ? (
            <div key={index} className="relative group">
              <img
                key={index}
                src={skill.imgSrc}
                alt={skill.name}
                className="w-8 h-8 hover:opacity-80"
              />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {skill.name}
              </span>
            </div>
          ) : (
            <div key={index} className="relative group">
              <i
                key={index}
                className={`${skill.iconClass} ${skill.color} text-3xl hover:text-gray-400`}
              ></i>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {skill.name}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
