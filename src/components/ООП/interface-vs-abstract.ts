// class Person {
//     public firstName: string;
//     public lastName: string;

//     public set age(age: number) {
//         if (age < 0 || age > 120) throw new Error("Invalid age")
//         else this.age = age  
//     }

//     public get age() {
//         return this.age
//     }
    
//     constructor(first: string, last: string, age: number) {
//        this.firstName = first
//        this.lastName = last
//        this.age = age  
//     }

//     public printHello() {
//         console.log("Hello!");
//     }
// }

// const person1 = new Person("John", "Doe", 9999);
// person1.printHello();

// person1.age = -10

// const obj = {
//     firstName: "John",
//     lastName: "Doe",
//     printHello() {
//         console.log("Hello!");
//     }
// }

// obj.printHello();



class ConsoleLogger implements Logger {
    log(message: string): void {} /* ... реализация ... */
    warn(message: string): void {} /* ... реализация ... */
    info(message: string): void {} /* ... реализация ... */
    error(message: string): void {} /* ... реализация ... */
}

class TelegramLogger implements Logger {
    log(message: string): void {} /* ... реализация ... */
    warn(message: string): void {} /* ... реализация ... */
    info(message: string): void {} /* ... реализация ... */
    error(message: string): void {} /* ... реализация ... */
}

interface Logger {
    // Все методы публичные
    log(message: string): void;
    warn(message: string): void;
    info(message: string): void;
    error(message: string): void;
}

interface Writable {
    color: string;
    
    // Все методы публичные
    write(message: string): void
}

class Pencil implements Writable {
    color: string;
    write(message: string): void {
        // ...
    }
}

function createUser(age: number, logger: Logger) {
    if (age < 0 || age > 120) logger.error("Invalid age")
}

type AutoService = {
    repair: (car: Car) => Car
    drive: (car: Car) => Car
    paint: (color: string) => Car
    stop: (car: Car) => void
}


class BMWService implements AutoService {
    repair(car: Car): Car {
        throw new Error("Method not implemented.");
    }
    drive(car: Car): Car {
        throw new Error("Method not implemented.");
    }
    paint(color: string): Car {
        throw new Error("Method not implemented.");
    }
    stop(car: Car): void {
        throw new Error("Method not implemented.");
    }

}

class AudiService implements AutoService {
    repair(car: Car): Car {
        throw new Error("Method not implemented.");
    }
    drive(car: Car): Car {
        throw new Error("Method not implemented.");
    }
    paint(color: string): Car {
        throw new Error("Method not implemented.");
    }
    stop(car: Car): void {
        throw new Error("Method not implemented.");
    }

}

const autoService: AutoService = new AudiService();

repair(car, autoService);

function repair(car: Car, service: AutoService): Car {
    const repaired = service.repair(car);
    return repaired;
}

interface Database {
    connect(): void;
    disconnect(): void;

    write(data: string): void;
    read(): string;
}

class TxtDatabase implements Database {
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    write(data: string): void {
        throw new Error("Method not implemented.");
    }
    read(): string {
        throw new Error("Method not implemented.");
    }
}

class PdfDatabase implements Database {
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    write(data: string): void {
        throw new Error("Method not implemented.");
    }
    read(): string {
        throw new Error("Method not implemented.");
    }
}
