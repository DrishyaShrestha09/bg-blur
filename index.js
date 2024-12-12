const searchInput = document.getElementById('search-input');
const background = document.getElementById('background');

searchInput.addEventListener('focus', () => {
  background.style.filter = 'blur(5px)';
});

searchInput.addEventListener('blur', () => {
  background.style.filter = 'none';
});
