import { motion } from "framer-motion";
import { Globe, Storefront, Palette, Robot } from "phosphor-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Next-gen apps built with Next.js + TypeScript.",
  },
  {
    icon: Storefront,
    title: "eCommerce Systems",
    description: "WooCommerce, Shopify & Magento integrations.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Responsive design systems in Figma + Framer.",
  },
  {
    icon: Robot,
    title: "Automation & AI",
    description: "Smart workflows using OpenAI, Zapier, Make, n8n.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-md transition-all duration-300"
              >
              <service.icon size={40} weight="thin" className="text-foreground" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
