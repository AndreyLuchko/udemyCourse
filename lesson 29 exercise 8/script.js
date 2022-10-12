// 1. Создайте функцию, которая принимает в себя целое число минут и 
// возвращает время в нужном формате строки. (Смотри пример). 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости 
// от цифры. Если вместо аргумента приходит не число, дробное или 
// отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// Так как проверки на большие числа будут раздувать код 
// (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет 
// проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать 
// и полный скрипт, он тоже должен проходить тесты.
// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
    let letter,
        hours = Math.floor(minutes / 60);

    if (minutes >= 0 && Number.isInteger(minutes)) {
        switch (hours) {
            case 1:
                letter = '';
                break;
            case 2:
            case 3:
            case 4:
                letter = 'а';
                break;
            default:
                letter = 'ов';
                break;
        }
        return `Это ${hours} час${letter} и ${minutes % 60} минут`;
    } else {
        return 'Ошибка, проверьте данные';
    }
}

// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));
// console.log(getTimeFromMinutes());

// 2. Напишите функцию, которая принимает в себя 4 числа и возвращает самое 
// большее из них. Если один из аргументов не является числом или их меньше 
// 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(num1, num2, num3, num4) {
    const arr = [num1, num2, num3, num4];
    let result = num1;
    for (let i = 1;  i < arr.length; i++) {
        if(Number.isFinite(result) && Number.isFinite(arr[i]) && arr.length >= 4 ) {
            result > arr[i] ? result : result = arr[i]; 
        }else {
            result = 0;
        }  
    }
    return result;
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));
