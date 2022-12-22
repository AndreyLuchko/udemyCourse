const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}


function showListOfFilms(arr) {
    return arr.reduce((res, item) => `${res}, ${item.name}`, '').substr(2);
}


function setFilmsIds(arr) {
    arr.forEach((item, i) => item.id = i);
    return arr;
}


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
   return arr.every(item => "id" in item);
}

