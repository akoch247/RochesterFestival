import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/e29575581826511beb96ad381c9a96de35b12ed7.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-[--color-primary] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img src={logo} alt="Rochester OCM Festival" className="h-12" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[--color-secondary] transition-colors text-lg">
              Home
            </button>
            <button onClick={() => scrollToSection('mission')} className="hover:text-[--color-secondary] transition-colors text-lg">
              Mission
            </button>
            <button onClick={() => scrollToSection('musicians')} className="hover:text-[--color-secondary] transition-colors text-lg">
              Musicians
            </button>
            <button onClick={() => scrollToSection('events')} className="hover:text-[--color-secondary] transition-colors text-lg">
              Events
            </button>
            <button onClick={() => scrollToSection('support')} className="hover:text-[--color-secondary] transition-colors text-lg">
              Support
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[--color-primary] hover:text-[--color-secondary] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 hover:text-[--color-secondary] transition-colors text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left py-2 hover:text-[--color-secondary] transition-colors text-lg"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('musicians')}
              className="block w-full text-left py-2 hover:text-[--color-secondary] transition-colors text-lg"
            >
              Musicians
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left py-2 hover:text-[--color-secondary] transition-colors text-lg"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="block w-full text-left py-2 hover:text-[--color-secondary] transition-colors text-lg"
            >
              Support
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
