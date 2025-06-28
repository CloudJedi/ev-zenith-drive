
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Battery, Clock, MapPin } from 'lucide-react';

const VehicleShowcase = () => {
  const vehicles = [
    {
      id: 1,
      name: 'EV Zenith Sedan',
      type: 'Executive Sedan',
      range: '450km',
      acceleration: '3.8s',
      charging: '250kW',
      price: '₱2,800,000',
      features: ['Autopilot', 'Premium Interior', 'Air Suspension'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 2,
      name: 'EV Zenith SUV',
      type: 'Family SUV',
      range: '400km',
      acceleration: '4.2s',
      charging: '200kW',
      price: '₱3,200,000',
      features: ['7-Seater', 'Off-Road Mode', 'Panoramic Roof'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 3,
      name: 'EV Zenith Coupe',
      type: 'Sports Coupe',
      range: '380km',
      acceleration: '2.9s',
      charging: '300kW',
      price: '₱4,500,000',
      features: ['Track Mode', 'Carbon Fiber', 'Sport Suspension'],
      color: 'from-red-500/20 to-orange-500/20'
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Electric
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Vehicle Lineup
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect blend of performance, luxury, and sustainability. 
            Every vehicle comes with our comprehensive concierge service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-gray-800/50 border-gray-700 hover-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Vehicle Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${vehicle.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Car className="h-16 w-16 text-white/80" />
                </div>

                {/* Vehicle Info */}
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {vehicle.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                    <p className="text-3xl font-bold text-blue-400 mt-2">{vehicle.price}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{vehicle.range}</div>
                      <div className="text-xs text-gray-400">Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{vehicle.acceleration}</div>
                      <div className="text-xs text-gray-400">0-100 km/h</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{vehicle.charging}</div>
                      <div className="text-xs text-gray-400">Charging</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-4">
                    <Button className="w-full electric-gradient">
                      Schedule Test Drive
                    </Button>
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: MapPin, title: 'Home Delivery', desc: 'We bring the car to you' },
            { icon: Clock, title: 'Extended Test Drives', desc: '24-hour to weekend trials' },
            { icon: Battery, title: 'Mobile Service', desc: 'Maintenance at your location' },
            { icon: Car, title: 'Multilingual Support', desc: 'Service in your language' }
          ].map((service, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-xl">
              <service.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-sm text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
