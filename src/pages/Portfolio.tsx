import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

interface Project {
  id: string;
  title: string;
  image: string;
  type: "WEB" | "MOBILE" | "BRANDING";
  url: string; // API dan keladigan project sayt linki
  createdAt: string;
}

const categories = [
  { id: "all", label: "All Projects" },
  { id: "WEB", label: "Web" },
  { id: "MOBILE", label: "Mobile" },
  { id: "BRANDING", label: "Branding" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");

  // React Query bilan API chaqirish
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("https://api.parvozcompany.uz/project");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      console.log("API response:", data); // Bu qatorni qo'shing
      return data;
    },
  });

  // Filterlash
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our best work and successful projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <p className="text-center text-muted-foreground">
              Loading projects...
            </p>
          ) : isError ? (
            <p className="text-center text-red-500">Failed to load projects</p>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PortfolioCard
                    image={project.image}
                    title={project.title}
                    category={project.type}
                    index={index}
                  />
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
            <a href="/contact">
              <Button size="lg" className="glow-effect">
                Get Started
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
