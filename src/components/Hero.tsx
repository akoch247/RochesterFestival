import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551696785-927d4ac2d35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ4NTU1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Orchestra performance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-primary]/80 via-[--color-primary]/70 to-[--color-primary]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-[--color-secondary] lowercase">
          Rochester Orchestral Chamber Music Festival
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto">
          A celebration of young professional musicians, unique ensembles, and rochester's rich musical heritage
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Calendar size={24} />
            <span className="text-lg">5-Day Summer Festival | Wed–Sun</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin size={24} />
            <span className="text-lg">Rochester, NY</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-transparent border-2 border-white  text-white px-10 py-4 rounded-full text-xl transition-all transform hover:scale-105">
            register now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-xl transition-all transform hover:scale-105">
            buy tickets
          </button>
          <button className="bg-transparent border-2 border-white  text-white px-10 py-4 rounded-full text-xl transition-all transform hover:scale-105">
            donate
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[--color-secondary] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[--color-secondary] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}