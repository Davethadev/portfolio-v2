import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#181f2a]">
      <Navbar />
      <Hero />
      <Tools />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
