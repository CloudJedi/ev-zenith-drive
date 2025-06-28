
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, Battery, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Electric Driving
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the next generation of electric vehicles with our AI-powered concierge service. 
              Personalized, multilingual support from selection to ownership.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="electric-gradient hover-glow text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-gray-400 text-white hover:bg-white/10 text-lg px-8 py-6">
                Schedule Test Drive
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="flex items-center text-gray-300">
                <Car className="h-5 w-5 mr-2 text-blue-400" />
                Home Delivery
              </div>
              <div className="flex items-center text-gray-300">
                <Battery className="h-5 w-5 mr-2 text-blue-400" />
                Extended Test Drives
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                Mobile Service
              </div>
            </div>
          </div>

          {/* Vehicle Showcase */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 glass-effect hover-glow">
              {/* Mock Vehicle Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                <Car className="h-24 w-24 text-blue-400" />
              </div>
              
              {/* Vehicle Info */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">EV Zenith Model S</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">400km</div>
                    <div className="text-sm text-gray-400">Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">3.2s</div>
                    <div className="text-sm text-gray-400">0-100 km/h</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">250kW</div>
                    <div className="text-sm text-gray-400">Fast Charging</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
