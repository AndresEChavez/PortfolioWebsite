const gallery = document.getElementById('project-gallery');

function renderProjects(list) {
  gallery.innerHTML = list.map((project) => `
    <a class="project-card" href="project.html?id=${project.id}" style="background-image: url('${project.image}');">
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
    </a>
  `).join('');
}

renderProjects(projects);

const toggleButton = document.getElementById('theme-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        const filter = button.dataset.filter;
        
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const filtered = filter === 'all'
            ? projects
            : projects.filter((project) => project.category === filter);

        renderProjects(filtered);
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