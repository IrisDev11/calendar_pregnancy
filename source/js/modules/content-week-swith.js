const contentWeekList = document.querySelectorAll('.content__wrapper');

const contentWeekSwith = () => {
  const toggleList = document.querySelectorAll('.slider__item');
  const toggleArray = Array.from(toggleList);

  for (let i = 0; i < toggleArray.length; i++) {
    let toggle = toggleArray[i];
    toggle.addEventListener('click', () => {
      let idStr = toggle.id;
      let idToggle = parseInt(idStr, 10);

      toggleList.forEach((item) => {
        if (item.classList.contains('slider__item--current')) {
          item.classList.remove('slider__item--current');
        }
        toggle.classList.add('slider__item--current');
      });
      contentWeekList.forEach((week) => {
        if (week.classList.contains('content__wrapper--current')) {
          week.classList.remove('content__wrapper--current');
        }
      });
      contentWeekList[idToggle - 1].classList.add('content__wrapper--current');

      const activeElement = contentWeekList[idToggle - 1].querySelector('.content__mother');
      activeElement.classList.add('is-active');
    });
  }
};

export {contentWeekSwith};
