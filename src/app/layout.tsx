import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./styles.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PowerPlay - Empowering Tomorrow's Champions",
  description: "PowerPlay - Empowering Tomorrow's Champions through sports tournaments and community building. Join us for exciting cricket and pickleball tournaments.",
  keywords: "sports, tournaments, cricket, pickleball, community, athletics, PowerPlay",
  authors: [{ name: "PowerPlay Team" }],
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/images/logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "PowerPlay - Empowering Tomorrow's Champions",
    description: "Join us for exciting sports tournaments that bring communities together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/home_background.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${raleway.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
