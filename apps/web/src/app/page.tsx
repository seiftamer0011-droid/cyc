import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Concept from "@/components/landing/Concept";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Concept />
      <Footer />
    </main>
  );
}
