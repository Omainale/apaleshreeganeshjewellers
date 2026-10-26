// Main JavaScript for Shree Ganesh Jewellers
// Handles cart, wishlist, UI interactions, and animations

// ============================================
// STATE MANAGEMENT
// ============================================

// Initialize cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Update header counts on page load
updateHeaderCounts();

// ============================================
// HEADER & NAVIGATION
// ============================================

// Sticky header on scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav && mobileMenuToggle) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// ============================================
// CART FUNCTIONS
// ============================================

function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateHeaderCounts();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateHeaderCounts();
    
    // Reload cart page if we're on it
    if (window.location.pathname.includes('cart.html')) {
        loadCartPage();
    }
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateHeaderCounts();
        
        // Update cart page if we're on it
        if (window.location.pathname.includes('cart.html')) {
            loadCartPage();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================

function toggleWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist`);
    }
    
    saveWishlist();
    updateHeaderCounts();
    
    // Update wishlist buttons on page
    updateWishlistButtons();
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistButtons() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn-product');
    wishlistBtns.forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (isInWishlist(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// HEADER COUNTS UPDATE
// ============================================

function updateHeaderCounts() {
    const cartCount = document.getElementById('cart-count');
    const wishlistCount = document.getElementById('wishlist-count');
    
    if (cartCount) {
        const count = getCartItemCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'block' : 'none';
    }
    
    if (wishlistCount) {
        const count = wishlist.length;
        wishlistCount.textContent = count;
        wishlistCount.style.display = count > 0 ? 'block' : 'none';
    }
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// PRODUCT RENDERING
// ============================================

function renderProductCard(product) {
    return `
        <div class="product-card fade-in">
            <div class="product-image">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <button class="wishlist-btn-product ${isInWishlist(product.id) ? 'active' : ''}" 
                        data-product-id="${product.id}"
                        onclick="toggleWishlist(${product.id})"
                        aria-label="Add to wishlist">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="${isInWishlist(product.id) ? 'currentColor' : 'none'}" stroke="currentColor">
                        <path d="M10 17.5L2.5 10C0.833 8.333 0.833 5.667 2.5 4C4.167 2.333 6.833 2.333 8.5 4L10 5.5L11.5 4C13.167 2.333 15.833 2.333 17.5 4C19.167 5.667 19.167 8.333 17.5 10L10 17.5Z" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// HOME PAGE - LOVED PRODUCTS
// ============================================

const lovedProductsContainer = document.getElementById('loved-products');
if (lovedProductsContainer) {
    const featuredProducts = getFeaturedProducts(6);
    lovedProductsContainer.innerHTML = featuredProducts.map(product => renderProductCard(product)).join('');
    
    // Trigger fade-in animations
    setTimeout(() => {
        observeElements();
    }, 100);
}

// ============================================
// TESTIMONIAL SLIDER
// ============================================

const testimonialTrack = document.getElementById('testimonial-track');
if (testimonialTrack) {
    let currentTestimonial = 0;
    const testimonials = testimonialTrack.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        const offset = -index * 100;
        testimonialTrack.style.transform = `translateX(${offset}%)`;
    }
    
    document.querySelector('.slider-prev')?.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });
    
    document.querySelector('.slider-next')?.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// ============================================
// NEWSLETTER FORM
// ============================================

const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        showToast('Thank you for subscribing!');
        newsletterForm.reset();
    });
}

// ============================================
// FADE-IN ON SCROLL ANIMATION
// ============================================

function observeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});

// ============================================
// SHOP PAGE FUNCTIONS
// ============================================

let currentCategory = 'all';
let currentSort = 'featured';
let currentSearchQuery = '';

function initShopPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const collectionParam = urlParams.get('collection');
    
    if (categoryParam) {
        currentCategory = categoryParam;
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderShopProducts();
        });
        
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        }
    });
    
    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderShopProducts();
        });
    }
    
    // Search box
    const searchBox = document.getElementById('search-box');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderShopProducts();
        });
    }
    
    renderShopProducts();
}

