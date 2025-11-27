export interface TeamMember {
  name: string;
  title: string;
  image?: string;
}

export interface Testimonial {
  author: string;
  quote: string;
}

export interface EventItem {
  title: string;
  description: string;
  date?: string;
  image?: string;
  isUpcoming?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}