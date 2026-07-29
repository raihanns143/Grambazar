/* ===========================
   FEAST & CO. - MODERN INTERACTIONS
   Vanilla JavaScript - No Dependencies
   =========================== */

// ===========================
// 1. INITIALIZATION & DOM READY
// ===========================

document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Initialize all features
    setupNavbar();
    setupSmoothScrolling();
    setupButtonEffects();
    setupImageHoverAnimations();
    setupScrollRevealAnimations();
    setupFormValidation();
    setupActiveNavLinks();
    setupMobileMenu();
    setupPromoScroll();
    setupFloatingActions();
}

// ===========================
// 2. NAVBAR & MOBILE MENU
// ===========================

function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    let lastScrollTop = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', debounce(function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow on scroll
        if (scrollTop > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScrollTop = scrollTop;
    }, 10));
}

function setupMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    if (!navContainer || !navMenu) return;

    // Check if hamburger already exists
    if (document.querySelector('.hamburger')) return;

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;

    navContainer.appendChild(hamburger);

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        navMenu.classList.toggle('nav-menu-active');
        hamburger.classList.toggle('hamburger-active');
    });

    // Close menu when nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('nav-menu-active');
            hamburger.classList.remove('hamburger-active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navContainer.contains(e.target)) {
            navMenu.classList.remove('nav-menu-active');
            hamburger.classList.remove('hamburger-active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', debounce(function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('nav-menu-active');
            hamburger.classList.remove('hamburger-active');
        }
    }, 150));
}

// ===========================
// 3. SMOOTH SCROLLING
// ===========================

function setupSmoothScrolling() {
    // Handle all internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===========================
// 4. BUTTON EFFECTS & INTERACTIONS
// ===========================

function setupButtonEffects() {
    const buttons = document.querySelectorAll('button, .button');

    buttons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function (e) {
            const ripple = createRippleEffect(e);
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });

        // Add active class for visual feedback
        button.addEventListener('mousedown', function () {
            this.classList.add('button-active');
        });

        button.addEventListener('mouseup', function () {
            this.classList.remove('button-active');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('button-active');
        });
    });
}

function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    // Calculate ripple position and size
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    return ripple;
}

// ===========================
// 5. IMAGE HOVER ANIMATIONS
// ===========================

function setupImageHoverAnimations() {
    // Feature cards animation
    const cards = document.querySelectorAll('.card-feature-photo, .product-card, .why-choose-card, .team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('card-hovered');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('card-hovered');
        });
    });

    // Product image hover zoom
    const productImages = document.querySelectorAll('.product-image, .card-image-large, .main-image');
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.classList.add('image-zoomed');
        });

        img.addEventListener('mouseleave', function () {
            this.classList.remove('image-zoomed');
        });
    });
}

// ===========================
// 6. SCROLL REVEAL ANIMATIONS
// ===========================

function setupScrollRevealAnimations() {
    // Add data attributes for elements to reveal
    const revealElements = document.querySelectorAll('section, .card, .why-buy-tile, .product-card');
    
    revealElements.forEach((el, index) => {
        el.setAttribute('data-reveal', 'true');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger effect for child elements
                const children = entry.target.querySelectorAll('.card, .why-buy-tile, .product-card');
                children.forEach((child, index) => {
                    child.style.transitionDelay = (index * 0.1) + 's';
                    child.classList.add('revealed');
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ===========================
// 7. ACTIVE NAVIGATION LINK
// ===========================

function setupActiveNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove active class from all
        link.classList.remove('active');
        
        // Add active class to current page
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Also handle scroll-based active link (for single page)
    window.addEventListener('scroll', debounce(function () {
        updateActiveSectionLinks();
    }, 100));
}

function updateActiveSectionLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// 8. FORM VALIDATION
// ===========================

function setupFormValidation() {
    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('.text-input');
        const submitBtn = newsletterForm.querySelector('.button');

        if (emailInput && submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                validateNewsletterEmail(emailInput, submitBtn);
            });

            emailInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    validateNewsletterEmail(emailInput, submitBtn);
                }
            });

            // Real-time validation
            emailInput.addEventListener('blur', function () {
                validateNewsletterEmail(emailInput, submitBtn);
            });
        }
    }

    // Contact form validation (if exists)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                validateContactForm(contactForm, inputs);
            });
        }

        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });
        });
    }
}

