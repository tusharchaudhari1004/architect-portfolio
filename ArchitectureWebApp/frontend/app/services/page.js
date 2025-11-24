export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      
      <section className="relative w-full h-[750px] overflow-hidden">
        <img
          src="/services-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale blur-[3px] opacity-60 brightness-85"
          alt="Services Hero"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-20 flex items-center justify-center h-full px-8">
          <div className="relative max-w-5xl mx-auto text-center">
            <span className="absolute -top-[38px] -left-[80px] text-white/70 font-serif text-[120px] drop-shadow-2xl">
              &ldquo;
            </span>

            <h1 className="text-[50px] font-serif font-semibold text-white tracking-wide fade-up drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]">
              Designing environments that inspire.
            </h1>

            <span className="absolute -bottom-[80px] -right-[80px] text-white/70 font-serif text-[120px] drop-shadow-2xl">
              &rdquo;
            </span>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#f5f1e8] py-20 px-6 md:px-16">
        <h2 className="text-4xl font-serif font-bold text-center text-black mb-14">
          Our Services
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="relative bg-white border rounded-lg shadow-md 
                transform transition duration-500 hover:scale-105 
                w-[300px] mx-auto">
            <img
              className="rounded-md w-full h-48 object-cover"
              src="/servicePage/service-1.jpg"
              alt="Architectural Planning"
            />
            <div className="px-4 pb-3">
              <h5 className="text-xl font-serif font-semibold text-gray-900">
                Architectural Planning
              </h5>
              <p className="text-gray-600 text-sm mt-2">
                Creating detailed architectural plans for clarity and structure.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white border rounded-lg shadow-md 
                transform transition duration-500 hover:scale-105 
                w-[300px] mx-auto">
            <img
              className="rounded-md w-full h-48 object-cover"
              src="/servicePage/service-2.jpg"
              alt="Elevation Design"
            />
            <div className="px-4 pb-3">
              <h5 className="text-xl font-serif font-semibold text-gray-900">
                Elevation Design
              </h5>
              <p className="text-gray-600 text-sm mt-2">
                Designing clean and modern elevation concepts.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border rounded-lg shadow-md 
                transform transition duration-500 hover:scale-105 
                w-[300px] mx-auto">
            <img
              className="rounded-md w-full h-48 object-cover"
              src="/servicePage/service-3.jpg"
              alt="Interior Design"
            />
            <div className="px-4 pb-3">
              <h5 className="text-xl font-serif font-semibold text-gray-900">
                Interior Design
              </h5>
              <p className="text-gray-600 text-sm mt-2">
                Warm and functional interiors tailored for lifestyle.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white border rounded-lg shadow-md 
                transform transition duration-500 hover:scale-105 
                w-[300px] mx-auto">
            <img
              className="rounded-md w-full h-48 object-cover"
              src="/servicePage/service-4.jpg"
              alt="3D Visualization"
            />
            <div className="px-4 pb-3">
              <h5 className="text-xl font-serif font-semibold text-gray-900">
                3D Visualization
              </h5>
              <p className="text-gray-600 text-sm mt-2">
                Realistic 3D renders that bring your ideas to life.
              </p>
            </div>
          </div>

        

        </div>
      </section>
    </div>
  );
}
