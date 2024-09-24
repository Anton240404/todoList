function map(array: number[], callback: () => void) {
    for (let i = 0; i < array.length; i++) {
        callback();
    }
}

map([3, 5, 7], () => {
    console.log('Hello');
});
