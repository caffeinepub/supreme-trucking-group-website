import { MapPin, Phone, Heart } from 'lucide-react';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export default function Footer() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHomePage = routerState.location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Generate caffeine.ai link with UTM tracking
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'supreme-trucking-group';
  const caffeineLink = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img
                src="/assets/generated/supreme-trucking-logo-corrected-transparent.dim_300x150.png"
                alt="Supreme Trucking Group"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 text-sm">
                Professional trucking and logistics solutions serving businesses nationwide with
                reliability and excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/80">
                    1100 NJ-34<br />
                    Aberdeen Township, NJ 07747
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a
                    href="tel:2018380000"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    201-838-0000
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => navigate({ to: '/resources' })}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Resources
                </button>
                <button
                  onClick={() => navigate({ to: '/careers' })}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
                <button
                  onClick={() => navigate({ to: '/privacy-policy' })}
                  className="block text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/80 flex items-center justify-center gap-1 flex-wrap">
              © {new Date().getFullYear()}. Built with <Heart className="h-4 w-4 text-white fill-white" /> using{' '}
              <a
                href={caffeineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
