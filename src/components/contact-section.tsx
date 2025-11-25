'use client';

import { translations, Language } from '@/lib/translations';
import { Phone, MessageCircle, Instagram, MapPin, Mail } from 'lucide-react';

interface ContactSectionProps {
  currentLanguage: Language;
}

export function ContactSection({ currentLanguage }: ContactSectionProps) {
  const t = translations[currentLanguage];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {t.contact.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
              <div className="p-3 bg-green-600 rounded-full group-hover:bg-green-500 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white font-medium">+6285854965523</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
              <div className="p-3 bg-green-600 rounded-full group-hover:bg-green-500 transition-colors">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white font-medium">@Gior.Malik</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
              <div className="p-3 bg-green-600 rounded-full group-hover:bg-green-500 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white font-medium">@GiorMalik</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
              <div className="p-3 bg-green-600 rounded-full group-hover:bg-green-500 transition-colors">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white font-medium">Bali, Indonesia</span>
            </div>

            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-green-600">
              <h4 className="text-lg font-semibold text-white mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-green-400">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-green-400">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-green-400">24 Hours</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-700">
                <p className="text-green-400 text-sm font-medium">🌴 Bali Time Zone (WITA)</p>
                <p className="text-gray-400 text-xs mt-1">UTC+8:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.9141009999743!2d115.17750430713947!3d-8.756610604233083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2451b862fc66f%3A0x84db67cd9ab7ae96!2sGarasi%20Unit%20Kecil%20Adhi%20Trans!5e0!3m2!1sid!2sid!4v1761064808936!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-full min-h-[450px]"
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Denpasar & Badung Regency
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Ngurah Rai Airport (DPS)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Kuta, Seminyak & Legian
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Ubud, Canggu & Nusa Dua
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  All Bali Areas Available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-green-600">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Quick Booking Inquiry</h3>
            <p className="text-gray-300">Plan your Bali trip with us. Send us a message and we'll get back to you shortly</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <a
              href="https://wa.me/6285854965523?text=Hi! I'm interested in booking a car in Bali. Can you provide more information about your services and availability?"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Start WhatsApp Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}