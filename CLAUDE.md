# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a **static website** built with vanilla HTML, CSS, and JavaScript. No build process or package manager is required.

### Local Development
```bash
# Option 1: Use Python's built-in server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 2: Use any other local server
npx serve .
# or
php -S localhost:8000
```

### Testing
- No automated tests - manually test in browser
- Test responsive design across devices (mobile/tablet/desktop)
- Verify all links work and images load properly
- Test map functionality and slideshow

## Project Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Mapping**: Leaflet.js (loaded from unpkg CDN)
- **Widgets**: TradingView financial ticker
- **Hosting**: GitHub Pages ready (static files)

### File Structure
- `index.html` - Main homepage with hero slideshow, interactive map, blog previews
- `style.css` - Complete stylesheet with CSS variables and responsive design
- `scripts.js` - JavaScript for slideshow, map initialization, and dynamic content
- `pages/` - All secondary pages and blog posts
  - `blog/2024/` - 2024 blog posts (september.html, october.html, november.html, december.html)
  - `blog/2025/` - 2025 blog posts (january.html, february.html, march.html, april.html, may.html, june.html, july.html)
  - `food.html`, `transportation.html`, `vlogs.html`, `packing-checklist.html`, `love-letter.html` - Specialized content pages
- `assets/` - All static assets organized by type
  - `images/flags/` - Country flag images (25 files)
  - `images/food/` - Food-related photography
  - `images/slideshow/` - Hero slideshow images (slide1-4.jpg)
  - `images/icons/` - Social media icons and favicons
  - `images/misc/` - General travel photography (~340+ files)
  - `fonts/` - Web fonts directory (for future custom fonts)

### Key Features
- **Interactive World Map**: Leaflet.js map showing travel route with country markers
- **Auto-rotating Slideshow**: Hero section with travel photography
- **Dynamic Content**: Countries and blog posts loaded via JavaScript arrays
- **Responsive Design**: Mobile-first with CSS Grid and Flexbox
- **SEO Optimized**: Schema.org structured data, comprehensive meta tags
- **Performance**: Lazy loading images, preconnect hints, font preloading

### Data Management

#### Adding New Countries
Update the `countries` array in `scripts.js:3-20` with:
```javascript
{ name: 'Country Name', flag: 'flag-filename.jpg', coordinates: [lat, lng] }
```
Add flag image to `assets/images/flags/` directory.

#### Adding New Blog Posts
1. Create HTML file in appropriate year directory: `pages/blog/YYYY/month.html`
2. Use relative paths for blog posts: `../../../` to reach root directory
3. Add entry to `blogs` array in `scripts.js:23-103` with path `pages/blog/YYYY/month.html`
4. Update `sitemap.xml` with new URL: `https://chasefagen.com/pages/blog/YYYY/month.html`
5. Add blog post images to appropriate `assets/images/` subdirectory
6. Update JSON-LD structured data in `index.html:69-103` if needed

#### Content Updates
- **Map markers**: Modify `countries` array coordinates
- **Slideshow images**: Update `slides` array in `scripts.js:163-168` with paths like `assets/images/slideshow/slideX.jpg`
- **Social links**: Update footer section in `index.html:251-263`

### Path Reference Guidelines

#### For Root Files (index.html, style.css, scripts.js)
- Images: `assets/images/category/filename.jpg`
- Pages: `pages/pagename.html`

#### For Pages Directory Files (pages/*.html)
- Root assets: `../assets/images/category/filename.jpg`
- Root files: `../index.html`, `../style.css`, `../scripts.js`
- Other pages: `pagename.html` (same directory)

#### For Blog Posts (pages/blog/YYYY/*.html)
- Root assets: `../../../assets/images/category/filename.jpg`
- Root files: `../../../index.html`, `../../../style.css`, `../../../scripts.js`
- Other pages: `../../pagename.html`

### Styling System
- **CSS Variables**: Defined in `:root` for colors, shadows, transitions
- **Color Palette**: Primary (#2c3e50), Secondary (#3498db), Accent (#e74c3c)
- **Typography**: Poppins font family with WOFF2 preloading
- **Responsive Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

### External Dependencies
- **Leaflet.js**: Maps and markers (unpkg.com CDN)
- **TradingView**: Stock ticker widget (s3.tradingview.com)
- **Font loading**: Poppins from Google Fonts
- All external resources use HTTPS and proper security attributes

### SEO Configuration
- Complete Open Graph and Twitter Card meta tags
- JSON-LD structured data for website and blog posts
- XML sitemap at `/sitemap.xml` with all pages
- LLM discovery metadata at `/llm.txt`
- Robot directives allowing all crawlers

### Performance Features
- Images use `loading="lazy"` attribute
- Preconnect hints for external CDNs
- Font preloading for critical text rendering
- Deferred JavaScript execution
- Optimized CSS with minimal external requests

## Important Notes

- **No build system**: Direct file editing and browser refresh workflow
- **Static hosting**: Can be deployed to any static file host (GitHub Pages, Netlify, etc.)
- **SEO critical**: Always update sitemap.xml when adding new pages
- **Image optimization**: Compress images before adding to reduce load times
- **Directory organization**: Place images in appropriate subdirectories (flags/, food/, slideshow/, icons/, misc/)
- **Relative paths**: Blog posts use ../../../ to reference root assets, other pages use ../
- **Accessibility**: Include proper alt text and ARIA labels for new content