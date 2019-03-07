import {film} from './data.js';

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export class Film {
  constructor() {
    this._title = film.title;
    this._rating = film.rating;
    this._year = film.year;
    this._duration = film.duration;
    this._genre = film.genre;
    this._imgURL = film.imgURL;
    this._description = film.description;
    this._commentsNumber = film.commentsNumber;
    this._element = null;
  }

  get template() {
    return `
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  <div class="films-list__container">
    <article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._description.join(`. `)}</p>
      <button class="film-card__comments">${this._commentsNumber} comments</button>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist
        </button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched
        </button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  </div>
  <button class="films-list__show-more">Show more</button>
</section>
`.trim();
  }

  get element() {
    return this._element;
  }

  render() {
    this._element = createElement(this.template);
    return this._element;
  }
}


export class FilmTopRated {
  constructor() {
    this._title = film.title;
    this._rating = film.rating;
    this._year = film.year;
    this._duration = film.duration;
    this._genre = film.genre;
    this._imgURL = film.imgURL;
    this._commentsNumber = film.commentsNumber;
    this._element = null;
  }

  get template() {
    return `
<section class="films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
    <article class="film-card film-card--no-controls">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <button class="film-card__comments">${this._commentsNumber} comments</button>
    </article>
  </div>
  <button class="films-list__show-more">Show more</button>
</section>
`.trim();
  }

  get element() {
    return this._element;
  }

  render() {
    this._element = createElement(this.template);
    return this._element;
  }
}

export class FilmMostCommented {
  constructor() {
    this._title = film.title;
    this._rating = film.rating;
    this._year = film.year;
    this._duration = film.duration;
    this._genre = film.genre;
    this._imgURL = film.imgURL;
    this._commentsNumber = film.commentsNumber;
    this._element = null;
  }

  get template() {
    return `
<section class="films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
    <article class="film-card film-card--no-controls">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <button class="film-card__comments">${this._commentsNumber} comments</button>
    </article>
  </div>
  <button class="films-list__show-more">Show more</button>
</section>
`.trim();
  }

  get element() {
    return this._element;
  }

  render() {
    this._element = createElement(this.template);
    return this._element;
  }
}
