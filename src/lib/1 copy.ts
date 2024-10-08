console.log(1)

const promise = new Promise((resolve, reject) => {
    console.log(2)

    setTimeout(() => {
        console.log("resolved")

        resolve(900)
    }, 1_000)

    console.log(4)
})

promise
    .then((num) => {
        console.log("промис перешел в состояние fulfilled", num)
    })
    .catch((error) => {
        console.log("промис перешел в состояние rejected", error)
    })

setTimeout(() => {
    console.log(promise)
}, 2_000)

console.log(5)
