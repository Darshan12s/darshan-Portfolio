// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
        
        // Add a subtle animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        }
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Scroll Animations
function checkVisibility() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    timelineItems.forEach(item => {
        const position = item.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
    
    projectCards.forEach(card => {
        const position = card.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Resume Upload Functionality
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileStatus = document.getElementById('fileStatus');

uploadArea.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#6366f1';
    uploadArea.style.backgroundColor = '#f8fafc';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#cbd5e1';
    uploadArea.style.backgroundColor = 'transparent';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#cbd5e1';
    uploadArea.style.backgroundColor = 'transparent';
    
    if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        updateFileStatus();
    }
});

fileInput.addEventListener('change', updateFileStatus);

function updateFileStatus() {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileStatus.textContent = `Selected: ${file.name}`;
        fileStatus.style.color = '#10b981';
        
        // In a real application, you would upload the file to a server here
        setTimeout(() => {
            alert('Resume uploaded successfully! Thank you for sharing.');
        }, 500);
    } else {
        fileStatus.textContent = 'No file selected';
        fileStatus.style.color = '#64748b';
    }
}

// Download Resume Button
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('In a real implementation, this would download the resume PDF.');
    // In a real implementation, you would link to the actual resume file
    // window.location.href = 'path/to/resume.pdf';
});

// Add pulse animation to CTA buttons
const ctaButtons = document.querySelectorAll('.btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    
    btn.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});