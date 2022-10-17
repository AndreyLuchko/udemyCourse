// 1. Задача с собеседований. Напишите функцию reverse, которая принимает в себя 
// строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - 
// вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    let res = '';
    if(typeof str === 'string') {
        res = [...str].reverse().join('');
    }else {
        res = 'Ошибка!';
    }
    return res;
}
console.log(reverse(someString));

// 2. Представьте такую реальную ситуацию. У вас есть банкомат, который выдает
//  деньги из двух разных банков в разных валютах. Один банк основной с базовыми 
// валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает 
// два аргумента: первый - это массив со всеми доступными валютами из двух банков 
// сразу (сейчас представим, что они не могут повторяться), второй - необязательный 
// аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
// Если массив в первом аргументе пустой - то функция возвращает строку 
// 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. 
//     Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, 
//     причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const array = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let res = 'Доступные валюты:\n';
    if (arr.length === 0) {
        res = 'Нет доступных валют';
    } else {
      
        let index = arr.findIndex(item => item === missingCurr);
        index >= 0 ? arr.splice(index, 1) : arr;
        arr.forEach(item => {
          res +=  `${item}\n`;  
        });
    }
    return res;
}

console.log(availableCurr(array, 'RUB'));