const emptyString = true && [] && '' && 0 && 1 && undefined; // '''
console.log(true && [] && {} && 1 && 2 && ' qwd ' && !null && 4);

// && - И возвращает первую ложь или последнее значение

console.log(undefined || false || '' || [] || {} || 0);
console.log(undefined || false || '' || null);

let x = 1;

console.log((x = 1));

// || - И возвращает первую правду или последнее значение

function getSecondValue(array = [10, 20]) {
    console.log(array);
}

console.log(getSecondValue());
