export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getPictures = () => [
  `accused`,
  `blackmail`,
  `blue-blazes`,
  `fuga-da-new-york`,
  `moonrise`,
  `three-friends`][Math.floor(Math.random() * 6)];

export const filtersArray = [
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

export const film = {
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
