const array = [1, 2, 22, 3];

const transfomed = _map(array, (elem) => elem / 2);

type Transform = (element: number) => number;

function _map(array: number[], transform: Transform): number[] {
    const newArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        const transformedItem = transform(array[i]);
        newArray.push(transformedItem);
    }
    return newArray;
}

console.log(transfomed);
console.log('==========================');

type ForeachCallback = (element: number) => void;

function _forEach(array: number[], callback: ForeachCallback): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

_forEach(array, (elem) => {
    const res = elem / 2;
    console.log(res);
});
console.log('==========================');

type FilterFn = (element: number) => boolean;

function _filter(array: number[], callback: FilterFn): number[] {
    const newArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const fillter = _filter(array, (elem) => elem % 2 === 0);
console.log(fillter);

function _findIndex(array: unknown[], callback: (value: unknown) => boolean) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return -1;
}

function _find(array: unknown[], callback: (value: unknown) => boolean) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return undefined;
}
function _includes(array: unknown[], value: unknown): boolean {
     for (let i = 0; i < array.length; i++) {
         if (array[i] === value) {
             return true
         }
     }
     return false
     }