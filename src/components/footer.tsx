'use client';

import { translations, Language } from '@/lib/translations';
import { ChevronUp, Phone, MessageCircle, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  currentLanguage: Language;
}

export function Footer({ currentLanguage }: FooterProps) {
  const t = translations[currentLanguage];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.reviews.title, href: '#reviews' },
    { name: t.contact.title, href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/6285854965523',
      label: 'WhatsApp',
      color: 'text-green-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/Gior.Malik',
      label: 'Instagram',
      color: 'text-pink-600'
    },
    {
      icon: Mail,
      href: 'mailto:info@premiumcarrental.com',
      label: 'Email',
      color: 'text-blue-600'
    }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 
              className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
              onClick={scrollToTop}
            >
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Gior
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Bali
              </span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Tour
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium car rental services with professional drivers. 
              We provide comfortable, safe, and reliable transportation solutions in Bali.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Phone className="w-4 h-4" />
              <span>+6285854965523</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    aria-label={social.label}
                  >
                    <Icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <h5 className="text-white font-medium mb-2">24/7 Service Available</h5>
              <p className="text-gray-400 text-sm">
                We're always ready to serve your transportation needs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by</span>
              <span className="text-green-600 font-semibold text-sm">Premium Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}