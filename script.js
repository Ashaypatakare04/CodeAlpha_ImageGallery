/**
 * In Frame — Editorial Visual Archive Engine
 * Design Philosophy: Editorial Gallery × Digital Archive × Modern Portfolio
 * Tech Stack: HTML5, CSS3, Pure Vanilla JavaScript (Zero Frameworks)
 * Author: Ashay Patakare (CodeAlpha Frontend Development Internship — Task 1)
 */

'use strict';

/* ==========================================================================
   1. Archival Photography Dataset (24 Curated Frames)
   Verified, high-resolution imagery across 7 thematic categories.
   ========================================================================== */
const ARCHIVE_DATA = [
  // --- Architecture ---
  {
    id: 'arch-1',
    refIndex: '01',
    title: 'Silent Geometry',
    category: 'architecture',
    categoryName: 'Architecture',
    format: 'square',
    description: 'Hypnotic monochromatic spiral staircase exhibiting immaculate structural symmetry and clean shadows.',
    thumbUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
    alt: 'Monochrome architectural spiral staircase seen from above',
    author: 'Ludwig Wallendorff',
    location: 'Pune, India',
    year: '2026'
  },
  {
    id: 'arch-2',
    refIndex: '02',
    title: 'Glass Monolith',
    category: 'architecture',
    categoryName: 'Architecture',
    format: 'portrait',
    description: 'Vertical perspective of reflective corporate steel and glass facades ascending into low-hanging clouds.',
    thumbUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
    alt: 'Skyward perspective of modern skyscraper glass facade',
    author: 'Sean Pollock',
    location: 'Frankfurt, Germany',
    year: '2025'
  },
  {
    id: 'arch-3',
    refIndex: '03',
    title: 'Nordic Symmetry',
    category: 'architecture',
    categoryName: 'Architecture',
    format: 'landscape',
    description: 'Minimalist Scandinavian facade showcasing repetitive window rhythms and clean civic proportions.',
    thumbUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Minimalist repetitive building facade windows',
    author: 'Jonas Jacobsson',
    location: 'Stockholm, Sweden',
    year: '2025'
  },
  {
    id: 'arch-4',
    refIndex: '04',
    title: 'Gothic Vaults',
    category: 'architecture',
    categoryName: 'Architecture',
    format: 'wide',
    description: 'Ancient vaulted masonry ribs converging in majestic cathedral geometry illuminated by clerestory light.',
    thumbUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1920&q=85',
    alt: 'Symmetrical gothic vaulted cathedral stone ceiling',
    author: 'Michael D',
    location: 'London, UK',
    year: '2024'
  },

  // --- Nature ---
  {
    id: 'nature-1',
    refIndex: '05',
    title: 'Alpine Solitude',
    category: 'nature',
    categoryName: 'Nature',
    format: 'landscape',
    description: 'Crested alpine summits emerging through dawn mist, illuminated by early golden sun rays.',
    thumbUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85',
    alt: 'Snow-covered mountain peak against dawn sky',
    author: 'Kalon Visuals',
    location: 'Canadian Rockies',
    year: '2026'
  },
  {
    id: 'nature-2',
    refIndex: '06',
    title: 'Emerald Canopy',
    category: 'nature',
    categoryName: 'Nature',
    format: 'square',
    description: 'Ethereal shafts of sunlight breaking through morning fog in an ancient evergreen forest.',
    thumbUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85',
    alt: 'Sunbeams penetrating dense misty green pine forest',
    author: 'Sebastian Unrau',
    location: 'Black Forest, Germany',
    year: '2025'
  },
  {
    id: 'nature-3',
    refIndex: '07',
    title: 'Azure Tides',
    category: 'nature',
    categoryName: 'Nature',
    format: 'wide',
    description: 'Quiet turquoise oceanic rollers dissolving into untouched sands along a secluded coastline.',
    thumbUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Gentle turquoise ocean surf on empty beach',
    author: 'Sean Oulashin',
    location: 'Oahu, Hawaii',
    year: '2026'
  },
  {
    id: 'nature-4',
    refIndex: '08',
    title: 'Dune Horizons',
    category: 'nature',
    categoryName: 'Nature',
    format: 'portrait',
    description: 'Wind-carved desert ridges undulating under low evening sun, casting deep terracotta shadows.',
    thumbUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
    alt: 'Sculptural sand dunes with warm sunset light and shadow',
    author: 'Jeremy Bishop',
    location: 'Death Valley, USA',
    year: '2025'
  },
  {
    id: 'nature-5',
    refIndex: '09',
    title: 'Celestial Quiet',
    category: 'nature',
    categoryName: 'Nature',
    format: 'landscape',
    description: 'The Milky Way galaxy arching across a pitch-black desert night sky undisturbed by civilization.',
    thumbUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1920&q=85',
    alt: 'Starry night sky and Milky Way galaxy over dark horizon',
    author: 'Greg Rakozy',
    location: 'Atacama, Chile',
    year: '2026'
  },

  // --- People ---
  {
    id: 'people-1',
    refIndex: '10',
    title: 'Transit Conversations',
    category: 'people',
    categoryName: 'People',
    format: 'portrait',
    description: 'An intimate study of commuters sharing unspoken solidarity in an evening commuter train.',
    thumbUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1920&q=85',
    alt: 'Candid portrait of passenger with soft window lighting',
    author: 'Valerie Elash',
    location: 'Mumbai, India',
    year: '2026'
  },
  {
    id: 'people-2',
    refIndex: '11',
    title: 'Street Musicians',
    category: 'people',
    categoryName: 'People',
    format: 'landscape',
    description: 'An impromptu acoustic performance in an old stone alleyway during afternoon twilight.',
    thumbUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1920&q=85',
    alt: 'Candid street scene with acoustic performers in stone street',
    author: 'Austin Neill',
    location: 'Lisbon, Portugal',
    year: '2025'
  },

  // --- Portraits ---
  {
    id: 'portrait-1',
    refIndex: '12',
    title: 'Quiet Contemplation',
    category: 'portraits',
    categoryName: 'Portraits',
    format: 'portrait',
    description: 'Editorial portrait captured in natural diffused window light, capturing emotional resonance.',
    thumbUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=85',
    alt: 'Editorial portrait in warm natural lighting',
    author: 'Aiony Haust',
    location: 'Kyoto, Japan',
    year: '2026'
  },
  {
    id: 'portrait-2',
    refIndex: '13',
    title: 'Elder’s Gaze',
    category: 'portraits',
    categoryName: 'Portraits',
    format: 'square',
    description: 'Weathered expression and dignified gaze telling decades of cultural memory and resilience.',
    thumbUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=85',
    alt: 'Close-up dignified portrait study with soft depth of field',
    author: 'Joseph Gonzalez',
    location: 'Varanasi, India',
    year: '2025'
  },

  // --- Travel ---
  {
    id: 'travel-1',
    refIndex: '14',
    title: 'Santorini Caldera',
    category: 'travel',
    categoryName: 'Travel',
    format: 'landscape',
    description: 'Cycladic cubic whitewashed cliffside dwellings overlooking the deep cobalt waters of the Aegean.',
    thumbUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=85',
    alt: 'Santorini Greece white cliffside village with blue domes',
    author: 'Matthew Waring',
    location: 'Oia, Greece',
    year: '2025'
  },
  {
    id: 'travel-2',
    refIndex: '15',
    title: 'Kyoto Pathways',
    category: 'travel',
    categoryName: 'Travel',
    format: 'portrait',
    description: 'Thousand vermilion torii shrines winding along forested mountain slopes in sacred rhythm.',
    thumbUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85',
    alt: 'Vermilion Torii gates trail in Fushimi Inari shrine',
    author: 'Su San Lee',
    location: 'Kyoto, Japan',
    year: '2026'
  },
  {
    id: 'travel-3',
    refIndex: '16',
    title: 'Anatolian Flight',
    category: 'travel',
    categoryName: 'Travel',
    format: 'wide',
    description: 'Silent balloons drifting above volcanic fairy chimneys as the sun grazes central Anatolia.',
    thumbUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
    alt: 'Hot air balloons floating above Cappadocia valley',
    author: 'Yonatan Mirgaten',
    location: 'Cappadocia, Turkey',
    year: '2025'
  },
  {
    id: 'travel-4',
    refIndex: '17',
    title: 'Venetian Serenade',
    category: 'travel',
    categoryName: 'Travel',
    format: 'landscape',
    description: 'Resting wooden gondolas gently rocking against morning moorings on the Venetian lagoon.',
    thumbUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1920&q=85',
    alt: 'Venice canal at dusk with moored traditional gondolas',
    author: 'Dan Novac',
    location: 'Venice, Italy',
    year: '2024'
  },

  // --- Abstract ---
  {
    id: 'abstract-1',
    refIndex: '18',
    title: 'Chroma Dynamic',
    category: 'abstract',
    categoryName: 'Abstract',
    format: 'square',
    description: 'Swirling high-viscosity pigment suspensions interacting in organic turbulence and fluid tension.',
    thumbUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1920&q=85',
    alt: 'Vibrant fluid acrylic paint currents in motion',
    author: 'Pawel Czerwinski',
    location: 'Studio Abstract',
    year: '2026'
  },
  {
    id: 'abstract-2',
    refIndex: '19',
    title: 'Geometric Void',
    category: 'abstract',
    categoryName: 'Abstract',
    format: 'landscape',
    description: 'Minimal sculptural curvature experimenting with ambient occlusion and monochromatic volume.',
    thumbUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    alt: 'Abstract 3D curved shapes with soft diffused shadow',
    author: 'Milad Fakurian',
    location: 'Digital Space',
    year: '2025'
  },
  {
    id: 'abstract-3',
    refIndex: '20',
    title: 'Spectral Prism',
    category: 'abstract',
    categoryName: 'Abstract',
    format: 'portrait',
    description: 'Prismatic light refraction decomposing into spectral wavelengths across ribbed crystal glass.',
    thumbUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=85',
    alt: 'Spectral prismatic reflections across textured wavy glass',
    author: 'Jr Korpa',
    location: 'Optical Lab',
    year: '2026'
  },
  {
    id: 'abstract-4',
    refIndex: '21',
    title: 'Stardust Nebula',
    category: 'abstract',
    categoryName: 'Abstract',
    format: 'wide',
    description: 'Micron-level gold leaf particulates suspended in velvet darkness like distant interstellar clouds.',
    thumbUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1920&q=85',
    alt: 'Golden cosmic smoke and dust particulate on dark background',
    author: 'Lucas Benjamin',
    location: 'Cosmic Abstraction',
    year: '2025'
  },

  // --- Urban ---
  {
    id: 'urban-1',
    refIndex: '22',
    title: 'Metropolitan Pulse',
    category: 'urban',
    categoryName: 'Urban',
    format: 'wide',
    description: 'Evening blue hour over dense Tokyo transportation arteries illuminated by endless kinetic light.',
    thumbUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=85',
    alt: 'Tokyo metropolitan expressway and skyline at blue hour',
    author: 'Alexander Smagin',
    location: 'Tokyo, Japan',
    year: '2026'
  },
  {
    id: 'urban-2',
    refIndex: '23',
    title: 'Rainy Neon Corridor',
    category: 'urban',
    categoryName: 'Urban',
    format: 'portrait',
    description: 'Reflective wet asphalt reflecting vibrant storefront neon signage during a midnight downpour.',
    thumbUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85',
    alt: 'Night city street with reflections in rainwater puddles',
    author: 'Aleksandar Pasaric',
    location: 'Seoul, South Korea',
    year: '2025'
  },
  {
    id: 'urban-3',
    refIndex: '24',
    title: 'Manhattan Grid',
    category: 'urban',
    categoryName: 'Urban',
    format: 'landscape',
    description: 'Strict rectilinear street canyons organizing the bustling vertical density of lower Manhattan.',
    thumbUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=85',
    alt: 'Manhattan New York cityscape looking down avenue',
    author: 'Lerone Pieters',
    location: 'New York, USA',
    year: '2026'
  }
];

