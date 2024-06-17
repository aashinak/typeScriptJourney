// refer narrowing

interface User {
    name: string,
    email: string
}
interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: Admin | User) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    
}