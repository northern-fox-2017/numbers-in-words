function numberToWords(number) {
  var res = [];
  var library = [
    [1, 'satu'],
    [2, 'dua'],
    [3, 'tiga'],
    [4, 'empat'],
    [5, 'lima'],
    [6, 'enam'],
    [7, 'tujuh'],
    [8, 'delapan'],
    [9, 'sembilan'],
    [10, 'sepuluh'],
    [11, 'sebelas'],
    [12, 'dua belas'],
    [100, 'seratus'],
  ];

  var separator = [' puluh ', ' ratus ', ' ribu '];
  var split = number.toString().split('');
  var panjang = number.toString().split('').length;

  if (panjang === 1) {
    return library[number - 1][1];
  } else {
    if (panjang === 2) {
      return library[split[0] - 1][1] + separator[0] + numberToWords(split[1]);
    }

    if (panjang === 3) {
      var angkaPuluhan = number % 100;
      if (split[0] === 1) {
        return 'seratus' + numberToWords(angkaPuluhan);
      } else {
        return library[split[0] - 1][1] + separator[1] + numberToWords(angkaPuluhan);
      }
    }
  }
}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(4));
console.log(numberToWords(999));
console.log(numberToWords(304));
console.log(numberToWords(422));
// console.log(numberToWords(38079));
// console.log(numberToWords(82102713));
