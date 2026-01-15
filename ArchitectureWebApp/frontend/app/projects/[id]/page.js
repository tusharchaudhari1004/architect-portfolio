"use client";

import { useParams } from "next/navigation";
import { projects } from "../../lib/projects";

export default function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    p => String(p.id) === String(id)
  );

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f5f1e8]">
        <h2 className="text-xl font-semibold">Project not found</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8]">
      <div className="h-80 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>

        <p className="text-neutral-600 mb-6">
          {project.location} • {project.category}
        </p>

        <p className="text-neutral-700 leading-relaxed">
          {project.description}
        </p>
      </div>
    </main>
  );
}
