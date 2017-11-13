function numberToWords(number) {
  // Your code here
let huruf = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];

if(number == 0){
  return huruf[number]
} else if (number == 1) {
  return hurf[number]
} else if (number == 2) {
  return huruf[number]
} else if (number == 3) {
  return huruf[number]
} else if (number == 4) {
  return huruf[number]
} else if (number == 5) {
  return huruf[number]
} else if (number == 6) {
  return huruf[number]
} else if (number == 7) {
  return huruf[number]
} else if (number == 8) {
  return huruf[number]
} else if (number == 9) {
  return huruf[number]
} else if (number == 10) {
  return 'sepuluh'
} else if (number == 11) {
  return 'sebelas'
} else if (number < 20) {
  return numberToWords(number - 10) + ' belas'
} else if (number < 100) {
  return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
} else if (number < 200) {
  return 'seratus' + numberToWords(number % 100)
} else if (number < 1000) {
  return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
}


}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(999));

console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
