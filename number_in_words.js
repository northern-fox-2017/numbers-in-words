function numberToWords(number) {

  let words = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan',
               'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas',
               'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  let hasil = ''

  if(number < 20){
    hasil = words[number]
  }
  else if(number < 100){
    hasil = words[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10)
  }
  else if(number < 200){
    hasil = 'seratus ' + numberToWords(number % 100)
  }
  else if(number < 1000){
    hasil = words[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100)
  }

  else if(number < 2000){
    hasil = 'seribu ' + numberToWords(number % 1000)
  }
  else if(number < 10000){
    hasil = words[Math.floor(number / 1000)] + ' ribu ' + numberToWords(number % 1000)
  }
  else if(number < 20000){
    hasil = words[Math.floor(number / 1000)] + ' ribu ' + numberToWords(number % 1000)
  }
  else if(number < 100000){
    if(number % 10000 == 0){
      hasil = words[Math.floor(number / 10000)] + ' puluh ribu '
    }
    else{
      hasil = words[Math.floor(number / 10000)] + ' puluh ' + numberToWords(number % 10000)
    }
  }
  else if(number < 200000){
    if (number % 100000 == 0) {
      hasil = 'seratus ribu'
    } else {
      hasil = 'seratus ' + numberToWords(number % 100000)
    }
  }
  else if(number < 1000000){
    if(number % 100000 == 0){
      hasil = words[Math.floor(number / 100000)] + ' ratus ribu '
    }
    else{
      hasil = words[Math.floor(number / 100000)] + ' ratus ' + numberToWords(number % 100000)
    }
  }
  else if(number < 10000000){
    hasil = words[Math.floor(number / 1000000)] + ' juta ' + numberToWords(number % 1000000)
  }
  else if(number < 20000000){
    if(number % 1000000 == 0){
      hasil = words[Math.floor(number / 1000000)] + ' juta '
    }
    else{
      hasil = words[Math.floor(number / 1000000)] + ' juta ' + numberToWords(number % 1000000)
    }
  }
  else if(number < 100000000){
    if(number % 10000000 == 0){
      hasil = words[Math.floor(number / 10000000)] + ' puluh juta'
    }
    else{
      hasil = words[Math.floor(number / 10000000)] + ' puluh ' + numberToWords(number % 10000000)
    }
  }
  else if(number < 200000000){
    if (number % 100000000 == 0) {
      hasil = 'seratus juta '
    } else {
      hasil = 'seratus ' + numberToWords(number % 100000000)
    }
  }
  else if(number < 1000000000){
    if(number % 100000000 ==  0){
      hasil = words[Math.floor(number / 100000000)] + ' ratus juta'
    }
    else{
      hasil = words[Math.floor(number / 100000000)] + ' ratus ' + numberToWords(number % 100000000)
    }
  }
  else if(number < 20000000000){
    hasil = words[Math.floor(number / 1000000000)] + ' milyar ' + numberToWords(number % 1000000000)
  }
  else if(number < 100000000000){
    if(number % 10000000000 == 0){
      hasil = words[Math.floor(number / 10000000000)] + ' puluh milyar'
    }
    else {
      hasil = words[Math.floor(number / 10000000000)] + ' puluh ' + numberToWords(number % 10000000000)
    }
  }
  else if(number < 200000000000){
    if (number % 100000000000 == 0) {
      hasil = 'seratus milyar '
    } else {
      hasil = 'seratus ' + numberToWords(number % 100000000000)
    }
  }
  else if(number < 1000000000000){
    if(number % 100000000000 == 0){
      hasil = words[Math.floor(number / 100000000000)] + ' ratus milyar'
    }
    else{
      hasil = words[Math.floor(number / 100000000000)] + ' ratus '+ numberToWords(number % 100000000000)
    }
  }
  else if(number < 20000000000000){
    hasil = words[Math.floor(number / 1000000000000)] + ' triliun ' + numberToWords(number % 1000000000000)
  }
  else if(number < 100000000000000){
    if(number % 10000000000000 == 0){
      hasil = words[Math.floor(number / 10000000000000)] + ' puluh triliun'
    }
    else{
      hasil = words[Math.floor(number / 10000000000000)] + ' puluh ' + numberToWords(number % 10000000000000)
    }
  }
  else if(number < 200000000000000) {
    if (number % 100000000000000 == 0) {
      hasil = 'seratus triliun'
    } else {
      hasil = 'seratus ' + numberToWords(number % 100000000000000)
    }
  }
  else if (number < 1000000000000000) {
    hasil = words[Math.floor(number / 100000000000000)] + ' ratus ' + numberToWords(number % 100000000000000)
  }
  return hasil
}

console.log(numberToWords(4));
console.log(numberToWords(14));
console.log(numberToWords(27));
console.log(numberToWords(134));
console.log(numberToWords(900));
console.log(numberToWords(1100));
console.log(numberToWords(2234));
console.log(numberToWords(11374));
console.log(numberToWords(66000));
console.log(numberToWords(172111));
console.log(numberToWords(689000));
console.log(numberToWords(1689222));
console.log(numberToWords(5500000));
console.log(numberToWords(17590000));
console.log(numberToWords(25592230));
console.log(numberToWords(125592230));
console.log(numberToWords(112600000));
console.log(numberToWords(750000000));
console.log(numberToWords(13892500000));
console.log(numberToWords(97600000000));
console.log(numberToWords(100000000000));
console.log(numberToWords(980000000000));
console.log(numberToWords(12480000000000));
console.log(numberToWords(30000000000000));
console.log(numberToWords(120000000000000));
console.log(numberToWords(820000000000000));

module.exports = {
  numberToWords: numberToWords
}
