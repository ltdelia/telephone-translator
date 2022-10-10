export function validateNumber(numberToValidate: string) {
    if(numberToValidate.length === 10){
        if(numberToValidate[0] == '0' || numberToValidate[0] == '1'){
            return false;
        } else {
            return true;
        }
    } else if(numberToValidate.length === 11){
        return true;
    } else {
        return false;
    }
}