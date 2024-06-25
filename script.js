'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    button.classList.toggle('active');

    let content = e.target.closest('.checkList').querySelector('.checkList-content');
    let list = content.querySelector('ul');
    let listCheckbox = list.querySelectorAll('input');

    console.log(listCheckbox);

    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true');
        list.setAttribute('aria-hidden', 'false');
        listCheckbox.forEach(link => link.setAttribute('tabindex', '0'));
    } else {
        button.setAttribute('aria-expanded', 'false');
        list.setAttribute('aria-hidden', 'true');
        listCheckbox.forEach(link => link.setAttribute('tabindex', '-1'));
    }
})