import {createFilterHTML} from './filters.js';
import {filtersArray} from './data.js';

import {film} from './data.js';

import {Film} from './film.js';
import {FilmTopRated} from './film.js';
import {FilmMostCommented} from './film.js';

import {FilmPopup} from './film.js';

const filtersContainer = document.querySelector(`.main-navigation`);
filtersArray.forEach((filter) => {
  filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.href, filter.name, filter.isActive, filter.count));
});
filtersContainer.insertAdjacentHTML(`beforeEnd`, `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`);


const filmsContainer = document.querySelector(`.films`);
const filmPopupContainer = document.querySelector(`.main`);

const filmComponent = new Film(film);
const filmTopRatedComponent = new FilmTopRated(film);
const filmMostCommentedComponent = new FilmMostCommented(film);
const filmPopupComponent = new FilmPopup(film);

filmsContainer.appendChild(filmComponent.render());
filmsContainer.appendChild(filmTopRatedComponent.render());
filmsContainer.appendChild(filmMostCommentedComponent.render());

filmPopupContainer.appendChild(filmPopupComponent.render());
