function isPangram(string) {
    let [...str] = string.toLowerCase();
    let [...alph] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    let res;

    for (let i = 0; i < alph.length; i++) {
        res = str.includes(alph[i]);
        if (res === false) {
            break;
        }
    }

    return res;

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));



