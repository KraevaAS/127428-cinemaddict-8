import {createCardHTML} from './cards.js';

export const createTaskHTML = (allItems, extraItemsTop, extraItemsCommented) => {
  return `
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  <div class="films-list__container">
    ${allItems.map((item) => createCardHTML(item, false)).join(``)}
  </div>
  <button class="films-list__show-more">Show more</button>
</section>
<section class="films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
    ${extraItemsTop.map((item) => createCardHTML(item, true)).join(``)}
  </div>
</section>
<section class="films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
    ${extraItemsCommented.map((item) => createCardHTML(item, true)).join(``)}
  </div>
</section>
  `;
};