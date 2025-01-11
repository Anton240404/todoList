const numbers = [1, 2, 3];
const strings = ['1', '2', '3'];

import React from 'react';

// Принимаем a и b
function sum(a, b) {
    return a + b;
}

// Передаем, отправляем 1 и 2
sum(1, 2);
sum(4, 5);

export function TableNumbers() {
    // Метод map нужен для трансформации каждого элемента массива. Например, если из массива [1, 2, 3] нужно сделать ['1', '2', '3']
    // Название метода map можно мысленно заменить на слово "transform"
    // В этот метод нужно отправить callback, в который придет один элемент массива, а мы должны ВЕРНУТЬ во что мы трансформируем
    // Метод map из всех этих вернувшихся трасформированных значений соберет новый массив
    // map возвращает столько элементов, сколько было в исходном массиве
    // В метод map отправляем функцию, которая принимает один элемент массива
    // const fn = (elem) => elem + ''
    // fn(1) -> "1"
    // fn(2) -> "2"
    // fn(3) -> "3"
    // const result = [fn(1), fn(2), fn(3)] // ['1', '2', '3']
    // return result
    const res = numbers.map((elem) => elem + '');

    const x = console.log(123);

    // Расписать по-русски для людей как работают методы map, foreach, filter (23 dec)
    // (24 dec) - изучаем методы (так же расписать методы) find, findIndex, includes.
    // После того, как изучишь напиши мне, я скину задач по этим методам
    // (25 dec) - решить снова задачи на map (в телеграме)
    // (26 dec) - занимаемся

    // const result2 = numbers.map((elem) => console.log(elem));
    // const result2 = numbers.map((elem) => {
    //     const x = console.log(elem)
    //     return x;
    // });

    // const result3 = numbers.map((elem): void => {
    //     numbers.push(elem);
    // });

    // const result4 = numbers.map((elem) => numbers.map(() => {}));
    // const result4 = numbers.map((elem) => [undefined, undefined, undefined]);
    // numbers.map(() => {}) // [undefined, undefined, undefined]
    // [ elem, elem, elem ]
    // [ [undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined] ]

    // const result5 = numbers.map((elem) => numbers.map(x => x == 2).filter(x => x));
    // numbers.map(x => x == 2).filter(x => x)
    // numbers.map(x => x == 2)
    // return[false,true,false].filter(x => Boolean(0)) [true]
    // const result5 = numbers.map((elem) => [true]); // [[true],[true],[true]]

    // [ elem, elem, elem ]
    // [ [true], [true], [true] ]

    console.log(result4[1][1]);

    // [1, 2, 3].filter(() => null) // []
    // [1, 2, 3].filter(() => true); // [1,2,3]
    const xax = [1, 2, 3, 4, 5].find((elem) => elem > 2);
    console.log(xax);

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

const data = [62, 12, 32, 12, 37];

const result5 = data
    .join('')
    .split('')
    .map((x) => x % 2 === 0);
