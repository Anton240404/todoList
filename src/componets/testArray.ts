function _slice(arr: number[], start: number = 0, end: number = arr.length) {
    const result = [];
    if (start < 0) {
        start = arr.length + start; // есть вопросы
    }
    if (end < 0) {
        end = arr.length + end; // есть вопросы
    }
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
console.log(_slice(arr, 1, 3));
console.log(_slice(arr, 2, 4));
console.log(arr);
console.log('====================')

function _concat(...arrays: Array<unknown>) {
    const result = [];
    for (const array of arrays) {
        if (Array.isArray(array)) {
            for (const item of array) {
                result.push(item);
            }
        } else {
            result.push(array);
        }
    }
    return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(_concat(arr1, arr2))
console.log(_concat(arr1, 8, 'x'))
console.log('========================')

function _Every(array: number[], callback: (value: number, index: number, array: number[]) => boolean) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

const arr3 = [1, 2, 3, 4, 5];
const result = _Every(arr3, (value, index) => {
    if (index === 1) {
        return value % 2 === 0;
    }
    return true;
});
console.log(result);
console.log('=================')

function _fill(arr: unknown[], value: unknown, start: number = 0, end?: number) {
    const length = arr.length;
    const adjustedStart = start < 0 ? Math.max(length + start, 0) : start;// есть вопросы
    const adjustedEnd = end === undefined ? length : (end < 0 ? length + end : end);// есть вопросы
    for (let i = adjustedStart; i < adjustedEnd && i < length; i++) {
        arr[i] = value;
    }
    return arr;
}

const arr4 = [1, 2, 3, 4, 5];
console.log(_fill(arr4, 0, 1, 4));
console.log(_fill(arr4, 'x'));
console.log('================')


function _filter(array: unknown[], callback: (value: any, index: number, array: any[]) => boolean) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

const arr5 = [1, 2, 3, 4, 5];
console.log(_filter(arr5, x => x > 2));
console.log('============')

function _find(array: unknown[], callback: (value: unknown, index: number, array: unknown[]) => boolean) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
const arr6 = [1, 2, 3, 4, 5, 6];
console.log(_find(arr6, x => x === 3 ));

console.log('=================')

function _findIndex(array: unknown[], callback: (value: unknown, index: number, array: unknown[]) => boolean) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

const arr7 = [1, 2, 3, 4, 5];
console.log(_findIndex(arr7, x => x === 3 ));
console.log('=================')

function _includes(array: unknown[], value: unknown): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

const arr8 = [1, 2, 3, 4, 5];
console.log(_includes(arr8, 'x'));
console.log(_includes(arr8, 5));
console.log('==============')
