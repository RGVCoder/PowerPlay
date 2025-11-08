"use client";

import Link from "next/link";

const lastUpdated = "November 8, 2025";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "PowerPlay (“we,” “our,” or “us”) is committed to safeguarding the privacy of athletes, families, volunteers, and supporters who interact with our programs. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, register for an event, donate, or otherwise engage with PowerPlay.",
      "We model our approach on nonprofit best practices similar to those described by the Medow Foundation, adapting them to fit our youth-sports mission.[^1]"
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "<strong>Personal Information:</strong> Contact details, demographic information, volunteer interests, team affiliations, donation records, and any other information you provide directly to us.[^1]",
      "<strong>Automatically Collected Information:</strong> IP address, browser type, device details, referring URLs, pages viewed, and time spent on our site collected through cookies and analytics tools.[^1]"
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "Provide and administer tournaments, volunteer programs, and community initiatives.[^1]",
      "Process registrations, donations, sponsorships, and issue confirmations or receipts.[^1]",
      "Communicate updates, schedules, newsletters, and organizational announcements (with your consent where required).[^1]",
      "Improve our website, services, and outreach by analyzing aggregated usage trends.[^1]",
      "Comply with legal obligations and protect against fraud or misuse of our services."
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information. We may share information with vetted service providers (e.g., payment processors, registration platforms, email services) who help us operate PowerPlay, and only to the extent necessary for them to perform their services.[^1]",
      "We may disclose information when required by law, to enforce our policies, or to protect the rights, safety, and welfare of participants and the broader community.[^1]"
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We maintain reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. While no method of transmission or storage is completely secure, we continuously monitor and adapt our safeguards to align with nonprofit privacy best practices.[^1]"
    ],
  },
  {
    title: "6. Your Rights & Choices",
    content: [
      "Request access to, correction of, or deletion of personal information we hold about you by emailing <a href='mailto:powerplaynpo@gmail.com'>powerplaynpo@gmail.com</a>.[^1]",
      "Opt out of marketing communications at any time using the unsubscribe link within our emails or by contacting us directly.",
      "Adjust browser settings to manage cookies. Disabling cookies may limit certain site features but core services will remain available."
    ],
  },
  {
    title: "7. Cookies & Tracking Technologies",
    content: [
      "We use cookies and similar technologies to enhance site functionality, remember preferences, and gather analytics that help improve user experience. You can control cookie preferences through your browser settings.[^1]"
    ],
  },
  {
    title: "8. Children’s Privacy",
    content: [
      "PowerPlay works closely with youth athletes and collects personal information about minors only with consent from a parent or legal guardian. We use this information solely to coordinate participation, ensure safety, and communicate about PowerPlay activities.[^1]"
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. When we do, we will revise the “Last Updated” date above and, if appropriate, provide additional notice.[^1]"
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or our privacy practices, please contact us:",
      "<strong>Email:</strong> <a href='mailto:powerplaynpo@gmail.com'>powerplaynpo@gmail.com</a>",
      "<strong>Phone:</strong> <a href='tel:+14693604088'>+1 (469) 360-4088</a>",
      "<strong>Instagram:</strong> <a href='https://www.instagram.com/powerplaynpo/' target='_blank' rel='noopener noreferrer'>@powerplaynpo</a>"
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last Updated: {lastUpdated}</p>
        {sections.map((section, index) => (
          <section key={section.title} className="legal-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </section>
        ))}
        <p className="legal-footnote">
          [^1]: Adapted from nonprofit privacy best practices illustrated by the <a href="https://themedowfoundation.org/legal/privacy" target="_blank" rel="noopener noreferrer">Medow Foundation Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}

