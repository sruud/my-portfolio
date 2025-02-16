"use client";

export default function Projects() {
  const projects = [
    {
      name: "Effective Collective Project",
      description:
        "Effective Collective is a user-friendly, Web3 solution, for voicing and voting within organizations and governments.",
      image: "/devfolio.png",
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
      image: "/chainlink_cert.png",
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
    <section id="projects" className="mx-auto max-w-5xl py-8 px-6">
      <h2 className="mb-6 text-left text-3xl font-bold">Projects</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-800 p-6 text-white shadow-lg transition hover:shadow-2xl"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.image}`}
                alt={project.name}
                className="mb-4 rounded-lg"
              />
            )}
            {/* Project Name */}
            <h3 className="text-2xl font-semibold">{project.name}</h3>

            {/* Project Description */}
            <p className="mt-2 text-sm text-gray-300">{project.description}</p>
            {project.altText && (
              <p className="mt-2 text-sm text-gray-300">{project.altText}</p>
            )}

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                View on GitHub
              </a>
            )}

            {/* Technologies Used */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-gray-700 py-1 px-3 text-xs"
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
                className="mt-5 block rounded-lg bg-green-500 py-2 px-4 text-center font-semibold text-white hover:bg-green-600"
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
                className="mt-5 block rounded-lg bg-green-500 py-2 px-4 text-center font-semibold text-white hover:bg-green-600"
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
