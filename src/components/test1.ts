const dublicator = (arr: number[]): number[] => {
    return [...arr, ...arr];
};
const dublicator2 = (arr: number[]): number[] => {
    return arr.concat(arr);
};

/*function dublicator(arr: number[]): number[] {
    const res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
    return res;
}

class Person {
    name: string;
    connections: Person[];

    constructor(person: { name: string }) {
        this.name = person.name;
        this.connections = [];
    }

    public introduce() {
        console.log(`Привет, меня зовут ${this.name}`);
    }

    public getConnections() {
        return this.connections;
    }

    public addConnection(person: Person) {
        this.connections.push(person);
        person.connections.push(this);
    }
}

const Ivan = new Person({ name: 'Иван Петров' });
const Petr = new Person({ name: 'Петр Иванов' });*/
