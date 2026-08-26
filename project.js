const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const project = projects.find((p) => p.id === id);

if (project) {
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.fullDescription;

    const hero = document.getElementById('project-hero');
    hero.src = project.image;
    hero.alt = project.title;

    const mediaContainer = document.getElementById('project-media');
    mediaContainer.innerHTML = project.media.map((src) => `
      <img src="${src}" alt="${project.title} media">
    `).join('');
}
else {
    document.getElementById('project-title').textContent = 'Project not found';
}