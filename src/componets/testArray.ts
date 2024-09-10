const array = [5, 7, 8]

function fn1(num: number, index: number): void {
    console.log(`Number = ${num}, index = ${index}`)
}

function fn2(num: number, index: number): number {
    return num + index
}

// array.forEach(fn1)
const newArray = array.map(fn2)
// console.log(newArray)

const newArray2 = _map(array, fn2)
console.log(newArray2)

// fn(5, 0)
// fn(7, 1)
// fn(8, 2)
// _forEach(array, fn1)

type Fn1 = (item: number, index: number) => void

function _forEach(array: number[], fn: Fn1) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i)
    }
}

type Fn2 = (item: number, index: number) => number

// const x1 = fn(5, 0) // 5
// const x2 = fn(7, 1) // 8
// const x3 = fn(8, 2) // 10

function _map(array: number[], fn: Fn2) {
    const result: number[] = []
    for (let i = 0; i < array.length; i++) {
        const x = fn(array[i], i)
        result[result.length] = x
    }
    return result
}

// const obj = {
//     name: '',
//     age: 1
// }
