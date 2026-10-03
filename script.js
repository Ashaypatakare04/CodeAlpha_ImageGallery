/**
 * CodeAlpha Image Gallery — Interactive Core Engine
 * Tech Stack: HTML5, CSS3, Pure Vanilla JavaScript (ES6+)
 * Author: Ashay Patakare (CodeAlpha Frontend Development Intern)
 * Project: CodeAlpha Task 1 — Image Gallery
 */

'use strict';

/* ==========================================================================
   1. Photography Dataset
   Easily configurable for local images or remote CDNs.
   ========================================================================== */
const GALLERY_DATA = [
  // --- Nature Category ---
  {
    id: 'nature-1',
    title: 'Alpine Solitude',
    category: 'nature',
    categoryName: 'Nature',
    description: 'Dramatic snow-crested mountain peaks rising boldly against a crisp morning sky.',
    thumbUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85',
    alt: 'Majestic snow-covered alpine mountain summit',
    author: 'Kalon Visuals',
    location: 'Canadian Rockies'
  },
  {
    id: 'nature-2',
    title: 'Emerald Canopy',
    category: 'nature',
    categoryName: 'Nature',
    description: 'Ethereal morning sunbeams penetrating dense pine forest canopy shrouded in mist.',
    thumbUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85',
    alt: 'Sunbeams breaking through a foggy green forest',
    author: 'Sebastian Unrau',
    location: 'Black Forest, Germany'
  },
  {
    id: 'nature-3',
    title: 'Azure Tides',
    category: 'nature',
    categoryName: 'Nature',
    description: 'Gentle turquoise oceanic breakers meeting untamed golden coastal sands.',
    thumbUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Tropical sandy beach with turquoise ocean surf',
    author: 'Sean Oulashin',
    location: 'Oahu, Hawaii'
  },
  {
    id: 'nature-4',
    title: 'Dune Horizons',
    category: 'nature',
    categoryName: 'Nature',
    description: 'Sculptural wind-swept sand dunes casting dramatic shadows during golden hour.',
    thumbUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
    alt: 'Rippled desert sand dunes glowing warm in sunset',
    author: 'Jeremy Bishop',
    location: 'Death Valley, USA'
  },

  // --- Architecture Category ---
  {
    id: 'arch-1',
    title: 'Helical Rhythm',
    category: 'architecture',
    categoryName: 'Architecture',
    description: 'Hypnotic monochromatic spiral staircase exhibiting immaculate geometric curvature.',
    thumbUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
    alt: 'Monochrome architectural spiral staircase seen from above',
    author: 'Ludwig Wallendorff',
    location: 'Munich, Germany'
  },
  {
    id: 'arch-2',
    title: 'Glass Monolith',
    category: 'architecture',
    categoryName: 'Architecture',
    description: 'Skyward perspective of modern reflective glass and steel high-rise architecture.',
    thumbUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
    alt: 'Looking directly up at glass skyscraper facades',
    author: 'Sean Pollock',
    location: 'Frankfurt, Germany'
  },
  {
    id: 'arch-3',
    title: 'Nordic Symmetry',
    category: 'architecture',
    categoryName: 'Architecture',
    description: 'Minimalist urban apartment facade showcasing clean rhythms and architectural balance.',
    thumbUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Repetitive geometric building windows facade',
    author: 'Jonas Jacobsson',
    location: 'Stockholm, Sweden'
  },
  {
    id: 'arch-4',
    title: 'Gothic Vaults',
    category: 'architecture',
    categoryName: 'Architecture',
    description: 'Timeless stone vaulted arches soaring into majestic illuminated cathedral ceilings.',
    thumbUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1920&q=85',
    alt: 'Symmetrical gothic vaulted cathedral stone ceiling',
    author: 'Michael D',
    location: 'London, UK'
  },

  // --- Travel Category ---
  {
    id: 'travel-1',
    title: 'Santorini Caldera',
    category: 'travel',
    categoryName: 'Travel',
    description: 'Iconic whitewashed cubic cliffside villas overlooking the deep blue Aegean sea.',
    thumbUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=85',
    alt: 'Santorini Greece white cliffside village with blue domes',
    author: 'Matthew Waring',
    location: 'Oia, Santorini'
  },
  {
    id: 'travel-2',
    title: 'Kyoto Sanctuary',
    category: 'travel',
    categoryName: 'Travel',
    description: 'Endless vermilion torii gates carving a spiritual path through lush wooded mountains.',
    thumbUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Red Torii gates tunnel in Fushimi Inari Kyoto',
    author: 'Su San Lee',
    location: 'Kyoto, Japan'
  },
  {
    id: 'travel-3',
    title: 'Anatolian Flight',
    category: 'travel',
    categoryName: 'Travel',
    description: 'Hot air balloons ascending above surreal volcanic fairy chimney rock formations at dawn.',
    thumbUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
    alt: 'Dozens of colorful hot air balloons floating over Cappadocia valley',
    author: 'Yonatan Mirgaten',
    location: 'Cappadocia, Turkey'
  },
  {
    id: 'travel-4',
    title: 'Venetian Twilight',
    category: 'travel',
    categoryName: 'Travel',
    description: 'Traditional handcrafted gondolas tethered along ancient historic Venetian canals.',
    thumbUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1920&q=85',
    alt: 'Venice canal at dusk with parked gondolas',
    author: 'Dan Novac',
    location: 'Venice, Italy'
  },

  // --- Technology Category ---
  {
    id: 'tech-1',
    title: 'Silicon Architecture',
    category: 'technology',
    categoryName: 'Technology',
    description: 'Intricately etched microchip circuitry embodying the pulse of modern compute power.',
    thumbUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=85',
    alt: 'High-tech computer motherboard and CPU microcircuit',
    author: 'Alexandre Debiève',
    location: 'Silicon Valley'
  },
  {
    id: 'tech-2',
    title: 'Algorithmic Flow',
    category: 'technology',
    categoryName: 'Technology',
    description: 'Vibrant neon syntax lighting a modern developer environment late into the evening.',
    thumbUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=85',
    alt: 'Source code displayed on dual monitors with neon backlight',
    author: 'Fotis Fotopoulos',
    location: 'Code Lab'
  },
  {
    id: 'tech-3',
    title: 'Data Highway',
    category: 'technology',
    categoryName: 'Technology',
    description: 'Ultra high-speed digital illumination representing encrypted optical infrastructure.',
    thumbUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=85',
    alt: 'Glowing matrix-style binary digital stream',
    author: 'Markus Spiske',
    location: 'Server Center'
  },
  {
    id: 'tech-4',
    title: 'Neural Automaton',
    category: 'technology',
    categoryName: 'Technology',
    description: 'Futuristic robotic form reflecting the convergence of artificial intelligence and robotics.',
    thumbUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=85',
    alt: 'White futuristic robotic bust with sleek design',
    author: 'Possessed Photography',
    location: 'Robotics Studio'
  },

  // --- Abstract Category ---
  {
    id: 'abstract-1',
    title: 'Chroma Dynamic',
    category: 'abstract',
    categoryName: 'Abstract',
    description: 'Spiraling currents of high-viscosity acrylic pigment interacting in fluid chaos.',
    thumbUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1920&q=85',
    alt: 'Mesmerizing colorful acrylic paint swirls in fluid motion',
    author: 'Pawel Czerwinski',
    location: 'Studio Abstract'
  },
  {
    id: 'abstract-2',
    title: 'Geometric Void',
    category: 'abstract',
    categoryName: 'Abstract',
    description: 'Minimalist 3D sculptural curves playing with subtle gradients and volumetric shadow.',
    thumbUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    alt: 'Abstract modern 3D curved shapes with soft lighting',
    author: 'Milad Fakurian',
    location: 'Digital Space'
  },
  {
    id: 'abstract-3',
    title: 'Spectral Prism',
    category: 'abstract',
    categoryName: 'Abstract',
    description: 'Prismatic light dispersion refracting holographic iridescence through curved crystal.',
    thumbUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=85',
    alt: 'Prismatic rainbow reflections across wavy glass texture',
    author: 'Jr Korpa',
    location: 'Optical Lab'
  },
  {
    id: 'abstract-4',
    title: 'Stardust Nebula',
    category: 'abstract',
    categoryName: 'Abstract',
    description: 'Golden micro-particles and smoky atmospheric ribbons floating in velvet darkness.',
    thumbUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1920&q=85',
    alt: 'Golden dust and atmospheric smoke swirling against black background',
    author: 'Lucas Benjamin',
    location: 'Cosmic Abstraction'
  }
];

