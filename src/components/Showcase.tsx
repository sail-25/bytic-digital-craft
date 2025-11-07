import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowSquareOut } from "phosphor-react";

const showcaseItems = {
  websites: [
    {
      title: "yalf.africa",
      url: "https://yalf.africa",
      description: "Youth leadership platform",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
      title: "publishing-institute.org",
      url: "https://publishing-institute.org",
      description: "Educational publishing institute",
      thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    },
    {
      title: "lead-africa.com",
      url: "https://lead-africa.com",
      description: "Leadership development network",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    },
  ],
  projects: [
    {
      title: "NoFx AI OS",
      url: "https://github.com/NoFxAiOS/nofx",
      description: "AI-powered operating system framework",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    },
    {
      title: "Project Management",
      url: "https://github.com/devaslanphp/project-management",
      description: "Comprehensive project management solution",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ],
};

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <section id="showcase" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Showcase
        </motion.h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="websites" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseItems.websites.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <ArrowSquareOut size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseItems.projects.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <ArrowSquareOut size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Showcase;
