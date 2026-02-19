import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "@/components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
import { toast, Toaster } from "sonner";

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
  id?: number;
  icon: string;
  title: string;
  description: string;
}

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitOrder = async () => {
    if (!selectedService) return;

    if (!formData.name || !formData.phone) {
      ("Name and phone are required");
      return;
    }

    try {
      setLoadingOrder(true);

      const res = await fetch("https://api.parvozcompany.uz/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          serviceId: selectedService.id, // 👈 MUHIM
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("✅ Order sent successfully");

      setSelectedService(null);
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("❌ Failed to send order");
    } finally {
      setLoadingOrder(false);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen pt-20">
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <p className="text-center">Loading...</p>
            ) : isError ? (
              <p className="text-center text-red-500">Error loading services</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const Icon = iconMap[service.icon] || Code;
                  return (
                    <ServiceCard
                      key={index}
                      icon={Icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                      onOrder={() => setSelectedService(service)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-xl p-6 w-full max-w-md relative mx-4"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-1">
                {selectedService.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                Fill the form to order this service
              </p>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  onClick={submitOrder}
                  disabled={loadingOrder}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                >
                  {loadingOrder ? "Sending..." : "Send Order"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
