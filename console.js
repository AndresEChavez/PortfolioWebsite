const tiles = document.querySelectorAll('.console-tile');
const panels = document.querySelectorAll('.panel');
const progressDot = document.getElementById('progress-dot');

const positions = {
  about: '9%',
  projects: '36%',
  skills: '64%',
  contact: '92%'
};

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    const category = tile.dataset.category;

    tiles.forEach((t) => t.classList.remove('active'));
    tile.classList.add('active');

    panels.forEach((panel) => panel.classList.remove('active'));
    document.querySelector(`.panel[data-panel="${category}"]`).classList.add('active');

    progressDot.style.left = positions[category];
  });
});