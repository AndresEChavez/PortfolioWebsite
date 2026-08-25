const toggleButton = document.getElementById('theme-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        const filter = button.dataset.filter;
        
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach((card) => {
            if (filter === 'all' || card.dataset.category === filter)
            {
                card.style.display = 'block';
            }
            else
            {
                card.style.display = 'none';
            }
        });
    });
});

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