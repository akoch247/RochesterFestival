import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Award, Users2 } from "lucide-react";

export function Musicians() {
  return (
    <section id="musicians" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[--color-primary] mb-6">
            Young Professional Musicians
          </h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600">
            Our festival brings together talented musicians who are early in their professional careers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/youngmusic.jpg"
              alt="Young professional musicians"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl text-[--color-primary] mb-6">Who can participate</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[--color-primary] text-[--color-secondary] rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-[--color-primary] mb-2">Education requirement</h4>
                  <p className="text-lg text-gray-600">
                    All participating musicians must hold a bachelor's degree in music or a related field
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[--color-primary] text-[--color-secondary] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-[--color-primary] mb-2">Professional focus</h4>
                  <p className="text-lg text-gray-600">
                    We support early-career musicians with professional-level rehearsals, performances, and development opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[--color-primary] text-[--color-secondary] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-[--color-primary] mb-2">Future compensation</h4>
                  <p className="text-lg text-gray-600">
                    This grant-supported festival aims to eventually provide compensation for all participating musicians
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1679438004174-31150ef4f1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtYmVyJTIwbXVzaWMlMjBtdXNpY2lhbnN8ZW58MXx8fHwxNzY0ODU1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Chamber music ensemble"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/80 to-transparent flex items-end p-6">
              <p className="text-white text-xl">Chamber ensembles</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544005030-6f97dcbfe5bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBtdXNpY2lhbiUyMGNvbmNlcnR8ZW58MXx8fHwxNzY0ODU1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solo performance"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/80 to-transparent flex items-end p-6">
              <p className="text-white text-xl">Solo artists</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/uniquevenue.png"
              alt="Concert venue"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/80 to-transparent flex items-end p-6">
              <p className="text-white text-xl">Unique venues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
