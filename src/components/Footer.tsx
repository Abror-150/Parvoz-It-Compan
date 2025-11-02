import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Send, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/parvozcompany', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/parvozcompany', label: 'Telegram' },
    { icon: Facebook, href: 'https://facebook.com/parvozcompany', label: 'Facebook' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold text-gradient-primary"
              whileHover={{ scale: 1.05 }}
            >
              Parvoz
            </motion.h3>
            <p className="text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('nav.home')}</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('nav.portfolio')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('footer.contact')}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{t('footer.phone')}: +998 99 425 25 99</p>
              <p>{t('footer.phone')}: +998 93 429 25 99</p>
              <p>{t('footer.email')}: parvozcompany@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Parvoz Company. {t('footer.rights')}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 p-2 bg-primary text-primary-foreground rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
