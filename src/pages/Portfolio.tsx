import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'branding', label: 'Branding' },
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      title: 'E-commerce Platform',
      category: 'web',
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      title: 'Mobile Banking App',
      category: 'mobile',
    },
    {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      title: 'Brand Identity Design',
      category: 'branding',
    },
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      title: 'Corporate Website',
      category: 'web',
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      title: 'Fitness Tracker App',
      category: 'mobile',
    },
    {
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      title: 'Restaurant Branding',
      category: 'branding',
    },
    {
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
      title: 'Real Estate Portal',
      category: 'web',
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      title: 'Food Delivery App',
      category: 'mobile',
    },
    {
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800',
      title: 'Tech Startup Logo',
      category: 'branding',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
                variant={filter === category.id ? 'default' : 'outline'}
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
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={`${project.title}-${index}`}
                image={project.image}
                title={project.title}
                category={project.category}
                index={index}
              />
            ))}
          </motion.div>
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
