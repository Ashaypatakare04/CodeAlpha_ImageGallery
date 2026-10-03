# Local Images Directory

This directory is reserved for optional local image assets.

### How to use local images in this project:

1. Place your images (JPEG, PNG, WebP) directly into this `images/` directory.
   For example:
   - `nature-1.jpg`
   - `nature-2.jpg`
   - `architecture-1.jpg`
   - `travel-1.jpg`

2. Open `script.js` and update the `GALLERY_DATA` array:
   ```javascript
   {
     id: "nature-1",
     title: "Alpine Majesty",
     category: "Nature",
     description: "Majestic snow-capped mountain peaks bathed in golden morning sunlight.",
     thumbUrl: "images/nature-1.jpg",
     fullUrl: "images/nature-1.jpg",
     alt: "Snow-covered mountain peak against a clear sky",
     author: "Your Name"
   }
   ```

3. Save `script.js` and refresh `index.html` in your browser.

By default, the project loads high-performance, crystal-clear Unsplash CDN photography so it runs out-of-the-box without requiring large file downloads.
