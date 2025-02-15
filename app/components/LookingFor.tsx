import Image from "next/image";
export default function LookingFor() {
  return (
    <>
      <section id="looking-for" className="max-w-4xl py-8 px-6">
        <div className="looking-for-container space-y-4">
          <h2 className="mb-6 text-left text-3xl font-bold">
            What I'm Looking For
          </h2>
          <div className="looking-for-text-container space-y-4">
            <p>
              I'm looking for a role where I can combine my passion for software
              engineering with my adaptability and curiosity for learning new
              technologies. Whether in frontend development, software quality
              engineering, or web3 land, I thrive in collaborative environments
              where I can contribute to building reliable, user-friendly
              applications.
            </p>
            <p>
              I enjoy working with modern frameworks like React and TypeScript,
              and any chance to use Python, as well as leveraging automation and
              testing best practices to ensure software quality. I'm drawn to
              teams that embrace continuous integration, innovation, and a
              commitment to delivering high-impact digital experiences—whether
              in media, gaming, music, or technology. My ideal role allows me to
              grow, solve challenging problems, and contribute to products that
              make a difference.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl py-8 px-6">
        <Image
          src="/steve_and_frens.jpg"
          alt="Steve and dog coworkers"
          width={1458}
          height={1936}
          priority
        />
      </section>
    </>
  );
}
