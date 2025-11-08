import { motion } from "framer-motion";

const partners = [
  {
    name: "Partner 1",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "Partner 2",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
  },
  {
    name: "Partner 3",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=80&fit=crop",
  },
  {
    name: "Partner 4",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop",
  },
  {
    name: "Partner 5",
    logo: "https://images.unsplash.com/photo-1553729784-e91953dec042?w=200&h=80&fit=crop",
  },
  {
    name: "Partner 6",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=80&fit=crop",
  },
];

const Partners = () => {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
