export default function getSearchPage() {
  const searchPageWrapper = document.createElement('div');
  searchPageWrapper.className = 'wrapper searchPage';

  const search = document.createElement('input');
  search.type = 'text';

  searchPageWrapper.appendChild(search);

  return searchPageWrapper;
}
