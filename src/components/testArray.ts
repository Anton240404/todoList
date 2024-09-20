// function _slice<T>(arr: T[], start: number, end: number): T[] {
//     //if (start < 0 || end < 0 || end >= start || end > arr.length) return
//
//     const result = []
//
//     for (let i = start; i < end; i++) {
//         result.push(arr[i])
//     }
//
//     return result
// }
//
// const arr = [1, 2, 3, 4, 5]
// console.log(_slice(arr, 1, 3))
// console.log(_slice(arr, 2, 4))
// console.log(arr)
// console.log("====================")
//
// function _concat<T>(arr1: T[], arr2: T[]): T[] {
//     const result:T[] = []
//
//     for (const item of arr1) {
//         result.push(item)
//     }
//     for (const item of arr2) {
//         result.push(item)
//     }
//
//     return result
// }
//
// const arrr1 = [1, 2]
// const arrr2 = [3, 4, 5]
// console.log(_concat(arrr1, arrr2))
// console.log("========================")
//
// function _every<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean): boolean {
//     for (let i = 0; i < array.length; i++) {
//         if (!callback(array[i], i, array)) {
//             return false
//         }
//     }
//     return true
// }
//
// const arr3 = [1, 2, 3, 4, 5]
// const result = _every<number>(arr3, (value, index) => {
//     if (index === 1) {
//         return value % 2 === 0
//     }
//     return true
// })
// console.log(result)
// console.log("=================")
//
// function _fill<T>(arr: T[], value: T, start: number, end: number): T[] {
//     for (let i = start; i < end; i++) {
//         arr[i] = value
//     }
//     return arr
// }
//
// const arr4 = [1, 2, 3, 4, 5]
// console.log(_fill<number>(arr4, 0, 1, 4))
// console.log("================")
//
// function _filter<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i])
//         }
//     }
//     return result
// }
//
// const arr5 = [1, 2, 3, 4, 5]
// console.log(_filter<number>(arr5, (x) => x > 2))
// console.log("============")
//
function _find<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T | undefined {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
const arr6 = [1, 2, 3, 4, 5, 3, 6];
console.log(_find<number>(arr6, (x) => x === 3));
//
// console.log("=================")
//
// function _findIndex<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean): number {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             return i
//         }
//     }
//     return -1
// }
//
// const arr7 = [1, 2, 3, 4, 5]
//
// console.log(_findIndex<number>(arr7, (x) => x === 3))
// console.log("=================")
//
// function _includes<T>(array: T[], value: T | string): boolean {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true
//         }
//     }
//     return false
// }
//
// const arr8 = [1, 2, 3, 4, 5]
// console.log(_includes<number | string>(arr8, "x"))
// console.log(_includes<number>(arr8, 5))
// console.log("==============")
