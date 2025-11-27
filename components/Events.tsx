import React, { useState } from 'react';
import { Button } from './Button';

interface EventData {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  image: string;
  video?: string;
  imageFallback: string;
  badge?: string;
  buttonText: string;
  stats?: { label: string; value: string }[];
}

const EVENTS: EventData[] = [
  {
    id: 'cricket',
    title: 'CRICKET TOURNAMENT',
    shortDescription: 'Competitive league play that spotlights rising cricket talent in the community.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg font-light leading-relaxed">The PowerPlay Cricket Tournament was a smashing success, featuring 8 teams from across the district.</p>

          <div className="border border-white/10 rounded-sm p-6 bg-white/5">
            <h4 className="text-white font-bold text-base mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Match Summary</h4>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Heritage</span>
                <span className="font-bold text-white">149/3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold">Rockhill</span>
                <span className="font-bold text-gold">150/1 <span className="text-xs opacity-70 ml-1">(18.2)</span></span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-3 text-sm">
              <span className="text-xl mt-1">🏅</span>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Player of the Match</div>
                <div className="text-white font-medium">Bhavya Hooda – 73*</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-white font-bold text-base mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Standings</h4>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 text-xs uppercase tracking-wider">
                  <th className="py-2 px-1 font-medium">#</th>
                  <th className="py-2 px-1 font-medium">Team</th>
                  <th className="py-2 px-1 font-medium text-center">P</th>
                  <th className="py-2 px-1 font-medium text-center">W</th>
                  <th className="py-2 px-1 font-medium text-center">L</th>
                  <th className="py-2 px-1 font-medium text-center">Pts</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-light">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-1 text-gold font-bold">1</td>
                  <td className="py-3 px-1 text-white">LTHS Challengers</td>
                  <td className="py-3 px-1 text-center">4</td>
                  <td className="py-3 px-1 text-center">2</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-white">5</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-1 text-gold font-bold">2</td>
                  <td className="py-3 px-1 text-white">Walnut Grove</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">2</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-white">4</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-1 text-gold font-bold">3</td>
                  <td className="py-3 px-1 text-white">Heritage Cricket</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-white">3</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-1 text-gray-600">4</td>
                  <td className="py-3 px-1 text-gray-400">Wakeland</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">0</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-medium">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400 italic">
            In the final, Rockhill defeated Heritage, led by Bhavya Hooda's 73-run performance.
            Sushant Kumar Vetapalem earned MVP honors.
          </p>
        </div>
      </div>
    ),
    image: '/images/gallery-batting.jpg',
    imageFallback: 'https://placehold.co/600x400/101010/D4AF37?text=Cricket+Event',
    buttonText: 'View Recap',
    stats: [
      { label: 'Teams', value: '8' },
      { label: 'Raised', value: '$500+' },
      { label: 'Winner', value: 'Rockhill' }
    ]
  },
  {
    id: 'pickleball',
    title: 'PICKLEBALL OPEN',
    shortDescription: 'Fast-paced brackets designed for all skill levels. Fun, fast, and competitive.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg font-light leading-relaxed">
            The 2025 PowerPlay Pickleball Tournament brought together players from across the region for an exciting day of competitive doubles play. The tournament featured a single-elimination bracket format with 10 teams competing for the championship title.
          </p>

          <div className="border border-white/10 rounded-sm p-6 bg-white/5">
            <h4 className="text-white font-bold text-base mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Tournament Results</h4>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-gold font-bold">Champions</span>
                </div>
                <span className="text-white text-right">Adithan & Ritvick</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-gray-400">🥈</span>
                  <span className="text-gray-300 font-medium">Runner-up</span>
                </div>
                <span className="text-gray-300 text-right">Biswajit & Arvind</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-black/20 p-6 rounded-sm border border-white/5 overflow-x-auto">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Bracket Highlights</h4>

            {/* Custom Bracket Visualization - Compact & Fluid */}
            <div className="w-full flex justify-between text-[10px] font-mono relative select-none">
              {/* Round 1 */}
              <div className="flex flex-col justify-around flex-1 gap-6 pr-1">
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">9 Shauryan</span>
                  <span>1</span>
                </div>
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">8 Abhinav</span>
                  <span>6</span>
                  <div className="absolute -right-2 top-[-14px] h-[28px] w-2 border-r border-white/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-white/20"></div>
                </div>

                <div className="h-8"></div> {/* Spacer */}

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">7 Shreyas</span>
                  <span>3</span>
                </div>
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">10 Ethan</span>
                  <span className="text-gold">11</span>
                  <div className="absolute -right-2 top-[-14px] h-[28px] w-2 border-r border-white/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-white/20"></div>
                </div>
              </div>

              {/* Round 2 (QF) */}
              <div className="flex flex-col justify-between flex-1 py-2 pr-1">
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">1 Rohit</span>
                  <span className="text-gold">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-white/20"></div>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span className="text-gold">16</span>
                  <div className="absolute -right-2 top-2 h-[30px] w-2 border-r border-b border-white/20 rounded-br"></div>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">4 Ankith</span>
                  <span>14</span>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">3 Aryan</span>
                  <span className="text-gold">12</span>
                  <div className="absolute -right-2 top-2 h-[30px] w-2 border-r border-b border-white/20 rounded-br"></div>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">6 Mithilesh</span>
                  <span>10</span>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-gold">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-white/20"></div>
                </div>
              </div>

              {/* Round 3 (SF) */}
              <div className="flex flex-col justify-around flex-1 py-8 pr-1">
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">1 Rohit</span>
                  <span>4</span>
                </div>
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span className="text-gold">11</span>
                  <div className="absolute -right-2 top-[-25px] h-[50px] w-2 border-r border-white/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-white/20"></div>
                </div>

                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">3 Aryan</span>
                  <span>3</span>
                </div>
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-white truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-gold">11</span>
                  <div className="absolute -right-2 top-[-25px] h-[50px] w-2 border-r border-white/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-white/20"></div>
                </div>
              </div>

              {/* Final */}
              <div className="flex flex-col justify-center flex-1">
                <div className="border-b border-white/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-gray-400 truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span>3</span>
                </div>
                <div className="border-b border-gold pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-gold font-bold truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-gold font-bold">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 italic mt-4">
            The final match was a thrilling showdown between two talented teams, with Adithan & Ritvick emerging as the tournament champions.
          </p>
        </div>
      </div>
    ),
    image: '/images/event-pickleball.jpg',
    imageFallback: 'https://placehold.co/600x400/101010/D4AF37?text=Pickleball+Action',
    buttonText: 'View Recap',
    stats: [
      { label: 'Players', value: '40+' },
      { label: 'Matches', value: '36' },
      { label: 'Format', value: 'Doubles' }
    ]
  },
  {
    id: 'guest',
    title: 'SPECIAL GUEST',
    shortDescription: 'Former Pakistan international Asif Mujtaba joined us to mentor young athletes.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed">
            We were honored to host Asif Mujtaba, who shared invaluable insights on leadership, discipline, and the mental game of sports. The session included a Q&A where students asked about overcoming pressure, and a batting demonstration that left the young athletes inspired.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            His journey from local clubs to the international stage served as a powerful motivation for everyone present. Watch the exclusive interview below to hear his thoughts on the future of youth cricket.
          </p>
        </div>
        <div className="bg-black/20 p-2 rounded-sm border border-white/5 shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-sm overflow-hidden">
            <video
              src="/images/final_asif_interview.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    ),
    image: '/images/event-guest.jpg',
    video: '/images/final_asif_interview.mp4',
    imageFallback: 'https://placehold.co/600x400/101010/D4AF37?text=Special+Guest',
    badge: 'Guest Star',
    buttonText: 'View Recap',
    stats: [
      { label: 'Attendees', value: '100+' },
      { label: 'Duration', value: '2 Hours' },
      { label: 'Topic', value: 'Leadership' }
    ]
  }
];

