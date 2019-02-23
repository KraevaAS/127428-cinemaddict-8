import {createFilterHTML} from './filters.js';

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

const filtersContainer = document.querySelector(`.main-navigation`);

filtersArray.forEach((filter) => {
  filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.href, filter.name, filter.isActive, filter.isAdditional, filter.count));
});
