import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import clientsBg from "@/assets/clients-bg.jpg";

const testimonials = [
  {
    quote: "Bytic Labs transformed our vision into a powerful digital platform. Their expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc",
  },
  {
    quote: "Working with Bytic Labs was seamless. They delivered beyond our expectations and on schedule.",
    author: "Michael Chen",
    role: "Founder, InnovateCo",
  },
  {
    quote: "The team's technical skills and business acumen helped us scale our platform to thousands of users.",
    author: "Emily Rodriguez",
    role: "CTO, GrowthHub",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 px-6 bg-muted/50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${clientsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
