import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Code,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  ShoppingCart,
  Globe,
  HeadphonesIcon,
  Megaphone,
  Package,
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: ShoppingCart,
      title: 'Online Store Development',
      description: 'Full-featured e-commerce solutions with payment integration and inventory management',
    },
    {
      icon: Code,
      title: 'Website Creation',
      description: 'Custom, responsive websites built with modern frameworks and best practices',
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete branding packages including logo, color schemes, and brand guidelines',
    },
    {
      icon: Megaphone,
      title: 'Google Ads',
      description: 'Targeted advertising campaigns to reach your ideal customers',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and organic traffic with proven SEO strategies',
    },
    {
      icon: Globe,
      title: 'Logo Design',
      description: 'Unique, memorable logos that capture your brand essence',
    },
    {
      icon: TrendingUp,
      title: 'SMM Marketing',
      description: 'Social media strategy, content creation, and community management',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: '24/7 technical assistance and maintenance for your digital assets',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
    },
    {
      icon: Package,
      title: 'Marketplace Store Setup',
      description: 'Professional setup and optimization for Amazon, Uzum, Ozon, and eBay',
    },
  ];

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
              <span className="text-gradient-primary">{t('services.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in creating tailored solutions that fit your unique business needs
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
