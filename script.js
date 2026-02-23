// Initialize navbar entrance sequence post-DOM mount
window.onload = () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
};

// Flight Search MVP - Asynchronous API Simulation
const searchForm = document.getElementById("flight-search");
const loadingMsg = document.getElementById("loading-msg");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    // Extract and sanitize input payload
    const origin = document.getElementById("origin").value.toUpperCase();
    const destination = document.getElementById("destination").value.toUpperCase();

    // Mount UI loading state
    loadingMsg.style.display = "block";
    loadingMsg.style.color = "white";
    loadingMsg.innerText = `Querying Global Distribution System for ${origin} -> ${destination}...`;

    // Mock asynchronous GDS API response (2.5s network latency)
    setTimeout(() => {
        loadingMsg.style.color = "#4facfe"; 
        loadingMsg.innerText = `API Connection Established: 14 flights found for ${origin} -> ${destination}. (MVP Mode Active)`;
    }, 2500);
});

// --- Intersection Observer Configuration for Viewport Reveals ---
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Trigger state mutation upon viewport intersection
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); 
            observer.unobserve(entry.target); // Unmount observer for performance overhead
        }
    });
}, {
    root: null,
    threshold: 0.15, // Trigger at 15% visibility
    rootMargin: "0px 0px -50px 0px" // Offset triggering metric
});

// Attach observer to DOM nodes
revealElements.forEach(el => scrollObserver.observe(el));

// --- Mobile Hamburger Menu Architecture ---
const menuToggle = document.getElementById('mobile-menu');
const navUl = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-item a');

// Toggle Menu Overlay State
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navUl.classList.toggle('active');
});

// Auto-Close Overlay Post-Navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navUl.classList.remove('active');
    });
});