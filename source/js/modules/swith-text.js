const sectionList = document.querySelectorAll('.content__item');

const switchesText = () => {
  sectionList.forEach((section) => {
    const toggle = section.querySelector('.content__toogle');
    const content = section.querySelector('.content__text-wrapper');
    const icon = section.querySelector('.content__icon');

    toggle.addEventListener('click', () => {
      if (!content.classList.contains('content__text-wrapper--open-text')) {
        content.classList.add('content__text-wrapper--open-text');
        toggle.classList.add('content__toogle--open-text');
        section.classList.add('content__item--swith-text');
        icon.classList.add('content__icon--hidden');
      } else {
        content.classList.remove('content__text-wrapper--open-text');
        toggle.classList.remove('content__toogle--open-text');
        section.classList.remove('content__item--swith-text');
        icon.classList.remove('content__icon--hidden');
      }
    });
  });
};

export {switchesText};
