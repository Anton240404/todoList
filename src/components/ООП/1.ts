type Todo = {
    id: string;
    text: string;
    description: string;
    priority: number;

    // Должны задаваться автоматически
    completed: boolean;
    test: number;
    createdAt: Date;

    printTodo(): void;
};

function createTodo(text: string, description: string, priority: number): Todo {
    return {
        id: '1',
        text: text,
        description: description,
        completed: false,

        // Должны задаваться автоматически
        createdAt: new Date(),
        priority: priority,
        test: 1,

        printTodo() {
            console.log(text, description);
        },
    };
}

// const todo: Todo = {
//     id: '1',
//     text: 'Купить молоко',
//     description: 'Купить молоко в магазине',
//     completed: false,
// };

// const todo2: Todo = {
//     id: '1',
//     text: 'Купить молоко',
//     description: 'Купить молоко в магазине',
//     completed: false,
// };

const todo3: Todo = createTodo('Купить молоко', 'Купить молоко в магазине', 3);

todo3.text = 'Купить молоко 2';
todo3.printTodo();
