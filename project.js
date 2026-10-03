const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const project = projects.find((p) => p.id === id);

if (project) {
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-about-content').textContent = project.about;
    document.getElementById('project-tools-content').textContent = project.tools.join(', ');
    document.getElementById('project-resp-content').textContent = project.responsibilities.join(', ');
    document.getElementById('project-experience-content').textContent = project.experience;
    document.getElementById('project-tags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

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

    if (project.link && project.linkText) {
        const projectLinkContainer = document.getElementById('project-link');
        projectLinkContainer.innerHTML = `<a class="link-box" href="${project.link}" target="_blank" rel="noopener noreferrer">
            ${project.linkText}
            <span class="external-icon">↗</span>
        </a>`;
    }

    // Modal logic
    const modal = document.getElementById('media-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');

    let currentIndex = 0;

    function showMedia(index) {
        // wrap around: going before 0 jumps to the end, past the end jumps to 0
        currentIndex = (index + project.media.length) % project.media.length;
        const item = project.media[currentIndex];

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
    }

    document.querySelectorAll('.media-thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            showMedia(Number(thumb.dataset.index));
            modal.classList.add('open');
        });
    });

    modalPrev.addEventListener('click', () => showMedia(currentIndex - 1));
    modalNext.addEventListener('click', () => showMedia(currentIndex + 1));

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove('open');
        modalContent.innerHTML = '';
    }
}
else {
    document.getElementById('project-title').textContent = 'Project not found';
}