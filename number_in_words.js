function numberToWords(number) {
  let unit = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

  if(number < 12) {
    return unit[number];
  } else if(number < 20) {
    return numberToWords(number % 10) + ' belas ';
  } else if(number < 100) {
    return numberToWords((number - (number % 10)) / 10) + ' puluh ' + numberToWords(number % 10);
  } else if(number < 200) {
    return 'seratus ' + numberToWords(number % 100);
  } else if(number < 1000) {
    return numberToWords((number - (number % 100)) / 100) + ' ratus ' + numberToWords(number%100);
  } else if(number < 2000) {
    return 'seribu ' + numberToWords(number % 1000);
  } else if(number < 10000) {
    return numberToWords((number - (number % 1000)) / 1000) + ' ribu ' + numberToWords(number%1000);
  } else if(number < 100000) {
    return numberToWords((number - (number % 10000)) / 10000) + ' puluh ' + numberToWords(number%10000);
  }


}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(999));
console.log(numberToWords(430));
console.log(numberToWords(25));
console.log(numberToWords(5));
console.log(numberToWords(13333));
console.log(numberToWords(132));
console.log(numberToWords(9999));
console.log(numberToWords(99999));

// module.exports = {
//   numberToWords: numberToWords
// }
