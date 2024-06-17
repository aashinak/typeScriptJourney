// class User{
//     public email: string
//     name: string
//     private readonly city: string = "calicut"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
// let aashin = new User("aash@gmail.com", "aashin")
// aashin.city = "" // Cannot assign to 'city' because it is a read-only property
// still the value can be read, to make it unreadable too use private
// aashin.city // Property 'city' is private and only accessible within class 'User'
// by default those not marked as private are public

class User{
    
    // private _courseCount = 1 // can only be used inside User object
    protected _courseCount = 1 // can be used only inside User and subuser(inherited class)
    private readonly city: string = "calicut"
    constructor(public email: string, public name: string, private userId: string) {
        this.email = email
        this.name = name
    }

    private deleteToken() {
        console.log("token deleted");
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Cousre count should be more than one")
        }
        this._courseCount = courseNum
    }

}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}
let aashin = new User("aash@gmail.com", "aashin", "isdi942")
// aashin.deleteToken()