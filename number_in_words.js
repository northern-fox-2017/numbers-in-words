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
        return digitToKata(num%10) + 'belas';
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

  function ratusanToKata(num){
    
    if (num <= 99){
      return belowHundredKata(num);
    } else if (num <= 199 && num >= 100 ){
      return 'seratus ' + belowHundredKata(num%100); 
    } else if (num <= 999 && num >= 200){
      return belowHundredKata( Math.floor(num/100) ) + ' ratus ' + belowHundredKata(num%100);
    }
  }

  return ratusanToKata(num);
}



// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
