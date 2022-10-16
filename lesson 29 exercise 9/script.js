// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => "0 1 1 2"
// fib(7) => "0 1 1 2 3 5 8"
// fib('7') => ""
// fib(1) => "0"
// fib(0) => ""

function fib(numFib) {
    let result = [0, 1];

    let res = '';

    if (Number.isFinite(numFib) && Number.isInteger(numFib)) {
        for (let i = 2; i < numFib; i++) {
          result[i] = result[i - 2] + result[i - 1];
        }
        return result.slice(0, numFib).join(' ');
    } else {
        return res;
    }

}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));

