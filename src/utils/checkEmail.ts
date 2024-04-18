import { boolean } from "astro/zod";

export function checkEmail(SignIn_email : string , DB_email : string) : boolean {
    if(SignIn_email == DB_email)
        return true
    else
        return false
}