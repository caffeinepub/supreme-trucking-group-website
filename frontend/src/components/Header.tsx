import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate({ to: '/' });
    setMobileMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  };

  const handleResourcesClick = () => {
    navigate({ to: '/resources' });
    setMobileMenuOpen(false);
  };

  const handleCareersClick = () => {
    navigate({ to: '/careers' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleHomeClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/assets/generated/supreme-trucking-logo-corrected-transparent.dim_300x150.png"
              alt="Supreme Trucking Group"
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={handleHomeClick}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection('services')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <button
              onClick={handleResourcesClick}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <button
              onClick={handleCareersClick}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Careers
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={handleHomeClick}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection('about')}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection('services')}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={handleResourcesClick}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Resources
            </button>
            <button
              onClick={handleCareersClick}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Careers
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
