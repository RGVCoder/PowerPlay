import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

const CHAPTERS = [
    { name: 'Frisco Chapter', location: 'Frisco, TX' },
    { name: 'Chicago Chapter', location: 'Chicago, IL' },
    { name: 'California Chapter', location: 'California' }
];

export const Chapters: React.FC = () => {
    return (
        <section id="chapters" className="py-24 md:py-28 bg-white overflow-hidden" data-navbar-theme="light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <ScrollReveal>
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="font-sans font-bold text-3xl md:text-5xl text-charcoal mb-4">Our Chapters</h2>
                            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">Expanding our impact across the nation.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            {CHAPTERS.map((chapter) => (
                                <div key={chapter.name} className="p-8 bg-gray-50/50 rounded border border-gray-100 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-gray-200">
                                    <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-sans font-semibold text-lg text-charcoal mb-2">{chapter.name}</h3>
                                    <p className="text-charcoal-light text-sm">{chapter.location}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Box - Matching California Chapter Style */}
                        <div className="bg-gray-50/50 rounded p-8 md:p-14 border border-gray-100 overflow-hidden relative group transition-all duration-300 hover:shadow-md hover:bg-white">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="text-center md:text-left">
                                    <h3 className="font-sans font-bold text-2xl md:text-3xl mb-4 text-charcoal">Want to start a chapter?</h3>
                                    <p className="text-charcoal-light text-base max-w-lg leading-relaxed">
                                        Bring PowerPlay to your school or community. We provide the playbook, you provide the passion.
                                    </p>
                                </div>
                                <Link to="/contact" className="px-10 py-4 bg-coral hover:bg-charcoal text-white rounded-lg font-semibold transition-all duration-200 shadow-xl shadow-coral/20">
                                    Get Started Together →
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
