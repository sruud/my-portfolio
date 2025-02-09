"use client";

export default function Projects() {
  const projects = [
    {
      name: "Effective Collective Project",
      description:
        "Effective Collective is a user-friendly, Web3 solution, for voicing and voting within organizations and governments.",
      image: "", // Replace with actual image
      github: "https://github.com/marcbal77/effective-collective",
      devfolio: "https://devfolio.co/projects/effective-collective-c920",
      tech: [
        "React",
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Figma",
        "Hardhat",
        "daisyUI",
        "Wagmi",
        "RainbowKit",
        "Viem",
        "Scaffoldeth.io",
        "oasis sapphire",
      ],
    },
    {
      name: "Chainlink Bootcamp April 2024 - Certificate of Completion",
      description:
        "This POAP certifies that the individual has successfully participated and completed all the tasks in the Chainlink Bootcamp on April 2024, for 20 hours in 10 days and two weeks.",
      altText: "Participants learned: ",
      //   image: "https://assets.poap.xyz/b7c2176d-f68a-451b-939e-f21f03576495.png",
      //   image: "/Chainlink_Certificate.png",
      image: "",
      drop: "https://poap.gallery/drops/174346",
      poap: "https://collectors.poap.xyz/token/7138695",
      tech: [
        "​Blockchain concepts and Wallets",
        "​Solidity Fundamentals",
        "ERC20 Tokens and Chainlink Data Feeds",
        "​Cross Chain Tokens using Chainlink CCIP",
        "​Mentoring session with the Chainlink community",
        "​NFTs and Chainlink Automation",
        "​Chainlink CCIP in cross-chain dApps",
        "​Random Numbers using Chainlink VRF",
        "​Chainlink Functions to access off-chain data",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      {/* <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2> */}
      <h2 className="text-3xl font-bold mb-6 text-left">Projects</h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4"
              />
            )}
            {/* Project Name */}
            <h3 className="text-2xl font-semibold">{project.name}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            {project.altText && (
              <p className="text-sm text-gray-300 mt-2">{project.altText}</p>
            )}

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                View on GitHub
              </a>
            )}

            {/* Technologies Used */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Conditionally Render Links */}
            {project.devfolio && (
              <a
                href={project.devfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center"
              >
                View on Devfolio
              </a>
            )}
            {project.poap && (
              <a
                href={project.drop}
                // href={project.poap}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center"
              >
                View POAP Details
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
