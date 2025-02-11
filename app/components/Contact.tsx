export default function Contact() {
  return (
    <>
      <section id="contact" className="max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Contact Me</h2>
        <p className="text-gray-300">
          I’m always open to new opportunities and exciting challenges.
          {/* <a href="#looking-for" className="text-blue-400 hover:underline ml-2">
      Learn more about what I’m looking for →
    </a> */}
          {/* TODO Provide email? */}
        </p>
      </section>
      <section>
        <div
          id="contact-container"
          className="grid grid-cols-4 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-2xl text-gray-300 justify-items-center mb-6"
        >
          <a
            href="https://github.com/sruud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-gray-200 text-2xl hover:text-gray-400"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/steven-ruud-4ba07764/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-[#0077B5] text-2xl hover:text-gray-400"></i>
          </a>
          <a
            href="https://www.instagram.com/steveruud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-[#E4405F] text-2xl hover:text-gray-400"></i>
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
    </>
  );
}
