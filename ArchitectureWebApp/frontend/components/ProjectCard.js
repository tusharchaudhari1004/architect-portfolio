export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        <p className="text-sm text-neutral-600 mb-3">
          {project.location} • {project.category}
        </p>

        <a
          href={`/projects/${project.id}`}
          className="text-sm font-medium underline underline-offset-4"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
