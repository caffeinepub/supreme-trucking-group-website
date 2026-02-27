import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHomePage = routerState.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate({ to: '/' });
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResourcesClick = () => {
    navigate({ to: '/resources' });
    setIsMobileMenuOpen(false);
  };

  const handleCareersClick = () => {
    navigate({ to: '/careers' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center">
            <img
              src="/assets/generated/supreme-trucking-logo-corrected-transparent.dim_300x150.png"
              alt="Supreme Trucking Group"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={handleResourcesClick}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Resources
            </button>
            <button
              onClick={handleCareersClick}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Careers
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={handleResourcesClick}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Resources
              </button>
              <button
                onClick={handleCareersClick}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Careers
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
