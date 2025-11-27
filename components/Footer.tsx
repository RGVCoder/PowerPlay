import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-display font-bold text-3xl tracking-tighter text-white mb-6 block">
              POWER<span className="text-gold">PLAY</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering youth through sports, building community, and creating champions for tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] text-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                 <span className="w-4 h-4 mr-3 text-gold">✉</span>
                 powerplaynpo@gmail.com
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                 <span className="w-4 h-4 mr-3 text-gold">☎</span>
                 +1 (469) 360-4088
              </li>
              <li className="flex items-center hover:text-white transition-colors cursor-pointer">
                 <span className="w-4 h-4 mr-3 text-gold">@</span>
                 @powerplaynpo
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] text-gold">Quick Links</h4>
             <ul className="space-y-4 text-gray-400 text-sm font-light">
               <li><a href="#about" className="hover:text-gold transition-colors block">About Us</a></li>
               <li><a href="#events" className="hover:text-gold transition-colors block">Events</a></li>
               <li><a href="#team" className="hover:text-gold transition-colors block">Team</a></li>
               <li><a href="#" className="hover:text-gold transition-colors block">Donate</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] text-gold">Stay Updated</h4>
             <div className="flex border-b border-white/20 pb-2 focus-within:border-gold transition-colors">
               <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-transparent border-none text-white text-sm w-full focus:outline-none placeholder-gray-600"
               />
               <button className="text-gold font-bold hover:text-white transition-colors uppercase text-xs tracking-wider">
                  Join
               </button>
             </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 PowerPlay NPO. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};