const numbers = [1, 2, 3];
const strings = ['1', '2', '3'];

import React from 'react';

export function TableNumbers() {
    // Метод map нужен для трансформации каждого элемента массива. Например, если из массива [1, 2, 3] нужно сделать ['1', '2', '3']
    // Название метода map можно мысленно заменить на слово "transform"
    // В этот метод нужно отправить callback, в который придет один элемент массива, а мы должны ВЕРНУТЬ во что мы трансформируем
    // Метод map из всех этих вернувшихся трасформированных значений соберет новый массив
    // const fn = (elem) => elem + ''
    // fn(1) -> "1"
    // fn(2) -> "2"
    // fn(3) -> "3"
    // const result = [fn(1), fn(2), fn(3)] // ['1', '2', '3']
    // return result
    const res = numbers.map((elem) => {
        return elem + '';
    });

    console.log(res);

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
