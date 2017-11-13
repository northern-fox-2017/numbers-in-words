function sembilanRatusan(number) {
  function sembilan(number) {
    if(number == 1){
      number - 1
      return 'satu'
    }else if(number == 2){
      number - 2
      return 'dua'
    }
    else if(number == 3){
      number - 3
      return 'tiga'
    }
    else if(number == 4){
      number - 4
      return 'empat'
    }
    else if(number == 5){
      number - 5
      return 'lima'
    }
    else if(number == 6){
      number - 6
      return 'enam'
    }
    else if(number == 7){
      number - 7
      return 'tujuh'
    }
    else if(number == 8){
      number - 8
      return 'delapan'
    }
    else if(number == 9){
      number - 9
      return 'sembilan'
    }
  }
  while (number > 0) {

    if(number == 10){
      number - 10
      return 'sepuluh'
    }
    else if(number == 11){
      number - 11
      return 'sebelas'
    }
    else if(number > 11 && number < 20 ){
      number -= 10
      return sembilan(number)+' '+'belas'
    }
    else if(number >= 20 && number < 100){
      number = number/10
      return sembilan(number)+' '+'puluh'
    }
  }

}

// Driver code
console.log(sembilanRatusan(20));
console.log(sembilanRatusan(30));
console.log(sembilanRatusan(25));
console.log(sembilanRatusan(58));
console.log(sembilanRatusan(94));
console.log(sembilanRatusan(70));
console.log(sembilanRatusan(43));
