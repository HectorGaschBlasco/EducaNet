export function isValidPassword (password: string, rpassword: string): boolean {
    let counter = 0
    for( let i = 0; i< password.length; i++ ) {
        if( password[ i ] == rpassword[ i ] ){
            counter++
        }
    }
    if ( counter ==  password.length ) {
            return true
        } 
    else {
        return false
    }
}