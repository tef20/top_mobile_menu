export default function getTilesPage() {
  const wrapper = document.createElement('div');
  wrapper.className = 'tilesWrapper';

  const tilesGrid = document.createElement('div');
  tilesGrid.className = 'tilesGrid';

  wrapper.appendChild(tilesGrid);

  for (let i = 0; i < 30; i++) {
    const tile = document.createElement('div');
    tile.className = 'gridTile';

    tilesGrid.appendChild(tile);
  }

  return wrapper;
}
