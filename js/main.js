const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function updateThemeIcon() {
  if (!themeToggle) return;
  const theme = document.documentElement.getAttribute('data-theme');
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Initial theme setup
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Typewriter subtitle
const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'JSP Specialist',
  'Apache Tomcat Expert',
  'Java Backend Developer',
  'Frontend Engineer (JavaScript)',
  'Linux Systems Developer',
  'Git Power User',
  'Apache HTTP Server Admin',
  'SQL & Data Modeling',
  'TypeScript Practitioner',
  'Rust Explorer',
  'Cross-Platform App Builder',
  'Web Performance Tuner',
  'Systems-Level Debugger',
  'DevOps Curious'
];

const subtitle = document.querySelector('.subtitle');
let roleIndex = 0, charIndex = 0, typing = true;

function typeWriter() {
  if (!subtitle) return;

  const currentRole = roles[roleIndex];
  subtitle.textContent = typing
    ? currentRole.slice(0, charIndex++)
    : currentRole.slice(0, charIndex--);

  if (typing && charIndex > currentRole.length) {
    typing = false;
    setTimeout(typeWriter, 1000);
  } else if (!typing && charIndex === 0) {
    typing = true;

    if (roleIndex === 0) {
      // After "Software Engineer", pick random non-zero index
      const nextIndices = roles.slice(1);
      const randomIndex = Math.floor(Math.random() * nextIndices.length) + 1;
      roleIndex = randomIndex;
    } else {
      // After that, continue picking random excluding current
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * roles.length);
      } while (nextIndex === roleIndex);
      roleIndex = nextIndex;
    }

    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// Last updated badge
const lastUpdated = document.getElementById('last-updated');
const lastUpdateDate = new Date('2025-05-11T00:00:00Z');

function timeSince(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const days = Math.floor(seconds / 86400);
  const months = Math.floor(days / 30);
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  return 'today';
}

if (lastUpdated) {
  lastUpdated.textContent = `Last updated: ${timeSince(lastUpdateDate)}`;
}


//TO DO: Remove Dummy Last Updated Counter with some real JavaScript function that like checks when the source 
//was last modified or something of that nature 