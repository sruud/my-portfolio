export default function Skills() {
  return (
    //   TODO add tool tip to icons - clean this up
    // <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
    //   <h2 className="text-3xl font-bold mb-6 text-left">Skills</h2>
    //   <div
    //     id="skills-container"
    //     className="grid grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-8 text-3xl text-gray-300"
    //   >
    // <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
    <section id="skills" className="max-w-4xl px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-left">Skills</h2>
      <div
        id="skills-container"
        className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-3xl text-gray-300 justify-items-center"
      >
        <i className="fa-brands fa-react text-blue-400 text-2xl hover:text-gray-400"></i>
        {/* <i className="fa-brands fa-ts text-blue-400 text-2xl hover:text-gray-400"></i> */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-8 h-8 hover:opacity-80"
        />
        {/* cant find */}
        {/* <i className="fa-brands fa-universal-access text-blue-500 text-2xl hover:text-gray-400"></i> */}
        {/* <i className="fa-brands fa-terminal text-blue-500 text-2xl hover:text-gray-400"></i> */}
        {/* blue */}
        {/* <i className="fa-brands fa-js text-blue-400 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-html5 text-white text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-css3-alt text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-aws text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-figma text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-chrome text-blue-500 text-2xl hover:text-gray-400"></i>
  
          <i className="fa-brands fa-npm text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-node text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-git text-blue-500 text-2xl hover:text-gray-400"></i>
          <i className="fa-brands fa-github text-blue-500 text-2xl hover:text-gray-400"></i> */}
        {/* If I want to add color */}
        <i className="fa-brands fa-js text-yellow-400 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-html5 text-orange-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-css3-alt text-blue-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-sass text-pink-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-node-js text-green-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-python text-yellow-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-git-alt text-red-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-github text-white text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-aws text-orange-400 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-docker text-blue-400 text-3xl hover:text-gray-400"></i>
        <i className="fa-brands fa-figma text-purple-400 text-3xl hover:text-gray-400"></i>
        <i className="fa-solid fa-database text-gray-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-solid fa-vial text-green-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-solid fa-music text-blue-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-solid fa-gamepad text-purple-500 text-3xl hover:text-gray-400"></i>
        <i className="fa-solid fa-network-wired text-yellow-500 text-3xl hover:text-gray-400"></i>{" "}
        <i className="fa-solid fa-robot text-gray-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Selenium */}
        {/* REST APIs */}
        <i className="fa-solid fa-diagram-project text-indigo-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Apollo GraphQL (closest) */}
        {/* <i className="fa-brands fa-js-square text-yellow-500 text-3xl hover:text-gray-400"></i>{" "} */}
        {/* Webpack (closest) */}
        <i className="fa-brands fa-java text-orange-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Java */}
        <i className="fa-brands fa-php text-purple-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* PHP */}
        <i className="fa-solid fa-gem text-red-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Ruby */}
        <i className="fa-solid fa-code text-blue-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* C++ */}
        {/* Objective-C */}
        <i className="fa-solid fa-mobile-screen text-gray-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Xcode (closest) */}
        <i className="fa-brands fa-apple text-gray-500 text-3xl hover:text-gray-400"></i>{" "}
        <i className="fa-brands fa-windows text-blue-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Windows */}
        {/* <i className="fa-brands fa-microsoft text-blue-500 text-3xl hover:text-gray-400"></i>{" "} */}
        {/* Closest to VS Code / Visual Studio */}
        <i className="fa-brands fa-ubuntu text-red-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Ubuntu */}
        <i className="fa-brands fa-linux text-yellow-500 text-3xl hover:text-gray-400"></i>{" "}
        <i className="fa-brands fa-raspberry-pi text-red-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* <i className="fa-brands fa-arduino text-teal-500 text-3xl hover:text-gray-400"></i>{" "} */}
        <i className="fa-brands fa-ethereum text-gray-500 text-3xl hover:text-gray-400"></i>{" "}
        {/* Ethereum */}
        {/* Arduino */}
        {/* Raspberry Pi */}
        {/* <i className="fa-brands fa-linux text-yellow-500 text-3xl hover:text-gray-400"></i>{" "} */}
        {/* Linux */}
      </div>
    </section>
  );
}
