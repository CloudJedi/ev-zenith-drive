
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Battery, MapPin, Settings, FileText, Phone } from 'lucide-react';

const OwnerPortal = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const vehicleData = {
    model: 'EV Zenith Sedan',
    batteryLevel: 87,
    range: '320km',
    lastCharged: '2 hours ago',
    nextService: 'March 15, 2024',
    totalMileage: '15,420 km'
  };

  const serviceHistory = [
    { date: '2024-01-15', service: 'Routine Inspection', status: 'Completed', location: 'Home Service' },
    { date: '2023-12-20', service: 'Software Update', status: 'Completed', location: 'Mobile Unit' },
    { date: '2023-11-10', service: 'Tire Rotation', status: 'Completed', location: 'Service Center' },
  ];

  const chargingStations = [
    { name: 'SM Mall of Asia', distance: '2.1 km', status: 'Available', power: '150kW' },
    { name: 'Ayala Triangle', distance: '3.5 km', status: 'Available', power: '120kW' },
    { name: 'BGC Central', distance: '4.2 km', status: 'Busy', power: '250kW' },
  ];

  return (
    <section id="owner-portal" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Owner
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Portal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage your EV experience with personalized resources, service scheduling, 
            and real-time vehicle insights.
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-gray-800/50 mb-8">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="charging" className="data-[state=active]:bg-blue-600">
              Charging
            </TabsTrigger>
            <TabsTrigger value="service" className="data-[state=active]:bg-blue-600">
              Service
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-blue-600">
              Resources
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-blue-600">
              Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Vehicle Status */}
              <Card className="lg:col-span-2 bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Battery className="h-5 w-5" />
                    Vehicle Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{vehicleData.model}</h3>
                      <p className="text-gray-400">Total Mileage: {vehicleData.totalMileage}</p>
                    </div>
                    <Badge className="electric-gradient">Connected</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">Battery Level</span>
                          <span className="text-blue-400 font-bold">{vehicleData.batteryLevel}%</span>
                        </div>
                        <Progress value={vehicleData.batteryLevel} className="h-3" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Range</span>
                        <span className="text-white font-semibold">{vehicleData.range}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Last Charged</span>
                        <span className="text-white font-semibold">{vehicleData.lastCharged}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-500/10 rounded-lg p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">Range Optimization Tips</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Use Eco mode for city driving</li>
                          <li>• Pre-condition while plugged in</li>
                          <li>• Plan routes with charging stops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Service
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Charging
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Manual
                  </Button>
                  <Button className="w-full justify-start electric-gradient">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Concierge
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Service */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Routine Maintenance</h4>
                    <p className="text-gray-400">Scheduled for {vehicleData.nextService}</p>
                  </div>
                  <Button className="electric-gradient">Reschedule</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="charging" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Nearby Charging Stations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {chargingStations.map((station, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{station.name}</h4>
                        <p className="text-gray-400 text-sm">{station.distance} • {station.power}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={station.status === 'Available' ? 'default' : 'destructive'}>
                          {station.status}
                        </Badge>
                        <Button size="sm" className="mt-2 block">Navigate</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Charging History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold">Charging Efficiency</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        Your average charging efficiency is 94% - excellent performance!
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">This Week</span>
                        <span className="text-white">3 sessions</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Average Cost</span>
                        <span className="text-white">₱450/session</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Total kWh</span>
                        <span className="text-white">187 kWh</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="service" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Service History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHistory.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.service}</h4>
                        <p className="text-gray-400 text-sm">{service.date} • {service.location}</p>
                      </div>
                      <Badge className="bg-green-600">
                        {service.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Mobile Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Schedule mobile service for routine maintenance and minor repairs at your location.
                  </p>
                  <Button className="w-full electric-gradient">
                    Schedule Mobile Service
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Service Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Book appointments at our service centers for comprehensive maintenance.
                  </p>
                  <Button className="w-full" variant="outline">
                    Find Service Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Owner's Manual</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Access your personalized owner's manual with model-specific information.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Complete Manual (PDF)
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Quick Start Guide
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Charging Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">EV Tips & Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <h4 className="text-blue-400 font-semibold">Winter Driving Tips</h4>
                      <p className="text-gray-300 text-sm">Optimize range in cold weather</p>
                    </div>
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <h4 className="text-green-400 font-semibold">Battery Health</h4>
                      <p className="text-gray-300 text-sm">Maintain optimal battery performance</p>
                    </div>
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <h4 className="text-purple-400 font-semibold">Road Trip Planning</h4>
                      <p className="text-gray-300 text-sm">Plan long journeys with charging stops</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Get help anytime with our multilingual support team.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full electric-gradient">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Support
                    </Button>
                    <Button className="w-full" variant="outline">
                      Start Live Chat
                    </Button>
                    <Button className="w-full" variant="outline">
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Emergency Assistance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    24/7 roadside assistance and emergency support for EV owners.
                  </p>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold">Emergency Hotline</h4>
                    <p className="text-white text-lg font-bold">1-800-EV-HELP</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Request Emergency Assistance
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OwnerPortal;