/* ==========================================================================
   2. Application State Controller
   ========================================================================== */
const ArchiveState = {
  currentCategory: 'all',
  searchQuery: '',
  filteredItems: [...ARCHIVE_DATA],
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
  // Navigation & Theme
  themeToggle: document.getElementById('theme-toggle'),
  themeText: document.getElementById('theme-text'),
  lightIcon: document.querySelector('.light-icon'),
  darkIcon: document.querySelector('.dark-icon'),

  // Control Elements
  tabs: document.querySelectorAll('.tab-btn'),
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  visibleCount: document.getElementById('visible-count'),
  totalCount: document.getElementById('total-count'),
  activeCategoryDisplay: document.getElementById('active-category-display'),
  resetFilterBtn: document.getElementById('reset-filter-btn'),
  btnClearFilters: document.getElementById('btn-clear-filters'),
  noResults: document.getElementById('no-results'),
  galleryGrid: document.getElementById('gallery-grid'),

  // Lightbox Modal
  lightbox: document.getElementById('lightbox'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  lightboxImg: document.getElementById('lightbox-img'),
  lightboxImageBox: document.getElementById('lightbox-image-box'),
  lightboxLoader: document.getElementById('lightbox-loader'),
  lightboxCategory: document.getElementById('lightbox-category'),
  lightboxCounter: document.getElementById('lightbox-counter'),
  lightboxTitle: document.getElementById('lightbox-title'),
  lightboxDesc: document.getElementById('lightbox-desc'),
  lightboxLocation: document.getElementById('lightbox-location'),
  lightboxYear: document.getElementById('lightbox-year'),
  lightboxAuthor: document.getElementById('lightbox-author'),
  lightboxPrevBtn: document.getElementById('lightbox-prev-btn'),
  lightboxNextBtn: document.getElementById('lightbox-next-btn'),
  lightboxCloseBtn: document.getElementById('lightbox-close-btn'),
  lightboxZoomBtn: document.getElementById('lightbox-zoom-btn'),
  lightboxFullscreenBtn: document.getElementById('lightbox-fullscreen-btn'),
  lightboxExternalBtn: document.getElementById('lightbox-external-btn'),
  zoomInIcon: document.querySelector('.zoom-in-icon'),
  zoomOutIcon: document.querySelector('.zoom-out-icon')
};

/* ==========================================================================
   4. Application Initialization
   ========================================================================== */
function initArchive() {
  initTheme();
  updateTabCounts();
  renderArchiveGrid();
  bindEventHandlers();
}

/* ==========================================================================
   5. Dark / Light Editorial Theme Controller
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('inframe-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const activeTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(activeTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('inframe-theme', theme);

  if (DOM.themeText) {
    DOM.themeText.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }
  if (DOM.lightIcon && DOM.darkIcon) {
    DOM.lightIcon.classList.toggle('hidden', theme === 'dark');
    DOM.darkIcon.classList.toggle('hidden', theme === 'light');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const target = current === 'dark' ? 'light' : 'dark';
  applyTheme(target);
}

/* ==========================================================================
   6. Archive Grid Rendering & Count Sync
   ========================================================================== */
function updateTabCounts() {
  const counts = {
    all: ARCHIVE_DATA.length,
    nature: 0,
    architecture: 0,
    people: 0,
    travel: 0,
    portraits: 0,
    abstract: 0,
    urban: 0
  };

  ARCHIVE_DATA.forEach(item => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  });

  Object.keys(counts).forEach(cat => {
    const countEl = document.getElementById(`count-${cat}`);
    if (countEl) {
      countEl.textContent = counts[cat];
    }
  });

  if (DOM.totalCount) {
    DOM.totalCount.textContent = ARCHIVE_DATA.length;
  }
}

