// 1. Напишите функцию showExperience, которая будет принимать в себя объект со 
// всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно

// 2.  Напишите функцию showProgrammingLangs, которая будет принимать в себя 
// объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. 
// Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

// 3. Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки 
// всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, 
// то и сообщение тоже изменится.


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    },
    showAgeAndLangs(obj) {
        let a = obj.skills.languages;
        let res = `Мне ${obj.age} и я владею языками: ${a.join(' ').toUpperCase()}`;
        return res;
    }
};

function showExperience(plan) {
    const obj = { ...plan };
    return obj.skills.exp;
}

function showProgrammingLangs(plan) {
    const obj = { ...plan };
    let res = '';
    let tempObj = obj.skills.programmingLangs;
    let key;
    for (key in tempObj) {
        if (key !== null) {
             res += `Язык ${key} изучен на ${tempObj[key]}\n`;
        } 
    }
    return res;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));