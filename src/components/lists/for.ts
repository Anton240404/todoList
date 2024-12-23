const nums: number[] = [6, 9, 7];

const newArray: string[] = [];
const newArray2: string[] = [];

for (let i = 0; i < nums.length; i++) {
    newArray2.push(nums[i] + '');
    newArray.push(nums[i] * 2 + '');
}

console.log(newArray);
console.log(newArray2);

export {};

// map = transform
// Метод map трансформирует каждый элемент массива во что-то.
// Метод map узнает про новое трансформированное значение по тому, что вернула твоя функция
// element => element * 2 [12, 18, 14]
// element => "hello" [ 'Hello', 'Hello', 'Hello' ]
// element => element [ 6, 9, 7 ]
// element => boolean [ true, true, true ]

const transformedArray = nums.map((element, i) => element > 5);
const transformedArray2 = transform(
    nums,
    (element: any, i) => element > 5 && i < 2
);

console.log(transformedArray, transformedArray2);

function transform(array: number[], transformElement: any) {
    const newArray: boolean[] = [];
    for (let i = 0; i < array.length; i++) {
        const transformed = transformElement(array[i], i); // true
        newArray.push(transformed);
    }
    return newArray;
}

/*function transform(array: number[], transformElement: any) {
    for (let i = 0; i < array.length; i++) {
        const transformed = transformElement(array[i], i); // true
    }
    return transformed;
}*/

// Что возвращает функция
// 1) Объект
// 2) Элемент в виде строки
// 3) Ничего (undefined)
// 4) другую функцию

function f() {}

const result = f();
console.log('result', result);

// реализиваоть методы (мап, форИч. филтр) (домашняя работа)