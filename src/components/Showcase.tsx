import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowSquareOut, X } from "phosphor-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import carRentPreview from "@/assets/showcase-car-rent.jpg";
import aiDesignPreview from "@/assets/showcase-ai-design.jpg";
import medicarePreview from "@/assets/showcase-medicare.jpg";
import aiLandingPreview from "@/assets/showcase-ai-landing.png";

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
      title: "NoFx AI",
      url: "https://nofxai.com",
      description: "AI-powered operating system framework",
      thumbnail: aiLandingPreview,
      preview: aiLandingPreview,
    },
    {
      title: "Project Management",
      url: "https://devaslanphp.github.io/project-management",
      description: "Comprehensive project management solution",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ],
  designs: [
    {
      title: "Medicare Healthcare",
      description: "Modern healthcare platform design",
      thumbnail: medicarePreview,
      preview: medicarePreview,
    },
    {
      title: "AI Web Design Platform",
      description: "AI-powered design automation",
      thumbnail: aiDesignPreview,
      preview: aiDesignPreview,
    },
    {
      title: "Car Rental System",
      description: "Complete car rental platform",
      thumbnail: carRentPreview,
      preview: carRentPreview,
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
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="designs">Designs</TabsTrigger>
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
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  {item.preview ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.button
                          whileHover={{ y: -8 }}
                          className="w-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 text-left"
                        >
                          <div className="relative h-48 overflow-hidden bg-muted">
                            <img 
                              src={typeof item.thumbnail === 'string' ? item.thumbnail : item.thumbnail} 
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
                        </motion.button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto p-0">
                        <div className="relative">
                          <img 
                            src={item.preview} 
                            alt={item.title}
                            className="w-full h-auto"
                          />
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border hover:bg-background transition-colors flex items-center gap-2"
                            >
                              Visit Site
                              <ArrowSquareOut size={18} weight="bold" />
                            </a>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <motion.a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8 }}
                      className="block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={typeof item.thumbnail === 'string' ? item.thumbnail : item.thumbnail} 
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
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="designs" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseItems.designs.map((item, index) => (
                <Dialog key={item.title}>
                  <DialogTrigger asChild>
                    <motion.button
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 text-left w-full"
                    >
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-background font-semibold">Click to view</span>
                        </div>
                      </div>
                      <div className="p-6 space-y-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto p-0">
                    <img 
                      src={item.preview} 
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Showcase;
