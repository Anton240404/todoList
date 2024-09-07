const array = [1, 2, 3,4,5];

array.forEach((num) => {
    if(num % 2 === 0) {
        console.log(`Number = ${num * 2} `)
    } else{
        console.log(`Number = ${num}`);
    }
});

console.log(array);
console.log('========================');

const array2 = [1, 2, 3,4,5];

const testArray = array2.map((num) => {

        return num * 2;

});
console.log(testArray);
console.log(array2);
