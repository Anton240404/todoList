// type Callback<T> = (item: T, index: number) => void
//
// function _forEach<K>(array: K[], callback: Callback<K>): void {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i)
//     }
// }
//
// function _map<T>(array: T[], callback: (item: T, index: number) => T): T[] {
//     const result: T[] = []
//     for (let i: number = 0; i < array.length; i++) {
//         result.push(callback(array[i], i))
//     }
//     return result
// }
//
// _map<number>([6, 8, 4], (x, i) => x + i)
// _forEach<number>([6, 8, 4], (x, i) => console.log(x, i))
// _forEach<string>(["a", "b", "c"], (x, i) => console.log(x, i))
//
// _forEach([6, 8, 4], (x, i) => console.log(x, i))
// _forEach(["a", "b", "c"], (x, i) => console.log(x, i))
//
// // _forEach<boolean>(["a", "b", "c"], (x, i) => console.log(x, i))
// // _forEach<() => void>(["a", "b", "c"], (x, i) => console.log(x, i))
// // _forEach<number[]>(["a", "b", "c"], (x, i) => console.log(x, i))
//
// type Item = string | number
// type Arr1 = Item[]
// type Arr2 = (string | number)[]
//
// const arr1: Arr1 = ["a", 1, 2, "b"]
// const arr2: Arr2 = ["a", 1, 2, "b"]
//
// const booleans1: boolean[] = [true, true, false]
// const booleans2: Array<boolean> = [true, true, false]
//
// booleans1.forEach(() => {})
// booleans2.forEach(() => {})
//
// type Pizza = {
//     type: "cheese" | "green"
// }
//
// type Cake = {
//     sugar: boolean
// }
//
// // заказ
// type Order<T> = {
//     id: string
//     name: string
//     item: T
// }
//
// const order1: Order<Cake> = {
//     id: "1",
//     item: {
//         sugar: true,
//     },
//     name: "",
// }
//
// const order2: Order<Pizza> = {
//     id: "1",
//     item: {
//         type: "cheese",
//     },
//     name: "",
// }
