// ...existing code...

// Replace this:
async function loadProjects() {
  try {
    const res = await fetch('projects.json');
    const projects = await res.json();
    // ...rest of code...
  } catch (err) {
    console.error('Failed to load projects:', err);
  }
}

// With this:
function loadProjects() {
  const projects = [
    {
      "img": 'nomi.',
      "tags": ["Python", "ML", "TensorFlow"],
      "title": "Intellilolllllllgent Course Recommender",
      "description": "ML system that recommends university courses based on student interests and academic history.",
      "url": "#"
    },
    {
      "icon": "fas fa-mobile-alt",
      "tags": ["React Native", "Firebase", "JavaScript"],
      "title": "Campus Connect Mobile App",
      "description": "Social platform for university students to connect, share resources, and join study groups.",
      "url": "#"
    },
    {
      "icon": "fas fa-lock",
      "tags": ["Java", "Encryption", "Security"],
      "title": "Secure File Transfer Protocol",
      "description": "Custom implementation of SFTP with enhanced security features for academic use.",
      "url": "#"
    }
  ];
  const grid = document.getElementById('projectsGrid');

  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'card project-card';

    card.innerHTML = `
      <div class="project-img">
          <img src="${proj.img}" alt="${proj.title}">
      </div>
      <div class="project-info">
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.url}" class="btn">View Details</a>
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      card.querySelector('.project-img').style.transform = "scale(1.1)";
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-img').style.transform = "scale(1)";
    });

    grid.appendChild(card);
  });
}


// Use DOMContentLoaded for all DOM manipulations
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });

  // Animate skill bars when in view
  const skillBars = document.querySelectorAll('.skill-progress-inner');

  const animateSkills = () => {
    skillBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (barPosition < screenPosition) {
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
      }
    });
  };

  window.addEventListener('load', animateSkills);
  window.addEventListener('scroll', animateSkills);

  // Randomize floating animation delay
  const floatingElements = document.querySelectorAll('.floating');
  floatingElements.forEach(el => {
    el.style.animationDelay = `${Math.random() * 2}s`;
  });
});