/* ==========================================================================
   2. State Controller
   ========================================================================== */
const AppState = {
  activeCategory: 'all',
  searchQuery: '',
  filteredItems: [...GALLERY_DATA],
  lightboxIndex: 0,
  isLightboxOpen: false,
  isZoomed: false,
  lastFocusedElement: null,
  touchStartX: 0,
  touchStartY: 0
};

/* ==========================================================================
   3. DOM Elements Cache
   ========================================================================== */
const DOM = {
  galleryGrid: document.getElementById('gallery-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  currentCategoryLabel: document.getElementById('current-category-label'),
  resetFilterBtn: document.getElementById('reset-filter-btn'),
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  visibleCount: document.getElementById('visible-count'),
  totalCount: document.getElementById('total-count'),
  noResults: document.getElementById('no-results'),
  btnClearFilters: document.getElementById('btn-clear-filters'),
  
  // Lightbox Elements
  lightbox: document.getElementById('lightbox'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  lightboxWrapper: document.getElementById('lightbox-wrapper'),
  lightboxImg: document.getElementById('lightbox-img'),
  lightboxFigureContainer: document.getElementById('lightbox-figure-container'),
  lightboxLoader: document.getElementById('lightbox-loader'),
  lightboxCategory: document.getElementById('lightbox-category'),
  lightboxCounter: document.getElementById('lightbox-counter'),
  lightboxTitle: document.getElementById('lightbox-title'),
  lightboxDesc: document.getElementById('lightbox-desc'),
  lightboxAuthor: document.getElementById('lightbox-author'),
  lightboxPrevBtn: document.getElementById('lightbox-prev-btn'),
  lightboxNextBtn: document.getElementById('lightbox-next-btn'),
  lightboxCloseBtn: document.getElementById('lightbox-close-btn'),
  lightboxZoomBtn: document.getElementById('lightbox-zoom-btn'),
  lightboxFullscreenBtn: document.getElementById('lightbox-fullscreen-btn'),
  lightboxExternalBtn: document.getElementById('lightbox-external-btn'),
  
  // Zoom SVG Icons
  zoomInIcon: document.querySelector('.zoom-in-icon'),
  zoomOutIcon: document.querySelector('.zoom-out-icon'),
  
  // Fullscreen SVG Icons
  fsEnterIcon: document.querySelector('.fs-enter-icon'),
  fsExitIcon: document.querySelector('.fs-exit-icon')
};

/* ==========================================================================
   4. Gallery Rendering Engine
   ========================================================================== */

/**
 * Initializes the entire application upon DOM readiness.
 */
function initGallery() {
  updateCategoryBadges();
  renderFilteredGallery();
  bindEventListeners();
}

/**
 * Updates count indicators on all category filter pill buttons.
 */
function updateCategoryBadges() {
  const counts = {
    all: GALLERY_DATA.length,
    nature: 0,
    architecture: 0,
    travel: 0,
    technology: 0,
    abstract: 0
  };

  GALLERY_DATA.forEach(item => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  });

  Object.keys(counts).forEach(cat => {
    const badge = document.getElementById(`count-${cat}`);
    if (badge) {
      badge.textContent = counts[cat];
    }
  });

  if (DOM.totalCount) {
    DOM.totalCount.textContent = GALLERY_DATA.length;
  }
}

/**
 * Recomputes the filtered list based on active category & search query,
 * then renders image cards with smooth transition animations.
 */
function renderFilteredGallery() {
  const query = AppState.searchQuery.trim().toLowerCase();

  AppState.filteredItems = GALLERY_DATA.filter(item => {
    // 1. Category match
    const matchesCategory = (AppState.activeCategory === 'all') || (item.category === AppState.activeCategory);

    // 2. Search query match (title, desc, author, location, category)
    const matchesSearch = !query || (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
    );

    return matchesCategory && matchesSearch;
  });

  // Update visible counts
  if (DOM.visibleCount) {
    DOM.visibleCount.textContent = AppState.filteredItems.length;
  }

  // Handle empty state
  if (AppState.filteredItems.length === 0) {
    DOM.galleryGrid.innerHTML = '';
    DOM.noResults.classList.remove('hidden');
    return;
  } else {
    DOM.noResults.classList.add('hidden');
  }

  // Generate card elements
  DOM.galleryGrid.innerHTML = AppState.filteredItems.map((item, index) => `
    <figure 
      class="gallery-card filtering-in" 
      data-id="${item.id}"
      data-index="${index}"
      tabindex="0"
      role="button"
      aria-haspopup="dialog"
      aria-label="View photograph: ${escapeHTML(item.title)} in ${item.categoryName}"
    >
      <div class="card-image-wrap">
        <img 
          src="${item.thumbUrl}" 
          alt="${escapeHTML(item.alt)}"
          loading="lazy"
          width="600"
          height="450"
        />
        <div class="card-top-bar">
          <span class="card-category-badge">${item.categoryName}</span>
          <span class="card-view-btn" aria-hidden="true" title="Open Lightbox">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </span>
        </div>
        <figcaption class="card-overlay">
          <div class="card-info">
            <h3 class="card-title">${escapeHTML(item.title)}</h3>
            <p class="card-desc">${escapeHTML(item.description)}</p>
            <div class="card-footer-meta">
              <span class="card-author">📍 ${escapeHTML(item.location)}</span>
              <span class="card-click-hint">Expand ↗</span>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  `).join('');

  // Attach card click & keyboard triggers
  const cards = DOM.galleryGrid.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openLightboxById(id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-id');
        openLightboxById(id);
      }
    });
  });
}