function validateNewsletterEmail(emailInput, submitBtn) {
    const email = emailInput.value.trim();
    const isValid = isValidEmail(email);

    // Remove previous error message
    const existingError = emailInput.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    if (!isValid) {
        emailInput.classList.add('text-input-error');
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'Please enter a valid email address';
        emailInput.parentElement.appendChild(errorMsg);
        return false;
    } else {
        emailInput.classList.remove('text-input-error');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribed!';
        submitBtn.style.opacity = '0.6';
        
        // Simulate submission
        setTimeout(() => {
            emailInput.value = '';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Subscribe';
            submitBtn.style.opacity = '1';
            showSuccessMessage(emailInput.parentElement, 'Successfully subscribed!');
        }, 1500);
        
        return true;
    }
}

function validateContactForm(form, inputs) {
    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            form.reset();
            showSuccessMessage(form, 'Message sent successfully! We\'ll be in touch soon.');
            
            // Clear validation states
            inputs.forEach(input => {
                input.classList.remove('text-input-error');
            });
        }, 2000);
    }
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = false;

    // Remove previous error
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Validate based on field type
    if (field.type === 'email') {
        isValid = isValidEmail(value);
    } else if (field.name === 'phone') {
        isValid = isValidPhone(value);
    } else if (field.type === 'textarea' || field.tagName === 'TEXTAREA') {
        isValid = value.length >= 10;
    } else {
        isValid = value.length >= 2;
    }

    if (!isValid && value !== '') {
        field.classList.add('text-input-error');
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        
        if (field.type === 'email') {
            errorMsg.textContent = 'Please enter a valid email address';
        } else if (field.name === 'phone') {
            errorMsg.textContent = 'Please enter a valid phone number';
        } else if (field.type === 'textarea' || field.tagName === 'TEXTAREA') {
            errorMsg.textContent = 'Message must be at least 10 characters';
        } else {
            errorMsg.textContent = 'This field is required';
        }
        
        field.parentElement.appendChild(errorMsg);
        return false;
    } else {
        field.classList.remove('text-input-error');
        return true;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function showSuccessMessage(container, message) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = message;
    container.appendChild(successMsg);

    setTimeout(() => {
        successMsg.classList.add('fade-out');
        setTimeout(() => successMsg.remove(), 300);
    }, 3000);
}

// ===========================
// 9. PROMO BANNER SCROLL
// ===========================

function setupPromoScroll() {
    const promoBanner = document.querySelector('.promo-banner');
    if (!promoBanner) return;

    // Hide/show promo banner on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', debounce(function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            promoBanner.style.opacity = '0';
            promoBanner.style.visibility = 'hidden';
            promoBanner.style.transition = 'opacity 0.3s ease';
        } else {
            promoBanner.style.opacity = '1';
            promoBanner.style.visibility = 'visible';
        }

        lastScrollTop = scrollTop;
    }, 10));
}

// ===========================
// 9.5 FLOATING ACTIONS
// ===========================

