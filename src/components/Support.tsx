import { Heart, Building2, Users, Music2, Megaphone, Handshake } from "lucide-react";

export function Support() {
  const donorNeeds = [
    {
      icon: <Users size={32} />,
      title: "Musician Scholarships",
      description: "Support young professional musicians by funding their participation in the festival",
      impact: "Enable talented musicians to focus on artistry without financial burden"
    },
    {
      icon: <Music2 size={32} />,
      title: "Commissioning Sponsorships",
      description: "Fund the creation of new works by emerging and established composers",
      impact: "Contribute to the future of classical music repertoire"
    },
    {
      icon: <Heart size={32} />,
      title: "Concert Sponsorships",
      description: "Sponsor individual concerts and have your name associated with memorable performances",
      impact: "Make world-class performances accessible to the Rochester community"
    },
    {
      icon: <Building2 size={32} />,
      title: "Venue Rentals",
      description: "Help us secure Rochester's unique and historic performance spaces",
      impact: "Bring music to diverse neighborhoods and communities"
    },
    {
      icon: <Handshake size={32} />,
      title: "Labor & Operations",
      description: "Support the professional staff, stagehands, and technical crew that make the festival possible",
      impact: "Ensure smooth, professional productions"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Marketing & Outreach",
      description: "Fund Meta ads, promotional materials, and community outreach efforts",
      impact: "Expand our reach and build larger, more diverse audiences"
    }
  ];

  const corporateSponsors = [
    { name: "Wegmans", type: "Founding Partner" },
    { name: "Javas Coffee Shop", type: "Community Partner" }
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[--color-primary] mb-6">
            support the festival
          </h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 mb-8">
            your support helps us build a sustainable future where musicians are compensated fairly and communities have access to world-class performances
          </p>
          <div className="w-24 h-2 bg-[--color-secondary] mx-auto rounded-full"></div>
        </div>

        {/* Donor Needs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {donorNeeds.map((need, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-t-4 border-[--color-secondary]"
            >
              <div className="w-16 h-16 bg-[--color-primary] text-[--color-secondary] rounded-full flex items-center justify-center mb-4">
                {need.icon}
              </div>
              <h4 className="text-2xl text-[--color-primary] mb-3">{need.title}</h4>
              <p className="text-lg text-gray-700 mb-4">{need.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-[--color-accent] italic">{need.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ways to Give */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Corporate Sponsorship */}
          <div className="bg-[--color-primary] text-black p-10 rounded-2xl shadow-xl">
            <h3 className="text-4xl mb-6 text-[--color-secondary] text-center">corporate sponsorship</h3>
            <p className="text-lg mb-6">
              join leading rochester businesses in supporting the arts and connecting with the community
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl text-[--color-secondary]">current partners:</h4>
              {corporateSponsors.map((sponsor, index) => (
                <div key={index} className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                  <span className="text-xl">{sponsor.name}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Individual Donations */}
          <div className="bg-[--color-secondary] text-black p-10 rounded-2xl shadow-xl">
            <h3 className="text-4xl mb-6 text-center">individual giving</h3>
            <p className="text-lg mb-6">
              every donation, large or small, makes a direct impact on our musicians and community
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-lg">• tax-deductible contributions</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-lg">• named recognition opportunities</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-lg">• invitations to exclusive donor events</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="text-lg">• behind-the-scenes access</p>
              </div>
            </div>

            <button className="w-full bg-[--color-primary] hover:bg-[--color-primary]/90 text-white py-4 rounded-full text-xl transition-all transform hover:scale-105">
              make a donation
            </button>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-[--color-primary] to-[#4A5CA8] text-black p-12 rounded-2xl shadow-2xl text-center">
          <h3 className="text-3xl sm:text-4xl mb-6 text-[--color-secondary]">your impact</h3>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto mb-8">
            together, we're building a vibrant musical community that strengthens the connection between donors, audiences, artists, and rochester's rich cultural heritage
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl text-[--color-secondary] mb-2">100%</p>
              <p className="text-lg">of donations support musicians & programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl text-[--color-secondary] mb-2">5 days</p>
              <p className="text-lg">of intensive professional development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl text-[--color-secondary] mb-2">free</p>
              <p className="text-lg">majority of concerts open to all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}