import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "@/components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
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
} from "lucide-react";

// 🔹 icon map: API-dan keladigan service.icon stringi bo'yicha
const iconMap: Record<string, any> = {
  code: Code,
  mobile: Smartphone,
  marketing: TrendingUp,
  seo: Search,
  design: Palette,
  ecommerce: ShoppingCart,
  globe: Globe,
  headphones: HeadphonesIcon,
  megaphone: Megaphone,
  package: Package,
};
interface Service {
  icon: string; // API-dan keladigan icon nomi
  title: string;
  description: string;
}

const Services = () => {
  const { t } = useTranslation();

  const {
    data: services = [],
    isLoading,
    isError,
  } = useQuery<Service[], Error>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("https://api.parvozcompany.uz/servicee");
      if (!res.ok) throw new Error("Failed to fetch services");
      return res.json();
    },
  });

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
              <span className="text-gradient-primary">
                {t("services.title")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : isError ? (
            <p className="text-center text-red-500">Failed to load services</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service: any, index: number) => {
                const Icon = iconMap[service.icon] || Code;
                return (
                  <ServiceCard
                    key={index}
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    index={index}
                  />
                );
              })}
            </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in creating tailored solutions that fit your unique
              business needs
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
