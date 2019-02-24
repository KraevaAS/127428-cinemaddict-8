import {createFilterHTML} from './filters.js';
import {createTaskHTML} from './films';

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
  },
  {
    name: `Stats`,
    href: `status`,
    count: ``,
    isActive: false,
    isAdditional: true
  }
];

const addTasks = (count) => {
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

const filtersContainer = document.querySelector(`.main-navigation`);
const filmsContainer = document.querySelector(`.films`);

filtersArray.forEach((filter) => {
  filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.href, filter.name, filter.isActive, filter.isAdditional, filter.count));
});

filmsContainer.insertAdjacentHTML(`beforeEnd`, createTaskHTML(addTasks(7), addTasks(2), addTasks(2)));
