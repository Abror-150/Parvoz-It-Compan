import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  onOrder: () => void;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
  onOrder,
}: ServiceCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover-lift group relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
          whileHover={{ scale: 1.5 }}
        />
        <div className="relative z-10">
          <motion.div
            className="inline-flex p-3 bg-primary/10 rounded-lg mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <Button
            variant="outline"
            size="sm"
            onClick={onOrder} 
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          >
            {t("services.orderButton")}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
