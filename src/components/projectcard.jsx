function ProjectCard({ project }) {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [modalImage, setModalImage] = useState("");
  return (
    <div className="bg-gradient-to-r from-white to-zinc-300 rounded-lg shadow-md shadow-zinc-900 overflow-hidden lg:m-6 m-1">
      <img
        src={project.image}
        alt={project.title}
        class="w-full h-92 object-cover shadow-md shadow-zinc-900"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>

        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <ul className="mb-4">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="inline-block bg-gray-200 rounded-full text-zinc-900 px-3 py-1 text-sm font-semibold mr-2 mb-2 shadow-sm shadow-zinc-900"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primarypink text-white px-4 py-2 rounded-md hover:bg-zinc-700 shadow-md shadow-zinc-700 transition-colors duration-300"
          >
            Visita
          </a>
        </div>

        {/* <img
          src={project.feedback}
          alt={project.title}
          className="w-full h-92 object-cover shadow-md shadow-zinc-900 mt-5 cursor-pointer grayscale"
          onClick={() => {
            setModalVisible(true);
            setModalImage(project.feedback);
          }}
        />
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-3xl mx-auto">
              <img
                src={modalImage}
                alt={project.title}
                className="max-w-full max-h-full"
              />
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 px-2 py-1 rounded"
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default ProjectCard;
