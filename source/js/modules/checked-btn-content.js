const buttonList = document.querySelectorAll('.content__tab-toggle');

const checkedBtnContent = () => {
  buttonList.forEach((button) => {
    button.addEventListener('click', () => {
      const iconNew = button.querySelector('.content__control-icon--new');
      const iconChecked = button.querySelector('.content__control-icon--checked');
      iconNew.classList.add('content__control-icon--hidden');
      iconChecked.classList.remove('content__control-icon--hidden');
    });
  });
};

export {checkedBtnContent};
