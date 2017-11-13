function numberToWords(number) {
  // Your code here
  var satu=['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  var satuKhusus='se',angkaDepan='';
  var satuan=['belas','puluh','ratus','ribu','juta','milyar','triliun'];
  var hasil='';
  if(String(number).length===1){
    return satu[number];
  }else if(String(number).length===2){
    if(number<20){
      if(number%10===0){
        return satuKhusus+satuan[0]
      }else{
        return satu[number%10] +' '+ satuan[0];
      }
    }else if(number<100){
      if(number%10===0){
        return satu[number/10] +' '+ satuan[1];
      }else{
        return satu[Math.floor(number/10)]+' '+satuan[1]+' '+numberToWords(number%10)
      }
    }
  }else if(String(number).length===3){
    if(number%100===0){
      if(number===100){
        return satuKhusus +satuan[2]
      }else{
        return satu[number/100] +' '+ satuan[2]
      }
    }else{
      if(number-100<=99){
        return satuKhusus + satuan[2]+' '+numberToWords(number%100)
      }else{
        return satu[Math.floor(number/100)] +' '+ satuan[2]+' '+numberToWords(number%100)
      }
    }
  }
}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
