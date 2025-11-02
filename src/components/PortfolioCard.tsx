import { motion } from 'framer-motion';
import { Card } from './ui/card';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

export const PortfolioCard = ({ image, title, category, index }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div>
              <h3 className="text-white font-semibold text-xl mb-1">{title}</h3>
              <p className="text-white/90 text-sm">{category}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
