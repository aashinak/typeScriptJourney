interface User {
    email: string,
    userId: number,
    googleId?: string,
    readonly dbId: number,
    startTrial: () => string,
    endTrial(): string,
    getCoupon(couponName: string, val: number): number
}

let firstUser: User = {
    email: "aash@gmail.com",
    userId: 5273, dbId: 1234,
    startTrial: () => "trialStarted",
    endTrial() {
        return "trialEnded"
    },
    getCoupon: (name: "aashin", off: 20) => {
        return off
    },
    gitHubId: "gygdj9u4ugbj"
}

// firstUser.dbId = 323 // not allowed

// reopening of interface
interface User{
    gitHubId: string 
}

// inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
// here used the extended interface Admin (role is extra added than User interface)
let firstAdmin: Admin = {
    email: "aash@gmail.com",
    userId: 5273, dbId: 1234,
    startTrial: () => "trialStarted",
    endTrial() {
        return "trialEnded"
    },
    getCoupon: (name: "aashin", off: 20) => {
        return off
    },
    gitHubId: "gygdj9u4ugbj",
    role: "admin"
}

/* difference b/w type and interface (refer doc for code references)
   -> type once assigned then it cannot be reassigned, and interface not
   -> interface can be easily inherited using extends keyword
   -> in type we have to use & to inherit from another type
   -> 
*/

export {}