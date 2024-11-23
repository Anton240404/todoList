// type Todo = {
//     id: string;
//     text: string;
//     description: string;
//     priority: number;

//     // Должны задаваться автоматически
//     completed: boolean;
//     test: number;
//     createdAt: Date;

//     printTodo(): void;
// };

class Todo {
    id: string = '1';
    text: string;
    description: string;
    priority: number;

    // Должны задаваться автоматически
    completed: boolean = false;
    test: number = 1;
    createdAt: Date = new Date();

    constructor(text: string, description: string, priority: number) {
        console.log(this); // this = {}

        this.text = text;
        this.description = description;
        this.priority = priority;

        console.log(this); // this = {}
    }

    printTodo() {
        console.log(this.text, this.description);
    }
}

const todo1 = new Todo('Купить молоко', 'Купить молоко в магазине', 3);

const todo2 = new Todo('Купить молоко 2', 'Купить молоко в магазине 2', 1);
todo2.printTodo();

// todo1.text = 'Купить молоко';
// todo1.description = 'Купить молоко в магазине';
// todo1.priority = 3;
