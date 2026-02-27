import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Supreme Trucking Group
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/reefer-truck-black-cabin-supreme.dim_800x400.jpg"
                alt="Reefer Truck"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Supreme Trucking Group is a premier trucking and logistics company based in Bridgewater, New Jersey. 
                We specialize in providing reliable and efficient transportation solutions for businesses across the nation.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With a modern fleet of 80 tractor trailers equipped with state-of-the-art refrigerated units (reefers), 
                we ensure your temperature-sensitive cargo arrives in perfect condition, every time.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Over-the-Road (OTR) Services</h3>
                    <p className="text-muted-foreground">Long-haul transportation across the United States</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Local Delivery Services</h3>
                    <p className="text-muted-foreground">Fast and efficient regional transportation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Single & Team Driving Options</h3>
                    <p className="text-muted-foreground">Flexible solutions for faster delivery times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Temperature-Controlled Transport</h3>
                    <p className="text-muted-foreground">Specialized reefer units for sensitive cargo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
