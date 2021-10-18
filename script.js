import getNavBar from './menuBar.js';
import getTilesPage from './tiles_page.js';
import getHomepage from './homepage.js';
import { removeAllChildNodes, replaceWindowContent } from './tools.js';

function loadInitial() {
  const { body } = document;

  removeAllChildNodes(body);

  // content 
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content';
  body.appendChild(contentContainer);

  // content window
  const contentWindow = document.createElement('div');
  contentWindow.className = 'contentWindow';
  contentContainer.appendChild(contentWindow);

  // nav window
  contentContainer.appendChild(getNavBar());
}

loadInitial()

replaceWindowContent(getHomepage());