function renderArchiveGrid() {
  const query = ArchiveState.searchQuery.trim().toLowerCase();

  // Compute filtered subset
  ArchiveState.filteredItems = ARCHIVE_DATA.filter(item => {
    const matchesCategory = (ArchiveState.currentCategory === 'all') || (item.category === ArchiveState.currentCategory);
    const matchesSearch = !query || (
      item.title.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.year.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
    return matchesCategory && matchesSearch;
  });

  // Update counter badges
  if (DOM.visibleCount) {
    DOM.visibleCount.textContent = ArchiveState.filteredItems.length;
  }

  // Handle empty state
  if (ArchiveState.filteredItems.length === 0) {
    DOM.galleryGrid.innerHTML = '';
    DOM.noResults.classList.remove('hidden');
    return;
  } else {
    DOM.noResults.classList.add('hidden');
  }

  // Render cards preserving natural format
  DOM.galleryGrid.innerHTML = ArchiveState.filteredItems.map(item => `
    <article 
      class="archive-card" 
      data-id="${item.id}"
      data-format="${item.format}"
      tabindex="0"
      role="button"
      aria-haspopup="dialog"
      aria-label="View photograph: ${escapeHTML(item.title)}, ${escapeHTML(item.location)}"
    >
      <div class="archive-card-media">
        <img 
          src="${item.thumbUrl}" 
          alt="${escapeHTML(item.alt)}"
          loading="lazy"
          width="600"
          height="450"
        />
      </div>
      <div class="archive-card-info">
        <span class="archive-card-ref">${item.refIndex} / ${escapeHTML(item.categoryName)}</span>
        <h3 class="archive-card-title">${escapeHTML(item.title)}</h3>
        <div class="archive-card-details">
          <span>${escapeHTML(item.location)} · ${escapeHTML(item.year)}</span>
          <span class="archive-card-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  `).join('');

  // Bind click & keyboard enter triggers on newly rendered cards
  const cards = DOM.galleryGrid.querySelectorAll('.archive-card');
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
   7. Filter & Search Controls
   ========================================================================== */
function setCategory(category) {
  ArchiveState.currentCategory = category;

  // Sync tab active states
  DOM.tabs.forEach(tab => {
    const isTarget = tab.getAttribute('data-filter') === category;
    tab.classList.toggle('active', isTarget);
    tab.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
  });

  // Display label
  const labels = {
    all: 'All Works',
    nature: 'Nature Collection',
    architecture: 'Architecture Collection',
    people: 'People Collection',
    travel: 'Travel Narratives',
    portraits: 'Portrait Studies',
    abstract: 'Abstract Visualizations',
    urban: 'Urban Studies'
  };

  if (DOM.activeCategoryDisplay) {
    DOM.activeCategoryDisplay.textContent = labels[category] || category;
  }

  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.classList.toggle('hidden', category === 'all');
  }

  renderArchiveGrid();
}

function handleSearch(e) {
  ArchiveState.searchQuery = e.target.value;
  DOM.searchClearBtn.classList.toggle('hidden', ArchiveState.searchQuery.length === 0);
  renderArchiveGrid();
}

function clearSearch() {
  ArchiveState.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.searchClearBtn.classList.add('hidden');
  DOM.searchInput.focus();
  renderArchiveGrid();
}

function resetAllFilters() {
  ArchiveState.currentCategory = 'all';
  ArchiveState.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.searchClearBtn.classList.add('hidden');
  setCategory('all');
}

/* ==========================================================================
   8. Full-Screen Nocturnal Lightbox Engine
   Filter-aware navigation: navigates only through currently visible set.
   ========================================================================== */
function openLightboxById(imageId) {
  // Find index within currently filtered items
  let index = ArchiveState.filteredItems.findIndex(item => item.id === imageId);

  // If not found in filtered set (e.g. clicked from Featured section), fallback to searching the whole dataset
  if (index === -1) {
    const fullItem = ARCHIVE_DATA.find(item => item.id === imageId);
    if (fullItem) {
      // Temporarily expand filtered set to full archive or open the item directly
      ArchiveState.filteredItems = [...ARCHIVE_DATA];
      index = ARCHIVE_DATA.findIndex(item => item.id === imageId);
    } else {
      index = 0;
    }
  }

  ArchiveState.lightboxIndex = index;
  ArchiveState.lastFocusedElement = document.activeElement;
  ArchiveState.isLightboxOpen = true;

  // Open modal & lock scroll
  DOM.lightbox.classList.add('active');
  DOM.lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  updateLightboxView();
  DOM.lightboxCloseBtn.focus();
}

function closeLightbox() {
  if (!ArchiveState.isLightboxOpen) return;

  ArchiveState.isLightboxOpen = false;
  DOM.lightbox.classList.remove('active');
  DOM.lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restore background scroll

  resetZoom();

  // Exit fullscreen if active
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }

  // Restore focus
  if (ArchiveState.lastFocusedElement && typeof ArchiveState.lastFocusedElement.focus === 'function') {
    ArchiveState.lastFocusedElement.focus();
  }
}

