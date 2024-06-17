const score: Array<number> = []
const names: Array<string> = []
// problems
function identityOne(val: number | boolean): number | boolean {
    return val
}

function identityTwo(val: any): any{
    return val
}
// solution
function identityThree<Type>(val: Type): Type{
    return val
}
identityThree(8) // function identityThree<8>(val: 8): 8
function identityFour<T>(val: T): T{
    return val
}
interface Bottle {
    brand: string,
    type: string
}
identityFour<Bottle>({ brand: "decathlon", type: "gym" })

function getSearchProducts<T>(products: T[]): T{
    return products[5]
}
// <T,> can be seen lot in react , used to differentiate it from jsx syntax
const getMoreSearchProducts = <T,>(products: T[]): T => {
    return products[3]
}



// function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object{
//     return {
//         valOne,
//         valTwo
//     }
// }
// anotherFunction(3, 2.64)
 
interface DataBase {
    connection: string,
    username: string
}
function anotherFunction<T, U extends DataBase>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3, { connection: "", username: "" })

//------------------------------example-------------------------------------
interface Quiz {
    name: string, 
    type: string
}
interface Course {
    name: string,
    author: string,
    subject: string
}
class sellable<T>{
    public cart: T[] = []
    addToCart(product: T) {
        this.cart.push(product)
    }
}
//---------------------------------------------------------------------------