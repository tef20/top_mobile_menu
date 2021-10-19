import getHomepage from './homepage.js';
import getListPage from './list_page.js';
import getSearchPage from './search_page.js';
import getTilesPage from './tiles_page.js';
import { replaceWindowContent } from './tools.js';

export default function getNavBar() {
  const nav = document.createElement('nav');

  const mainMenu = document.createElement('ul');
  mainMenu.id = 'mainMenu';
  nav.appendChild(mainMenu);

  const menuIconsList = [
    ['home', getHomepage],
    ['search', getSearchPage],
    ['list', getListPage],
    ['favorite_border', getTilesPage],
    ['more_vert', getTilesPage],
  ];

  for (let i = 0; i < menuIconsList.length; i++) {
    const item = document.createElement('li');
    let getPageFunction;
    [item.textContent, getPageFunction] = menuIconsList[i];
    item.classList.add('menuItem', 'material-icons-outlined');
    mainMenu.appendChild(item);

    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      replaceWindowContent(getPageFunction());
      document.querySelectorAll('.menuItem').forEach((menuItem) => {
        menuItem.classList.remove('selected');
      });
      console.log(e.target.classList);
      e.target.classList.add('selected');
      console.log(e.target.classList);
    });
  }

  mainMenu.firstChild.classList.add('selected');

  return nav;
}
