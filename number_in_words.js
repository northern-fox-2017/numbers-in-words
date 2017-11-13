function numberToWords(number) {
  var str = '';
  if (number === 1) {
    var word = 'satu';
    return word;
  }
  if (number === 2) {
    var word = 'dua';
    return word;
  }
  if (number === 3) {
    var word = 'tiga';
    return word;
  }if (number === 4) {
    var word = 'empat';
    return word;
  }
  if (number === 5) {
    var word = 'lima';
    return word;
  }
  if (number === 6) {
    var word = 'enam';
    return word;
  }
  if (number === 7) {
    var word = 'tujuh';
    return word;
  }
  if (number === 8) {
    var word = 'delapan';
    return word;
  }
  if (number === 9) {
    var word = 'sembilan';
    return word;
  }
  if (number > 10 && number < 20) {
    var satuan = number % 10;
    if (number == 11) {
      return 'sebelas'
    }
    else {
      return numberToWords(number%10) + " belas";
    }
  }
  if (number > 19 && number < 100) {
   return numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number%10);
  }
  if (number > 100 && number < 1000) {
    var ratusan = Math.floor(number/100);
    if (ratusan == 1) {
      var ratusanStr = 'setarus '
    }
    else if (ratusan > 1) {
      var ratusanStr = numberToWords(ratusan) + ' ratus '
    }
    var puluhan = Math.floor((number%100)/10);
    var satuan = number%10;
    return ratusanStr + numberToWords(puluhan) + ' puluh ' + numberToWords(satuan);
  }
  if (number > 999 && number < 10000) {
    var ribuan = Math.floor(number % 1000);
    var ratusan = Math.floor((number%1000)/100);
    var puluhan = Math.floor((number%1000)/10);
    var satuan = number%100;
    return numberToWords(ribuan)+' ribu '+ numberToWords(ratusan)+' ratusan '+numberToWords(puluhan)+' puluh '+ numberToWords(satuan);
  }

}

// Driver code
//console.log(numberToWords(1000000));
console.log(numberToWords(9999));

module.exports = {
  numberToWords: numberToWords
}
