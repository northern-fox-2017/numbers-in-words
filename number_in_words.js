function numberToWords(number) {
  var bilang = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

  if (number < 12) {
    return bilang[number];
  } else if (number < 20) {
    return numberToWords(number % 10) + ' belas';
  } else if (number < 100) {
    return numberToWords((number - (number % 10)) / 10) + ' puluh ' + numberToWords(number % 10);
  } else if (number < 200) {
    return 'seratus ' + numberToWords(number % 100);
  } else if (number < 1000) {
    return numberToWords((number - (number % 100)) / 100) + ' ratus ' + numberToWords(number % 100);
  } else if (number < 2000) {
    return 'seribu ' + numberToWords(number % 1000);
  } else if (number < 1000000) {
    return numberToWords((number - (number % 1000)) / 1000) + ' ribu ' + numberToWords(number % 1000);
  } else if (number < 1000000000) {
    return numberToWords((number - (number % 1000000)) / 1000000) + ' juta ' + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
    return numberToWords((number - (number % 1000000000)) / 1000000000) + ' milyar ' + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
    return numberToWords((number - (number % 1000000000000)) / 1000000000000) + ' trilyun ' + numberToWords(number % 1000000000000);
  }
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(10079));
console.log(numberToWords(100079));
console.log(numberToWords(1000011));
console.log(numberToWords(820102712));
console.log(numberToWords(90210002713));
console.log(numberToWords(999000002000310));

// module.exports = {
//   numberToWords: numberToWords
// }