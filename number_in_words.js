function numberToWords(number) {
  var str = ['satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan '];
  var num = [1,2,3,4,5,6,7,8,9];

  var bilang = ['','puluh ', 'ratus ', 'ribu ', 'puluh ', 'ratus ', 'juta '];
  var angka = [1,10,100,1000,10000,100000,1000000];
  var tempNum = 0;
  var tempStr = 0;
  var index = 0;
  var result = "";
  var temp = "";
  for (var i = angka.length-1; i >= 0; i--) {
    while (number >= angka[i]) {
      tempNum = Math.floor(number / angka[i]);
      index = num.indexOf(tempNum);
      result += str[index];
      result += bilang[i];  
      if ( ((String(number).length === 6) || (String(number).length === 5)) && ((number % 100000 === 0) || (number % 10000 === 0)) ) {
        result += 'ribu';
      }
      number -= (num[index] * angka[i]);  
    }  

      if (number > 19) {
        while (number >= angka[i]) {
            tempNum = Math.floor(number / angka[i]);
            index = num.indexOf(tempNum);
            result += str[index];
            result += bilang[i];
            number -= (num[index] * angka[i]);
        } 
    }   else if (number > 0 && number < 10) {
        tempNum = Math.floor(number / angka[i]);
        index = num.indexOf(tempNum);
        result += str[index];
        result += bilang[i];
    }   else if (number > 9 && number < 20) {
        tempNum = number % 10;
        index = num.indexOf(tempNum);
        result += str[index] + ' belas';
        break;
    }
    
  }
  return result;
}

// Driver code
// console.log(numberToWords(10000000));
// console.log(numberToWords(1000000));
// console.log(numberToWords(1500000));
// console.log(numberToWords(200000));
// console.log(numberToWords(123000));
console.log(numberToWords(123));
console.log(numberToWords(99));
console.log(numberToWords(567));
console.log(numberToWords(17));
console.log(numberToWords(317));

// module.exports = {
//   numberToWords: numberToWords
// }
