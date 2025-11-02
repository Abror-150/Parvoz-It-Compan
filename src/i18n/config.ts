import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
      },
      hero: {
        title: 'Your Business Digital Takeoff',
        subtitle: 'Parvoz Company',
        description: 'We create innovative IT solutions that drive your business forward',
        cta: 'Get Started',
        contact: 'Contact Us',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive IT Solutions',
        orderButton: 'Order Service',
      },
      footer: {
        rights: 'All rights reserved.',
        contact: 'Contact',
        phone: 'Phone',
        email: 'Email',
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let us work together',
        name: 'Name',
        phone: 'Phone',
        service: 'Service Type',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
      },
    },
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Biz haqimizda',
        services: 'Xizmatlar',
        portfolio: 'Portfolio',
        contact: 'Aloqa',
      },
      hero: {
        title: 'Biznesingizning Raqamli Parvozi',
        subtitle: 'Parvoz Kompaniyasi',
        description: 'Biz biznesingizni oldinga siljitadigan innovatsion IT yechimlarini yaratamiz',
        cta: 'Boshlash',
        contact: 'Aloqa',
      },
      services: {
        title: 'Bizning Xizmatlar',
        subtitle: 'Toliq IT Yechimlari',
        orderButton: 'Xizmat Buyurtma Qilish',
      },
      footer: {
        rights: 'Barcha huquqlar himoyalangan.',
        contact: 'Aloqa',
        phone: 'Telefon',
        email: 'Email',
      },
      contact: {
        title: 'Biz bilan boglaning',
        subtitle: 'Hamkorlik qilaylik',
        name: 'Ism',
        phone: 'Telefon',
        service: 'Xizmat turi',
        message: 'Xabar',
        send: 'Xabar yuborish',
        success: 'Xabar muvaffaqiyatli yuborildi!',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О нас',
        services: 'Услуги',
        portfolio: 'Портфолио',
        contact: 'Контакты',
      },
      hero: {
        title: 'Цифровой взлёт вашего бизнеса',
        subtitle: 'Компания Парвоз',
        description: 'Мы создаём инновационные IT решения, которые продвигают ваш бизнес вперёд',
        cta: 'Начать',
        contact: 'Связаться',
      },
      services: {
        title: 'Наши услуги',
        subtitle: 'Комплексные IT решения',
        orderButton: 'Заказать услугу',
      },
      footer: {
        rights: 'Все права защищены.',
        contact: 'Контакты',
        phone: 'Телефон',
        email: 'Email',
      },
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Давайте работать вместе',
        name: 'Имя',
        phone: 'Телефон',
        service: 'Тип услуги',
        message: 'Сообщение',
        send: 'Отправить',
        success: 'Сообщение успешно отправлено!',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
