
function numberToWords(number) {
  // Your code here
  let huruf = ['','satu','dua','tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

    if(number == 0 ){
      return huruf[number]
    } else if(number == 1) {
        return huruf[number]
    } else if(number == 2) {
        return huruf[number]
    } else if(number == 3) {
        return huruf[number]
    } else if(number == 4) {
        return huruf[number]
    } else if(number == 5) {
        return huruf[number]
    } else if(number == 6) {
        return huruf[number]
    } else if(number == 7) {
        return huruf[number]
    } else if(number == 8) {
        return huruf[number]
    } else if(number == 9) {
        return huruf[number]
    } else if(number == 10) {
        return 'sepuluh'
    } else if(number == 11) {
        return 'sebelas'
    } else if(number < 20) {
        return numberToWords(number - 10) + ' belas'
    } else if(number < 100) {
        return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
    } else if (number < 200) {
        return 'seratus ' + numberToWords(number % 100)
    } else if (number < 1000) {
        return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
    } else if (number < 2000) {
        return 'seribu ' + numberToWords(number % 1000)
    } else if (number < 1000000) {
        return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
    } else if (number < 1000000000) {
        return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords (number % 1000000)
    } else if (number < 1000000000000) {
        return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords (number % 1000000000)
    } else if (number < 1000000000000000) {
        return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords (number % 1000000000000)
    }
  }

// Driver code
console.log(numberToWords(11));
console.log(numberToWords(23));
console.log(numberToWords(185));
console.log(numberToWords(999));
console.log(numberToWords(1526));
console.log(numberToWords(31526));
console.log(numberToWords(152636));
console.log(numberToWords(93456875));
console.log(numberToWords(99000000000000));

module.exports = {
  numberToWords: numberToWords
}
