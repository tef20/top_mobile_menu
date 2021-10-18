export default function getNavBar() {
  const nav = document.createElement('nav');

  const mainMenu = document.createElement('ul');
  mainMenu.id = 'mainMenu';
  nav.appendChild(mainMenu);

  const menuIconsList = [
    'home',
    'search',
    'list',
    'favorite_border',
    'more_vert',
  ];

  for (let i = 0; i < menuIconsList.length; i++) {
    const item = document.createElement('li');
    item.textContent = menuIconsList[i];
    item.classList.add('menuItem', 'material-icons-outlined');
    mainMenu.appendChild(item);
  }

  return nav;
}