function renderShopProducts() {
    const container = document.getElementById('shop-products');
    if (!container) return;
    
    let filteredProducts = currentCategory === 'all' 
        ? products 
        : getProductsByCategory(currentCategory);
    
    if (currentSearchQuery) {
        filteredProducts = searchProducts(currentSearchQuery);
    }
    
    filteredProducts = sortProducts(filteredProducts, currentSort);
    
    container.innerHTML = filteredProducts.map(product => renderProductCard(product)).join('');
    
    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `${filteredProducts.length} products`;
    }
    
    observeElements();
}

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }
    
    const product = getProductById(productId);
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    renderProductDetail(product);
    renderRelatedProducts(product);
}

function renderProductDetail(product) {
    // Update page title
    document.title = `${product.name} - Shree Ganesh Jewellers`;
    
    // Main image
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    // Thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    if (thumbnailContainer && product.images) {
        thumbnailContainer.innerHTML = product.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                <img src="${img}" alt="${product.name}">
            </div>
        `).join('');
        
        // Thumbnail click handler
        thumbnailContainer.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnailContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.src = thumb.dataset.image;
            });
        });
    }
    
    // Product info
    const nameEl = document.querySelector('.product-detail-info h1');
    if (nameEl) nameEl.textContent = product.name;
    
    const priceEl = document.querySelector('.product-detail-price');
    if (priceEl) priceEl.textContent = formatPrice(product.price);
    
    const ratingEl = document.querySelector('.product-detail-rating .stars');
    if (ratingEl) ratingEl.textContent = generateStars(product.rating);
    
    const reviewsEl = document.querySelector('.product-detail-rating .rating-count');
    if (reviewsEl) reviewsEl.textContent = `(${product.reviews} reviews)`;
    
    const descEl = document.querySelector('.product-description');
    if (descEl) descEl.textContent = product.description;
    
    // Quantity selector
    const quantityInput = document.getElementById('quantity-input');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    
    if (quantityInput && decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value);
            if (current > 1) {
                quantityInput.value = current - 1;
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value);
            quantityInput.value = current + 1;
        });
    }
    
    // Add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-detail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput?.value || 1);
            addToCart(product.id, quantity);
        });
    }
}

function renderRelatedProducts(product) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    const related = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
    
    container.innerHTML = related.map(p => renderProductCard(p)).join('');
    observeElements();
}

// ============================================
// CART PAGE
// ============================================

function initCartPage() {
    loadCartPage();
}

function loadCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary-details');
    const emptyCartMessage = document.getElementById('empty-cart');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        cartItemsContainer.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    
    // Render cart items
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-controls">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-item-actions">
                <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    cartItemsContainer.innerHTML = cartItemsHTML;
    
    // Update summary
    const subtotal = getCartTotal();
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;
    
    if (cartSummary) {
        cartSummary.innerHTML = `
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
            </div>
            <div class="summary-total">
                <div class="summary-row">
                    <span>Total:</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </div>
        `;
    }
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

function initContactPage() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate each field
        const formGroups = contactForm.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            const errorEl = group.querySelector('.form-error');
            
            if (input.hasAttribute('required') && !input.value.trim()) {
                group.classList.add('error');
                if (errorEl) errorEl.textContent = 'This field is required';
                isValid = false;
            } else if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    group.classList.add('error');
                    if (errorEl) errorEl.textContent = 'Please enter a valid email';
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            } else {
                group.classList.remove('error');
            }
        });
        
        if (isValid) {
            showToast('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        }
    });
    
    // Remove error on input
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('error');
            }
        });
    });
}

// ============================================
// PAGE-SPECIFIC INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    
    if (path.includes('shop.html')) {
        initShopPage();
    } else if (path.includes('product.html')) {
        initProductPage();
    } else if (path.includes('cart.html')) {
        initCartPage();
    } else if (path.includes('contact.html')) {
        initContactPage();
    }
});
