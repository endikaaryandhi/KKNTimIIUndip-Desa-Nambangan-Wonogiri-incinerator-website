import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flipbook from "./components/Flipbook";
import PosterSection from "./components/PosterSection";
import RABSection from "./components/RABSection";
import WasteInfo from "./components/WasteInfo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Flipbook />
        <PosterSection />
        <RABSection />
        <WasteInfo />
      </main>
      <Footer />
    </>
  );
}
