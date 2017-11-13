function numberToWords(number) {
  // Your code here
  function belowHundredKata(num){
    function digitToKata(num){
      switch (num){
        case 1 : return 'satu'; break;
        case 2 : return 'dua'; break;
        case 3 : return 'tiga'; break;
        case 4 : return 'empat'; break;
        case 5 : return 'lima'; break;
        case 6 : return 'enam'; break;
        case 7 : return 'tujuh'; break;
        case 8 : return 'delapan'; break;
        case 9 : return 'sembilan'; break;
        default : return '';
      }
    }
    function belasToKata(num){
      if (num === 10){
        return 'sepuluh'
      }
      else if (num === 11){
        return 'sebelas';
      }
      else if (num <= 19 && num >= 11){
        return digitToKata(num%10) + ' belas';
      } else {
      return '';
      }
    }
    function puluhToKata(num){
        return digitToKata( Math.floor(num/10) ) + ' puluh ' + digitToKata(num%10);
    }

    if (num <=9 ) {
      return digitToKata(num);
    } else if (num >= 10 && num <= 19){
      return belasToKata(num)
    } else if (num >= 20 && num <=99){
      return puluhToKata(num)
    } else{
      return '';
    }

  }

  if (number <= 99 ) {
    return belowHundredKata(number);
  } else if (number >=100 && number <= 199) {
    return 'seratus ' + belowHundredKata (number%100);
  } else if (number >= 200 && number <= 999){
    return belowHundredKata( Math.floor(number/100) ) + ' ratus ' + belowHundredKata(number%100);
  } else if(number >= 1000 && number <= 1999){
    return 'seribu ' + numberToWords(number%1000);
  } else if (number >= 2000 && number <= 999999){
    return numberToWords( Math.floor(number/1000) ) + ' ribu ' + numberToWords(number%1000);
  } else if (number >= 1000000 && number <= 999999999){
    return numberToWords( Math.floor(number/1000000) ) + ' juta ' + numberToWords(number%1000000);
  } else if (number >= 1000000000 && number <= 999999999999){
    return numberToWords( Math.floor(number/1000000000) ) + ' miliar ' + numberToWords(number%1000000000);
  } else if (number >= 1000000000000 && number <= 999999999999999){
    return numberToWords( Math.floor(number/1000000000000) ) + ' biliun ' + numberToWords(number%1000000000000);
  } else if (number >= 1000000000000000 && number <= 999999999999999999){
    return numberToWords( Math.floor(number/1000000000000000) ) + ' triliun ' + numberToWords(number%1000000000000000);
  } else {
    return '';
  }
  
}



// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
