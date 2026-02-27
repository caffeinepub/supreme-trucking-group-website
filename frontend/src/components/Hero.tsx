import { Button } from '@/components/ui/button';
import { Truck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('/assets/generated/trucking-hero-black-cabin-supreme.dim_1200x600.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Trucking & Logistics Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Reliable transportation services across the nation with 80+ tractor trailers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold text-lg px-8"
            >
              Request a Quote
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Truck className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">80+ Fleet</h3>
              <p className="text-white/80">Modern tractor trailers with refrigerated units</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-white/80">Single and team driving options available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="h-12 w-12 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-semibold mb-2">Nationwide</h3>
              <p className="text-white/80">OTR and local delivery services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