/**
 * Simple HTML sanitizer for injected text.
 */
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

/* ==========================================================================
   5. Filtering & Search Controllers
   ========================================================================== */

/**
 * Handles category selection from filter buttons.
 */
function setCategory(category) {
  AppState.activeCategory = category;

  // Update button active states
  DOM.filterButtons.forEach(btn => {
    const isTarget = btn.getAttribute('data-filter') === category;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
  });

  // Update category feedback label
  const catNames = {
    all: 'All Photographs',
    nature: 'Nature Collection',
    architecture: 'Architecture Collection',
    travel: 'Travel Explorations',
    technology: 'Technology & Code',
    abstract: 'Abstract Visualizations'
  };

  if (DOM.currentCategoryLabel) {
    DOM.currentCategoryLabel.textContent = catNames[category] || category;
  }

  // Show/Hide reset button
  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.classList.toggle('hidden', category === 'all');
  }

  renderFilteredGallery();
}

/**
 * Handles live search input.
 */
function handleSearch(e) {
  AppState.searchQuery = e.target.value;
  DOM.searchClearBtn.classList.toggle('hidden', AppState.searchQuery.length === 0);
  renderFilteredGallery();
}

/**
 * Clears search query and restores focus.
 */
function clearSearch() {
  AppState.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.searchClearBtn.classList.add('hidden');
  DOM.searchInput.focus();
  renderFilteredGallery();
}

