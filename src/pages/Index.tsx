import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Approach from "@/components/Approach";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Showcase from "@/components/Showcase";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DevNotice from "@/components/DevNotice";

const Index = () => {
  return (
    <main className="min-h-screen">
      <DevNotice />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Approach />
      <WhyUs />
      <Clients />
      <Showcase />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
