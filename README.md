# Shree Ganesh Jewellers - Luxury Jewellery Website

A static multi-page website for a luxury jewellery shop, built with plain HTML, CSS, and vanilla JavaScript.

## 🎨 Design

- **Color Scheme**: Cream (#FBF7F2) background, Gold (#9A6A2E) accents, Dark text (#2B2118)
- **Typography**: Cormorant Garamond (headings), Inter (body)
- **Style**: Elegant, minimal, warm and luxurious

## 📁 File Structure

```
Jellewalary Shop/
├── index.html          # Homepage with hero, categories, products, testimonials
├── shop.html           # Product listing with filter, sort, search
├── product.html        # Product detail page (loads by ?id= URL param)
├── bridal.html         # Bridal collection showcase
├── about.html          # Brand story, craftsmanship, values
├── contact.html        # Contact form and appointment booking
├── cart.html           # Shopping cart with quantity controls
├── css/
│   └── style.css       # All styles in one file
├── js/
│   ├── products.js     # Product data array (20 items)
│   └── main.js         # All interactive features
└── images/
    └── README.txt      # Image specifications and naming guide
```

## ✨ Features

### Homepage (index.html)
- Hero section with CTA
- Category cards (Rings, Necklaces, Earrings, Bracelets, Bridal)
- Feature tiles with image overlays
- "Loved Most" product grid (6 featured products)
- Craftsmanship section with feature icons
- Trust bar (5 icons: Certified, Secure, Packaging, Shipping, Returns)
- Testimonial slider with auto-rotation
- Blog preview (4 cards)

### Shop Page (shop.html)
- Category filter buttons
- Sort by: Featured, Price (Low/High), Name, Rating
- Search box (real-time filtering)
- Product grid rendered from products.js

### Product Detail (product.html)
- Loads product by URL parameter: ?id=1
- Image gallery with thumbnails
- Product info, rating, description
- Quantity selector
- Add to Cart button
- Related products section

### Bridal Page (bridal.html)
- Hero banner
- Bridal product grid
- Bridal services section
- CTA for consultation

### About Page (about.html)
- Brand story sections
- Craftsmanship details
- Ethical sourcing information
- Company values grid (6 value cards)

### Contact Page (contact.html)
- Contact form with validation
- Appointment booking form
- Contact information cards
- Map placeholder

### Cart Page (cart.html)
- Cart items display
- Quantity increment/decrement
- Remove item functionality
- Order summary with subtotal
- Empty cart state

## 🛠️ JavaScript Features

### Cart & Wishlist
- Stored in localStorage
- Live header badge counts
- Add/remove items
- Update quantities
- Persistent across sessions

### Interactive Elements
- Mobile hamburger menu
- Sticky header with scroll effect
- Testimonial slider (manual + auto-rotate)
- Product filter, sort, search
- Form validation
- Toast notifications ("Added to cart")
- Fade-in on scroll animations (IntersectionObserver)

### Product Management
- 20 sample products with full details
- Category filtering
- Collection filtering
- Search by name/description
- Sort functionality
- Product card rendering

## 🚀 How to Use

1. **Open the website**: Open `index.html` in any modern web browser
2. **Add images**: Place your jewellery images in the `images/` folder following the naming guide
3. **Customize products**: Edit `js/products.js` to add/modify products
4. **Customize colors**: Edit CSS variables in `css/style.css` (lines 10-20)
5. **No build step needed**: Everything works out of the box

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Adjusted grid layouts
- **Mobile**: 
  - Hamburger menu
  - Stacked layouts
  - Touch-friendly buttons
  - Optimized spacing

## 🎯 Key Components

### Shared Across All Pages
- Announcement bar (top banner)
- Sticky header with navigation
- Search, wishlist, cart icons with counts
- Footer with newsletter, links, social icons

### CSS Features
- CSS custom properties (variables)
- Flexbox & Grid layouts
- Smooth transitions
- Box shadows and gradients
- Fully responsive breakpoints

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Alt text placeholders
- Form labels and error messages

## 📝 Notes

- **No frameworks**: Pure HTML, CSS, JavaScript
- **No backend**: Demo only (no real payment/checkout)
- **LocalStorage only**: Cart/wishlist saved locally
- **Image placeholders**: Add your own images following the naming guide
- **Form submissions**: Show toast messages (no actual submission)

## 🎨 Customization Guide

### Colors
Edit CSS variables in `style.css`:
```css
--cream-bg: #FBF7F2;
--card-bg: #F5EDE3;
--gold-accent: #9A6A2E;
--text-primary: #2B2118;
```

### Products
Edit `js/products.js` - each product has:
- id, name, category, collection
- price, rating, reviews
- image paths (main + alternates)
- description
- featured status

### Text Content
All text is directly in the HTML files - easy to find and edit.

## ⚡ Performance

- Lightweight (no frameworks)
- Fast load times
- Optimized animations
- Efficient localStorage usage
- Minimal JavaScript execution

## 🌐 Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- IE11 not supported (uses modern ES6+ JavaScript)

---

**Built with ❤️ for Shree Ganesh Jewellers**
