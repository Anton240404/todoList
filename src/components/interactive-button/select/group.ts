type User = { name: string; age: number };

const users: User[] = [
    { name: 'Ivan', age: 20 },
    { name: 'Petr', age: 30 },
    { name: 'Sergey', age: 20 },
    { name: 'Vasya', age: 30 },
    { name: 'Masha', age: 20 },
    { name: 'Dasha', age: 40 },
];

const groupedByAge: any = {
    20: [],
    30: [],
    40: [],
};

// const result = {
//     20: [
//         { name: 'Ivan', age: 20 },
//         { name: 'Sergey', age: 20 },
//         { name: 'Masha', age: 20 },
//     ],
//     30: [
//         { name: 'Petr', age: 30 },
//         { name: 'Vasya', age: 30 },
//     ],
//     40: [{ name: 'Dasha', age: 40 }],
// };

users.forEach((user) => {
    groupedByAge[user.age].push(user);
});

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    groupedByAge[user.age].push(user);
}
