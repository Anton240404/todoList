function sum1(a: number, b: number, c: number): number {
    return a + b + c;
}

// rest
function sum2(a: number, b: number, ...others: number[]) {
    console.log(a, b, others);
}

// rest
function sum3(...others: number[]) {
    let sum = 0;

    for (let i = 0; i < others.length; i++) {
        sum += others[i];
    }

    return sum;
}

const data = [1, 1, 1];

// @ts-expect-error
console.log(sum1(...data));
console.log(sum1(data[0], data[1], data[2]));
console.log(sum3(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

sum2(1, 1, 4, 5, 6, 7, 8);

const todo = {
    id: '1',
    text: 'Купить молоко',
    description: 'Купить молоко в магазине',
    completed: false,
};

// const text = todo.text
// const completed = todo.completed
// const description = todo.description
// const id = todo.id

// Rest
const { completed, ...otherFields } = todo;

console.log(otherFields);

const todo2 = {
    // id: todo.id,
    // text: todo.text,
    // completed: todo.completed,

    ...todo,

    newField: 123,
};
console.log(todo2);

const arr = [1, 2, 3];
// const copy = [arr[0], arr[1], arr[2]];
const copy = [...arr];
