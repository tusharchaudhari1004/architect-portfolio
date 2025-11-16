import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-20 lg:px-32 py-5 flex justify-between items-center border-b border-gray-300 dark:border-gray-700 bg-[#f5f1e8] dark:bg-[#0c0c0c]">
      <h1 className="text-2xl font-serif font-bold text-black dark:text-white">Architect Firm</h1>

      <div className="flex gap-6 text-gray-800 dark:text-gray-200 text-lg">
        <Link href="/" className="hover:opacity-80">Home</Link>
        <Link href="/services" className="hover:opacity-80">Services</Link>
        <Link href="/projects" className="hover:opacity-80">Projects</Link>
        <Link href="/booking" className="hover:opacity-80">Book</Link>
        <Link href="/contact" className="hover:opacity-80">Contact</Link>
      </div>
    </nav>
  );
}
