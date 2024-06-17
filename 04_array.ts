// let myArray = []
// myArray.push("Val") // wrong syntax

let myArray: number[] = []
myArray.push(1)

let mystringArray: string[] = []
mystringArray.push("vals")

let anotherArray: Array<string> = []

// an array with same data type of object
type User = {
    name: string;
    age: number
}
let userArray: User[] = []
userArray.push({ name: "Aashin", age: 21 })
// userArray.push({ name: "Aashin" }) // not allowed due to User type

let arrayInsideArray: number[][] = [
    [255,255,255]
]


