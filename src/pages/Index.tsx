
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VehicleShowcase from '@/components/VehicleShowcase';
import TestDriveBooking from '@/components/TestDriveBooking';
import ConciergeChat from '@/components/ConciergeChat';
import OwnerPortal from '@/components/OwnerPortal';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <VehicleShowcase />
      <TestDriveBooking />
      
      {/* Concierge Chat Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Powered
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Concierge Service
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized assistance in your preferred language. Our AI concierge 
              understands your needs and provides expert guidance throughout your EV journey.
            </p>
          </div>
          <ConciergeChat />
        </div>
      </section>

      <OwnerPortal />

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                EV Zenith
              </h3>
              <p className="text-gray-400">
                Reimagining the electric vehicle experience with personalized concierge service.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Vehicles</h4>
              <ul className="space-y-2 text-gray-400">
                <li>EV Zenith Sedan</li>
                <li>EV Zenith SUV</li>
                <li>EV Zenith Coupe</li>
                <li>Compare Models</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Test Drives</li>
                <li>Home Delivery</li>
                <li>Mobile Service</li>
                <li>Financing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Owner Portal</li>
                <li>24/7 Concierge</li>
                <li>Service Centers</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 EV Zenith Drive. All rights reserved. Built with AI-powered excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