function setupFloatingActions() {
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'floating-btn back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = 'Back to top';
    
    // Floating wishlist button
    const floatWishlistBtn = document.createElement('button');
    floatWishlistBtn.className = 'floating-btn floating-wishlist';
    floatWishlistBtn.innerHTML = '♥<span class="wishlist-count">0</span>';
    floatWishlistBtn.title = 'View Wishlist';
    
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-actions-container';
    floatingContainer.appendChild(floatWishlistBtn);
    floatingContainer.appendChild(backToTopBtn);
    
    document.body.appendChild(floatingContainer);
    
    // Scroll logic for back to top
    window.addEventListener('scroll', debounce(() => {
        if(window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, 50));
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Wishlist click
    floatWishlistBtn.addEventListener('click', () => {
        // Implement wishlist drawer or redirect
        window.location.href = 'dashboard.html';
    });
    
    // Initial update
    updateFloatingWishlistCount();
}

window.updateFloatingWishlistCount = function() {
    const btn = document.querySelector('.floating-wishlist .wishlist-count');
    if(btn && window.wishlistManager) {
        btn.textContent = window.wishlistManager.getItems().length;
    }
}

// ===========================
// 10. UTILITY FUNCTIONS
// ===========================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// 11. ENHANCED ANIMATIONS
// ===========================

// Add animation classes for smooth transitions
function addAnimationClasses() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes scaleUp {
            from {
                transform: scale(0.95);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        .revealed {
            animation: slideInUp 0.6s ease forwards;
        }

        .navbar-scrolled {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .card-hovered {
            transform: translateY(-4px);
        }

        .image-zoomed {
            transform: scale(1.05);
        }

        .button-active {
            transform: scale(0.98);
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .error-message {
            display: block;
            color: #f44236;
            font-size: 12px;
            margin-top: 4px;
            animation: slideInUp 0.3s ease;
        }

        .success-message {
            background-color: #31a24c;
            color: white;
            padding: 12px 16px;
            border-radius: 6px;
            margin-top: 12px;
            animation: slideInUp 0.3s ease;
            font-size: 14px;
            font-weight: 500;
        }

        .success-message.fade-out {
            animation: fadeOut 0.3s ease forwards;
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize animation styles
addAnimationClasses();

// ===========================
// 12. SMOOTH SCROLL TO TOP
// ===========================

function setupScrollToTop() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', debounce(function () {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, 100));

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: var(--color-primary);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(10, 126, 224, 0.3);
        }

        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            background-color: var(--color-primary-deep);
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(10, 126, 224, 0.4);
        }

        .scroll-to-top:active {
            transform: translateY(-1px);
        }

        @media (max-width: 768px) {
            .scroll-to-top {
                width: 45px;
                height: 45px;
                bottom: 15px;
                right: 15px;
                font-size: 20px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize scroll to top
setupScrollToTop();

// ===========================
// 13. KEYBOARD NAVIGATION
// ===========================

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function (e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu && hamburger) {
                navMenu.classList.remove('nav-menu-active');
                hamburger.classList.remove('hamburger-active');
            }
        }
    });
}

setupKeyboardNavigation();

// ===========================
// 14. PERFORMANCE: LAZY LOADING
// ===========================

function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyLoading);
} else {
    setupLazyLoading();
}

// ===========================
// 15. ACCESSIBILITY ENHANCEMENTS
// ===========================

function setupAccessibility() {
    // Focus visible style
    const style = document.createElement('style');
    style.textContent = `
        *:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-primary);
        color: white;
        padding: 8px 16px;
        border-radius: 0 0 4px 0;
        text-decoration: none;
        z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', function () {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function () {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

setupAccessibility();

console.log('✨ Feast & Co. - Interactive features loaded successfully!');

// ===========================
// FEAST & CO. - STATE MANAGERS
// ===========================

window.showToast = function(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast-visible');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('feast_cart')) || [];
        this.initDOM();
        this.updateCartCount();
    }

    initDOM() {
        if (!document.getElementById('cart-drawer')) {
            const drawerHTML = `
            <div id="cart-overlay" class="modal-overlay hidden"></div>
            <div id="cart-drawer" class="cart-drawer hidden">
                <div class="cart-drawer-header">
                    <h2 class="display-sm">Your Cart</h2>
                    <button onclick="window.cartManager.closeDrawer()" class="button-icon">
                        <svg class="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div id="mini-cart-items" class="cart-drawer-items"></div>
                <div class="cart-drawer-footer">
                    <div class="cart-subtotal">
                        <span>Subtotal</span>
                        <span id="mini-cart-subtotal">$0.00</span>
                    </div>
                    <button onclick="window.location.href='cart.html'" class="button button-primary w-full" style="margin-bottom: 12px;">View Cart</button>
                    <button onclick="window.location.href='checkout.html'" class="button button-secondary w-full">Checkout</button>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', drawerHTML);
        }

        document.querySelectorAll('a[href="cart.html"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openDrawer();
            });
        });
        
        document.getElementById('cart-overlay').addEventListener('click', () => this.closeDrawer());
    }

    save() {
        localStorage.setItem('feast_cart', JSON.stringify(this.items));
        this.updateCartCount();
        this.renderMiniCart();
    }

    addItem(product, qty = 1) {
        if (!product) return;
        const existing = this.items.find(i => i.id === product.id);
        if (existing) {
            existing.quantity += qty;
        } else {
            this.items.push({ ...product, quantity: qty });
        }
        this.save();
        window.showToast('Added to Cart!');
        this.openDrawer();
    }

    removeItem(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.save();
        if(window.location.pathname.includes('cart.html')) {
            window.location.reload();
        }
    }

    updateQuantity(id, qty) {
        if (qty < 1) return;
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.quantity = qty;
            this.save();
            if(window.location.pathname.includes('cart.html')) {
                window.location.reload();
            }
        }
    }

    clear() {
        this.items = [];
        this.save();
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    updateCartCount() {
        const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count-badge, .cart-count').forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    openDrawer() {
        this.renderMiniCart();
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer && overlay) {
            drawer.classList.remove('hidden');
            overlay.classList.remove('hidden');
            setTimeout(() => {
                drawer.classList.add('visible');
                overlay.classList.add('visible');
            }, 10);
        }
    }

    closeDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer && overlay) {
            drawer.classList.remove('visible');
            overlay.classList.remove('visible');
            setTimeout(() => {
                drawer.classList.add('hidden');
                overlay.classList.add('hidden');
            }, 300);
        }
    }

    renderMiniCart() {
        const container = document.getElementById('mini-cart-items');
        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
            document.getElementById('mini-cart-subtotal').textContent = '$0.00';
            return;
        }

        container.innerHTML = this.items.map(item => `
            <div class="mini-cart-item">
                <img src="${item.image}" class="mini-cart-img">
                <div class="mini-cart-info">
                    <h4 class="body-sm-bold">${item.name}</h4>
                    <span class="product-price">$${item.price.toFixed(2)}</span>
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="window.cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="window.cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button onclick="window.cartManager.removeItem('${item.id}')" class="button-icon text-danger">
                    <svg class="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        `).join('');

        document.getElementById('mini-cart-subtotal').textContent = `$${this.getTotal().toFixed(2)}`;
    }
}

class WishlistManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('feast_wishlist')) || [];
    }
    save() {
        localStorage.setItem('feast_wishlist', JSON.stringify(this.items));
        this.updateUI();
    }
    toggleWishlist(id) {
        if (this.items.includes(id)) {
            this.items = this.items.filter(i => i !== id);
            window.showToast('Removed from Wishlist', 'error');
        } else {
            this.items.push(id);
            window.showToast('Added to Wishlist!');
        }
        this.save();
    }
    has(id) { return this.items.includes(id); }
    updateUI() {
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const id = btn.getAttribute('data-wishlist-id');
            const svg = btn.querySelector('svg');
            if (this.has(id)) {
                svg.setAttribute('fill', 'currentColor');
                btn.classList.add('wishlist-active');
            } else {
                svg.setAttribute('fill', 'none');
                btn.classList.remove('wishlist-active');
            }
        });
    }
}

class OrderManagerClass {
    constructor() {
        this.orders = JSON.parse(localStorage.getItem('feast_orders')) || [];
    }
    createOrder(cartItems, total, address) {
        const order = {
            id: Math.floor(1000 + Math.random() * 9000),
            date: new Date().toISOString(),
            status: 'Processing',
            items: [...cartItems],
            total: total,
            address: address
        };
        this.orders.unshift(order);
        localStorage.setItem('feast_orders', JSON.stringify(this.orders));
        return order;
    }
    getOrders() { return this.orders; }
}

class QuickViewManager {
    openQuickView(id) {
        const product = window.appProducts.find(p => p.id === id);
        if(!product) return;
        
        let modal = document.getElementById('quickview-modal');
        if(!modal) {
            document.body.insertAdjacentHTML('beforeend', \`
            <div id="quickview-modal" class="modal-overlay hidden">
                <div class="quickview-container">
                    <button onclick="window.quickViewManager.close()" class="button-icon modal-close">
                        <svg class="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <div id="quickview-content" class="quickview-grid"></div>
                </div>
            </div>\`);
            modal = document.getElementById('quickview-modal');
            modal.addEventListener('click', (e) => {
                if(e.target === modal) this.close();
            });
        }
        
        document.getElementById('quickview-content').innerHTML = \`
            <div class="quickview-image-wrapper">
                <img src="\${product.image}" class="quickview-image">
            </div>
            <div class="quickview-details">
                \${product.badge ? \\\`<div class="product-badge">\\\${product.badge}</div>\\\` : ''}
                <h2 class="display-sm">\${product.name}</h2>
                <div class="quickview-meta">
                    <span class="product-price">$\${product.price}</span>
                    <div class="product-rating">
                        <span class="star-icon">★</span>
                        \${product.rating} (\${product.reviews})
                    </div>
                </div>
                <p class="body-md" style="margin-bottom: 24px; color: var(--color-text-light);">\${product.description}</p>
                <button class="button button-primary w-full" onclick="window.cartManager.addItem(window.appProducts.find(p => p.id === '\${product.id}')); window.quickViewManager.close();">Add to Cart</button>
                <a href="product.html?id=\${product.id}" class="quickview-link">View Full Details</a>
            </div>
        \`;
        
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
    }
    
    close() {
        const modal = document.getElementById('quickview-modal');
        if(modal) {
            modal.classList.remove('visible');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    }
}

class RecentlyViewedManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('feast_recent')) || [];
    }
    add(id) {
        this.items = this.items.filter(i => i !== id);
        this.items.unshift(id);
        if(this.items.length > 5) this.items.pop();
        localStorage.setItem('feast_recent', JSON.stringify(this.items));
    }
}

// Ensure theme persistence script inside the global managers
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('feast_theme', isDark ? 'dark' : 'light');
});

// Initialize Global Managers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
    window.wishlistManager = new WishlistManager();
    window.OrderManager = new OrderManagerClass();
    window.quickViewManager = new QuickViewManager();
    window.recentlyViewedManager = new RecentlyViewedManager();
});
