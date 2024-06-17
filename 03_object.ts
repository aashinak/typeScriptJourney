// const User = {
//     name: "Aashin",
//     email: "aash@gmail.com",
//     isActive: true
// }

// function useObject({ name, isPaid }: { name: string; isPaid: boolean}) {
// }
// useObject({ name: "hey", isPaid: false })

// useObject({ name: "hey", isPaid: false, email: "aashin"}) // wierd this is not allowed , but the one below allowed
// let newUser = { name: "hey", isPaid: false, email: "aashin"} // this is allowed
// useObject(newUser)

// function createUser():{ name: string, isPaid: boolean } {
//     return { name: "hey", isPaid: false }
// }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@ TYPE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User  { 
//     return {name: "", email: "", isActive: true}
// }
// createUser({ name: "", email: "", isActive: true })

//..........................readonly and ?..................................

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardNo?: number // ? turns it to optional
}

let user: User = {
    _id: "abcd",
    name: "Aashin",
    email: "aash@gmail",
    isActive: true
}
// user._id = "fwiu" // cannot be reassigned because it is readonly
user.email = "aash@gmail.com" // this is allowed


type cardNumber = {
    cardNumber: number
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & { cvv: number }

