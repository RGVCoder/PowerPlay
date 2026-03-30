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
        <div className="min-h-screen bg-white font-sans text-charcoal">
            <main className="pt-20">
                {/* Hero Section — clean, no pulsing badge */}
                <section className="relative py-24 bg-black overflow-hidden" data-navbar-theme="dark">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <p className="text-sm text-white/50 tracking-wide mb-6 font-medium">Get In Touch</p>
                        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">
                            Contact <span className="text-orange-cortex">Us</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Have questions? Want to start a chapter? We'd love to hear from you.
                        </p>
                    </div>
                </section>

                <hr className="border-gray-100/30" />

                {/* Contact Form Section */}
                <ScrollReveal data-navbar-theme="light">
                    <section className="py-24 md:py-28 relative bg-gray-50" data-navbar-theme="light">
                        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white rounded shadow-sm p-8 md:p-10 border border-gray-100">
                                {status === 'success' ? (
                                    <div className="text-center py-10">
                                        <div className="w-14 h-14 bg-green-50 text-green-500 rounded flex items-center justify-center mx-auto mb-5">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-3">Message Sent!</h3>
                                        <p className="text-charcoal-light mb-6 text-sm">
                                            Thank you for reaching out. We'll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="px-6 py-2.5 rounded bg-coral text-white font-semibold text-sm hover:bg-charcoal transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                        {status === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-600 rounded text-sm">
                                                {errorMessage || 'Something went wrong. Please try again later.'}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="user_name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    id="user_name"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-200 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all text-charcoal placeholder-charcoal/30 text-sm"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="user_email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    id="user_email"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-200 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all text-charcoal placeholder-charcoal/30 text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="topic" className="block text-sm font-medium text-charcoal mb-1.5">I'm interested in...</label>
                                            <div className="relative">
                                                <select
                                                    name="topic"
                                                    id="topic"
                                                    value={topic}
                                                    onChange={(e) => setTopic(e.target.value)}
                                                    className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-200 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all appearance-none cursor-pointer text-charcoal text-sm"
                                                >
                                                    <option value="General Inquiry">General Inquiries</option>
                                                    <option value="Starting a Chapter">Starting a Chapter</option>
                                                    <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                                                    <option value="Corporate Sponsorships">Corporate Sponsorships</option>
                                                    <option value="Local Partnerships">Local Partnerships</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-charcoal-muted">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-200 focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-all resize-none text-charcoal placeholder-charcoal/30 text-sm"
                                                placeholder="How can we help?"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 rounded bg-coral text-white font-semibold text-sm hover:bg-charcoal transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-charcoal-light text-sm">
                                    Prefer email? Reach us directly at{' '}
                                    <a href="mailto:powerplaynpo@gmail.com" className="text-coral font-medium hover:underline">
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
