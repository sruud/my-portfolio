export default function ImageGallery() {
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
    <section className="max-w-6xl px-6 py-8 ">
      <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <div className="absolute top-1/4 left-0 -z-10 h-7 w-full bg-[#2ff3e0] opacity-75"></div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Eye Candy ${index + 1}`}
            className="h-auto w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
          />
        ))}
        {/* 67 px - line height try */}
        <div className="absolute bottom-1/4 left-0 -z-10 h-7 w-full bg-[#2ff3e0] opacity-75"></div>
      </div>
    </section>
  );
}
