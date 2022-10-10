export function validateNumber(numberToValidate: string) {
    return (numberToValidate.length === 10 || numberToValidate.length === 11) ? true : false;
}