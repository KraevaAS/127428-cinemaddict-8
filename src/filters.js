export const createFilterHTML = (href, name, isAvtive, isAdditional, count) => {
  return `
  <a href=${href.toLowerCase()} 
  class="main-navigation__item ${isAvtive ? `main-navigation__item--active` : ``}
  ${isAdditional ? `main-navigation__item--additional` : ``}">${name}
  ${count !== `` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
  </a>
  `;
};
