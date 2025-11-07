import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Building precise, scalable
          <br />
          digital systems and experiences.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Bytic is a tech studio crafting modern web products, automations, and digital infrastructure for teams and brands that move fast.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="mt-4 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105 shadow-sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
