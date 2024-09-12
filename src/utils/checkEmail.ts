
export async function checkEmail( DB_email : string, SignIn_email : string ) : Promise < boolean > {
    if( DB_email == SignIn_email )
        return true
    else
        return false
}