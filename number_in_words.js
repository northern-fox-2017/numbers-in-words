function numberToWords(number) {
  // Your code here
  var satu=['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  var puluh=['nol','se','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  var satuan=['belas','puluh','ratus','ribu','puluh ribu','ratus ribu','juta','puluh juta','ratus juta','milyar','puluh milyar','ratus milyar','triliun','puluh triliun','ratus triliun'];
  var hasil='';
  var strNum=String(number);
  if(strNum.length<=2){
    if(number===0){
      return ''
    }else{
      return hasil = satu[number];
    }
  }else if(number<20&&number>10){
    return hasil = puluh[Math.floor(number/10)] +' '+ satuan[0]
  }else {
    if(number>10&&number<20){
      hasil = puluh[Math.floor(number/10)] +' '+ satuan[1]
    }
    if(strNum.length===2){
      hasil = puluh[Math.floor(number/10)] +' '+ satuan[1]
      number=number%10;
    }else if(strNum.length===3){
      hasil = puluh[Math.floor(number/100)] +' '+ satuan[2]
      number=number%100;
    }else if(strNum.length===4){
      hasil = puluh[Math.floor(number/1000)] +' '+ satuan[3]
      number=number%1000;
    }else if(strNum.length===5){
      hasil = puluh[Math.floor(number/10000)] +' '+ satuan[4]
      number=number%10000;
    }else if(strNum.length===6){
      hasil = puluh[Math.floor(number/100000)] +' '+ satuan[5]
      number=number%100000;
    }else if(strNum.length===7){
      hasil = puluh[Math.floor(number/1000000)] +' '+ satuan[6]
      number=number%1000000;
    }else if(strNum.length===8){
      hasil = puluh[Math.floor(number/10000000)] +' '+ satuan[7]
      number=number%10000000;
    }else if(strNum.length===9){
      hasil = puluh[Math.floor(number/100000000)] +' '+ satuan[8]
      number=number%100000000;
    }else if(strNum.length===10){
      hasil = puluh[Math.floor(number/1000000000)] +' '+ satuan[9]
      number=number%1000000000;
    }else if(strNum.length===11){
      hasil = puluh[Math.floor(number/10000000000)] +' '+ satuan[10]
      number=number%10000000000;
    }else if(strNum.length===12){
      hasil = puluh[Math.floor(number/100000000000)] +' '+ satuan[11]
      number=number%100000000000;
    }else if(strNum.length===13){
      hasil = puluh[Math.floor(number/1000000000000)] +' '+ satuan[12]
      number=number%1000000000000;
    }else if(strNum.length===14){
      hasil = puluh[Math.floor(number/10000000000000)] +' '+ satuan[13]
      number=number%10000000000000;
    }else if(strNum.length===15){
      hasil = puluh[Math.floor(number/100000000000000)] +' '+ satuan[14]
      number=number%100000000000000;
    }
    return hasil +' '+ numberToWords(number)
  }

}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
