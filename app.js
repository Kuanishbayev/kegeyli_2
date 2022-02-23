let btn = document.querySelector('button'),
    div = document.querySelector('.menu'),
    icon = document.querySelector('img'),
    i = 1;

btn.addEventListener('click', function () {
    i++;
    if (i % 2 === 0) {
        div.style.right = '50%';
        icon.src = 'multiply-svgrepo-com.svg';
    } else {
        div.style.right = '100%';
        icon.src = 'menu-icon.svg';
    }
});