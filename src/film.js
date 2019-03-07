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
    this._genres = film.genres;
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
        <span class="film-card__genre">${this._genres.join(` `)}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
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

  unrender() {
    this._element = null;
  }
}


export class FilmTopRated {
  constructor() {
    this._title = film.title;
    this._rating = film.rating;
    this._year = film.year;
    this._duration = film.duration;
    this._genres = film.genres;
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
        <span class="film-card__genre">${this._genres.join(` `)}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <button class="film-card__comments">${this._commentsNumber} comments</button>
    </article>
  </div>
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

  unrender() {
    this._element = null;
  }
}

export class FilmMostCommented {
  constructor() {
    this._title = film.title;
    this._rating = film.rating;
    this._year = film.year;
    this._duration = film.duration;
    this._genres = film.genres;
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
        <span class="film-card__genre">${this._genres.join(` `)}</span>
      </p>
      <img src="${this._imgURL}" alt="" class="film-card__poster">
      <button class="film-card__comments">${this._commentsNumber} comments</button>
    </article>
  </div>
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

  unrender() {
    this._element = null;
  }
}

export class FilmPopup {
  constructor() {
    this._title = film.title;
    this._titleOriginal = film.titleOriginal;
    this._rating = film.rating;
    this._userRate = film.userRate;
    this._age = film.age;
    this._director = film.director;
    this._writers = film.writers;
    this._actors = film.actors;
    this._releaseDate = film.releaseDate;
    this._runTime = film.runTime;
    this._country = film.country;
    this._genres = film.genres;
    this._imgURL = film.imgURL;
    this._description = film.description;
    this._commentsNumber = film.commentsNumber;
    this._element = null;
  }

  get template() {
    return `
<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${this._imgURL}" alt="incredables-2">

        <p class="film-details__age">${this._age}+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${this._title}</h3>
            <p class="film-details__title-original">${this._titleOriginal}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${this._rating}</p>
            <p class="film-details__user-rating">Your rate ${this._userRate}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${this._director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${this._writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${this._actors.map((actor) => actor).join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${this._releaseDate} (${this._country})</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${this._runTime} min</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${this._country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                ${this._genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(` `)}
              </td>
            </tr>
          </table>
  
          <p class="film-details__film-description">
            ${this._description}
          </p>
        </div>
      </div>
  
      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
  
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
  
        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
  
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._commentsNumber}</span></h3>
  
        <ul class="film-details__comments-list">
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">😴</span>
            <div>
              <p class="film-details__comment-text">So long-long story, boring!</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">Tim Macoveev</span>
                <span class="film-details__comment-day">3 days ago</span>
              </p>
            </div>
          </li>
        </ul>
  
        <div class="film-details__new-comment">
          <div>
            <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
            <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">
  
            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
              <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
              <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
            </div>
          </div>
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment"></textarea>
          </label>
        </div>
      </section>
  
      <section class="film-details__user-rating-wrap">
        <div class="film-details__user-rating-controls">
          <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
          <button class="film-details__watched-reset" type="button">undo</button>
        </div>
  
        <div class="film-details__user-score">
          <div class="film-details__user-rating-poster">
            <img src="${this._imgURL}" alt="film-poster" class="film-details__user-rating-img">
          </div>
  
          <section class="film-details__user-rating-inner">
            <h3 class="film-details__user-rating-title">${this._title}</h3>
  
            <p class="film-details__user-rating-feelings">How you feel it?</p>
  
            <div class="film-details__user-rating-score">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => `
<input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${num}" id="rating-${num}">
<label class="film-details__user-rating-label" for="rating-${num}">${num}</label>)
`.trim())}
            </div>
          </section>
        </div>
      </section>
    </form>
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

  unrender() {
    this._element = null;
  }
}
