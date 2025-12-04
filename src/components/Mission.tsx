import { Heart, Users, TrendingUp, Music } from "lucide-react";

export function Mission() {
  const purposes = [
    {
      icon: <Users size={40} />,
      title: "Community Connection",
      description: "Connect with the greater Rochester community through the power of music"
    },
    {
      icon: <Music size={40} />,
      title: "Performance Opportunities",
      description: "Promote performance opportunities for medium-sized ensembles"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Professional Development",
      description: "Provide comprehensive professional development for young musicians"
    },
    {
      icon: <Heart size={40} />,
      title: "Musical History",
      description: "Celebrate Rochester's rich and vibrant musical history"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[--color-primary] mb-6">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 mb-12">
            The rochester orchestral chamber music festival is a grant-supported initiative dedicated to nurturing young professional musicians while fostering deep connections between artists, audiences, and the rochester community.
          </p>
          <div className="w-24 h-2 bg-[--color-secondary] mx-auto rounded-full"></div>
        </div>

        {/* Festival Purposes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {purposes.map((purpose, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[--color-primary] text-[--color-secondary] rounded-full mb-4">
                {purpose.icon}
              </div>
              <h4 className="text-xl mb-3 text-[--color-primary]">{purpose.title}</h4>
              <p className="text-gray-600">{purpose.description}</p>
            </div>
          ))}
        </div>

        {/* Objectives & Impact */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Objectives */}
          <div className="bg-[--color-primary] text-black p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-6 text-[--color-secondary] text-center">Our Objectives</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-[--color-secondary] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Professional-level rehearsals and concerts with quick turnaround times.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-[--color-secondary] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Develop public speaking and community outreach skills.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-[--color-secondary] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Build community within the orchestra and with diverse audiences.</span>
              </li>
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-[--color-secondary] text-black p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-6 text-center">Our Impact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Collaborative learning that enhances existing musical skills.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Pre-concert discussions connecting audiences with rochester's history.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg">Strengthening connections between donors, audiences, and the arts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategy Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl text-[--color-primary] mb-8">What makes us unique</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border-2 border-[--color-secondary] rounded-2xl hover:shadow-lg transition-shadow">
              <p className="text-lg">Unique Rochester Venues</p>
            </div>
            <div className="p-6 bg-white border-2 border-[--color-secondary] rounded-2xl hover:shadow-lg transition-shadow">
              <p className="text-lg">Unique Ensemble Sizes</p>
            </div>
            <div className="p-6 bg-white border-2 border-[--color-secondary] rounded-2xl hover:shadow-lg transition-shadow">
              <p className="text-lg">Collaboration With Rochester Institutions</p>
            </div>
            <div className="p-6 bg-white border-2 border-[--color-secondary] rounded-2xl hover:shadow-lg transition-shadow">
              <p className="text-lg">Young Professional Artist Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
