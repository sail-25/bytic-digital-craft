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
    },
    {
      title: "publishing-institute.org",
      url: "https://publishing-institute.org",
      description: "Educational publishing institute",
    },
    {
      title: "lead-africa.com",
      url: "https://lead-africa.com",
      description: "Leadership development network",
    },
  ],
  projects: [
    {
      title: "NoFx AI OS",
      url: "https://github.com/NoFxAiOS/nofx",
      description: "AI-powered operating system framework",
    },
    {
      title: "Project Management",
      url: "https://github.com/devaslanphp/project-management",
      description: "Comprehensive project management solution",
    },
  ],
};

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ArrowSquareOut size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <ArrowSquareOut size={20} weight="bold" className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
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
