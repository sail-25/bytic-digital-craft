import { motion } from "framer-motion";
import whyUsImage from "@/assets/why-us-image.jpg";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={whyUsImage} 
              alt="Why Choose Bytic Labs" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At <span className="text-foreground font-semibold">Bytic Labs</span>, precision defines our process.
              </p>
              <p>
                We combine design clarity with technical depth — building digital products that are not only beautiful, but measurable, maintainable, and built for growth.
              </p>
              <p>
                Every project begins with understanding: how you work, what you need, and how technology can move you faster. We craft scalable systems, responsive interfaces, and automated workflows that simplify complexity.
              </p>
              <p>
                Our approach is lean, transparent, and detail-driven — a balance between creativity and engineering discipline.
              </p>
              <p className="text-foreground font-medium">
                We don't just build for today; we architect for what's next.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
