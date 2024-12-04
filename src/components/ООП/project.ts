abstract class Transport {
    protected name: string = '';
    protected speed: number;
    protected capacity: number;

    constructor(name: string, speed: number, capacity: number) {
        this.name = name;
        this.speed = speed;
        this.capacity = capacity;
    }

    public abstract move(): void;

    public getName(): string {
        return this.name;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getCapacity(): number {
        return this.capacity;
    }
}

class Car extends Transport {
    private isKeyInside: boolean = false;

    constructor(name: string, speed: number, capacity: number) {
        super(name, speed, capacity);
    }

    public insertKey(): void {
        this.isKeyInside = true;
    }

    private checkIfKeyInside(): boolean {
        return this.isKeyInside;
    }

    public move(): void {
        if (this.checkIfKeyInside()) {
            console.log(`${this.getName()} работает и готов к поездке`);
        } else {
            console.log(`Ключа нет. ${this.getName()} не может ехать`);
        }
    }
}

class Airplane extends Transport {
    private isEngineStarted: boolean = false;

    constructor(name: string, speed: number, capacity: number) {
        super(name, speed, capacity);
    }

    public startEngine(): void {
        this.isEngineStarted = true;
    }

    private checkIfEngineStarted(): boolean {
        return this.isEngineStarted;
    }

    public move(): void {
        if (this.checkIfEngineStarted()) {
            console.log(
                `${this.getName()} двигатели запущены, самолет готов к взлёту`
            );
        } else {
            console.log(
                `${this.getName()} двигатели не запущены, самолет не готов к взлёту`
            );
        }
    }
}

class Ship extends Transport {
    private isAnchorUp: boolean = false;

    constructor(name: string, speed: number, capacity: number) {
        super(name, speed, capacity);
    }

    public anchorUp(): void {
        this.isAnchorUp = true;
    }

    private checkIfAnchorUp(): boolean {
        return this.isAnchorUp;
    }

    public move(): void {
        if (this.checkIfAnchorUp()) {
            console.log(
                `${this.getName()} якорь поднят, корабль готов к плавание`
            );
        } else {
            console.log(
                `${this.getName()} якорь не поднят, корабль не готов к плавание`
            );
        }
    }
}

class TransportManager {
    private transports: Transport[] = [];

    public addTransport(transport: Transport) {
        this.transports.push(transport);
        console.log(`${transport.getName()} добавлен в систему.`);
    }

    public removeTransport(name: string): void {
        const index = this.transports.findIndex(
            (transport) => transport.getName() === name
        );
        if (index !== -1) {
            const removed = this.transports.splice(index, 1);
            console.log(`${removed[0].getName()} удалён из системы.`);
        } else {
            console.log(`Транспорт с именем ${name} не найден.`);
        }
    }

    public findTransportByName(name: string): Transport | null {
        const transport = this.transports.find(
            (transport) => transport.getName() === name
        );
        if (transport) {
            console.log(`${transport.getName()} найден.`);
            return transport;
        } else {
            console.log(`Транспорт с именем ${name} не найден.`);
            return null;
        }
    }

    public listAllTransports(): void {
        console.log('Список всех транспортных средств:');
        this.transports.forEach((transport) => {
            console.log(
                `${transport.getName()} (скорость: ${transport.getSpeed()}, вместимость: ${transport.getCapacity()})`
            );
        });
    }
}

const car = new Car('Машина', 120, 5);
const airplane = new Airplane('Самолёт', 900, 300);
const ship = new Ship('Корабль', 50, 100);

const manager = new TransportManager();

manager.addTransport(car);
manager.addTransport(airplane);
manager.addTransport(ship);

manager.listAllTransports();
manager.findTransportByName('Самолёт');
manager.findTransportByName('Велосипед');

manager.removeTransport('Корабль');
manager.listAllTransports();
