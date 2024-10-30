type Props = {
    value: string[];
};

export function Select(props: Props) {
    const arr = [<p>Text 1</p>, <p>Text 2</p>, <p>Text 3</p>];

    const fn = (item) => {
        return item.length > 3;
    };

    return (
        <div>
            {props.value
                .filter(fn)
                .map(fn)
                .join('')
                .toLowerCase()
                .split()
                .filter(fn)
                .forEach(fn)}

            <div>{arr}</div>
        </div>
    );
}

function myForeach(
    arr: number[],
    cb: (item: number, index: number) => void
): void {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i);
    }
}

function myMap(
    arr: number[],
    cb: (item: number, index: number) => number
): number[] {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const x = cb(arr[i], i);
        result.push(x);
    }

    return result;
}

[1, 2, 3].forEach((x, i) => {
    console.log(x, i);
});

myForeach([1, 2, 3], (x, i) => {
    console.log(x, i);
});

type User = { name: string; age: number };

const users: User[] = [
    { name: 'Ivan', age: 20 },
    { name: 'Petr', age: 30 },
    { name: 'Sergey', age: 20 },
    { name: 'Vasya', age: 30 },
    { name: 'Masha', age: 20 },
    { name: 'Dasha', age: 40 },
];

const groupedByAge = {};
const result = {
    20: [
        { name: 'Ivan', age: 20 },
        { name: 'Sergey', age: 20 },
        { name: 'Masha', age: 20 },
    ],
    30: [
        { name: 'Petr', age: 30 },
        { name: 'Vasya', age: 30 },
    ],
    40: [{ name: 'Dasha', age: 40 }],
};
