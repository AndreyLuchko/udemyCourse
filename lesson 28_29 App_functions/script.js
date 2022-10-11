/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const responceFilm = prompt('Один из последних просмотренных фильмов?'),
            rating = prompt('На сколько оцените его?');

        if (responceFilm != '' && responceFilm != null && rating != '' && rating != null && responceFilm.length < 50) {
            personalMovieDB.movies[responceFilm] = rating;
        } else {
            alert('Все с начала!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    let watchedMovies = personalMovieDB.count;

    if (watchedMovies < 10 && watchedMovies > 0) {
        alert('Просмотрено довольно мало фильмов');
    } else if (watchedMovies >= 10 && watchedMovies <= 30) {
        alert('Вы классический зритель');
    } else if (watchedMovies > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(!personalMovieDB.privat) {
       console.log(personalMovieDB); 
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres();
showMyDB();
