function replaceWindowContent(newContent) {
  const contentWindow = document.querySelector('.contentWindow')
  removeAllChildNodes(contentWindow);
  contentWindow.appendChild(newContent);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export {
  replaceWindowContent,
  removeAllChildNodes,
}