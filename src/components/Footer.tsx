import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[--color-primary] text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-2xl text-black mb-4">Rochester Orchestral Chamber Music Festival</h4>
            <p className="text-black-200 mb-4">
              Celebrating young professional musicians and rochester's rich musical heritage through exceptional performances and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#musicians" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  Musicians
                </a>
              </li>
              <li>
                <a href="#events" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#support" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl text-[--color-secondary] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-black-200 mt-1" />
                <a href="mailto:info@rochesterocmfest.org" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                info@rocmusicfest.org 
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[--color-secondary] mt-1" />
                <a href="tel:+15855551234" className="text-black-200 hover:text-[--color-secondary] transition-colors">
                  (585) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[--color-secondary] mt-1" />
                <span className="text-black-200">
                  Rochester, NY
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-xl text-[--color-secondary] mb-4">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-secondary] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-secondary] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-secondary] rounded-full flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-black-200 text-sm mb-3">Subscribe to our newsletter:</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your email..."
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-black-200 placeholder-gray-300 focus:outline-none focus:border-[--color-secondary]"
              />
              <button className="bg-[--color-secondary] hover:bg-[--color-secondary]/90 text-white px-6 py-2 rounded-full transition-colors">
                join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-black-200">
          <p>&copy; 2025 rochester orchestral chamber music festival. all rights reserved.</p>
          <p className="mt-2 text-sm">a grant-supported initiative dedicated to nurturing young professional musicians.</p>
        </div>
      </div>
    </footer>
  );
}
