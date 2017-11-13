function numberToWords(number) {
  if(number == 0){
    return ''
  }
  
  let numDepan = Number(String(number)[0])
  let numBelas = Number(String(number)[1])
  
  function singleNumber(number){
    if(number == 9){
      return 'sembilan' + ' '
    } else if (number == 8) {
      return 'delapan' + ' '
    } else if (number == 7) {
      return 'tujuh' + ' '
    } else if (number == 6) {
      return 'enam' + ' '
    } else if (number == 5) {
      return 'lima' + ' '
    } else if (number == 4) {
      return 'empat' + ' '
    } else if (number == 3) {
      return 'tiga' + ' '
    } else if (number == 2) {
      return 'dua' + ' '
    } else if (number == 1) {
      return 'satu' + ' '
    }
  }
  
  function belasan(number){
    if (numDepan == 1 && numBelas == 1) {
      return 'sebelas'
    } else {
      return singleNumber(numBelas) + 'belas' + ' '
    }
  }
  
  function puluhan(number){
    if(numDepan == 1 && numBelas == 0){
      return 'sepuluh' + ' '
    } else {
      return singleNumber(numDepan) + 'puluh' + ' '
    }
  }
  
  function ratusan(number){
    if(numDepan == 1){
      return 'seratus' + ' '
    } else {
      return singleNumber(numDepan) + 'ratus' + ' '
    }
  }
  
  if (number >= 10000000 && number < 100000000) {
    if (number < 20000000 && number >= 11000000) {
      return belasan(number) + 'juta' + ' ' + numberToWords(number - numDepan*10000000 - numBelas*1000000)
    } else if (number >= 10000000 && number < 11000000){
      return puluhan(number) + 'juta' + ' ' + numberToWords(number - numDepan*10000000)
    } else {
      return puluhan(number) + numberToWords(number - numDepan*10000000)
    }
  } else if (number >= 1000000 && number < 10000000) {
    return singleNumber(numDepan) + 'juta' + ' ' + numberToWords(number - numDepan*1000000)
  } else if (number >= 100000 && number < 1000000) {
    return ratusan(number) + numberToWords(number - numDepan*100000)
  } else if (number >= 10000 && number < 100000) {
    if(number < 20000 && number >= 11000){
      return belasan(number) + ' ribu ' + numberToWords(number - numDepan*10000 - numBelas*1000)
    } else if (numBelas == 0){
      return puluhan(number) + 'ribu ' + numberToWords(number - numDepan*10000)
    } else {
      return puluhan(number) + numberToWords(number - numDepan*10000)
    }
  } else if (number > 1000 && number < 10000) {
    return singleNumber(numDepan) + 'ribu' + ' ' + numberToWords(number - numDepan*1000)
  } else if (number <= 1000 && number > 999){
    return 'seribu' + ' ' + numberToWords(number - 1000)
  } else if (number >= 100 && number < 200){
    return 'seratus' + ' ' + numberToWords(number - 100)
  } else if (number > 100 && number < 1000) {
    return singleNumber(numDepan) + 'ratus ' + numberToWords(number - numDepan*100)
  } else if (number >= 10 && number < 20) {
    return belasan(number)
  } else if (number >= 10 && number < 20) {
    return 'sepuluh' + ' ' + numberToWords(number - 10)
  } else if (number >= 20 && number < 100) {
    return puluhan(number) + numberToWords(number - numDepan*10)
  } else if (number < 10) {
    return singleNumber(number)
  } else if (number == 0) {
    return ''
  }
}




// Driver code
// console.log(numberToWords(70000007));
// console.log(numberToWords(99999999));
// console.log(numberToWords(33291603));
// console.log(numberToWords(10170137));
// console.log(numberToWords(9999999));
// console.log(numberToWords(999999));
// console.log(numberToWords(3391603));
// console.log(numberToWords(1017013));
//
console.log(numberToWords(1000000));

// console.log(numberToWords(99999));
// console.log(numberToWords(339603));
// console.log(numberToWords(101713));
// console.log(numberToWords(9999));
// console.log(numberToWords(29603));
// console.log(numberToWords(10786));
// console.log(numberToWords(999));
// console.log(numberToWords(296));
// console.log(numberToWords(107));
// console.log(numberToWords(22));
// console.log(numberToWords(11));
// console.log(numberToWords(213));
// console.log(numberToWords(715));

module.exports = {
  numberToWords: numberToWords
}