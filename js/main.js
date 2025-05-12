// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

// Typewriter subtitle
const roles = ['Software Engineer', 'Full-Stack Developer', 'Systems Programmer', 'Rust Explorer'];
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
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// Last updated badge
const lastUpdated = document.getElementById('last-updated');
const lastUpdateDate = new Date('2025-04-28T00:00:00Z');

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