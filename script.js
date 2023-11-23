// Скрипт для смены темы: темная/светлая
let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');

darkButton.onclick = function () {
    document.querySelector('.page').classList.add('dark');
    darkButton.classList.add('active');
    lightButton.classList.remove('active');
}

lightButton.onclick = function () {
    document.querySelector('.page').classList.remove('dark');
    lightButton.classList.add('active');
    darkButton.classList.remove('active');
}

//Скрипт для смены шрифта сайта 
let sansSerif = document.querySelector('.font-button-sans-serif');
let serif = document.querySelector('.font-button-serif');

sansSerif.onclick = function () {
    document.querySelector('.page').classList.remove('serif');
    sansSerif.classList.add('active');
    serif.classList.remove('active');
}

serif.onclick = function () {
    document.querySelector('.page').classList.add('serif');
    sansSerif.classList.remove('active');
    serif.classList.add('active');
}

//Скрипт для разворачивания контента 
let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
    blogArticle.querySelector('.more').onclick = function () {
        blogArticle.classList.remove('short');
    }
}

//Скрипт для изменения раскладки карточек
let cards = document.querySelector('.cards');
let cardGrid = document.querySelector('.card-view-button-grid');
let cardRow = document.querySelector('.card-view-button-list');

cardGrid.onclick = function () {
    cardGrid.classList.add('active');
    cardRow.classList.remove('active');
    cards.classList.remove('list');
}

cardRow.onclick = function () {
    cardRow.classList.add('active');
    cardGrid.classList.remove('active');
    cards.classList.add('list');
}

//Скрипт для галереи
let galleryImages = document.querySelectorAll('.preview-list > li > a');
let mainPhoto = document.querySelector('.active-photo');
let CurrentActive = document.querySelector('.preview-list > li > a.active-item');

for (let galleryImage of galleryImages) {
    galleryImage.onclick = function (evt) {
    evt.preventDefault();  
    mainPhoto.src = galleryImage.href;

    let CurrentActive = document.querySelector('.preview-list > li > a.active-item');
    CurrentActive.classList.remove('active-item');
    galleryImage.classList.add('active-item');
    }    
}
