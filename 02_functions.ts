function addNum(num :number) {
    return num+1
}

addNum(5)

function signUpUser(name :string, email :string, isLoggedIn :boolean) { }
signUpUser("Aashin", "aash@gmail.com", true)

let login = (name: string, email: string, isLoggedIn: boolean = false) => { }
login("Aashin", "aash@gmail.com")

// function params and return type, type checking
function multiplyNum(num: number): number{
    return num*2
}
multiplyNum(4)


let heroes = ["thor", "ironman", "spidey"]
// let heroes = [1,2,3]
heroes.map((hero): string => {
    return `my hero is ${hero}`
})


function consoleError(error: string): void {
    console.log(error);
}

function handleError(error: string): never {
    throw new Error(error)
    
}


export {}