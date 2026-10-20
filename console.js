const tiles = document.querySelectorAll('.console-tile');
const panels = document.querySelectorAll('.panel');

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    const category = tile.dataset.category;

    tiles.forEach((t) => t.classList.remove('active'));
    tile.classList.add('active');

    panels.forEach((panel) => panel.classList.remove('active'));
    document.querySelector(`.panel[data-panel="${category}"]`).classList.add('active');
  });
});