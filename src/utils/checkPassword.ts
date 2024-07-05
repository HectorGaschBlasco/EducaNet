import { compare } from "bcrypt-ts";


export async function checkPassword ( providedPassword : string , storedPassword : string ) : Promise < boolean > {
    
    try {

        return await compare(providedPassword, storedPassword);

    } catch( e ) {

        console.log('Error comparing passwords', e);

        throw e;
        
    }
}
