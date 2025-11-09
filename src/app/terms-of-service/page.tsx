"use client";

import Link from "next/link";

const lastUpdated = "November 8, 2025";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "These Terms of Service (“Terms”) govern your access to and use of PowerPlay’s website, tournament registration, volunteer coordination, donation channels, and any other services we provide (“Services”).",
      "By using our Services, you agree to these Terms. If you do not agree, please discontinue use of the Services."
    ],
  },
  {
    title: "2. Eligibility",
    content: [
      "You must be at least 13 years old to use our Services independently. Minors under 13 may participate with the consent and supervision of a parent or legal guardian.",
      "By registering for an event or submitting information, you confirm that the information you provide is accurate and that you have the authority to share it."
    ],
  },
  {
    title: "3. Participant Responsibilities",
    content: [
      "Follow all event rules, safety guidelines, and instructions from event officials and volunteers.",
      "Treat fellow participants, staff, and community members with respect; harassment or discrimination of any kind is not tolerated.",
      "Inform us promptly of any changes to your registration details, health information, or emergency contacts."
    ],
  },
  {
    title: "4. Donations & Sponsorships",
    content: [
      "Donations are processed through third-party platforms. By donating, you agree to the terms set by those processors.",
      "Sponsorship arrangements may require separate written agreements outlining specific obligations, deliverables, and recognition."
    ],
  },
  {
    title: "5. Media & Publicity",
    content: [
      "We may capture photographs, video, and audio during events to promote PowerPlay’s mission. By participating, you grant us permission to use such media in our communications and marketing materials, unless you opt out in writing before the event.",
      "Parents/guardians may contact us to request removal of specific media featuring minors."
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "All content on our website—including text, graphics, logos, and media—is owned by PowerPlay or licensed for our use. You may not reproduce or distribute materials without prior written permission, except for personal, non-commercial use."
    ],
  },
  {
    title: "7. Code of Conduct",
    content: [
      "We expect all participants to uphold the values of sportsmanship, inclusivity, and respect. PowerPlay reserves the right to remove any individual from an event or program if their behavior endangers others, violates these Terms, or conflicts with our mission."
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Participation in sports activities involves inherent risks. To the fullest extent permitted by law, PowerPlay is not liable for injuries, damages, or losses arising from participation in our events, except in cases of gross negligence or willful misconduct.",
      "You agree to release and hold PowerPlay harmless from claims relating to your participation, except where prohibited by law."
    ],
  },
  {
    title: "9. Third-Party Links & Services",
    content: [
      "Our Services may link to third-party platforms (e.g., registration tools, payment processors, social media). PowerPlay is not responsible for the content, policies, or practices of those third parties."
    ],
  },
  {
    title: "10. Changes to Services or Terms",
    content: [
      "We may update or discontinue portions of our Services at any time. We may also update these Terms periodically; the “Last Updated” date will reflect the most recent revision.",
      "Continued use of the Services after updates constitutes acceptance of the revised Terms."
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Texas, unless required otherwise by applicable law."
    ],
  },
  {
    title: "12. Contact Information",
    content: [
      "If you have questions about these Terms or need assistance, contact us at:",
      "<strong>Email:</strong> <a href='mailto:powerplaynpo@gmail.com'>powerplaynpo@gmail.com</a>",
      "<strong>Phone:</strong> <a href='tel:+14693604088'>+1 (469) 360-4088</a>",
      "<strong>Instagram:</strong> <a href='https://www.instagram.com/powerplaynpo/' target='_blank' rel='noopener noreferrer'>@powerplaynpo</a>"
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last Updated: {lastUpdated}</p>
        {sections.map((section) => (
          <section key={section.title} className="legal-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}

