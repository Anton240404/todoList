const _map = (arr: number[], callback: (index: number, items: number) => number) => {
    const res: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(callback(arr[i], i));
    }
    return res;
};

const _forEach = (arr: number[], callback: (index: number, items: number) => void) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
};
