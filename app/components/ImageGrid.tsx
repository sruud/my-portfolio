export default function ImageGrid() {
  const images = [
    "/coworker_steve.webp",
    "/dogcopilot.jpg",
    "/ethdenver_hang_focus.jpg",
    "/guitar.jpg",
    "/djset.jpg",
    "/workstation.jpg",
    "/gg_mm_steve.jpg",
    "/setup_bg_test_lab.webp",
    "/dj.jpg",
    "/namm_music_studio_vr.jpg",
  ];

  return (
    <section id="looking-for" className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div className="absolute top-1/4 left-0 w-full h-7 bg-[#2ff3e0] opacity-75 -z-10"></div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Eye Candy ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        ))}
        {/* 67 px - line height try */}
        <div className="absolute bottom-1/4 left-0 w-full h-7 bg-[#2ff3e0] opacity-75 -z-10"></div>
      </div>
      <div className="looking-for-container space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-left">
          {/* Things I'm Passionate About */}
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
            commitment to delivering high-impact digital experiences—whether in
            media, gaming, music, or technology. My ideal role allows me to
            grow, solve challenging problems, and contribute to products that
            make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
