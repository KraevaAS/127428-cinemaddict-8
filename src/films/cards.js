const getCardControlButtons = () => {
  return `
<form class="film-card__controls">
  <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
  <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
  <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
</form>
`;
};

export const createCardHTML = (item, isExtra = false) => {
  return `
<article class="film-card ${isExtra ? `film-card--no-controls` : ``}">
  <h3 class="film-card__title">${item.title}</h3>
  <p class="film-card__rating">${item.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${item.year}</span>
    <span class="film-card__duration">${item.duration}</span>
    <span class="film-card__genre">${item.genre}</span>
  </p>
  <img src="${item.imgURL}" alt="" class="film-card__poster">
  ${isExtra ? `` : `<p class="film-card__description">${item.description.join(` `)}</p>`}
  <button class="film-card__comments">${item.commentsNumber} comments</button>
   ${isExtra ? `` : getCardControlButtons()}
</article>
  `;
};
