'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true');
    } else {
        button.setAttribute('aria-expanded', 'false');
    }
})