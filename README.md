# In Frame — Editorial Visual Archive 🎞️

[![CodeAlpha Internship](https://img.shields.io/badge/CodeAlpha-Frontend%20Development-8A6A45.svg)](https://www.codealpha.tech/)
[![Task](https://img.shields.io/badge/Task-Task%201%20Image%20Gallery-C7A77A.svg)](#codealpha-internship-task-information)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-171714.svg)](#technologies-used)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An ultra-refined, contemporary **editorial visual archive and photography exhibition** created for the **CodeAlpha Frontend Development Internship** (Task 1).

Inspired by the design philosophy of high-end cultural publications, biennial exhibitions, and architectural monographs (such as *En Peyar* and *Aperture*), **In Frame** merges **editorial typography**, **warm minimalism**, **generous whitespace**, and **photography-first layouts** into a seamless, high-performance web experience.

---

## 🏛️ Design Philosophy

> **Editorial Gallery × Digital Archive × Modern Portfolio**

- **Warm Minimalism**: High-contrast, intentional layout with zero distracting neon gradients or gimmicky animations.
- **Strong Typographic Hierarchy**: Editorial serif (`Cormorant Garamond`) paired with a precision modernist sans-serif (`Plus Jakarta Sans`) and uppercase tracking.
- **Archival Preservation**: Photographs maintain their natural aspect ratios rather than being forced into aggressive crops.
- **Dual-State Editorial Palette**: Default warm editorial linen tones (`#F5F1E8`) with a nocturnal archive dark mode (`#151513`).

---

## ✨ Key Features

### 1. Minimalist Navigation & Theme Engine
- Brand identity with typographic logo `[·] In Frame` and edition indicator.
- Minimal navigation links (`Featured`, `Collections`, `The Archive`, `About`).
- **Dark / Light Mode Toggle**: Smooth theme switching with `localStorage` persistence and automatic `prefers-color-scheme` synchronization.
- Direct repository link to GitHub.

### 2. Large Editorial Hero
- Eyebrow: `VISUAL ARCHIVE · 2026 EDITION`.
- Headline: *"Images worth remembering."*
- Supporting text introducing the curated photographic narrative.
- Primary and secondary editorial action links (`Explore Gallery` & `View Collections →`).
- Asymmetric featured archival frame card with metadata.

### 3. "Selected Works" (Asymmetric Featured Composition)
- Magazine-style asymmetric composition instead of a repetitive grid:
  - 1 Large landscape hero frame
  - 2 Staggered smaller frames
  - 1 Portrait study
  - 1 Wide architectural panoramic frame
- Restrained hover interaction: subtle `1.03` scale zoom, subtle arrow indicator reveal, and metadata fade with smooth 400ms easing.

### 4. Curated Collections Section
- **Places**: Cities, landscapes and architectural monuments.
- **People**: Portraits, street encounters, and human dialogues.
- **Nature**: Light, texture, untamed horizons, and organic transitions.
- **Moments**: Everyday scenes and ephemeral reflections worth remembering.
- Interactive suite cards that filter the archive and smoothly scroll to results.

### 5. "The Collection" (The Archive Catalog)
- **8 Editorial Filter Tabs**: *All, Nature, Architecture, People, Travel, Portraits, Abstract, Urban*.
- Dynamic live item counter per tab.
- **Integrated Archive Search**: Real-time filtering across titles, descriptions, locations, years, and categories with instant clear control.
- Minimalist status row with active filter indicator and quick reset.
- Responsive multi-column layout preserving natural image proportions:
  - Desktop: 3–4 columns
  - Tablet: 2–3 columns
  - Mobile: 1–2 columns

### 6. Nocturnal Lightbox Modal
- Deep dark backdrop (`rgba(18, 18, 16, 0.97)`) for focused photo inspection.
- Large high-resolution photography with smart adjacent photo preloading.
- **Context-Aware Navigation**: Lightbox cycles strictly through the *currently filtered subset*.
- Complete metadata: Reference ID, Category, Title, Caption, Location, Year, and Photographer.
- Interactive controls:
  - Previous (`<`) & Next (`>`) on-screen buttons
  - Keyboard navigation: <kbd>←</kbd> (Previous), <kbd>→</kbd> (Next), <kbd>Esc</kbd> (Close)
  - Zoom toggle: <kbd>Z</kbd>
  - Fullscreen toggle: <kbd>F</kbd>
  - Mobile touch swipe gestures (swipe left/right)
  - Page scroll lock while modal is open

### 7. Manifesto ("Every Frame Has a Story")
- Concise editorial mission statement on photography, stillness, and visual culture.
- Archival metrics tally: `04 Collections`, `24 Images`, `14 Places`, `2026 Archive`.

---

## 🎨 Color System

| Token | Light Mode (Default) | Dark Mode (Nocturnal Archive) | Description |
| :--- | :--- | :--- | :--- |
| **Background** | `#F5F1E8` | `#151513` | Warm linen vs. Deep obsidian |
| **Surface** | `#E8E2D7` | `#1F1E1B` | Archival card canvas |
| **Primary Text** | `#171714` | `#F1EEE7` | High-contrast editorial ink |
| **Secondary Text**| `#68655D` | `#A8A49A` | Supporting metadata & body |
| **Borders** | `#D8D2C5` | `#36342F` | Hairline framing |
| **Accent** | `#8A6A45` | `#C7A77A` | Warm bronze & golden ochre |

---

## 🛠️ Technologies Used

| Layer | Implementation |
| :--- | :--- |
| **Markup** | Semantic HTML5, accessible ARIA roles (`role="dialog"`, `aria-modal="true"`, `aria-pressed`) |
| **Styles** | Modern CSS3, CSS Custom Properties (Variables), CSS Grid, Flexbox, Media Queries |
| **Scripting** | Pure Vanilla JavaScript (ES6+), State Management, Event Delegation, Touch APIs |
| **Typography** | `Cormorant Garamond` (Editorial Serif) & `Plus Jakarta Sans` (Modern Sans-Serif) |
| **Icons & Assets** | Custom SVG Favicon (`favicon.svg`) and scalable vector emblems |
| **Photography** | 24 Curated high-res photographs from verified Unsplash archives |

*Zero external frameworks, no React, no Tailwind, no Bootstrap, no build tools.*

---

## 📁 Folder Structure

```text
CodeAlpha_ImageGallery/
│
├── index.html          # Semantic HTML5 structure, metadata & layout
├── style.css           # Warm editorial CSS, dark mode tokens & responsive grid
├── script.js           # Vanilla JS archive engine, lightbox & filter logic
├── favicon.svg         # Minimalist editorial frame favicon
├── README.md           # Documentation & internship submission information
│
└── images/             # Optional local images directory
    └── README.md       # Guide for swapping CDN URLs with local photo assets
```

---

## 🚀 How to Run the Project

No installation, build tools, or servers required:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery.git
   ```

2. **Navigate to the Directory**:
   ```bash
   cd CodeAlpha_ImageGallery
   ```

3. **Launch**:
   - Double-click `index.html` to open in any browser (Chrome, Edge, Safari, Firefox), OR
   - Right-click `index.html` and choose **Open with > Your Preferred Browser**.

---

## 📋 CodeAlpha Internship Task Information

- **Organization**: [CodeAlpha](https://www.codealpha.tech/)
- **Domain**: Frontend Development Internship
- **Task Number**: Task 1
- **Task Title**: Image Gallery
- **Project Name**: **In Frame — Editorial Visual Archive**
- **Intern Name**: Ashay Patakare
- **GitHub Repository**: [Ashaypatakare04/CodeAlpha_ImageGallery](https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use for educational and portfolio purposes.

*Curated & developed frame by frame by **Ashay Patakare** for the **CodeAlpha Frontend Development Internship**.*
