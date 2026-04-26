import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import FeaturedMenu from "../components/menu/FeaturedMenu";
import InfoSection from "../components/info/InfoSection";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/floating/FloatingButtons";
import ChatWidget from "../components/floating/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <InfoSection />
      <Footer />
      <FloatingButtons />
      <ChatWidget />
    </>
  );
}