function navigateLightbox(direction) {
  if (!ArchiveState.isLightboxOpen || ArchiveState.filteredItems.length === 0) return;

  resetZoom();

  const total = ArchiveState.filteredItems.length;
  ArchiveState.lightboxIndex = (ArchiveState.lightboxIndex + direction + total) % total;

  // Gentle transition
  DOM.lightboxImg.style.opacity = '0.4';
  updateLightboxView();
}

function updateLightboxView() {
  const current = ArchiveState.filteredItems[ArchiveState.lightboxIndex];
  if (!current) return;

  const total = ArchiveState.filteredItems.length;
  const currentNum = String(ArchiveState.lightboxIndex + 1).padStart(2, '0');
  const totalNum = String(total).padStart(2, '0');

  // Update textual data
  DOM.lightboxCounter.textContent = `${currentNum} / ${totalNum}`;
  DOM.lightboxCategory.textContent = current.categoryName.toUpperCase();
  DOM.lightboxTitle.textContent = current.title;
  DOM.lightboxDesc.textContent = current.description;
  DOM.lightboxLocation.textContent = current.location;
  DOM.lightboxYear.textContent = current.year;
  DOM.lightboxAuthor.textContent = current.author;
  DOM.lightboxExternalBtn.href = current.fullUrl;

  // Show subtle spinner
  DOM.lightboxLoader.classList.add('visible');

  // Preload large photo
  const preloadImg = new Image();
  preloadImg.src = current.fullUrl;

  preloadImg.onload = () => {
    DOM.lightboxImg.src = current.fullUrl;
    DOM.lightboxImg.alt = current.alt;
    DOM.lightboxLoader.classList.remove('visible');
    DOM.lightboxImg.style.opacity = '1';
  };

  preloadImg.onerror = () => {
    DOM.lightboxImg.src = current.thumbUrl;
    DOM.lightboxLoader.classList.remove('visible');
    DOM.lightboxImg.style.opacity = '1';
  };

  preloadAdjacentPhotos();
}

