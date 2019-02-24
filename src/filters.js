export const createFilterHTML = (href, name, isAvtive, count) => {
  return `
  <a href=${href.toLowerCase()}
  class="main-navigation__item ${isAvtive ? `main-navigation__item--active` : ``}">
    ${name}
    ${count !== `` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
  </a>
  `;
};
