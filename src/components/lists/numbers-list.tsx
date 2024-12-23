const numbers = [1, 2, 3];
const numbers2 = [<li>1</li>, 2, 3];

import React from 'react';

export function TableNumbers() {
    const newArray: string[] = [];

    numbers.forEach((elem) => {
        const res = elem + '';
        newArray.push(res);
    });

    console.log(newArray);

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
