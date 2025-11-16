import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Architect Firm",
  description: "Architectural studio — premium design & consultation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google fonts (Playfair Display for headings, Inter for body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
