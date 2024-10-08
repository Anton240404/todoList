// Promise - pending(незаконченный), fulfilled (выполненный), rejected (отклоненный)

// СНАЧАЛА ВЫПОЛНЯЕТСЯ ВЕСЬ СИНХРОННЫЙ КОД, А ЗАТЕМ АСИНХРОННЫЙ
// executor (коллбэк внутри new Promise()) - выполняется синхронно

// Изначально pending
console.log(1)

const promise = new Promise((resolve, reject) => {
    console.log(2)

    setTimeout(() => {
        console.log("resolved")

        // resolve() - асинхронный код закончился успешно => fulfilled
        // reject() - асинхронный код закончился неуспешно => rejected

        // reject("Неизвестная ошибка")
        resolve(900)
    }, 1_000)

    console.log(4)
})

promise
    // когда промис перешел в состояние fulfilled
    .then((num) => {
        console.log("промис перешел в состояние fulfilled", num)
    })
    // когда промис перешел в состояние rejected
    .catch((error) => {
        console.log("промис перешел в состояние rejected", error)
    })

setTimeout(() => {
    console.log(promise)
}, 2_000)

console.log(5)

// console.log(promise)

// console.log(1)

// setTimeout(() => {
//     console.log(3)
// }, 100_000)

// console.log(2)

// class Person {
//     public name: string
//     public age: number

//     constructor() {}
// }
