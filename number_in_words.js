function numberToWords(number) {

  let satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
    // console.log()
  if (number < 12){ return satuan[number];}
  else if (number < 20){ return numberToWords(number % 10) + ' belas';}
  else if (number < 100){ return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);}
  else if (number < 200){ return 'seratus ' + numberToWords(number % 100) }
  else if (number < 1000){ return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(Math.floor(number % 100))}
  else if( number < 2000){ return 'seribu ' + numberToWords(Math.floor(number % 1000))}
  // else if( number < 2000){ return 'seribu ' + numberToWords(Math.floor(number % 1000))}
  else if( number < 10000){ return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(Math.floor(number % 1000))}
  else if( number < 20000){ return numberToWords(Math.floor(number / 1000))+ ' ribu ' + numberToWords(Math.floor(number % 1000))}
  else if( number < 100000){ return numberToWords(Math.floor(number / 10000)) + ' puluh ' + numberToWords(Math.floor(number % 10000))}
  else if( number < 200000){ return 'seratus ribu ' + numberToWords(number % 100000)}
  else if( number < 1000000){ return  numberToWords(Math.floor(number % 100000))}
  else if( number < 1000000000){ return  numberToWords(Math.floor(number / 1000000)) + 'juta ' + numberToWords(Math.floor(number % 1000000 ))}


}
// // Driver code
console.log(numberToWords(191111));
// 90.191.111

// module.exports = {
//   numberToWords: numberToWords
// }
console.log(191111 % 100000)
// Driver code
console.log(numberToWords(1));
console.log(numberToWords(100));
console.log(numberToWords(10400));
console.log(numberToWords(1000000));
module.exports = {
  numberToWords: numberToWords
}
