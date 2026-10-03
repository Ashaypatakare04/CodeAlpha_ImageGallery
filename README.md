# CodeAlpha Image Gallery 📸

[![CodeAlpha Internship](https://img.shields.io/badge/CodeAlpha-Frontend%20Development-6366f1.svg)](https://www.codealpha.tech/)
[![Task](https://img.shields.io/badge/Task-Task%201%20Image%20Gallery-8b5cf6.svg)](#codealpha-internship-task-information)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-10b981.svg)](#technologies-used)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An ultra-responsive, modern, portfolio-grade photography image gallery created as part of the **CodeAlpha Frontend Development Internship** (Task 1). 

Built from scratch with **pure HTML5, CSS Grid, and Vanilla JavaScript**, with **zero external libraries, no frameworks, and no build tools**.

---

## 🌟 Project Overview

**CodeAlpha Image Gallery (Lumen Gallery)** is an interactive visual showcase featuring dynamic category filtering, real-time live search, fluid hover effects, and a full-screen lightbox modal with touch swipe gestures and keyboard navigation.

### Live Demo & Repository
- **GitHub Repository**: [https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery](https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery)
- **Direct Run**: Double-click `index.html` to launch locally in any web browser.

---

## ✨ Features

### 1. Modern Responsive CSS Grid
- Fluid multi-column layout adapting seamlessly across desktop, tablet, and mobile devices.
- Rounded cards with subtle border glow, realistic depth drop-shadows, and smooth hover elevation.
- `object-fit: cover` thumbnails with smooth scale transitions (`scale(1.08)`) and gradient overlay captions.

### 2. Dynamic Category Filtering & Live Search
- **5 Curated Categories**: *Nature*, *Architecture*, *Travel*, *Technology*, and *Abstract*.
- Filter buttons with dynamic item count badges and glowing active states.
- Smooth card exit/entry animations.
- Instant live search bar filtering across titles, descriptions, locations, and photographer credits.
- Dynamic result counters and quick "Reset to All" feedback banner.

### 3. Full-Screen Interactive Lightbox Modal
- Click any image card or press <kbd>Enter</kbd> to launch the full-screen lightbox overlay.
- Large high-resolution photography view with background blur (`backdrop-filter: blur(20px)`).
- **Navigation Controls**:
  - Previous (`<`) and Next (`>`) on-screen buttons.
  - Keyboard navigation: <kbd>←</kbd> (Previous) and <kbd>→</kbd> (Next).
  - Mobile swipe gestures: Swipe left for next, swipe right for previous.
  - Image counter (e.g. `03 / 20` or `01 / 04`).
- **Context-Aware Navigation**: When filtering is active, the lightbox cycles *strictly through the currently filtered images*.
- **Backdrop & Dismissal**: Clicking outside or pressing <kbd>Esc</kbd> closes the modal.
- Background scroll locking (`overflow: hidden`) when modal is open.
- **Bonus Controls**:
  - Image Zoom Magnification mode (<kbd>Z</kbd>).
  - Native Fullscreen toggle mode (<kbd>F</kbd>).
  - Direct external link to source resolution image.
  - Smart adjacent image preloading for zero-latency transitions.

### 4. Accessibility & Performance First
- Built with semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<figure>`, `<figcaption>`, `<button>`, `<footer>`).
- Full keyboard accessibility with focus outlines and keyboard trap in lightbox modal.
- Native `loading="lazy"` on thumbnails for fast initial page load.
- Descriptive `alt` attributes on all images.
- High contrast, dark-slate visual hierarchy meeting WCAG standards.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible landmarks, metadata, SVG icons |
| **CSS3** | CSS Custom Properties (Variables), Responsive CSS Grid, Flexbox, Glassmorphism, Keyframe animations, Media Queries |
| **Vanilla JavaScript (ES6+)** | State management, dynamic DOM rendering, event delegation, lightbox engine, touch gestures, keyboard bindings |
| **Google Fonts** | `Outfit` (headings) and `Plus Jakarta Sans` (body and UI) |
| **Unsplash CDN** | High-definition, royalty-free photography with optimized resolution parameters |

*Zero dependencies: No React, No Bootstrap, No Tailwind, No jQuery, No bundlers required.*

---

## 📁 Folder Structure

```text
CodeAlpha_ImageGallery/
│
├── index.html          # Semantic HTML5 markup and lightbox modal structure
├── style.css           # Modern CSS3 styles, variables, grid system & animations
├── script.js           # Vanilla JavaScript state engine, filters & lightbox
├── README.md           # Project documentation and internship submission details
│
└── images/             # Optional local images directory
    └── README.md       # Guide on switching from CDN to local image files
```

---

## 🚀 How to Run the Project

Running this project requires no installation, no Node.js, and no web server:

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery.git
   ```

2. **Navigate into the Project Folder**:
   ```bash
   cd CodeAlpha_ImageGallery
   ```

3. **Launch the Website**:
   - Double-click `index.html` in your file explorer, OR
   - Right-click `index.html` and choose **Open with > Google Chrome / Microsoft Edge / Firefox**, OR
   - Use VS Code Live Server extension if preferred.

---

## 📋 CodeAlpha Internship Task Information

- **Organization**: [CodeAlpha](https://www.codealpha.tech/)
- **Domain**: Frontend Development Internship
- **Task Number**: Task 1
- **Task Title**: Image Gallery
- **Intern Name**: Ashay Patakare
- **GitHub Repository**: [Ashaypatakare04/CodeAlpha_ImageGallery](https://github.com/Ashaypatakare04/CodeAlpha_ImageGallery)

### Task Requirements Checklist

| Requirement | Status | Notes |
| :--- | :---: | :--- |
| 1. Design an image gallery using HTML and CSS | ✅ Complete | Responsive CSS Grid with glassmorphic cards and hover reveals |
| 2. Use JavaScript for image navigation | ✅ Complete | Modular ES6 navigation engine with circular wrapping |
| 3. Add Previous and Next buttons | ✅ Complete | Accessible on-screen buttons, keyboard arrows, and touch swipes |
| 4. Implement full-screen lightbox/modal view | ✅ Complete | Blur overlay, counter, zoom toggle, fullscreen toggle, description |
| 5. Add hover effects to gallery images | ✅ Complete | Scale transform (`scale(1.08)`), card elevation, badge animations |
| 6. Add smooth transitions and animations | ✅ Complete | Fade-in filters, smooth zoom, crossfades, and button transitions |
| 7. Responsive for desktop, tablet, and mobile | ✅ Complete | Custom media queries for desktop, tablet, and mobile screens |
| 8. Bonus: Image categories / filters | ✅ Complete | 5 Categories (Nature, Architecture, Travel, Tech, Abstract) + Search |
| 9. Filtered Lightbox Synchronization | ✅ Complete | Lightbox navigates strictly within the active filtered subset |

---

## 🖼️ Screenshots Section Placeholder

> *Screenshots showing Desktop Grid, Category Filtering, and Full-Screen Lightbox:*

| Desktop Gallery Overview | Lightbox Fullscreen View |
| :---: | :---: |
| ![Desktop View Placeholder](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80) | ![Lightbox View Placeholder](https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80) |

| Mobile Responsive View | Category Filtering in Action |
| :---: | :---: |
| ![Mobile View Placeholder](https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80) | ![Filter View Placeholder](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80) |

*(To add your own screenshots, capture your browser and replace the image links or place PNGs in the `images/` directory.)*

---

## 🔮 Future Improvements

1. **User Uploads**: Allow users to drag-and-drop or upload custom photos via client-side `FileReader` API.
2. **Favorite / Bookmarks**: Store favorite photos locally using `localStorage`.
3. **Slideshow Mode**: An auto-play carousel button with customizable interval timer.
4. **EXIF Metadata Inspector**: Display aperture, shutter speed, ISO, and focal length for photography enthusiasts.
5. **Masonry Layout Mode**: Toggle between uniform grid and dynamic aspect-ratio Pinterest-style masonry.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use for educational and portfolio purposes.

Developed with ❤️ by **Ashay Patakare** for the **CodeAlpha Frontend Development Internship**.
