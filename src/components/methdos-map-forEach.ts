const _map = (
    arr: number[],
    callback: (item: number, index: number) => number
): number[] => {
    const res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(callback(arr[i], i));
    }
    return res;
};

const _forEach = (
    arr: number[],
    callback: (item: number, index: number, array: number[]) => void
): void => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

// _forEach([1, 2, 3], (item, index, arr) => {
//     console.log(item);
// });

// const one_one_one = _map([1, 2, 3], (item, index, arr) => {
//     return 1;
// });

// _forEach([1, 2, 3], (item, index, arr) => {
//     if (index === arr.length - 1) {
//         console.log('last');
//     }
// });
