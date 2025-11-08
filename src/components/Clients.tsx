import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import individualImage from "@/assets/client-individual.jpg";
import startupsImage from "@/assets/client-startups.jpg";
import enterprisesImage from "@/assets/client-enterprises.jpg";

const clientTypes = [
  {
    image: individualImage,
    title: "Individual",
    description: "Entrepreneurs and solo founders building their vision into reality",
  },
  {
    image: startupsImage,
    title: "Startups",
    description: "Growing teams scaling their products and reaching new markets",
  },
  {
    image: enterprisesImage,
    title: "Enterprises",
    description: "Established organizations modernizing their digital infrastructure",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with visionaries across every stage of growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-3">{client.title}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
