class Car {
    public number: string = '';
    private forbiddenLetters: string[] = 'БГДЁЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯ'.split('');

    constructor(number: string) {
        if (this.isNumberValid(number)) {
            this.number = number;
        } else {
            console.log('Неверный номер');
        }
    }

    private isNumberValid(number: string = 'О345ХК'): boolean {
        // return number
        //     .split('')
        //     .every((letter) => !'БГДЁЖЗИЙЛПФЦЧШЩЪЫЬЭЮЯ'.includes(letter));

        const letters: string[] = number.split(''); // ['O', '3', '4', '5', 'X', 'K']

        const result = letters.every(
            (letter) => !this.forbiddenLetters.includes(letter)
        );

        return result;
    }
}

const audi = new Car('О345ХК');
const lada = new Car('О346ХК');

audi.number;

const truth1 = [1, 2, 3].every((x) => x > 0); // true
const truth2 = [-1, -2, 3].some((x) => x > 0); // true
// ['Б', 'Г', ...]

abstract class Transport {
    public maxSpeed: number = 0;

    public abstract move(): void;
    public abstract stop(): void;
}

class Bicycle extends Transport {
    public move(): void {
        if (isWheelsGood()) {
            console.log('Велосипед едет');
        }
    }

    private isWheelsGood() {
        return true;
    }

    public stop(): void {
        console.log('Велосипед остановился');
    }
}

new Bicycle().

interface Logger {
    log(message: string): void;
    warn(message: string): void;
    info(message: string): void;
    error(message: string): void;
}

class TelegramLogger implements Logger {
    log(message: string): void {}
    warn(message: string): void {}
    info(message: string): void {}
    error(message: string): void {}
}

class VkLogger implements Logger {
    log(message: string): void {}
    warn(message: string): void {}
    info(message: string): void {}
    error(message: string): void {}
}

class YandexLogger implements Logger {
    log(message: string): void {}
    warn(message: string): void {}
    info(message: string): void {}
    error(message: string): void {}
}

function createUser(name: string, age: number, logger: Logger) {
    if (age < 0 || age > 100) {
        logger.error('Некорректный возраст');
    }

    return {
        name: 'Ivan',
        age: 30,
    };
}

createUser('', 1, new TelegramLogger());
createUser('', 1, new VkLogger());

// Нельзя создавать
// new Transport()
