/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)

const promoAdv = document.querySelector('.promo__adv'),
    advImg = promoAdv.querySelectorAll('img');

    for(let i = 0; i < advImg.length; i++) {
        advImg[i].remove();
    }

// 2)

const genre = document.querySelector('.promo__genre');

genre.textContent = 'драма';

// 3)

const bg = document.querySelector('.promo__bg');

bg.style.backgroundImage = 'url(../img/bg.jpg)';

// 4), 5)

const sortMovies = movieDB.movies.sort(),
    moviesList = document.querySelectorAll('.promo__interactive-item');

    for(let i = 0; i < moviesList.length; i++) {
        moviesList[i].textContent = `${i + 1}. ${sortMovies[i]}`;
    }


