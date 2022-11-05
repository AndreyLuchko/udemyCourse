// Вариант с циклом
function deepCount(arr) {
    let numOfelements = arr.length;
    for (let value of arr) {
        if (Array.isArray(value)) {
            numOfelements += deepCount(value);
        }
    }
    return numOfelements;
}

// Вариант с методом reduce

    // function deepCount(a){
    //     return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
    // }

console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount(([[[[[[[[[]]]]]]]]])));