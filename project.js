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

    mediaContainer.innerHTML = project.media.map((item, index) => {
        if (item.type === 'image') {
            return `<div class="media-thumb" data-index="${index}"><img src="${item.src}" alt="${project.title} media"></div>`;
        } else {
            const thumbUrl = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
            return `
      <div class="media-thumb" data-index="${index}">
        <img src="${thumbUrl}" alt="${project.title} video">
        <span class="play-icon">▶</span>
      </div>
    `;
        }
    }).join('');

    // Modal logic
    const modal = document.getElementById('media-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    document.querySelectorAll('.media-thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const item = project.media[thumb.dataset.index];

            if (item.type === 'image') {
                modalContent.innerHTML = `<img src="${item.src}" alt="${project.title}">`;
            } else {
                modalContent.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=1"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
            }

            modal.classList.add('open');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('open');
        modalContent.innerHTML = ''; // stops video playback when closed
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            modalContent.innerHTML = '';
        }
    });
}
else {
    document.getElementById('project-title').textContent = 'Project not found';
}