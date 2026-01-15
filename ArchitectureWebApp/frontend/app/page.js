"use client";
import { useEffect } from "react";

export default function Home() {
  const projects = [
    { title: "Bunglow V1", img: "/project-2.jpg" },
    { title: "Bunglow V2", img: "/project-3.jpg" },
    { title: "Bunglow V3", img: "/project-1.jpg" },
    { title: "Modern Villa V1", img: "/project-4.jpg" },
    { title: "Modern Villa V2", img: "/project-5.jpg" },
  ];

  // Apply stagger animation AFTER mount
  useEffect(() => {
    const items = document.querySelectorAll(".fade-wrapper");
    items.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-black">

      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Modern Architecture"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-12 
                        bg-gradient-to-b from-black/70 via-black/40 to-transparent">
          
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
            Crafting Modern Architecture <br /> with Timeless Elegance
          </h1>

          <p className="text-lg mt-4 max-w-2xl drop-shadow-lg">
            We design bold, contemporary spaces — from concept to execution.
            Precision, material truth, and thoughtful spatial flow are the heart of our practice.
          </p>

          <a
            href="http://localhost:3000/booking"
            className="mt-6 px-8 py-4 bg-white text-black font-semibold text-lg rounded-full 
                       hover:bg-neutral-300 transition drop-shadow-xl w-fit"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-12 py-20">
        <h2 className="text-4xl font-bold mb-6">About Our Studio</h2>
        <p className="text-neutral-700 max-w-4xl leading-relaxed text-lg">
          Our studio blends modern materials with disciplined composition. We
          specialize in architecture that balances functionality, material
          honesty, and visual clarity. Every project is a commitment to
          long-lasting quality.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-12 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div className=" fade-wrapper opacity-0 fade-up" key={index}>
              <div
                className="relative bg-white rounded-lg shadow-md transform transition 
                duration-300 hover:scale-105"
              >    
                <img
                  src={project.img}
                  alt={project.title}
                  className="p-1.5 w-full object-cover rounded-t-xl"
                  style={{ maxHeight: "300px" }}
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-neutral-600">
        © {new Date().getFullYear()} Architect Firm. All Rights Reserved.
      </footer>

    </div>
  );
}
