import React, { useState } from 'react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { EventBox } from './EventBox';

interface EventData {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  image: string;
  video?: string;
  imageFallback: string;
  buttonText: string;
  stats?: { label: string; value: string }[];
}

const EVENTS: EventData[] = [
  {
    id: 'wilco-3v3-austin',
    title: 'Wilco 3v3 Charity Tournament',
    shortDescription: 'Austin chapter\'s charity basketball tournament — rain came down and everyone still balled out.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            The <strong>Wilco 3v3 Charity Tournament</strong>, run by our <strong>Austin chapter</strong>, did not disappoint. Rain came down and everyone balled out — great games, great people, and all for a great cause.
          </p>
          <div className="bg-cream-dark p-6 border-l-4 border-coral">
            <h4 className="text-charcoal font-bold text-base mb-2 uppercase tracking-widest">Community</h4>
            <p className="text-charcoal-light font-light text-sm">
              Thank you to everyone who came out and supported. Events like this show what happens when young athletes show up for each other — on and off the court.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-cream p-6 border border-charcoal/5 rounded-xl">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Tournament Champions</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-coral font-bold">Champions</span>
                </div>
                <span className="text-charcoal text-right font-bold">Hershey, Sahil & Vishruth</span>
              </div>
            </div>
          </div>
          <div className="bg-cream p-6 border border-charcoal/5 rounded-xl">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Event Details</h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal-light">Chapter</span>
                <span className="font-bold text-charcoal">Austin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-light">Format</span>
                <span className="font-bold text-charcoal">3v3 Basketball</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-light">Location</span>
                <span className="font-bold text-charcoal text-right">Williamson County, TX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    image: '/images/wilco-3v3-austin.jpg',
    imageFallback: '/images/wilco-3v3-austin.jpg',
    buttonText: 'View recap',
    stats: [
      { label: 'Chapter', value: 'Austin' },
      { label: 'Format', value: '3v3' },
      { label: 'Sport', value: 'Basketball' }
    ]
  },
  {
    id: 'heart-to-heart-pickleball',
    title: 'Pickleball Tournament',
    shortDescription: 'A highly successful doubles tournament with amazing community turnout.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            We're excited to share that the <strong>PowerPlay x Heart to Heart Doubles Pickleball Tournament</strong> was a huge success, filled with great energy, competitive matches, and an amazing community turnout from start to finish.
          </p>
          <div className="bg-cream-dark p-6 border-l-4 border-coral">
            <h4 className="text-charcoal font-bold text-base mb-2 uppercase tracking-widest">Special Thanks</h4>
            <p className="text-charcoal-light font-light text-sm">
              Thank you to <strong>Chicken N Pickle Allen</strong> for the beautiful venue and our sponsor, <strong>Credit Union of Texas</strong>, for helping make this event possible. More coming soon!
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-cream p-6 border border-charcoal/5 rounded-xl">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Tournament Winners</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-coral font-bold">1st Place</span>
                </div>
                <span className="text-charcoal text-right font-bold">Arhaan & Varun</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-charcoal/5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🥈</span>
                  <span className="text-charcoal-light font-bold">2nd Place</span>
                </div>
                <span className="text-charcoal-light text-right font-medium">Vinay & Ishaan</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-charcoal/5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎖️</span>
                  <span className="text-charcoal font-bold">Backdraw</span>
                </div>
                <span className="text-charcoal text-right font-medium">Yash & Kashyap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    image: '/images/pickleball-winners.jpg',
    imageFallback: 'https://placehold.co/600x400/101010/D4AF37?text=Pickleball+Winners',
    buttonText: 'View recap',
    stats: [
      { label: 'Venue', value: 'Chicken N Pickle' },
      { label: 'Sponsor', value: 'Credit Union TX' },
      { label: 'Raised', value: '$800+' }
    ]
  },
  {
    id: 'giveback-night',
    title: 'Giveback Night',
    shortDescription: 'Community night at Chicken N Pickle helping the Crohn\'s & Colitis Foundation.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            We gathered at <strong>Chicken N Pickle</strong> for a night of food, fun, and fundraising!
            A portion of all food and drink sales went directly to the <strong>Crohn's & Colitis Foundation</strong> through their "Take Steps" program.
          </p>
          <div className="bg-cream-dark p-6 border-l-4 border-coral">
            <h4 className="text-charcoal font-bold text-base mb-2 uppercase tracking-widest">Impact</h4>
            <p className="text-charcoal-light font-light text-sm">
              Community members came together to enjoy pickleball and great food while raising awareness and funds for IBD research and patient support programs.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-cream p-6 border border-charcoal/5 rounded-xl">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Event Details</h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal-light">Date</span>
                <span className="font-bold text-charcoal">Feb 11, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-light">Location</span>
                <span className="font-bold text-charcoal text-right">Chicken N Pickle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-light">Beneficiary</span>
                <span className="font-bold text-coral text-right">Crohn's & Colitis Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    image: '/images/giveback2.png',
    imageFallback: 'https://placehold.co/600x400/101010/D4AF37?text=Giveback+Night',
    buttonText: 'View recap',
    stats: [
      { label: 'Partner', value: 'Chicken N\' Pickle' },
      { label: 'Activity', value: 'Dining & Play' },
      { label: 'Impact', value: 'Fundraiser' }
    ]
  },
  {
    id: 'guest-speaker-2026',
    title: 'Doctor Guest Speaker',
    shortDescription: 'Dr. Bhaskar Gurram shares insights on helping athletes with pediatric illnesses.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            We partnered with <strong>HeroesForIBD</strong> to host an impactful session featuring Dr. Bhaskar Gurram, a Pediatric Gastroenterologist. The event focused on practical strategies for young athletes managing chronic illnesses.
          </p>

          <div className="border-l-4 border-coral p-6 bg-cream-dark">
            <h4 className="text-charcoal font-bold text-base mb-4 uppercase tracking-widest border-b border-charcoal/10 pb-2">Key Takeaways</h4>
            <ul className="space-y-3">
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-coral mt-0.5">✓</span>
                <span>Strategies for handling flare-ups and fatigue on game day</span>
              </li>
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-coral mt-0.5">✓</span>
                <span>Training modifications that keep athletes competitive</span>
              </li>
              <li className="text-charcoal-light text-sm flex items-start gap-3">
                <span className="text-coral mt-0.5">✓</span>
                <span>Mental and physical benefits of maintaining an active lifestyle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-cream-dark p-6 border-l-4 border-coral">
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
                <span className="font-bold text-coral">HeroesForIBD</span>
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
    buttonText: 'View recap',
    stats: [
      { label: 'Speaker', value: 'Dr. Gurram' },
      { label: 'Focus', value: 'Education' },
      { label: 'Partner', value: 'HeroesForIBD' }
    ]
  },
  {
    id: 'cricket',
    title: 'Cricket Tournament',
    shortDescription: 'Competitive league play that spotlights rising cricket talent in the community.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">The PowerPlay Cricket Tournament was a smashing success, featuring 8 teams from across the district.</p>

          <div className="border-l-4 border-coral p-6 bg-cream-dark">
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
    buttonText: 'View recap',
    stats: [
      { label: 'Teams', value: '8' },
      { label: 'Raised', value: '$500+' },
      { label: 'Winner', value: 'Rockhill' }
    ]
  },
  {
    id: 'pickleball',
    title: 'Pickleball Open',
    shortDescription: 'Fast-paced brackets designed for all skill levels. Fun, fast, and competitive.',
    fullDescription: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg font-light leading-relaxed text-charcoal-light">
            The 2025 PowerPlay Pickleball Tournament brought together players from across the region for an exciting day of competitive doubles play. The tournament featured a single-elimination bracket format with 10 teams competing for the championship title.
          </p>

          <div className="border-l-4 border-coral p-6 bg-cream-dark">
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
          <div className="bg-cream-dark p-6 border-l-4 border-coral overflow-x-auto">
            <h4 className="text-charcoal font-bold text-sm mb-6 uppercase tracking-widest border-b border-charcoal/10 pb-2">Bracket Highlights</h4>

            <div className="w-full flex justify-between text-[10px] font-mono relative select-none">
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

                <div className="h-8"></div>

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
    buttonText: 'View recap',
    stats: [
      { label: 'Players', value: '40+' },
      { label: 'Matches', value: '36' },
      { label: 'Format', value: 'Doubles' }
    ]
  },
  {
    id: 'guest',
    title: 'Special Guest',
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
        <div className="bg-cream-dark p-2 border-l-4 border-coral">
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
    buttonText: 'View recap',
    stats: [
      { label: 'Attendees', value: '100+' },
      { label: 'Duration', value: '2 Hours' },
      { label: 'Topic', value: 'Leadership' }
    ]
  }
];

