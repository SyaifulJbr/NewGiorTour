'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { translations, Language } from '@/lib/translations';

interface Car {
  id: string;
  name: string;
  price: number;
  image: string;
  seats?: number;
  transmission?: string;
  fuel?: string;
}

interface CarsSectionProps {
  currentLanguage: Language;
}

export function CarsSection({ currentLanguage }: CarsSectionProps) {
  const t = translations[currentLanguage];

  const cars: Car[] = [
    {
      id: 'avanza',
      name: 'Avanza',
      price: 600000,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 'allnew-avanza',
      name: 'Allnew Avanza',
      price: 700000,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 'xpander',
      name: 'Xpander',
      price: 700000,
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 'innova-reborn',
      name: 'Innova Reborn',
      price: 900000,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    {
      id: 'hiace-commuter',
      name: 'HiAce Commuter',
      price: 1100000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      seats: 16,
      transmission: 'Manual',
      fuel: 'Diesel'
    },
    {
      id: 'hiace-premio',
      name: 'HiAce Premio',
      price: 1300000,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&h=250&fit=crop',
      seats: 12,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    {
      id: 'alphard',
      name: 'Toyota Alphard',
      price: 1700000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 'vellfire',
      name: 'Toyota Vellfire',
      price: 1700000,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Petrol'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const handleBookNow = (carName: string, price: number) => {
    const message = `Halo, saya ingin booking mobil ${carName} dengan harga Rp ${formatPrice(price)} per 10 jam. Apakah mobil tersedia?`;
    const whatsappUrl = `https://wa.me/6285854965523?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cars" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.cars.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="bg-gray-800 border-gray-700 hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-600/20">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    {car.seats} Seats
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-xl text-white mb-2">{car.name}</CardTitle>
                <CardDescription className="text-gray-400 text-sm mb-3">
                  <div className="flex items-center justify-between">
                    <span>{car.transmission}</span>
                    <span>{car.fuel}</span>
                  </div>
                </CardDescription>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  Rp {formatPrice(car.price)}
                </div>
                <div className="text-sm text-gray-400">
                  {t.cars.per10Hours}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleBookNow(car.name, car.price)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {t.cars.bookNow}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}