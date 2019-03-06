import {createFilterHTML} from './filters.js';
import {createFilmsHTML} from './films';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateSentences = (sentences, min, max) => {
  const count = getRandomInt(min, max);
  const newSentencesArray = [];
  const copySentencesArray = sentences.slice();
  for (let i = 0; i < count; i++) {
    const startIndex = getRandomInt(1, copySentencesArray.length - 1);
    const newTag = copySentencesArray.splice(startIndex, 1);
    newSentencesArray.push(newTag[0]);
  }
  return newSentencesArray;
};

const getAuxiliaryArray = (count) => {
  return [...Array(count)].map((x, i) => i + 1);
};

const getPictures = () => [
  `accused`,
  `blackmail`,
  `blue-blazes`,
  `fuga-da-new-york`,
  `moonrise`,
  `three-friends`][Math.floor(Math.random() * 6)];

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
  return getAuxiliaryArray(count).map(() => {
    return {
      title: [
        `Incredibles 2`,
        `The Shawshank Redemption`,
        `The Green Mile`,
        `Forrest Gump `,
        `Schindler's List`,
        `The Matrix`,
        `Inception`,
        `The Lion King `,
        `Fight Club`,
        `Lock, Stock and Two Smoking Barrels`,
        `Pulp Fiction`,
        `The Prestige`,
        `A Beautiful Mind`,
        `Gladiator`,
        `Interstellar`][Math.floor(Math.random() * 15)],
      rating: getRandomInt(3, 9) * 0.9,
      year: getRandomInt(1990, 2019),
      duration: `1h 3m`,
      genre: [
        `Comedy`,
        `Horror`,
        `Documentary`,
        `Action`,
        `Animated film`,
        `Science fiction`][Math.floor(Math.random() * 6)],
      imgURL: `images/posters/${getPictures()}.jpg`,
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras aliquet varius magna, non porta ligula feugiat eget.
        Fusce tristique felis at fermentum pharetra.
        Aliquam id orci ut lectus varius viverra.
        Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
        Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
        Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
        Sed sed nisi sed augue convallis suscipit in sed felis.
        Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.
        `.trim().split(`.`).sort(function compareRandom() {
        return Math.random() - 0.5;
      }).slice(0, getRandomInt(1, 3)),
      commentsNumber: getRandomInt(2, 100)
    };
  });
};

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
