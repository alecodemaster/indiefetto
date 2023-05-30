function ProjectCard({ project }) {
  return (
    <div className="bg-gradient-to-r from-white to-zinc-300 rounded-lg shadow-md shadow-zinc-900 overflow-hidden lg:m-10 m-1">
      <img src={project.image} alt={project.title} class="w-full h-92 object-cover shadow-md shadow-zinc-900" />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>

        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <ul className="mb-4">
          {project.technologies.map((tech) => (
            <li key={tech} className="inline-block bg-gray-200 rounded-full text-zinc-900 px-3 py-1 text-sm font-semibold mr-2 mb-2 shadow-sm shadow-zinc-900">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primarypink text-white px-4 py-2 rounded-md hover:bg-zinc-700 shadow-md shadow-zinc-700 transition-colors duration-300">
              Visita
            </a>
          </div>      
      </div>
    </div>
  );
}

export default ProjectCard;