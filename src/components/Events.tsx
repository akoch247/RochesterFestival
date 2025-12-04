import { Calendar, MapPin, DollarSign, Clock } from "lucide-react";

export function Events() {
  const events = [
    {
      day: "Thursday Evening",
      title: "Eastman Alumni Celebration",
      time: "7:00 PM",
      venue: "Eastmen School of Music",
      price: "Free Admission",
      description: "A special evening honoring the legacy of Eastman School of Music alumni with performances of beloved classics",
      isFree: true
    },
    {
      day: "Friday Evening",
      title: "The Planets at the Planetarium",
      time: "8:00 PM",
      venue: "Rochester Planetarium",
      price:  "Free Admission",
      description: "Experience Holst's iconic suite under the stars in an immersive planetarium setting",
      isFree: true
    },
    {
      day: "Saturday Afternoon",
      title: "Chamber and Coffee",
      time: "2:00 PM",
      venue: "Java's",
      price: "Free Admission",
      description: "Intimate chamber music performances in a casual, community-centered atmosphere",
      isFree: true
    },
    {
      day: "Saturday Evening",
      title: "Film Orchestra",
      time: "7:30 PM",
      venue: "Historic Theater",
      price:  "Free Admission",
      description: "Live orchestral accompaniment to classic film, showcasing the power of music in cinema",
      isFree: true
    },
    {
      day: "Sunday Afternoon",
      title: "Orchestra with Student Composition",
      time: "3:00 PM",
      venue: "Community Arts Center",
      price: "Free Admission",
      description: "Celebrating emerging composers with world premiere performances by talented young musicians",
      isFree: true
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[--color-primary] mb-6">
            festival events
          </h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600">
            five days of extraordinary performances across unique rochester venues
          </p>
         
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg border-l-8 ${
                event.isFree 
                  ? 'bg-white border-[--color-secondary]' 
                  : 'bg-gradient-to-br from-[--color-primary] to-[#4A5CA8] text-white border-[--color-secondary]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className={`text-sm uppercase tracking-wider mb-2 ${event.isFree ? 'text-[--color-accent]' : 'text-[--color-secondary]'}`}>
                    {event.day}
                  </p>
                  <h3 className={`text-2xl sm:text-3xl mb-3 ${event.isFree ? 'text-[--color-primary]' : 'text-white'}`}>
                    {event.title}
                  </h3>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm ${
                  event.isFree 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-[--color-secondary] text-[--color-dark]'
                }`}>
                  {event.price}
                </div>
              </div>

              <p className={`text-lg mb-6 ${event.isFree ? 'text-gray-700' : 'text-gray-200'}`}>
                {event.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={20} className={event.isFree ? 'text-[--color-accent]' : 'text-[--color-secondary]'} />
                  <span className="text-lg">{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className={event.isFree ? 'text-[--color-accent]' : 'text-[--color-secondary]'} />
                  <span className="text-lg">{event.venue}</span>
                </div>
              </div>

              <div className="mt-6">
                <button className={`w-full py-3 rounded-full text-lg transition-all transform hover:scale-105 ${
                  event.isFree
                    ? 'bg-[--color-secondary] hover:bg-[--color-secondary]/90 text-white'
                    : 'bg-[--color-secondary] hover:bg-[--color-secondary]/90 text-white'
                }`}>
                  {event.isFree ? 'rsvp for free' : 'buy tickets'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
