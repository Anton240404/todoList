function _indexOf<T>(
    arr: T[],
    callback: (value: T, index: number) => boolean
): number {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) return i;
    }
    return -1;
}

const array: number[] = [1, 2, 3, 4, 5];

console.log(_indexOf<number>(array, (value) => value === 2));
console.log('=============');

function _join<T>(array: T[], separator: string): string {
    let result: string = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) result += separator;
    }
    return result;
}

console.log(_join(array, ';'));
console.log('==============');

function _lastIndexOf<T>(array: T[], value: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

console.log(_lastIndexOf<number>(array, 2));
console.log('==============');

function _pop<T>(array: T[]) {
    if (array.length === 0) return undefined;
    const lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
}

console.log(_pop<number>(array));
console.log('====================');

function _reverse<T>(array: T[]): T[] {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
}

console.log(_reverse<number>(array));
console.log('==============');

function _some<T>(
    array: T[],
    callback: (value: T, index: number) => boolean
): boolean {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) return true;
    }
    return false;
}

console.log(_some<number>(array, (value) => value === 2 || value > 2));
console.log('=================');
