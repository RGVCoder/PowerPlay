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
    id: 'guest-speaker-2026',
    title: 'GAME ON: IBD & SPORTS',
    shortDescription: 'An educational session with Dr. Bhaskar Gurram on helping athletes with pediatric illnesses.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            We partnered with <strong>HeroesForIBD</strong> to host an impactful session featuring Dr. Bhaskar Gurram, a Pediatric Gastroenterologist. The event focused on practical strategies for young athletes managing chronic illnesses.
          </p>

          <div className="border-l-4 border-coral p-6 bg-cream-sand">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Key Takeaways</h4>
            <ul className="space-y-3">
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-teal mt-0.5">✓</span>
                <span>Strategies for handling flare-ups and fatigue on game day</span>
              </li>
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-teal mt-0.5">✓</span>
                <span>Training modifications that keep athletes competitive</span>
              </li>
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-teal mt-0.5">✓</span>
                <span>Mental and physical benefits of maintaining an active lifestyle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-cream-sand p-6 border-l-4 border-teal">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Event Details</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
                <span className="text-charcoal-light">Date</span>
                <span className="font-bold text-charcoal">Feb 8, 2026</span>
              </div>
              <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
                <span className="text-charcoal-light">Location</span>
                <span className="font-bold text-charcoal text-right">John and Judy Gay Library</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-charcoal-light">Partner</span>
                <span className="font-bold text-teal">HeroesForIBD</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-charcoal-light italic bg-coral/10 p-3 border-l-4 border-coral">
            "Every kid deserves the chance to grow up and play." — The PowerPlay Team
          </p>
        </div>
      </div>
    ),
    image: '/images/game-on-ibd-live.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
    buttonText: 'View Recap',
    badge: 'Education',
    stats: [
      { label: 'Speaker', value: 'Dr. Gurram' },
      { label: 'Focus', value: 'Education' },
      { label: 'Partner', value: 'HeroesForIBD' }
    ]
  },
  {
    id: 'cricket',
    title: 'CRICKET TOURNAMENT',
    shortDescription: 'Competitive league play that spotlights rising cricket talent in the community.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">The PowerPlay Cricket Tournament was a smashing success, featuring 8 teams from across the district.</p>

          <div className="border-l-4 border-coral p-6 bg-cream-sand">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Match Summary</h4>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-charcoal-light">Heritage</span>
                <span className="font-bold text-charcoal">149/3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-coral font-medium">Rockhill</span>
                <span className="font-bold text-coral">150/1 <span className="text-xs opacity-70 ml-1">(18.2)</span></span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-start gap-3 text-sm">
              <span className="text-xl mt-1">🏅</span>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal-muted mb-1">Player of the Match</div>
                <div className="text-charcoal font-medium">Bhavya Hooda – 73*</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Standings</h4>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-charcoal-muted text-xs uppercase tracking-wider">
                  <th className="py-2 px-1 font-medium">#</th>
                  <th className="py-2 px-1 font-medium">Team</th>
                  <th className="py-2 px-1 font-medium text-center">P</th>
                  <th className="py-2 px-1 font-medium text-center">W</th>
                  <th className="py-2 px-1 font-medium text-center">L</th>
                  <th className="py-2 px-1 font-medium text-center">Pts</th>
                </tr>
              </thead>
              <tbody className="text-charcoal-light font-light">
                <tr className="border-b border-charcoal/5">
                  <td className="py-3 px-1 text-coral font-bold">1</td>
                  <td className="py-3 px-1 text-charcoal">LTHS Challengers</td>
                  <td className="py-3 px-1 text-center">4</td>
                  <td className="py-3 px-1 text-center">2</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-charcoal">5</td>
                </tr>
                <tr className="border-b border-charcoal/5">
                  <td className="py-3 px-1 text-coral font-bold">2</td>
                  <td className="py-3 px-1 text-charcoal">Walnut Grove</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">2</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-charcoal">4</td>
                </tr>
                <tr className="border-b border-charcoal/5">
                  <td className="py-3 px-1 text-coral font-bold">3</td>
                  <td className="py-3 px-1 text-charcoal">Heritage Cricket</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-bold text-charcoal">3</td>
                </tr>
                <tr className="border-b border-charcoal/5">
                  <td className="py-3 px-1 text-charcoal-muted">4</td>
                  <td className="py-3 px-1 text-charcoal-light">Wakeland</td>
                  <td className="py-3 px-1 text-center">3</td>
                  <td className="py-3 px-1 text-center">0</td>
                  <td className="py-3 px-1 text-center">1</td>
                  <td className="py-3 px-1 text-center font-medium">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-charcoal-light italic bg-coral/10 p-3 border-l-4 border-coral">
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
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            The 2025 PowerPlay Pickleball Tournament brought together players from across the region for an exciting day of competitive doubles play. The tournament featured a single-elimination bracket format with 10 teams competing for the championship title.
          </p>

          <div className="border-l-4 border-coral p-6 bg-cream-sand">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Tournament Results</h4>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-coral font-bold">Champions</span>
                </div>
                <span className="text-charcoal text-right">Adithan & Ritvick</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-charcoal-light">🥈</span>
                  <span className="text-charcoal-light font-medium">Runner-up</span>
                </div>
                <span className="text-charcoal-light text-right">Biswajit & Arvind</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-cream-sand p-6 border-l-4 border-teal overflow-x-auto">
            <h4 className="text-charcoal font-bold text-sm mb-6 uppercase tracking-widest border-b border-charcoal/10 pb-2">Bracket Highlights</h4>

            {/* Custom Bracket Visualization - Compact & Fluid */}
            <div className="w-full flex justify-between text-[10px] font-mono relative select-none">
              {/* Round 1 */}
              <div className="flex flex-col justify-around flex-1 gap-6 pr-1">
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">9 Shauryan</span>
                  <span className="text-charcoal">1</span>
                </div>
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">8 Abhinav</span>
                  <span className="text-charcoal">6</span>
                  <div className="absolute -right-2 top-[-14px] h-[28px] w-2 border-r border-charcoal/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-charcoal/20"></div>
                </div>

                <div className="h-8"></div> {/* Spacer */}

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">7 Shreyas</span>
                  <span className="text-charcoal">3</span>
                </div>
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">10 Ethan</span>
                  <span className="text-coral">11</span>
                  <div className="absolute -right-2 top-[-14px] h-[28px] w-2 border-r border-charcoal/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-charcoal/20"></div>
                </div>
              </div>

              {/* Round 2 (QF) */}
              <div className="flex flex-col justify-between flex-1 py-2 pr-1">
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">1 Rohit</span>
                  <span className="text-coral">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-charcoal/20"></div>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span className="text-coral">16</span>
                  <div className="absolute -right-2 top-2 h-[30px] w-2 border-r border-b border-charcoal/20"></div>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">4 Ankith</span>
                  <span className="text-charcoal">14</span>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">3 Aryan</span>
                  <span className="text-coral">12</span>
                  <div className="absolute -right-2 top-2 h-[30px] w-2 border-r border-b border-charcoal/20"></div>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">6 Mithilesh</span>
                  <span className="text-charcoal">10</span>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-coral">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-charcoal/20"></div>
                </div>
              </div>

              {/* Round 3 (SF) */}
              <div className="flex flex-col justify-around flex-1 py-8 pr-1">
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">1 Rohit</span>
                  <span className="text-charcoal">4</span>
                </div>
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span className="text-coral">11</span>
                  <div className="absolute -right-2 top-[-25px] h-[50px] w-2 border-r border-charcoal/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-charcoal/20"></div>
                </div>

                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">3 Aryan</span>
                  <span className="text-charcoal">3</span>
                </div>
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-coral">11</span>
                  <div className="absolute -right-2 top-[-25px] h-[50px] w-2 border-r border-charcoal/20"></div>
                  <div className="absolute -right-2 top-0 h-[1px] w-1 bg-charcoal/20"></div>
                </div>
              </div>

              {/* Final */}
              <div className="flex flex-col justify-center flex-1">
                <div className="border-b border-charcoal/20 pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-charcoal-light truncate max-w-[40px] sm:max-w-[60px]">5 Biswajit</span>
                  <span className="text-charcoal">3</span>
                </div>
                <div className="border-b border-coral pb-1 mb-1 flex justify-between relative whitespace-nowrap">
                  <span className="text-coral font-bold truncate max-w-[40px] sm:max-w-[60px]">2 Adithan</span>
                  <span className="text-coral font-bold">11</span>
                  <div className="absolute -left-2 top-2 h-[1px] w-2 bg-charcoal/20"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-charcoal-light italic mt-4 bg-coral/10 p-3 border-l-4 border-coral">
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
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            We were honored to host Asif Mujtaba, who shared invaluable insights on leadership, discipline, and the mental game of sports. The session included a Q&A where students asked about overcoming pressure, and a batting demonstration that left the young athletes inspired.
          </p>
          <p className="text-charcoal-light leading-relaxed font-light">
            His journey from local clubs to the international stage served as a powerful motivation for everyone present. Watch the exclusive interview below to hear his thoughts on the future of youth cricket.
          </p>
        </div>
        <div className="bg-cream-sand p-2 border-l-4 border-coral shadow-xl">
          <div className="aspect-w-16 aspect-h-9 w-full bg-charcoal overflow-hidden">
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

  const topEvents = EVENTS.slice(0, 3);
  const bottomEvents = EVENTS.slice(3);

  // Determine where to show the expanded content
  const isTopExpanded = expandedEvent && topEvents.some(e => e.id === expandedEvent);
  const isBottomExpanded = expandedEvent && bottomEvents.some(e => e.id === expandedEvent);

  const renderExpandedContent = (isVisible: boolean) => (
    <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${isVisible ? 'max-h-[1000px] opacity-100 mt-8 mb-8' : 'max-h-0 opacity-0'}`}>
      {displayEventData && (
        <div
          className={`bg-white border-l-4 border-coral p-10 relative overflow-hidden shadow-xl transition-all duration-200 ease-out transform ${isContentVisible ? 'opacity-100' : 'opacity-0'} ${getTransformClass()}`}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-coral/50 to-transparent"></div>

          {/* Header Row: Title + Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-2 tracking-tight whitespace-nowrap">{displayEventData.title}</h3>
              <div className="h-1 w-20 bg-coral"></div>
            </div>

            {displayEventData.stats && (
              <div className="flex gap-4">
                {displayEventData.stats.map((stat, idx) => (
                  <div key={idx} className="bg-cream-sand px-4 py-2 text-center border-l-2 border-teal backdrop-blur-sm min-w-[100px]">
                    <div className="text-coral font-bold text-xl font-display">{stat.value}</div>
                    <div className="text-charcoal-muted text-[10px] uppercase tracking-widest font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content Row */}
          <div className="text-charcoal-light text-base leading-relaxed font-light">
            {displayEventData.fullDescription}
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal/10 flex justify-end">
            <Button
              variant="secondary"
              onClick={() => setExpandedEvent(null)}
              className="!py-2 !px-6 text-sm"
            >
              Close Details
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  const renderEventCard = (event: EventData) => (
    <div
      key={event.id}
      className={`bg-white border-l-4 border-charcoal/20 overflow-hidden hover:border-coral transition-all duration-500 group hover:-translate-y-1 shadow-md hover:shadow-lg ${expandedEvent === event.id ? 'ring-2 ring-coral/30' : ''}`}
    >
      <div className="h-48 md:h-56 overflow-hidden relative">
        {event.badge && (
          <div className="absolute top-3 right-3 z-20 bg-coral text-white text-[9px] md:text-[10px] font-bold px-2 py-1 md:px-3 md:py-1.5 uppercase tracking-wider shadow-sm">{event.badge}</div>
        )}
        <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = event.imageFallback;
            e.currentTarget.onerror = null;
          }}
        />
      </div>
      <div className="p-6 md:p-8">
        <h4 className="font-display font-bold text-lg md:text-xl text-charcoal mb-3 text-center">{event.title}</h4>
        <p className="text-charcoal-light text-sm mb-6 font-light text-center">
          {event.shortDescription}
        </p>

        {/* Expanded Content - Mobile Only */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${expandedEvent === event.id ? 'max-h-[2000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-charcoal/10">
            <div className="text-charcoal-light text-sm leading-relaxed mb-6">
              {event.fullDescription}
            </div>
            {event.stats && (
              <div className="grid grid-cols-3 gap-2 mb-2">
                {event.stats.map((stat, idx) => (
                  <div key={idx} className="text-center bg-cream-sand p-2">
                    <div className="text-coral font-bold text-sm">{stat.value}</div>
                    <div className="text-[10px] text-charcoal-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => toggleEvent(event.id)}
          className="text-coral text-xs font-bold uppercase tracking-[0.2em] hover:text-charcoal transition-colors flex items-center justify-center mx-auto gap-2 group-hover:gap-3 outline-none focus:outline-none"
        >
          {expandedEvent === event.id ? 'Close Recap' : event.buttonText}
          <span className={`transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-180' : ''}`}>
            {expandedEvent === event.id ? '−' : '→'}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upcoming Events Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-6 mb-10 md:mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-coral/20 to-coral/40"></div>
            <h3 className="font-display font-bold text-xl md:text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">Upcoming Events</h3>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-coral/20 to-coral/40"></div>
          </div>



          {/* Secondary: Pickleball Tournament - Full width like featured */}
          <div className="relative group bg-white border-l-4 border-teal overflow-hidden transition-all duration-500 shadow-md flex flex-col md:flex-row">
            {/* Bottom accent border - underline effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

            <div className="w-full md:w-1/3 h-48 md:h-64 overflow-hidden relative z-10">
              <img
                src="/images/pickleball-upcoming.png"
                alt="Pickleball Tournament"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute top-0 left-0 bg-teal text-white font-bold px-3 py-1.5 text-[10px] uppercase tracking-widest">Coming Soon</div>
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-coral font-mono text-xs md:text-sm uppercase tracking-wider">Late February / Early March 2026</span>
              </div>
              <span className="inline-block text-teal text-[10px] md:text-xs font-medium bg-teal/10 px-2 py-1 mb-3 w-fit">PowerPlay X HeroesForIBD</span>
              <h4 className="font-display font-bold text-xl md:text-3xl text-charcoal mb-3 uppercase tracking-tight">Pickleball Tournament</h4>
              <p className="text-charcoal-light leading-relaxed font-light text-sm">
                Our next doubles pickleball competition is in the works! Compete with friends while raising funds and awareness for pediatric illnesses. Stay tuned for registration details.
              </p>
            </div>
          </div>
        </div>

        {/* Past Events Header */}
        <div className="flex items-center justify-center gap-6 mb-10 md:mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-charcoal/20"></div>
          <h3 className="font-display font-bold text-xl md:text-3xl text-charcoal tracking-wider uppercase whitespace-nowrap">Past Events</h3>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-charcoal/20"></div>
        </div>

        {/* Past/Highlight Grid - Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start relative">
          {topEvents.map(renderEventCard)}
        </div>

        {/* Expanded Content for Top Events */}
        {renderExpandedContent(!!isTopExpanded)}

        {/* Remaining Events Grid (Special Guest) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start relative mt-8">
          {bottomEvents.map(renderEventCard)}
        </div>

        {/* Expanded Content for Bottom Events */}
        {renderExpandedContent(!!isBottomExpanded)}

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-coral hover:text-charcoal transition-colors font-medium uppercase text-sm tracking-widest">View All Calendar →</a>
        </div>
      </div>
    </section>
  );
};