/**
 * Resets all filters back to initial state.
 */
function resetAllFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.searchClearBtn.classList.add('hidden');
  setCategory('all');
}

/* ==========================================================================
   6. Full-Screen Lightbox Navigation Engine
   ========================================================================== */

/**
 * Opens lightbox for a specific image ID within the currently filtered set.
 */
function openLightboxById(imageId) {
  const index = AppState.filteredItems.findIndex(item => item.id === imageId);
  if (index !== -1) {
    AppState.lightboxIndex = index;
  } else {
    // Fallback if somehow not found
    AppState.lightboxIndex = 0;
  }

  AppState.lastFocusedElement = document.activeElement;
  AppState.isLightboxOpen = true;

  // Open modal
  DOM.lightbox.classList.add('active');
  DOM.lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scroll

  updateLightboxView();
  DOM.lightboxCloseBtn.focus();
}

/**
 * Closes the lightbox and restores prior page state.
 */
function closeLightbox() {
  if (!AppState.isLightboxOpen) return;

  AppState.isLightboxOpen = false;
  DOM.lightbox.classList.remove('active');
  DOM.lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Unlock background scroll

  // Reset zoom
  resetZoom();

  // Exit fullscreen if active
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }

  // Restore focus to card that opened it
  if (AppState.lastFocusedElement && typeof AppState.lastFocusedElement.focus === 'function') {
    AppState.lastFocusedElement.focus();
  }
}

