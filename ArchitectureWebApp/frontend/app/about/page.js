export default function AboutPage() { return (
<div className="min-h-screen bg-[#f5f1e8] text-[#171717]">
  {/* HERO SECTION */}
  <section className="relative w-full h-[400px] bg-[#f5f1e8] flex items-center px-12">
    <div>
      <h1 className="text-5xl font-serif font-bold mb-4 text-[#171717]">About Our Studio</h1>
      <p className="text-lg text-[#444] max-w-2xl">We are a multidisciplinary architecture studio crafting modern, thoughtful, and timeless spaces for residential and commercial clients.</p>
    </div>
  </section>

  {/* PHILOSOPHY SECTION */}
  <section className="bg-white text-[#171717] py-20 px-12">
    <h2 className="text-4xl font-serif font-semibold mb-6">Our Philosophy</h2>
    <p className="text-lg max-w-4xl leading-relaxed">We believe architecture should be functional, expressive, and enduring. Every project is an opportunity to blend structural clarity, material honesty, and spatial harmony. Our team approaches each project with meticulous attention to detail, ensuring the design remains timeless yet contemporary.</p>
  </section>

  {/* PROCESS SECTION */}
  <section className="px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h2 className="text-4xl font-serif font-semibold mb-6 text-[#171717]">Our Process</h2>
      <ul className="space-y-5 text-lg text-[#444]">
        <li>• Concept development rooted in client lifestyle</li>
        <li>• Material exploration & spatial sequencing</li>
        <li>• Structural clarity & functional detailing</li>
        <li>• Precision-driven execution</li>
        <li>• Modern, sustainable design approach</li>
      </ul>
    </div>

    <img src="/about-1.jpg" alt="Studio Process" className="w-full h-[400px] object-cover rounded-xl shadow-xl border border-neutral-300" />
  </section>

  {/* TEAM SECTION */}
  <section className="bg-white text-[#171717] py-20 px-12">
    <h2 className="text-4xl font-serif font-semibold mb-12">The Studio</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-neutral-200">
        <img src="/team-1.jpg" className="w-full h-[300px] object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold">Lead Architect</h3>
          <p className="text-neutral-600 mt-2">Founder & Principal</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-neutral-200">
        <img src="/team-2.jpg" className="w-full h-[300px] object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold">Senior Designer</h3>
          <p className="text-neutral-600 mt-2">Concept & Visualization</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-neutral-200">
        <img src="/team-3.jpg" className="w-full h-[300px] object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold">Project Manager</h3>
          <p className="text-neutral-600 mt-2">Execution & Planning</p>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="text-center py-10 text-neutral-600 bg-[#f5f1e8]">© {new Date().getFullYear()} Architect Firm. All Rights Reserved.</footer>
</div>
); }
  