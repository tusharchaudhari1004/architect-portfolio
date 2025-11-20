

export default function Home() {
  const projects = [
    { title: "Modern Villa V1", img: "/project-1.jpg" },
    { title: "Modern Villa V2", img: "/project-4.jpg" },
    { title: "Modern Villa V3", img: "/project-5.jpg" },
    { title: "Bunglow V1", img: "/project-2.jpg" },
    { title: "Bunglow V2", img: "/project-3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      {/* HERO SECTION */}

        <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
          Crafting Modern Architecture <br /> with Timeless Elegance
        </h1>
        <p className="text-lg mt-4 max-w-2xl drop-shadow-lg">
          We design bold, contemporary spaces — from concept to execution.
          Precision, material truth, and thoughtful spatial flow are the heart of our practice.
        </p>
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Modern Architecture"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-12 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
          

          <a
            href="#"
            className="mt-6 px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-neutral-300 transition drop-shadow-xl"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-12 py-20">
        <h2 className="text-4xl font-bold mb-6">About Our Studio</h2>
        <p className="text-neutral-300 max-w-4xl leading-relaxed text-lg">
          Our studio blends modern materials with disciplined composition. We
          specialize in architecture that balances functionality, material
          honesty, and visual clarity. Every project is a commitment to
          long-lasting quality.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-12 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          PROJECTS
        </h2>

        {/* GRID LAYOUT */}
        <div className="masonry px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="masonry-item rounded-xl overflow-hidden border border-neutral-700 shadow-lg"
            >
              <img
                src={project.img}
                className="w-full object-cover rounded-t-xl"
                style={{ maxHeight: "300px" }}   // resize image
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div>
        <p>
           
        </p>
      </div>
      <footer className="text-center font-bold py-10 text-neutral-500 bg-neutral-900">
  ©     {new Date().getFullYear()} Architect Firm. All Rights Reserved.
      </footer>


    </div>
  );
}