/**
 * Navigates through currently filtered images (wraps around).
 * Direction: +1 for next, -1 for previous.
 */
function navigateLightbox(direction) {
  if (!AppState.isLightboxOpen || AppState.filteredItems.length === 0) return;

  resetZoom();

  const total = AppState.filteredItems.length;
  AppState.lightboxIndex = (AppState.lightboxIndex + direction + total) % total;

  // Subtle fade animation
  DOM.lightboxImg.style.opacity = '0.4';
  DOM.lightboxImg.style.transform = 'scale(0.97)';

  updateLightboxView();
}

/**
 * Updates all textual, visual, and counter elements inside the lightbox.
 */
function updateLightboxView() {
  const current = AppState.filteredItems[AppState.lightboxIndex];
  if (!current) return;

  const total = AppState.filteredItems.length;
  const currentNum = String(AppState.lightboxIndex + 1).padStart(2, '0');
  const totalNum = String(total).padStart(2, '0');

  // Update text & metadata
  DOM.lightboxCounter.textContent = `${currentNum} / ${totalNum}`;
  DOM.lightboxCategory.textContent = current.categoryName;
  DOM.lightboxTitle.textContent = current.title;
  DOM.lightboxDesc.textContent = current.description;
  DOM.lightboxAuthor.textContent = `${current.author} (${current.location})`;
  DOM.lightboxExternalBtn.href = current.fullUrl;

  // Show loading indicator
  DOM.lightboxLoader.classList.add('visible');

  // Preload & swap high-res image
  const preloadImg = new Image();
  preloadImg.src = current.fullUrl;

  preloadImg.onload = () => {
    DOM.lightboxImg.src = current.fullUrl;
    DOM.lightboxImg.alt = current.alt;
    DOM.lightboxLoader.classList.remove('visible');
    DOM.lightboxImg.style.opacity = '1';
    DOM.lightboxImg.style.transform = 'scale(1)';
  };

  preloadImg.onerror = () => {
    // Graceful fallback to thumbnail if full-res fails
    DOM.lightboxImg.src = current.thumbUrl;
    DOM.lightboxLoader.classList.remove('visible');
    DOM.lightboxImg.style.opacity = '1';
    DOM.lightboxImg.style.transform = 'scale(1)';
  };

  // Preload next and previous adjacent images for lightning-fast navigation
  preloadAdjacentImages();
}

/**
 * Preloads adjacent images in the background for zero-latency switching.
 */
function preloadAdjacentImages() {
  const total = AppState.filteredItems.length;
  if (total <= 1) return;

  const nextIndex = (AppState.lightboxIndex + 1) % total;
  const prevIndex = (AppState.lightboxIndex - 1 + total) % total;

  const nextImg = new Image();
  nextImg.src = AppState.filteredItems[nextIndex].fullUrl;

  const prevImg = new Image();
  prevImg.src = AppState.filteredItems[prevIndex].fullUrl;
}

/**
 * Toggles zoom magnification state on lightbox image.
 */
function toggleZoom() {
  AppState.isZoomed = !AppState.isZoomed;
  DOM.lightboxFigureContainer.classList.toggle('zoomed', AppState.isZoomed);
  DOM.zoomInIcon.classList.toggle('hidden', AppState.isZoomed);
  DOM.zoomOutIcon.classList.toggle('hidden', !AppState.isZoomed);
}

