
function amountOfPages(summary) {
   
    let result = "";
    let i = 0;
    do {
        i += 1;
        result += `${i}`;
    } while (result.length < summary);
    return i;

}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));
