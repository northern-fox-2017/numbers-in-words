function numberToWords(number) {
  var words =['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan']
   if(number<10){
     return words[number]
   }
   else if(number === 10){
     return 'Sepuluh'
   }
   else if(number === 11){
     return 'Sebelas'
   }
   else if(number >10 && number < 20){
     return words[number %10]+' Belas '
   }
   else if(number < 100){
     return numberToWords(Math.floor(number/10))+ ' Puluh ' + numberToWords(number%10)
   }
   else if(number < 200 ){
     return 'Seratus '+numberToWords(number%100)
   }
   else if(number < 1000){
     return numberToWords(Math.floor(number/100))+' Ratus '+ numberToWords(number%100)
   }
   else if(number < 2000){
     return 'Seribu '+ numberToWords(number%1000)
   }
   else if (number < 20000) {
     return numberToWords(Math.floor(number/1000))+ ' Ribu '+numberToWords(number%1000)
 }
  else if( number <200000){
    return numberToWords(Math.floor(number/1000))+ ' Ribu '+numberToWords(number%1000)
  }
  else if( number <2000000){
    return 'Sejuta '+ numberToWords(number%1000000)
  }
}

// Driver code
console.log(numberToWords(9));
console.log(numberToWords(14));
console.log(numberToWords(26));
console.log(numberToWords(167));
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
