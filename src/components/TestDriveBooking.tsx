
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, MapPin, Car } from 'lucide-react';

const TestDriveBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    duration: '2-hours',
    location: '',
    preferredDate: '',
    preferredTime: '',
    language: 'English',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive booking:', formData);
    alert('Test drive booking submitted! Our concierge team will contact you within 24 hours.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="test-drive" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience the
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ultimate Test Drive
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from flexible test drive options, from 2-hour experiences to full weekend trials. 
            Our multilingual agents will deliver the vehicle to your preferred location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Car className="h-5 w-5" />
                Book Your Test Drive
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                {/* Vehicle Selection */}
                <div>
                  <Label className="text-gray-300">Vehicle of Interest</Label>
                  <RadioGroup
                    value={formData.vehicle}
                    onValueChange={(value) => handleInputChange('vehicle', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedan" id="sedan" />
                      <Label htmlFor="sedan" className="text-gray-300">EV Zenith Sedan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="suv" id="suv" />
                      <Label htmlFor="suv" className="text-gray-300">EV Zenith SUV</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="coupe" id="coupe" />
                      <Label htmlFor="coupe" className="text-gray-300">EV Zenith Coupe</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Test Drive Duration */}
                <div>
                  <Label className="text-gray-300">Test Drive Duration</Label>
                  <RadioGroup
                    value={formData.duration}
                    onValueChange={(value) => handleInputChange('duration', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-hours" id="2-hours" />
                      <Label htmlFor="2-hours" className="text-gray-300">2 Hours - Quick Experience</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="24-hours" id="24-hours" />
                      <Label htmlFor="24-hours" className="text-gray-300">24 Hours - Daily Integration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekend" id="weekend" />
                      <Label htmlFor="weekend" className="text-gray-300">Weekend Trial - Full Experience</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Location & Schedule */}
                <div>
                  <Label htmlFor="location" className="text-gray-300">Preferred Location</Label>
                  <Input
                    id="location"
                    placeholder="Home, office, or specific address"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-gray-300">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-gray-300">Preferred Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                {/* Language Preference */}
                <div>
                  <Label htmlFor="language" className="text-gray-300">Preferred Language</Label>
                  <select
                    id="language"
                    value={formData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Filipino">Filipino</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="requests" className="text-gray-300">Special Requests</Label>
                  <Textarea
                    id="requests"
                    placeholder="Any specific features you'd like to focus on, accessibility needs, or other requests..."
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full electric-gradient hover-glow text-lg py-6">
                  Book Test Drive
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Test Drive Features */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: 'Home Delivery',
                      desc: 'Vehicle delivered to your preferred location by our multilingual agent'
                    },
                    {
                      icon: Clock,
                      title: 'Flexible Duration',
                      desc: 'From 2-hour quick tests to full weekend experiences'
                    },
                    {
                      icon: Car,
                      title: 'Personalized Demo',
                      desc: 'Tailored demonstration focusing on your specific interests and needs'
                    },
                    {
                      icon: Calendar,
                      title: 'EV Education',
                      desc: 'Learn about charging, range optimization, and battery health'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Weekend Trial Special</h3>
                <p className="text-gray-300 mb-4">
                  Experience true EV integration with our weekend trial. Perfect for overcoming range anxiety 
                  and understanding how an electric vehicle fits into your lifestyle.
                </p>
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-300 font-semibold">
                    "The weekend trial completely changed my perspective on EVs. I could really understand 
                    the daily charging routine and range planning." - Maria S.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveBooking;
