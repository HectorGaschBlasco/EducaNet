import bcrypt from 'bcrypt'

export async function checkPassword ( storedPassword : string , providedPassword : string ) : Promise < boolean > {
    
    try {

        return await bcrypt.compare(providedPassword, storedPassword);

    } catch( e ) {

        console.log('Error comparing passwords', e);

        throw e;
        
    }
}
