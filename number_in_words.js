function numberToWords(number) {
  // Your code here
  var angka = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  
  if(number < 12){
    return angka[number]
  }
  if(number < 20){
    return angka[number -10 ] + ' belas'
  }
  if(number < 100){
    return angka[Math.floor(number / 10)] + ' puluh ' + angka[Math.round(number % 10)]
  }
  if(number < 200){
    return 'seratus ' + numberToWords(number % 100)
  }
  if(number < 1000){
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
  }
  if(number < 2000){
    return 'seribu ' + numberToWords(number % 1000)
  }
  if(number < 11000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  if(number < 12000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  if(number < 20000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  if(number < 100000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  if(number < 200000){
    return numberToWords(Math.floor(number / 1000)) + 'ribu ' + numberToWords(number % 1000)
  }
  if(number < 1000000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  if(number < 10000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number %  1000000)
  }
  if(number < 11000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }
  if(number < 100000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }
  if(number < 1000000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }
  if(number < 10000000000){
    return numberToWords(Math.floor(number / 1000000000)) + ' miliar ' + numberToWords(number % 1000000000)
  }
  // if(number < )
}
// Driver code
console.log(numberToWords(9999999999));

// module.exports = {
//   numberToWords: numberToWords
// }
