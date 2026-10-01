import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Concept from "@/components/landing/Concept";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Concept />
      <footer className="border-t border-line py-8 text-center text-sm text-mist">© 2026 CYC. Connect. Verify. Trust.</footer>
    </main>
  );
}
