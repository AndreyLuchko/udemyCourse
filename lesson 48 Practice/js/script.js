
'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelector('.promo__adv'),
        advImg = promoAdv.querySelectorAll('img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        moviesList = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('.add').lastElementChild,
        inputForm = document.querySelector(".adding__input"),
        checkbox = document.querySelector('[type="checkbox"]');

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let newFilm = inputForm.value;
        const likeFilm = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 21)}...`;
            }
            if (likeFilm) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            filmsList(movieDB.movies, moviesList);

        }

        document.querySelector('.add').reset();

    });

    const removeAdd = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }
    };

    const smthChange = () => {
        genre.textContent = 'драма';

        bg.style.backgroundImage = 'url(../img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function filmsList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);

                filmsList(films, parent);
            });
        });

    }

    removeAdd(advImg);
    smthChange();
    filmsList(movieDB.movies, moviesList);

});





