// 1. Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
// (тоже базовая математика, иногда используется в создании анимаций). Эта функция 
// принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате
//  строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть 
// строку "При вычислении произошла ошибка"

function calculateVolumeAndArea(a) {
    if (a >= 0 && Number.isInteger(a)) {
      return `Объем куба: ${a * a * a}, площадь всей поверхности: ${6 * a * a}`;
        
    } else {
        return'При вычислении произошла ошибка';
    }

}
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

// 2.  Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(num) {
    if (num > 0 && num <= 36 && Number.isInteger(num)) {
        let result = Math.ceil(num / 4);
        return result;
    } else if((num === 0 || num > 36) && Number.isInteger(num)) {
        return 'Таких мест в вагоне не существует';
    }else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
}
console.log(getCoupeNumber(33)) ;
console.log(getCoupeNumber(7)) ;
console.log(getCoupeNumber(300)) ;
console.log(getCoupeNumber(0)) ;
console.log(getCoupeNumber(7.7)) ;
console.log(getCoupeNumber(-10)) ;
console.log(getCoupeNumber('Hello')) ;