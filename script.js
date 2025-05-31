// Task 1: Dynamic Year
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// Task 2: Skill Description
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
    "HTML": "HTML (HyperText Markup Language) is the backbone of all web pages, defining their structure.",
    "CSS": "CSS (Cascading Style Sheet) is used to style the visual presentation of web pages, making them look great!",
    "JavaScript": "JavaScript is a programming langauage that enables interactive web pages, allowing complex features and dynamic content."
};

skillButtons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.dataset.skill;
        skillDescription.textContent = skillInfo[skill];
        skillDescription.style.color = '#0056b3';
    });
});

// Task 3: Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load theme preference on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Task 4: Load Portfolio Items from JSON
const projectsContainer = document.getElementById('projects-container');

async function loadProjects() {
    try {
        const response = await fetch('data/portfolio_items.json')
        if (!response.ok) {
            throw new Error({responsestatus});
        }
        const projects = await response.json();

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
    }
}

loadProjects();