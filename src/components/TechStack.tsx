import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "shadcn/ui"],
  },
  {
    category: "Backend & Database",
    items: ["Supabase (PostgreSQL)", "Edge Functions", "Express.js", "tRPC"],
  },
  {
    category: "eCommerce & CMS",
    items: ["WordPress", "WooCommerce", "Shopify", "Magento"],
  },
  {
    category: "Design & Product",
    items: ["Figma", "Framer", "Component-driven responsive systems"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI", "Zapier", "Make (Integromat)", "n8n"],
  },
  {
    category: "Deployment & Infrastructure",
    items: ["DigitalOcean", "AWS", "Vercel", "Netlify", "Cloudflare"],
  },
  {
    category: "Support Tools",
    items: ["Docker", "Node.js", "Git", "Postman", "PNPM", "Cursor for AI-assisted development"],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What We Use
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 } 
              }}
              className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-primary/30 transition-all duration-300"
            >
              <motion.h3 
                className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {tech.category}
              </motion.h3>
              <motion.p 
                className="text-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {tech.items.join(", ")}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
