'use strict';

const navWrapper = document.querySelector('.navbar-nav');

navWrapper.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn');

  if (!clicked) return;

  const allButtons = navWrapper.querySelectorAll('.btn');

  allButtons.forEach(btn => btn.classList.remove('selected'));
  clicked.classList.add('selected');

  const allContents = document.querySelectorAll('.content');

  allContents.forEach(content => {
    content.classList.add('d-none');
    if (clicked.getAttribute('href') === `#${content.id}`) {
      content.classList.remove('d-none');
    }
  });
});
