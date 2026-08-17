# Anagha Khude - Urban Planning & Design Portfolio

## Concept & Vision

A sophisticated, editorial portfolio website for an urban planning and design professional. The site feels like a high-end architecture studio publication—restrained, confident, and intellectually rigorous. Every element communicates intentionality and professional depth, positioning the work at the intersection of architecture, urban planning, and human-centered design.

## Design Language

### Aesthetic Direction
Inspired by Swiss editorial design and Japanese minimalism. Clean geometric layouts with generous negative space. Typography-forward with strong visual hierarchy. Photography and project imagery treated as primary content, not decoration.

### Color Palette
- **Background**: `#F5F3EE` (warm ivory)
- **Primary Text**: `#202020` (charcoal)
- **Secondary Text**: `#6B6B6B` (muted grey)
- **Accent**: `#A65F45` (muted terracotta/clay)
- **Borders**: `#D8D4CC` (light warm grey)

### Typography
- **Headings**: Playfair Display (serif) - large, elegant, editorial
- **Body/Navigation**: Inter (sans-serif) - clean, modern, highly legible
- **Metadata/Labels**: Inter with letter-spacing for refined labels

### Spatial System
- Base unit: 8px
- Section padding: 120px vertical (desktop), 80px (tablet), 60px (mobile)
- Content max-width: 1400px
- Grid: 12-column with 24px gutters

### Motion Philosophy
Subtle, purposeful animations that enhance without distracting:
- Fade-in with slight upward translation (20px, 600ms ease-out)
- Staggered reveals for lists/cards (100ms delay between items)
- Smooth scroll behavior
- Image scale on hover (1.02, 400ms ease)
- Navigation background transition on scroll

### Visual Assets
- Placeholder images from Unsplash (architecture, urban planning, cityscapes)
- No icons except minimal UI elements (hamburger, arrows, social icons)
- Decorative: thin ruled lines as section dividers

## Layout & Structure

### Navigation
- Sticky header with name/logo left, navigation right
- Initially transparent, gains subtle background on scroll
- Mobile: hamburger menu with full-screen overlay
- Height: 80px desktop, 64px mobile

### Hero Section
- Two-column layout (60/40 split on desktop)
- Left: Large heading, subtitle, intro text, metadata, CTAs
- Right: Professional portrait image
- Vertical centering with generous padding

### Sections (in order)
1. **Hero** - Personal introduction with strong headline
2. **Selected Work** - Editorial project grid (2 columns)
3. **About** - Split layout with bio and education timeline
4. **Design Approach** - 4 principles with large typography
5. **Skills** - Categorized skill lists
6. **Experience** - Professional timeline
7. **CV** - Resume preview with download CTA
8. **Contact** - Minimal form and details
9. **Footer** - Name, tagline, social links, copyright

### Responsive Strategy
- Desktop (1200px+): Full editorial layouts, 2-column grids
- Tablet (768-1199px): Adjusted grids, maintained hierarchy
- Mobile (<768px): Single column, hamburger nav, scaled typography

## Features & Interactions

### Navigation
- Click scrolls smoothly to section
- Active section highlighted
- Mobile menu: slide-in from right, closes on link click

### Project Cards
- Hover: subtle shadow lift, image scale
- Click: navigate to project detail page
- Display: image, title, location, year, discipline tags

### Project Detail Page
- Full project information layout
- Hero image, metadata sidebar
- Long-form content with mixed image sizes
- Editorial image grid layout
- Back to work link

### Contact Form
- Client-side validation (required fields, email format)
- Success/error state feedback
- Form fields: Name, Email, Subject, Message

### Animations
- Intersection Observer for scroll reveals
- Reduced motion: respects prefers-reduced-motion
- All animations CSS-based for performance

## Component Inventory

### Header/Navigation
- States: transparent, scrolled (with background)
- Mobile: hamburger button, overlay menu
- Active link state

### HeroSection
- Heading, subtitle, intro, metadata, portrait, CTAs
- Responsive: stacks on mobile

### ProjectCard
- Image (aspect ratio 4:3), title, location, year, tags
- States: default, hover (shadow + scale)
- Clickable entire card

### ProjectGrid
- 2-column grid with gap
- Responsive: single column on mobile

### AboutSection
- Bio text, education timeline
- Timeline: vertical line with year markers

### ApproachSection
- 4 principle cards
- Large numbers, title, description
- Full-width on mobile

### SkillsSection
- Categorized columns
- Category header + skill list

### ExperienceSection
- Vertical timeline
- Company, role, dates, description

### CVSection
- Section preview
- Download button (prominent)

### ContactSection
- Heading, intro text
- Contact details (email, LinkedIn, location)
- Form with validation

### Footer
- Name, title, tagline
- Social links
- Copyright

### Button
- Variants: primary (filled), secondary (outlined)
- States: default, hover, active, disabled

### SectionDivider
- Thin horizontal line
- Optional label

## Technical Approach

### Stack
- Vite + React 18 + TypeScript
- CSS Modules for scoped styling
- React Router for project detail pages

### Architecture
```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Centralized dummy data
├── hooks/          # Custom hooks (useScrollReveal)
├── styles/         # Global styles, variables
└── assets/         # Images
```

### Data Structure
All content in `src/data/` as TypeScript objects:
- `personal.ts` - Name, bio, contact info
- `projects.ts` - Project array with full details
- `experience.ts` - Work history
- `education.ts` - Education timeline
- `skills.ts` - Categorized skills

### Image Strategy
- Unsplash URLs for architecture/urbanism placeholders
- Consistent aspect ratios maintained
- Lazy loading for performance

### Performance
- Route-based code splitting
- Image lazy loading
- CSS animations (no JS animation libraries)
- Semantic HTML for accessibility
