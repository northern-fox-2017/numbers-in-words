function numberToWords(number) {
  var kata    = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan', 'sepuluh', 'sebelas'];
  
  if (number < 12) {
    return kata[number];
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
    return numberToWords((number - (number % 1000000000)) / 1000000000) + ' miliar ' + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
    return numberToWords((number - (number % 1000000000000)) / 1000000000000) + ' triliun ' + numberToWords(number % 1000000000000);
  } else if (number < 1000000000000000000) {
    return numberToWords((number - (number % 1000000000000000)) / 1000000000000000) + ' bilion ' + numberToWords(number % 1000000000000000);
  }
}

// Driver code
console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }
