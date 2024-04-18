
export function isVaildDni ( dni : string ) : boolean {
    const dniNums = +dni.substring ( 0 , dni.length-1 );
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    if ( letters [dniNums%23] == dni.substring ( dni.length-1 , dni.length )) {

        return true

    }

    else {

        return false
        
    }
}


