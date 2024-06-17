let greetings: string = "Hello Aashin!!"

greetings.toLocaleLowerCase()
console.log(greetings);

// number

let userId = 3434.124
// userId = "ehouh" // Type 'string' is not assignable to type 'number'.ts(2322)
userId.toFixed(2)

// boolean
let isLoggedIn: boolean = true

// any
// if we use any it loses typescripts type checking power
// so use less any in code 😊
let hero // let hero: any
function myHero() {  // function is not meant to declare like this
    return "thor"
}
hero = myHero()


export{}
