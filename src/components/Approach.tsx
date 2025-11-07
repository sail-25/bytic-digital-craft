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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Approach
        </motion.h2>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center space-y-4"
              >
                {/* Step number circle */}
                <div className="w-24 h-24 rounded-full bg-card border-2 border-foreground flex items-center justify-center text-2xl font-bold z-10">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