/**
 * Resets zoom magnification state.
 */
function resetZoom() {
  if (AppState.isZoomed) {
    AppState.isZoomed = false;
    DOM.lightboxFigureContainer.classList.remove('zoomed');
    DOM.zoomInIcon.classList.remove('hidden');
    DOM.zoomOutIcon.classList.add('hidden');
  }
}

/**
 * Toggles browser full-screen view.
 */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    DOM.lightbox.requestFullscreen().then(() => {
      DOM.fsEnterIcon.classList.add('hidden');
      DOM.fsExitIcon.classList.remove('hidden');
    }).catch(() => {});
  } else {
    document.exitFullscreen().then(() => {
      DOM.fsEnterIcon.classList.remove('hidden');
      DOM.fsExitIcon.classList.add('hidden');
    }).catch(() => {});
  }
}

/* ==========================================================================
   7. Event Listeners & Input Handlers
   ========================================================================== */
function bindEventListeners() {
  // Category Filter Buttons
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      setCategory(category);
    });
  });

  // Reset Filter Buttons
  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.addEventListener('click', () => setCategory('all'));
  }
  if (DOM.btnClearFilters) {
    DOM.btnClearFilters.addEventListener('click', resetAllFilters);
  }

  // Live Search Input
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', handleSearch);
  }
  if (DOM.searchClearBtn) {
    DOM.searchClearBtn.addEventListener('click', clearSearch);
  }

  // Lightbox Navigation Controls
  DOM.lightboxPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  DOM.lightboxNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  DOM.lightboxCloseBtn.addEventListener('click', closeLightbox);
  DOM.lightboxZoomBtn.addEventListener('click', toggleZoom);
  DOM.lightboxImg.addEventListener('click', toggleZoom);
  DOM.lightboxFullscreenBtn.addEventListener('click', toggleFullscreen);

  // Close when clicking dark backdrop or wrapper outside image container
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
  DOM.lightbox.addEventListener('click', (e) => {
    // If clicked directly on the stage padding or backdrop
    if (e.target === DOM.lightbox || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (!AppState.isLightboxOpen) return;

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeLightbox();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        navigateLightbox(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigateLightbox(1);
        break;
      case 'z':
      case 'Z':
        e.preventDefault();
        toggleZoom();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Tab':
        trapLightboxFocus(e);
        break;
    }
  });

  // Touch Swipe Gesture Support for Mobile
  DOM.lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      AppState.touchStartX = e.touches[0].clientX;
      AppState.touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  DOM.lightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1 && !AppState.isZoomed) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - AppState.touchStartX;
      const deltaY = touchEndY - AppState.touchStartY;

      // Ensure horizontal swipe is dominant and exceeds threshold
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          navigateLightbox(1); // Swipe left -> next image
        } else {
          navigateLightbox(-1); // Swipe right -> prev image
        }
      }
    }
  }, { passive: true });

  // Fullscreen change listener to sync icons
  document.addEventListener('fullscreenchange', () => {
    const isFs = Boolean(document.fullscreenElement);
    DOM.fsEnterIcon.classList.toggle('hidden', isFs);
    DOM.fsExitIcon.classList.toggle('hidden', !isFs);
  });

  // Smooth scroll for top button
  const scrollTopBtn = document.getElementById('btn-scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Accessible Focus Trap to constrain keyboard Tab key within Lightbox modal.
 */
function trapLightboxFocus(e) {
  const focusable = DOM.lightboxWrapper.querySelectorAll('button:not([disabled]), a:not([disabled]), [tabindex="0"]');
  if (focusable.length === 0) return;

  const firstFocusable = focusable[0];
  const lastFocusable = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === firstFocusable) {
      e.preventDefault();
      lastFocusable.focus();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      e.preventDefault();
      firstFocusable.focus();
    }
  }
}

/* ==========================================================================
   8. Bootstrapping
   ========================================================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}
