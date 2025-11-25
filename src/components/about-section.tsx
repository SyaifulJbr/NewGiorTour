'use client';

import { translations, Language } from '@/lib/translations';

interface AboutSectionProps {
  currentLanguage: Language;
}

export function AboutSection({ currentLanguage }: AboutSectionProps) {
  const t = translations[currentLanguage];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Professional Drivers</h3>
                  <p className="text-gray-400">Experienced and courteous drivers who know Bali's routes and attractions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Fuel Included</h3>
                  <p className="text-gray-400">All prices include fuel costs, no hidden charges for your Bali tours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Well-Maintained Fleet</h3>
                  <p className="text-gray-400">Regular maintenance ensures safety and reliability for island journeys</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">24/7 Service</h3>
                  <p className="text-gray-400">Round-the-clock customer support for your Bali vacation needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop"
              alt="Premium Car Service in Bali"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold mb-2">10+ Years</div>
              <div className="text-sm">Of Excellence in Bali Car Rental Service</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-300">Happy Bali Travelers</div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-300">Vehicle Fleet</div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-300">Daily Bali Tours</div>
          </div>
        </div>
      </div>
    </section>
  );
}