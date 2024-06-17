let score: number | string = 33
score = 50
score = "fifty"

type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let aashin: User | Admin = {
    username: "Aashin",
    id: 78
}

function dbId(id: number | string) {
    // id.lowerCase() // not allowed
    if (typeof id === "string") {
        id.toLowerCase() // now allowed after type checking (now id is string)
    } else if (typeof id === "number") {
        id.toFixed() // now allowed after type checking (now id is number)
    }
}

// arrays

let data: number[] = [1, 2, 3, 4]
let data2: string[] = ["one", "two", "three"]
let data3: string[] | number[] = [1, 2, 3] // value can only be full of number or string (not mixed)
let data4: (string | number)[] = [1, "two", 3]

let pi: 3.14 = 3.14
// pi = 3.145 // not allowed

let seatAllotment : "aisle" | "middle" | "window" // values can be only any of it
