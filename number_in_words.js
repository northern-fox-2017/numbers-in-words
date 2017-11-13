var satuan=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
var puluhan=['','','dua puluh','tiga puluh','empat puluh','lima puluh','enam puluh','tujuh puluh','delapan puluh','sembilan puluh'];
var belasan=['sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];

function convert_millions(number){
    if (number>=1000000){
        return convert_millions(Math.floor(number/1000000))+" juta "+convert_thousands(number%1000000);
    }else{
        return convert_thousands(number);
    }
}

function convert_thousands(number){
  if(number>=1000){
    return convert_thousands(Math.floor(number/1000)) + " ribu " + convert_hundreds(number%1000);
  }else{
    return convert_hundreds(number);
  }
}

function convert_hundreds(number){
  if(number>99){
    return convert_hundreds(Math.floor(number/100)) + " ratus " + convert_tens(num%100);
  }else{
    return convert_tens(number);
  }
}

function convert_tens(number){
  if(number<10){
    return satuan[number];
  }else if(number>=10 && number<20){
    return belasan[number-10];
  }else{
    return puluhan[Math.floor(number/10)] + " "+satuan[number%10];
  }
}

function numberToWords(number) {
  // Your code here
  if (number === 0){
    return "nol";
  }else if(number === 100){
    console.log("seratus");
  }else if(number === 1000){
    console.log("seribu");
  }else if(number === 100000){
    console.log("seratus ribu");
  }else if(number === 100000000){
    console.log("seratus juta");
  }else{
    return convert_millions(number);
  }
}

console.log(numberToWords(9009009));

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
