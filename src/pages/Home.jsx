import React from "react";

function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-600 mb-6">
        Hi, I'm Soumyabrata Ghosh, a passionate developer focused on building
        innovative and efficient solutions.
      </p>
      <a
        href="#projects"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
      >
        View My Projects
      </a>
    </div>
  );
}

export default Home;
