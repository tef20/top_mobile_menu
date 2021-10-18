const contentContainer = document.getElementById('content');

const contentWindow = document.createElement('div');
contentWindow.className = 'contentWindow';

for (let i = 0; i < 20; i++) {
  const item = document.createElement('div');
  // item.textContent = 'hello';
  contentWindow.appendChild(item);
}

// load homepage by default

contentContainer.appendChild(contentWindow);

const nav = document.createElement('nav');
contentContainer.appendChild(nav);

const mainMenu = document.createElement('ul');
mainMenu.id = 'mainMenu';

const menuIconsList = ['home', 'search', 'list', 'favorite_border', 'more_vert'];

for (let i = 0; i < menuIconsList.length; i++) {
  const item = document.createElement('li');
  item.textContent = menuIconsList[i];
  item.classList.add('menuItem', 'material-icons-outlined')
  mainMenu.appendChild(item);
}

nav.appendChild(mainMenu);
