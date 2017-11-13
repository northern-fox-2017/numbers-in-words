function numberToWords(number) {
  if(number === 0){
    return '';
  }else{
    var out = '';
    var digit = number.toString().length;
    
    var kata = {
    1 :'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan'
    };
    var bilangan = {
      0: 'se',
      1: 'puluh',
      2: 'belas',
      3: 'ratus',
      4: 'ribu',
      5: 'juta',
      6: 'milyar',
      7: 'triliun',
    }
    if(digit >= 13){
      var sisa = Math.floor(number / 1000000000000);
      number = number - (sisa * 1000000000000);
      out = numberToWords(sisa) + bilangan[7];
    }
    else if(digit >= 10){
      var sisa = Math.floor(number / 1000000000);
      number = number - (sisa * 1000000000);
      out = numberToWords(sisa) + bilangan[6];
    }
    else if(digit>=7){
      var sisa = Math.floor(number / 1000000);
      number = number - (sisa * 1000000);
      out = numberToWords(sisa) + bilangan[5];
    }
    else if(digit>=4){
      var sisa = Math.floor(number / 1000);
      number = number - (sisa * 1000);
      out = numberToWords(sisa) + bilangan[4];
    }
    else if(number >= 100){
      if(number % 100 === 0){
        var angkaPertama = number / 100;
        if(angkaPertama === 1){
          out = bilangan[0] + bilangan[3];
          number =  0;
        }else{
          out = kata[angkaPertama] + ' '+bilangan[3];
          number = 0;
        }
      }else{
        var angkaPertama = number / 100;
        angkaPertama = Math.floor(angkaPertama);
        out = kata[angkaPertama] + ' '+bilangan[3];
        number = number - (angkaPertama * 100);
      }
    }
    else if(number >=20){
      if(number % 10 === 0){
        var angkaPertama = number / 10;
        out = kata[angkaPertama] + ' '+bilangan[1];
        number = 0;
      }else{
        var angkaPertama = number / 10;
        angkaPertama = Math.floor(angkaPertama);
        out = kata[angkaPertama] + ' '+bilangan[1];
        number = number - (angkaPertama * 10);
      }
    }
    else if(number >=10){
      if(number - 10 <= 1){
        var hubunganArr = number - 9;
        out = bilangan[0] + bilangan[hubunganArr];
        number = 0;
      }else{
        var bilanganBelas = number - 10;
        out = kata[bilanganBelas] + ' ' + bilangan[2];
      }
    }else if(number >=1){
      out = kata[number];
      number = 0;
    }
    return out + ' '+ numberToWords(number);
  }
}

// Driver code
console.log(numberToWords(999000000000000));



module.exports = {
  numberToWords: numberToWords
}
