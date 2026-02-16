import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const [topic, setTopic] = useState('General Inquiry');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            // Check for environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS configuration is missing. Please contact the administrator.');
            }

            await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            );

            setStatus('success');
            form.current.reset();
            setTopic('General Inquiry');
        } catch (error) {
            console.error('FAILED...', error);
            setStatus('error');
            setErrorMessage('Failed to send message: ' + (error instanceof Error ? error.message : 'Unknown error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-cream font-sans">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-charcoal overflow-hidden" data-navbar-theme="dark">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-coral/20 text-coral text-xs lg:text-sm font-semibold uppercase tracking-widest mb-6 mt-8 md:mt-0">
                            Get In Touch
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight">
                            Contact <span className="text-coral">Us</span>
                        </h1>
                        <p className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                            Have questions? Want to start a chapter? We'd love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <ScrollReveal>
                    <section className="py-16 md:py-24 relative" data-navbar-theme="light">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-charcoal/5">
                                {status === 'success' ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent!</h3>
                                        <p className="text-charcoal-light mb-8">
                                            Thank you for reaching out. We'll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="px-8 py-3 rounded-full bg-coral text-white font-bold hover:bg-coral-dark transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                        {status === 'error' && (
                                            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm mb-6">
                                                {errorMessage || 'Something went wrong. Please try again later.'}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="user_name" className="block text-sm font-bold text-charcoal mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    id="user_name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-cream-warm border border-charcoal/10 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="user_email" className="block text-sm font-bold text-charcoal mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    id="user_email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-cream-warm border border-charcoal/10 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="topic" className="block text-sm font-bold text-charcoal mb-2">I'm interested in...</label>
                                            <div className="relative">
                                                <select
                                                    name="topic"
                                                    id="topic"
                                                    value={topic}
                                                    onChange={(e) => setTopic(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg bg-cream-warm border border-charcoal/10 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all appearance-none cursor-pointer"
                                                >
                                                    <option value="General Inquiry">General Inquiries</option>
                                                    <option value="Starting a Chapter">Starting a Chapter</option>
                                                    <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                                                    <option value="Corporate Sponsorships">Corporate Sponsorships</option>
                                                    <option value="Local Partnerships">Local Partnerships</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-charcoal-light">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 rounded-lg bg-cream-warm border border-charcoal/10 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all resize-none"
                                                placeholder="How can we help?"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 rounded-full bg-coral text-white font-bold text-lg shadow-lg shadow-coral/20 hover:shadow-xl hover:translate-y-[-2px] hover:bg-coral-dark transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-charcoal-light">
                                    Prefer email? Reach us directly at{' '}
                                    <a href="mailto:powerplaynpo@gmail.com" className="text-coral font-bold hover:underline">
                                        powerplaynpo@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
};