function preloadAdjacentPhotos() {
  const total = ArchiveState.filteredItems.length;
  if (total <= 1) return;

  const nextIndex = (ArchiveState.lightboxIndex + 1) % total;
  const prevIndex = (ArchiveState.lightboxIndex - 1 + total) % total;

  const nextImg = new Image();
  nextImg.src = ArchiveState.filteredItems[nextIndex].fullUrl;

  const prevImg = new Image();
  prevImg.src = ArchiveState.filteredItems[prevIndex].fullUrl;
}

function toggleZoom() {
  ArchiveState.isZoomed = !ArchiveState.isZoomed;
  DOM.lightboxImageBox.classList.toggle('zoomed', ArchiveState.isZoomed);
  DOM.zoomInIcon.classList.toggle('hidden', ArchiveState.isZoomed);
  DOM.zoomOutIcon.classList.toggle('hidden', !ArchiveState.isZoomed);
}

function resetZoom() {
  if (ArchiveState.isZoomed) {
    ArchiveState.isZoomed = false;
    DOM.lightboxImageBox.classList.remove('zoomed');
    DOM.zoomInIcon.classList.remove('hidden');
    DOM.zoomOutIcon.classList.add('hidden');
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    DOM.lightbox.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

/* ==========================================================================
   9. Event Handlers & Interactions
   ========================================================================== */
function bindEventHandlers() {
  // Theme Toggle
  if (DOM.themeToggle) {
    DOM.themeToggle.addEventListener('click', toggleTheme);
  }

  // Category Filter Tabs
  DOM.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-filter');
      setCategory(category);
    });
  });

  // Reset Buttons
  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.addEventListener('click', () => setCategory('all'));
  }
  if (DOM.btnClearFilters) {
    DOM.btnClearFilters.addEventListener('click', resetAllFilters);
  }

  // Live Search
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', handleSearch);
  }
  if (DOM.searchClearBtn) {
    DOM.searchClearBtn.addEventListener('click', clearSearch);
  }

  // Featured Items Click (Open in Lightbox)
  const featuredItems = document.querySelectorAll('.featured-item, .hero-image-card');
  featuredItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id') || item.getAttribute('data-hero-id');
      if (id) openLightboxById(id);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = item.getAttribute('data-id') || item.getAttribute('data-hero-id');
        if (id) openLightboxById(id);
      }
    });
  });

  // Collections Cards Click (Filters main gallery & scrolls smoothly)
  const collectionCards = document.querySelectorAll('.collection-card, .collection-link-btn');
  collectionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCategory = card.getAttribute('data-category') || card.getAttribute('data-filter');
      if (targetCategory) {
        setCategory(targetCategory);
        const gallerySection = document.getElementById('gallery-section');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

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

  // Click outside to close
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
  DOM.lightbox.addEventListener('click', (e) => {
    if (e.target === DOM.lightbox || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (!ArchiveState.isLightboxOpen) return;

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

  // Touch Swipe Gesture Support
  DOM.lightbox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      ArchiveState.touchStartX = e.touches[0].clientX;
      ArchiveState.touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  DOM.lightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1 && !ArchiveState.isZoomed) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - ArchiveState.touchStartX;
      const deltaY = touchEndY - ArchiveState.touchStartY;

      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          navigateLightbox(1); // Swipe left -> Next
        } else {
          navigateLightbox(-1); // Swipe right -> Prev
        }
      }
    }
  }, { passive: true });
}

function trapLightboxFocus(e) {
  const dialog = document.getElementById('lightbox-dialog');
  if (!dialog) return;

  const focusables = dialog.querySelectorAll('button:not([disabled]), a:not([disabled]), [tabindex="0"]');
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

/* ==========================================================================
   10. Bootstrapping
   ========================================================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initArchive);
} else {
  initArchive();
}
