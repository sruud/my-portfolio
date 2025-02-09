export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-left">Contact Me</h2>
      <div
        id="socials-container"
        className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-3xl text-gray-300 justify-items-center"
      >
        <a
          href="https://github.com/sruud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-white text-2xl hover:text-gray-400"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/steven-ruud-4ba07764/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-blue-500 text-2xl hover:text-gray-400"></i>
        </a>
        <a
          href="https://www.instagram.com/steveruud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram text-blue-400 text-2xl hover:text-gray-400"></i>
        </a>
        <a
          href="https://x.com/SteveRuud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter text-blue-400 text-2xl hover:text-gray-400"></i>
        </a>
      </div>
    </section>
  );
}
