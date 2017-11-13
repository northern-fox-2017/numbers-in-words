function numberToWords(number) {
  // Your code here
  var angka = [0,1,2,3,4,5,6,7,8,9,10,11]
  var huruf = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sebilan','sepuluh','sebelas'];
  var hasil = '';
  var split = number.toString().split('');

  if (number == 0) {
    return hasil;
  }
  if (number <= 11) {
    hasil += huruf[number];
  }

  if (number > 11 && number < 20) {
    hasil += numberToWords(number % 10) +' belas'
  }

  if (number >= 20 && number < 100 ) {
    if (split[1] == 0) {
      hasil += numberToWords(number % 10) +' puluh'
    }else {
      hasil += numberToWords(Math.floor(number / 10)) +' puluh '+ numberToWords(number % 10)
    }
  }

  if (number >= 100 && number < 1000) {
    if (split[0] == 1 && number % 100 == 0) {
      hasil += 'seratus'
    }else if (number % 100 == 0) {
      hasil += numberToWords(number / 100)+' ratus'
    }else {
      hasil += numberToWords(Math.floor(number / 100))+' ratus '+numberToWords(number % 100)
    }
  }

  if (number >= 1000 && number < 10000) {
    if (split[0] == 1 && number % 1000 == 0) {
      hasil += 'seribu'
    }else if (number % 1000 == 0) {
      hasil += numberToWords(number / 1000)+' ribu'
    }else {
      hasil += numberToWords(Math.floor(number / 1000))+' ribu '+numberToWords(number % 1000)
    }
  }

  if (number >= 10000 && number < 100000) {
    if (number % 1000 == 0) {
      hasil += numberToWords(number / 1000)+' ribu'
    }else {
      hasil += numberToWords(Math.floor(number / 1000))+' ribu '+numberToWords(number % 1000)
    }
  }

  if (number >= 100000 && number < 1000000) {
    if (number % 1000 == 0) {
      hasil += numberToWords(number / 1000)+' ribu'
    }else {
      hasil += numberToWords(Math.floor(number / 1000))+' ribu '+numberToWords(number % 1000)
    }
  }

  if (number >= 1000000 && number < 1000000000) {
    if (number % 1000000 == 0) {
      hasil += numberToWords(number / 1000000)+' juta'
    }else {
      hasil += numberToWords(Math.floor(number / 1000000))+' juta '+numberToWords(number % 1000000)
    }
  }

  if (number >= 1000000000 && number < 1000000000000000) {
    if (number % 1000000000 == 0) {
      hasil += numberToWords(number / 1000000000)+' miliar'
    }else {
      hasil += numberToWords(Math.floor(number / 1000000000))+' miliar '+numberToWords(number % 1000000000)
    }
  }

  if (number >= 1000000000000000) {
    if (number % 1000000000000000 == 0) {
      hasil += numberToWords(number / 1000000000000000)+' triliyun'
    }else {
      hasil += numberToWords(Math.floor(number / 1000000000000000))+' triliyun '+numberToWords(number % 1000000000000000)
    }
  }

  return hasil
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(211138579));
console.log(numberToWords(9952211138579));
console.log(numberToWords(2129952211138579));

module.exports = {
  numberToWords: numberToWords
}
