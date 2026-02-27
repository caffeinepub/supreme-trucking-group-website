import { Truck, Package, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Over-the-Road (OTR) Transport',
      description: 'Long-haul trucking services across the United States with our fleet of 80+ modern tractor trailers.',
    },
    {
      icon: Package,
      title: 'Local Delivery Services',
      description: 'Fast and reliable regional delivery solutions for businesses in the tri-state area and beyond.',
    },
    {
      icon: Clock,
      title: 'Team Driving Options',
      description: 'Expedited delivery with team drivers for time-sensitive shipments and faster turnaround times.',
    },
    {
      icon: Shield,
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled reefer units ensuring your perishable goods arrive in perfect condition.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trucking and logistics solutions tailored to meet your transportation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary rounded-lg p-8 md:p-12 text-white text-center">
            <img
              src="/assets/generated/trucking-fleet-black-cabins-supreme.dim_800x400.jpg"
              alt="Supreme Trucking Group Fleet"
              className="rounded-lg shadow-xl w-full mb-8"
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Supreme Trucking Group?
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6">
              Ship Direct. Save More. Cut out the middleman and work directly with the assets. When you partner with Supreme Trucking Group, you're talking to the fleet owner—not a broker. Get better rates, better communication, and no hidden markups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">80+</div>
                <div className="text-white/80">Tractor Trailers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
