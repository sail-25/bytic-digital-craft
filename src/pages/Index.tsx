import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Approach from "@/components/Approach";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <TechStack />
      <Approach />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
