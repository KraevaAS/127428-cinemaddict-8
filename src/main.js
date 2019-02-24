import {createFilterHTML} from './filters.js';
import {createFilmsHTML} from './films';

const filtersArray = [
  {
    name: `All movies`,
    href: `all`,
    count: ``,
    isActive: true,
    isAdditional: false
  },
  {
    name: `Watchlist`,
    href: `watchlist`,
    count: 13,
    isActive: false,
    isAdditional: false
  },
  {
    name: `History`,
    href: `history`,
    count: 4,
    isActive: false,
    isAdditional: false
  },
  {
    name: `Favorites`,
    href: `favorites`,
    count: 8,
    isActive: false,
    isAdditional: false
  }
];

const addFilms = (count) => {
  const cardArray = [];
  for (let i = 0; i < count; i++) {
    cardArray.push({
      title: `Incredibles 2`,
      rating: 9.8,
      year: 2018,
      duration: `1h 3m`,
      genre: `Comedy`,
      imgURL: `./images/posters/fuga-da-new-york.jpg`,
      description: `A priests Romania and confront a malevolent force in the form of a demonic nun.`,
      commentsNumber: 13
    });
  }
  return cardArray;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
      filmsContainer.insertAdjacentHTML(`beforeEnd`, createFilmsHTML(addFilms(getRandomInt(1, 20)), addFilms(getRandomInt(1, 20)), addFilms(getRandomInt(1, 20))));
      event.preventDefault();
    });
  });
};

initFilterButtons(filtersArray);

filmsContainer.insertAdjacentHTML(`beforeEnd`, createFilmsHTML(addFilms(7), addFilms(2), addFilms(2)));