const UPCOMING_EVENT = {
  title: 'PowerPlay x Heart to Heart Pickleball Tournament',
  dateDisplay: 'Postponed',
  description: (
    <>
      Men&apos;s, women&apos;s, and mixed doubles at <strong>Pickleball Kingdom Plano</strong>,
      1301 Custer Rd, Suite 200. Registration is $20 per team, with $100 for first place
      and $50 for second place.
    </>
  ),
  image: '/images/pickleball-kingdom-plano.png',
  imageFallback: '/images/gallery-pickleball.jpg',
  registrationUrl: 'https://bit.ly/powerplaypickleball',
};

export const Events: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEvent = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const renderExpandedPanel = (event: EventData) => (
    <div className="bg-white border border-stone-150 border-t-0 rounded-b-lg px-6 md:px-8 pb-8 pt-2 -mt-2">
      {event.stats && (
        <div className="flex flex-wrap gap-3 mb-6">
          {event.stats.map((stat) => (
            <div key={stat.label} className="bg-sideline px-4 py-2 rounded-lg text-center min-w-[90px]">
              <div className="text-coral font-display font-semibold text-lg">{stat.value}</div>
              <div className="text-charcoal-light text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      <div className="text-charcoal-light text-base leading-relaxed">
        {event.fullDescription}
      </div>
      <div className="mt-6 pt-4 border-t border-stone-150 flex justify-end">
        <Button variant="secondary" onClick={() => setExpandedEvent(null)} className="!py-2 !px-6 text-sm">
          Close recap
        </Button>
      </div>
    </div>
  );

  const renderPastEvent = (event: EventData) => {
    const isExpanded = expandedEvent === event.id;

    return (
      <div key={event.id}>
        <EventBox
          title={event.title}
          description={event.shortDescription}
          image={event.image}
          imageFallback={event.imageFallback}
          className={isExpanded ? 'rounded-b-none border-b-0' : ''}
          footer={
            <button
              onClick={() => toggleEvent(event.id)}
              className="text-coral text-sm font-semibold hover:text-charcoal transition-colors inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-coral rounded"
            >
              {isExpanded ? 'Close recap' : event.buttonText}
              <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                {isExpanded ? '−' : '→'}
              </span>
            </button>
          }
        />
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {isExpanded && renderExpandedPanel(event)}
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="py-0">
      <div className="bg-court py-24 md:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal tracking-tight">Upcoming Events</h3>
          </div>

          <ScrollReveal width="100%" delay={0.1}>
            <EventBox
              title={UPCOMING_EVENT.title}
              description={UPCOMING_EVENT.description}
              image={UPCOMING_EVENT.image}
              imageFallback={UPCOMING_EVENT.imageFallback}
              dateLabel={UPCOMING_EVENT.dateDisplay}
              footer={
                <a
                  href={UPCOMING_EVENT.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-charcoal transition-colors"
                >
                  Register now
                  <span>↗</span>
                </a>
              }
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-sideline py-24 md:py-28 border-t border-stone-150" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal tracking-tight">Past Events</h3>
          </div>

          <div className="space-y-5">
            {EVENTS.map((event, index) => (
              <ScrollReveal key={event.id} width="100%" delay={index * 0.05}>
                {renderPastEvent(event)}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
