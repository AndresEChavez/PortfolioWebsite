const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const project = projects.find((p) => p.id === id);

// Safe helpers: if an element or a data field is missing, skip it
// instead of throwing an error that stops the whole script.
function setText(elementId, value) {
    const el = document.getElementById(elementId);
    if (el && value !== undefined) el.textContent = value;
}

function setHTML(elementId, html) {
    const el = document.getElementById(elementId);
    if (el) el.innerHTML = html;
}

// Accepts either a single string or an array of strings
function paragraphs(content) {
    if (!content) return '';
    const list = Array.isArray(content) ? content : [content];
    return list.map((para) => `<p>${para}</p>`).join('');
}

if (project) {
    setText('project-title', project.title);
    setHTML('project-about', paragraphs(project.about));
    setHTML('project-experience', paragraphs(project.experience));
    setHTML('project-tags', (project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join(''));
    setText('project-tools-content', (project.tools || []).join(', '));

    setText('info-dates', project.dates);
    setText('info-role', project.role);
    setHTML('info-tools', (project.tools || []).map((tool) => `<span class="tool-tag">${tool}</span>`).join(''));


    const mediaContainer = document.getElementById('project-media');
    const mediaItems = project.media || [];

    mediaContainer.innerHTML = mediaItems.map((item, index) => {
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

    setHTML('project-link', (project.links || []).map((link) => `
    <a class="link-box" href="${link.url}" target="_blank" rel="noopener noreferrer">
        ${link.text}
        <span class="external-icon">↗</span>
    </a>`).join(''));

    // Modal logic
    const modal = document.getElementById('media-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');

    let currentIndex = 0;

    function showMedia(index) {
        // wrap around: going before 0 jumps to the end, past the end jumps to 0
        currentIndex = (index + mediaItems.length) % mediaItems.length;
        const item = mediaItems[currentIndex];

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
    setText('project-title', 'Project not found');
}