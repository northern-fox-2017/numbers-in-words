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
  }
}

console.log(numberToWords(999));
// Driver code
// console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }