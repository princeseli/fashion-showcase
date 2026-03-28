// Welcome message
console.log("Welcome to the Fashion Showcase!");

// Smooth fade-in when cards load
document.querySelectorAll('.fashion-item').forEach(item => {
  item.style.opacity = 0;
  setTimeout(() => {
    item.style.transition = 'opacity 0.6s ease';
    item.style.opacity = 1;
  }, 100);
});

// Update footer year automatically
document.querySelector('footer p').innerHTML = 
  `© ${new Date().getFullYear()} Fashion Showcase. All rights reserved.`;