# PowerPlay - Modern Dark Theme Website

A polished, modern dark-theme website for PowerPlay NPO built with Next.js and a custom design system.

## Dark Theme Design System

### Color Palette
- **Base Background**: `#0D1117` (near-black)
- **Surface Level 1**: `#161B22` (cards/sections)
- **Surface Level 2**: `#1E242C` (elevated cards)
- **Borders**: `rgba(255,255,255,.08)` (subtle dividers)

### Accent Colors
Choose ONE per element for consistency:
- **Blue**: `#1F6FEB` - Primary accent
- **Yellow**: `#F0B90B` - Secondary accent  
- **Green**: `#2ECC71` - Success/accent

### Typography
- **Headings**: `#FFFFFF` (pure white)
- **Body Text**: `rgba(255,255,255,.88)` (88% opacity)
- **Muted Text**: `rgba(255,255,255,.6)` (60% opacity)
- **Font Family**: Inter (primary), Helvetica Neue (fallback)

### Shadows & Effects
- **Subtle Shadow**: `0 4px 12px rgba(0,0,0,.45)`
- **Hover Shadow**: `0 8px 24px rgba(0,0,0,.6)`
- **Glass Effect**: `rgba(13,17,23,.75)` with backdrop blur

## Design Features

### Navigation
- ✅ Glass effect header with backdrop blur
- ✅ Sticky 72px height navigation
- ✅ Active link underline with accent color
- ✅ 150ms hover transitions

### Sections
- ✅ Alternate `#0D1117` and `#161B22` backgrounds
- ✅ Generous padding (`py-24 md:py-32`)
- ✅ Subtle dividers between sections
- ✅ Proper contrast ratios (WCAG AA compliant)

### Cards & Components
- ✅ Surface Level 2 background (`#1E242C`)
- ✅ Border color + subtle shadow
- ✅ Hover: translateY(-4px) with intensified shadow
- ✅ 180ms ease-out transitions

### Buttons
- ✅ Primary: accent background, dark text, rounded-lg
- ✅ Hover: darken accent by 10%
- ✅ Secondary: transparent + 1px accent border
- ✅ Consistent hover animations

### Forms & Inputs
- ✅ Base background (`#0D1117`)
- ✅ Border: 1px accent color on focus
- ✅ Placeholder: `rgba(255,255,255,.4)`
- ✅ Focus ring with accent color

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **Home** (`/`) - Main landing page with dark theme
- **Cricket** (`/cricket`) - Cricket tournament with blue accent
- **Pickleball** (`/pickleball`) - Pickleball tournament with yellow accent

## Features

- ✅ **Polished Dark Theme** - Modern, vibrant aesthetic
- ✅ **Glass Effects** - Backdrop blur navigation
- ✅ **Consistent Accent Colors** - One color per element
- ✅ **WCAG AA Compliance** - Proper contrast ratios
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Smooth Animations** - 150-180ms transitions
- ✅ **Performance Optimized** - Efficient CSS and lazy loading

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Font**: Inter (Google Fonts)
- **Theme**: Dark-first design system
- **Deployment**: Ready for Vercel

## Design Principles

1. **Dark-First** - Optimized for dark theme with light mode support planned
2. **Consistency** - Unified accent color usage per element
3. **Accessibility** - WCAG AA compliant contrast ratios
4. **Performance** - Optimized images and efficient CSS
5. **Modern Aesthetics** - Glass effects and subtle animations

## Color Usage Guidelines

- **Blue Accent** (`#1F6FEB`): Primary actions, links, highlights
- **Yellow Accent** (`#F0B90B`): Secondary actions, warnings, special content
- **Green Accent** (`#2ECC71`): Success states, positive actions
- **Surface Colors**: Create depth and hierarchy
- **Text Opacity**: Maintain readability while creating visual hierarchy

## Future Enhancements

- [ ] Light mode toggle support
- [ ] Color-blind accessibility testing
- [ ] Advanced animations with Framer Motion
- [ ] Image optimization with WebP format
- [ ] Performance monitoring and analytics
