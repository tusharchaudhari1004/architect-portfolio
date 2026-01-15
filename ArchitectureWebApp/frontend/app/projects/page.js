import { projects } from "../lib/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
