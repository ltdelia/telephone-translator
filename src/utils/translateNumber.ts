import { TelephoneLookup } from "../lookups/TelephoneLookup";

export function translateNumber(numberToTranslate: string) {
    let translatedNumber: string = '';
    for(var i=0; i<numberToTranslate.length; i++){
        // console.log(numberToTranslate, translatedNumber);
        let number = numberToTranslate[i];
        if(isNaN(parseInt(number))) {
        //   console.log(number, 'is not a number. Translating...');
          let letter = number.toLowerCase();
          TelephoneLookup.forEach((digit) => {
            if(digit.letters.indexOf(letter) !== -1) {
              let newNumber = digit.number.toString();
              translatedNumber += newNumber;
            }
          })
        } else {
          translatedNumber += number;
        }
      }
      return translatedNumber;
}