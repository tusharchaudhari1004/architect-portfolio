export default function ServicesPage() { return (
<div className="min-h-screen bg-neutral-900 text-white">
  {/* HERO SECTION */}
  <section className="relative w-full h-[750px] overflow-hidden">
    {/* Background Image */}
    <img src="/services-hero.jpg" className="absolute inset-0 w-full h-full object-cover blur-[1.8px] opacity-100 brightness-105" alt="Services Hero" />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* MOTTO CENTER */}
    <div className="relative z-20 flex items-center justify-center h-full px-8">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* TOP-LEFT QUOTE */}
        <span className="absolute -top-[75px] -left-[70px] text-white/100 font-serif font-semibold text-[120px] drop-shadow-2xl"> &ldquo; </span>

        {/* MOTTO */}
        <h1 className="text-[50px] font-serif font-semibold text-white/90 tracking-wide fade-up drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]">Designing environments that inspire.</h1>

        {/* BOTTOM-RIGHT QUOTE */}
        <span className="absolute -bottom-[120px] -right-[71px] text-white/100 font-serif font-semibold text-[120px] drop-shadow-2xl"> &rdquo; </span>
      </div>
    </div>
  </section>

  {/* SERVICES SECTION */}
  <section className="w-full bg-[#f5f1e8] py-20 px-6 md:px-16">
    <h2 className="text-4xl font-serif font-bold text-center text-black mb-14">Our Services</h2>

    <div className="flex w-full justify-center items-center p-2">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
        {/* CARD 1 */}
        <div className="relative bg-white border rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <div className="p-2 flex justify-center">
            <img className="rounded-md w-full h-48 object-cover" src="/servicePage/service-1.jpg" loading="lazy" alt="Architectural Planning" />
          </div>
          <div className="px-4 pb-3">
            <h5 className="text-xl font-serif font-semibold text-gray-900">Architectural Planning</h5>
            <p className="text-gray-600 text-sm mt-2">Creating detailed architectural plans for clarity and structure.</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative bg-white border rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <div className="p-2 flex justify-center">
            <img className="rounded-md w-full h-48 object-cover" src="/servicePage/service-2.jpg" loading="lazy" alt="Elevation Design" />
          </div>
          <div className="px-4 pb-3">
            <h5 className="text-xl font-serif font-semibold text-gray-900">Elevation Design</h5>
            <p className="text-gray-600 text-sm mt-2">Designing clean and modern elevation concepts.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative bg-white border rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <div className="p-2 flex justify-center">
            <img className="rounded-md w-full h-48 object-cover" src="/servicePage/service-3.jpg" loading="lazy" alt="Interior Design" />
          </div>
          <div className="px-4 pb-3">
            <h5 className="text-xl font-serif font-semibold text-gray-900">Interior Design</h5>
            <p className="text-gray-600 text-sm mt-2">Warm and functional interiors tailored for lifestyle.</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative bg-white border rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <div className="p-2 flex justify-center">
            <img className="rounded-md w-full h-48 object-cover" src="/servicePage/service-4.jpg" loading="lazy" alt="3D Visualization" />
          </div>
          <div className="px-4 pb-3">
            <h5 className="text-xl font-serif font-semibold text-gray-900">3D Visualization</h5>
            <p className="text-gray-600 text-sm mt-2">Realistic 3D renders that bring your ideas to life.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="text-center py-10 text-neutral-600 bg-[#f5f1e8]">© {new Date().getFullYear()} Architect Firm. All Rights Reserved.</footer>
</div>
); }
