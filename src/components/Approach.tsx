import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your needs and define the project scope.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create intuitive, user-centered design systems.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build scalable, performant digital products.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We deploy and support your solution's success.",
  },
];

const Approach = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Approach
        </motion.h2>

        <div className="relative">
          {/* Horizontal line with animation */}
          <motion.div 
            className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  scale: { type: "spring", stiffness: 200, damping: 15 }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="relative flex flex-col items-center text-center space-y-4 group"
              >
                {/* Step number circle with pulse animation */}
                <motion.div 
                  className="w-24 h-24 rounded-full bg-card border-2 border-foreground flex items-center justify-center text-2xl font-bold z-10 group-hover:border-primary group-hover:shadow-lg transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {step.number}
                  </motion.span>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground leading-relaxed max-w-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
