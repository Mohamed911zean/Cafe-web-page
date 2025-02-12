document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.linkes').classList.toggle('active');
});

// Create mobile-nav.js
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuBtn.style.display = 'none';

const navbar = document.querySelector('.navbar');
const links = document.querySelector('.linkes');

// Add mobile menu button to navbar
navbar.appendChild(mobileMenuBtn);

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    links.classList.toggle('active');
    // Change icon based on menu state
    mobileMenuBtn.innerHTML = links.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        links.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Show/hide mobile menu button based on screen size
function updateMobileMenuVisibility() {
    if (window.innerWidth <= 992) {
        mobileMenuBtn.style.display = 'block';
    } else {
        mobileMenuBtn.style.display = 'none';
        links.classList.remove('active');
    }
}

// Initial check and listen for window resize
updateMobileMenuVisibility();
window.addEventListener('resize', updateMobileMenuVisibility);
