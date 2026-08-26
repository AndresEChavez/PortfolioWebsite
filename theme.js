const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) 
    {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } 
    else 
    {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Check saved preference on page load
if (localStorage.getItem('theme') === 'dark') 
{
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}