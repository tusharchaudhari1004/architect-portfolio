export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      {/* TOP HERO SECTION */}
      <section className="relative w-full h-[400px] bg-neutral-950 flex items-center px-12">
        <div>
          <h1 className="text-5xl font-bold mb-4">About Our Studio</h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            We are a multidisciplinary architecture studio crafting modern,
            thoughtful, and timeless spaces for residential and commercial clients.
          </p>
        </div>
      </section>

      {/* LIGHT SECTION */}
      <section className="bg-neutral-100 text-neutral-900 py-20 px-12">
        <h2 className="text-4xl font-semibold mb-6">Our Philosophy</h2>
        <p className="text-lg max-w-4xl leading-relaxed">
          We believe architecture should be functional, expressive, and enduring.
          Every project is an opportunity to blend structural clarity,
          material honesty, and spatial harmony. Our team approaches each project
          with meticulous attention to detail, ensuring the design remains
          timeless yet contemporary.
        </p>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-semibold mb-6">Our Process</h2>
          <ul className="space-y-5 text-neutral-300 text-lg">
            <li>• Concept development rooted in client lifestyle</li>
            <li>• Material exploration & spatial sequencing</li>
            <li>• Structural clarity & functional detailing</li>
            <li>• Precision-driven execution</li>
            <li>• Modern, sustainable design approach</li>
          </ul>
        </div>

        <img
          src="/about-1.jpg"
          alt="Studio Process"
          className="w-full h-[400px] object-cover rounded-xl shadow-xl border border-neutral-800"
        />
      </section>

      {/* TEAM SECTION */}
      <section className="bg-neutral-100 text-neutral-900 py-20 px-12">
        <h2 className="text-4xl font-semibold mb-12">The Studio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/team-1.jpg" className="w-full h-[300px] object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Lead Architect</h3>
              <p className="text-neutral-600 mt-2">Founder & Principal</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/team-2.jpg" className="w-full h-[300px] object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Senior Designer</h3>
              <p className="text-neutral-600 mt-2">Concept & Visualization</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/team-3.jpg" className="w-full h-[300px] object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Project Manager</h3>
              <p className="text-neutral-600 mt-2">Execution & Planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-neutral-500 border-t border-neutral-800 bg-neutral-900">
        © {new Date().getFullYear()} Architect Firm. All Rights Reserved.
      </footer>

    </div>
  );
}