export const Events: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [contentEvent, setContentEvent] = useState<EventData | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'center'>('center');

  React.useEffect(() => {
    if (expandedEvent) {
      const target = EVENTS.find(e => e.id === expandedEvent);

      // If there is content already showing (Switching events)
      if (contentEvent && contentEvent.id !== expandedEvent) {
        setSlideDirection('left');
        setIsContentVisible(false);
        // The actual content swap happens in onTransitionEnd or after timeout
        // Using timeout for simplicity and reliability over CSS events in this context
        const timer = setTimeout(() => {
          setContentEvent(target || null);
          setSlideDirection('right');
          // Small delay to allow DOM to update with 'right' position before sliding in
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setSlideDirection('center');
              setIsContentVisible(true);
            });
          });
        }, 200);
        return () => clearTimeout(timer);
      }
      // If opening from closed state
      else if (!contentEvent) {
        setContentEvent(target || null);
        setSlideDirection('right');
        // Immediate next frame slide in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setSlideDirection('center');
            setIsContentVisible(true);
          });
        });
      }
    } else {
      // Closing
      if (contentEvent) {
        setSlideDirection('left');
        setIsContentVisible(false);
        const timer = setTimeout(() => {
          setContentEvent(null);
          setSlideDirection('center');
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [expandedEvent]);

  const toggleEvent = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const displayEventData = contentEvent;

  // Calculate transform based on direction
  const getTransformClass = () => {
    switch (slideDirection) {
      case 'left': return '-translate-x-8';
      case 'right': return 'translate-x-8';
      default: return 'translate-x-0';
    }
  };

  return (
    <section id="events" className="py-24 bg-black-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">
              TOURNAMENTS & <span className="text-gold">EVENTS</span>
            </h2>
            <p className="text-gray-400 font-light">Join the action and make a difference.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-gold hover:text-white transition-colors font-medium mt-4 md:mt-0 uppercase text-sm tracking-widest gap-2">
            View Full Calendar <span className="text-lg">→</span>
          </a>
        </div>

        {/* Featured Upcoming Event */}
        <div className="relative group bg-black-card border border-white/5 rounded-sm p-8 mb-16 flex flex-col md:flex-row gap-10 items-center overflow-hidden hover:border-gold/30 transition-all duration-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="w-full md:w-5/12 relative z-10">
            <div className="aspect-w-16 aspect-h-10 w-full bg-gray-900 rounded-sm overflow-hidden relative shadow-2xl">
              {/* User Image: Basketball */}
              <img
                src="/images/basketball.jpg"
                alt="Basketball"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1519861531473-920026393112?q=80&w=1000&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute top-0 left-0 bg-gold text-black font-bold px-4 py-2 text-xs uppercase tracking-widest">Coming Soon</div>
            </div>
          </div>
          <div className="w-full md:w-7/12 relative z-10">
            <h3 className="font-display font-bold text-4xl text-white mb-2 uppercase tracking-tight">Basketball Tournament</h3>
            <p className="text-gold mb-6 font-mono text-sm border-b border-white/10 pb-4 inline-block">LOCATION: LILYANA ELEMENTARY SCHOOL</p>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Get ready for high-flying action! Our upcoming basketball tournament brings the best local talent to the court. A premium experience for athletes and spectators alike.
            </p>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedEvent === 'basketball' ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are finalizing the bracket and team registrations. Expect a high-energy weekend with live commentary, music, and refreshments.
                All proceeds will go towards supporting local youth sports initiatives.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                <div>
                  <div className="text-gold font-bold text-lg">12</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Teams</div>
                </div>
                <div>
                  <div className="text-gold font-bold text-lg">5v5</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Format</div>
                </div>
                <div>
                  <div className="text-gold font-bold text-lg">$1K</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Prize Pool</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button>Get Notified</Button>
              <button
                onClick={() => toggleEvent('basketball')}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium underline decoration-gold/50 underline-offset-4"
              >
                {expandedEvent === 'basketball' ? 'Show Less' : 'More Details'}
              </button>
            </div>
          </div>
        </div>

        {/* Past/Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className={`bg-black-card border border-white/5 rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-500 group hover:-translate-y-1 ${expandedEvent === event.id ? 'ring-1 ring-gold/30' : ''}`}
            >
              <div className="h-56 overflow-hidden relative">
                {event.badge && (
                  <div className="absolute top-4 right-4 z-20 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">{event.badge}</div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src = event.imageFallback;
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
              <div className="p-8">
                <h4 className="font-display font-bold text-2xl text-white mb-3">{event.title}</h4>
                <p className="text-gray-500 text-sm mb-6 font-light">
                  {event.shortDescription}
                </p>

                {/* Expanded Content - Mobile Only */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${expandedEvent === event.id ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-gray-300 text-sm leading-relaxed mb-6">
                      {event.fullDescription}
                    </div>
                    {event.stats && (
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {event.stats.map((stat, idx) => (
                          <div key={idx} className="text-center bg-white/5 p-2 rounded">
                            <div className="text-gold font-bold text-sm">{stat.value}</div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => toggleEvent(event.id)}
                  className="text-gold text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3 outline-none focus:outline-none"
                >
                  {expandedEvent === event.id ? 'Close Recap' : event.buttonText}
                  <span className={`transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-180' : ''}`}>
                    {expandedEvent === event.id ? '−' : '→'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${expandedEvent ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
          {displayEventData && (
            <div
              className={`bg-black-card border border-white/10 rounded-sm p-10 relative overflow-hidden shadow-2xl transition-all duration-200 ease-out transform ${isContentVisible ? 'opacity-100' : 'opacity-0'} ${getTransformClass()}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent"></div>

              {/* Header Row: Title + Stats */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                <div>
                  <h3 className="font-display font-bold text-4xl text-white mb-2 tracking-tight">{displayEventData.title}</h3>
                  <div className="h-1 w-20 bg-gold"></div>
                </div>

                {displayEventData.stats && (
                  <div className="flex gap-4">
                    {displayEventData.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/5 px-4 py-2 rounded-sm text-center border border-white/10 backdrop-blur-sm min-w-[100px]">
                        <div className="text-gold font-bold text-xl font-display">{stat.value}</div>
                        <div className="text-gray-400 text-[10px] uppercase tracking-widest font-medium mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Row */}
              <div className="text-gray-300 text-base leading-relaxed font-light">
                {displayEventData.fullDescription}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <Button
                  variant="secondary"
                  onClick={() => setExpandedEvent(null)}
                  className="!py-2 !px-6 text-sm border-white/20 hover:bg-white/10"
                >
                  Close Details
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-gold hover:text-white transition-colors font-medium uppercase text-sm tracking-widest">View All Calendar →</a>
        </div>
      </div>
    </section>
  );
};
