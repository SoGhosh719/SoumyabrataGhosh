import { useState, useEffect } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/soumya-ghosh/repos")
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-6">My GitHub Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <div key={repo.id} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold">{repo.name}</h2>
            <p className="text-gray-600">{repo.description || "No description available."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
               className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
