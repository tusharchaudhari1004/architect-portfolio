import Navbar from "@/components/Navbar";

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
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Modern Architecture"
          className="w-full h-[500px] object-cover opacity-90"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 bg-gradient-to-b from-black/60 to-transparent">
          <h1 className="text-5xl font-bold mb-3">
            Crafting Modern Architecture <br /> with Timeless Elegance
          </h1>
          <p className="text-lg max-w-xl opacity-90">
            We design bold, contemporary spaces — from concept to execution.
            Precision, material truth, and thoughtful spatial flow are the heart
            of our practice.
          </p>

          <a
            href="#"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>



      {/* ABOUT SECTION */}
      <section className="px-12 py-16">
        <h2 className="text-3xl font-bold mb-4">About Our Studio</h2>
        <p className="text-neutral-300 max-w-3xl leading-relaxed">
          Our studio blends modern materials with disciplined composition. We
          focus on clarity, constructive detailing and the quality of light to
          produce spaces that last.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-12 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-[1080px] mx-auto bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:scale-[1.02] transition shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-30 object-cover rounded-t-xl"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">
                  Design + execution
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-neutral-500 border-t border-neutral-800">
        © {new Date().getFullYear()} Architect Firm. All Rights Reserved.
      </footer>
    </div>
  );
}
