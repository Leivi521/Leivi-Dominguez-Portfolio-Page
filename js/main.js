// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Project Management
    const projectForm = document.getElementById('addProjectForm');
    const projectsContainer = document.querySelector('#projects .row');

    function createProjectCard(data) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        const card = document.createElement('div');
        card.className = 'card project-card h-100 animate';
        
        const techBadges = data.technologies.split(',').map(tech => 
            `<span class="badge bg-primary">${tech.trim()}</span>`
        ).join('');

        card.innerHTML = `
            <img src="${data.image || 'https://via.placeholder.com/400x300'}" class="card-img-top" alt="${data.title}">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
                <div class="tech-stack mb-3">
                    ${techBadges}
                </div>
            </div>
            <div class="card-footer bg-transparent border-0">
                ${data.demoUrl ? `<a href="${data.demoUrl}" class="btn btn-primary me-2" target="_blank">Live Demo</a>` : ''}
                ${data.githubUrl ? `<a href="${data.githubUrl}" class="btn btn-outline-light" target="_blank">GitHub</a>` : ''}
            </div>
        `;
        
        col.appendChild(card);
        return col;
    }

    // Handle form submission
    document.querySelector('#addProjectModal .btn-primary').addEventListener('click', function() {
        const formData = new FormData(projectForm);
        const projectData = {
            title: formData.get('title'),
            description: formData.get('description'),
            technologies: formData.get('technologies'),
            demoUrl: formData.get('demoUrl'),
            githubUrl: formData.get('githubUrl')
        };

        // Handle image upload
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                projectData.image = e.target.result;
                const projectCard = createProjectCard(projectData);
                projectsContainer.appendChild(projectCard);
            };
            reader.readAsDataURL(imageFile);
        } else {
            const projectCard = createProjectCard(projectData);
            projectsContainer.appendChild(projectCard);
        }

        // Close modal and reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('addProjectModal'));
        modal.hide();
        projectForm.reset();
    });
});

// Mobile menu collapse on click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card, .text-wrapper');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements with opacity 0 and transform
document.querySelectorAll('.skill-card, .project-card, .text-wrapper').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
