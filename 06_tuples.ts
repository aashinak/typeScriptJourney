let myUser: [string, number, boolean]
myUser = ["Aashin", 21, true]
// myUser = [3,"",false] // not allowed

let rgb: [number, number, number] = [255, 132, 160]

type User = [string, number]

let anotherUser: User = ["", 7]
anotherUser[0] = "Aashin"
anotherUser.push("hey") // no errors one bug in typescript

