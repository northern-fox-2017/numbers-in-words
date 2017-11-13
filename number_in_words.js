function numberToWords(number) {
  // Your code here
  var satu=['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas','Seratus ','Seribu '];
  var satuan=[' Belas ',' Puluh ',' Ratus ',' Ribu ',' Juta ',' Milyar ',' Triliun ']
  if(number<12){
    return satu[number];
  }else if(number>=12&&number<20){
    return satu[number%10] + satuan[0]
  }else if(number>=20&&number<100){
    return numberToWords(Math.floor(number/10))+satuan[1]+ numberToWords(number%10)
  }else if(number>=100&&number<200){
    return satuan[12]+ numberToWords(number%100)
  }else if(number>=200&&number<1000){
    return numberToWords(Math.floor(number/100))+satuan[2]+ numberToWords(number%100)
  }else if(number>=1000&&number<2000){
    return satuan[13]+numberToWords(number%1000)
  }else if(number>=2000&&number<1000000){
    return numberToWords(Math.floor(number/1000))+satuan[3]+ numberToWords(number%1000)
  }else if(number>=1000000&&number<1000000000){
    return numberToWords(Math.floor(number/1000000))+satuan[4]+ numberToWords(number%1000000)
  }else if(number>=1000000000&&number<1000000000000){
    return numberToWords(Math.floor(number/1000000000))+satuan[5]+ numberToWords(number%1000000000)
  }else if(number>=1000000000000&&number<1000000000000000){
    return numberToWords(Math.floor(number/1000000000000))+satuan[6]+ numberToWords(number%1000000000000)
  }
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
