import {createFilterHTML} from './filters.js';
import {createFilmsHTML} from './films';
import {filtersArray} from './data.js';
import {film} from './data.js';

const filmsContainer = document.querySelector(`.films`);

const removeExistingFilmsFromHTML = () => {
  let child = filmsContainer.firstChild;

  if (!filmsContainer) {
    return;
  }

  while (child) {
    filmsContainer.removeChild(child);
    child = filmsContainer.firstChild;
  }
};

const initFilterButtons = (filters) => {
  const filtersContainer = document.querySelector(`.main-navigation`);

  filters.forEach((filter) => {
    filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.href, filter.name, filter.isActive, filter.count));
  });
  filtersContainer.insertAdjacentHTML(`beforeEnd`, `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`);

  const filterButtons = document.querySelectorAll(`.main-navigation__item`);

  filterButtons.forEach((button) => {

    button.addEventListener(`click`, (event) => {
      removeExistingFilmsFromHTML();
      filmsContainer.insertAdjacentHTML(`beforeEnd`, createFilmsHTML(film, film, film));
      event.preventDefault();
    });
  });
};

initFilterButtons(filtersArray);

filmsContainer.insertAdjacentHTML(`beforeEnd`, createFilmsHTML(film, film, film));
