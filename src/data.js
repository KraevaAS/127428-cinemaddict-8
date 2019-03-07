export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
  title: `Incredibles 2`,
  titleOriginal: `Original: Невероятная семейка`,
  rating: 5.2,
  userRate: 8,
  age: 18,
  director: `Brad Bird`,
  writers: `Brad Bird`,
  actors: `Samuel L. Jackson, Catherine Keener, Sophia Bush`.trim().split(`,`),
  year: 2018,
  releaseDate: `15 June 2018`,
  runTime: 118,
  duration: `1h 58m`,
  country: `USA`,
  genres: [
    `Animation`,
    `Action`,
    `Adventure`
  ],
  imgURL: `images/posters/blackmail.jpg`,
  description: `
  The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.
  `.trim(),
  commentsNumber: 1
};
