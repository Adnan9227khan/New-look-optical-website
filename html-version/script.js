// New Look Opticals - JavaScript

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ Toggle function
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form Data:', data);
    
    // Show success message
    alert('Thank you for contacting us! We will get back to you shortly.');
    
    // Reset form
    e.target.reset();
    
    // Optional: Send to WhatsApp
    // const message = `Name: ${data.name}\nPhone: ${data.phone}\nRequirement: ${data.requirement}`;
    // window.open(`https://wa.me/919173355559?text=${encodeURIComponent(message)}`);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '100%';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.background = 'white';
        menu.style.padding = '1rem';
        menu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!nav.contains(e.target) && menu.style.display === 'flex') {
        menu.style.display = 'none';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('New Look Opticals website loaded successfully!');
});
