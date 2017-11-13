function basicToWords(number) {
  // Your code here
  let words = 'satu dua tiga empat lima enam tujuh delapan sembilan'.split(' ')
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   if(number == 0){
     return ''
   }
  if(number <= 9){
    return words[number-1]

  }else if(number == 10){
    return 'sepuluh'

  }else{
    let arrNum = number.toString().split('')
    if(arrNum.length == 2 && arrNum[0] == 1){
      if(arrNum[0] == 1 && arrNum[1] == 1){
        let numAwal = arrNum.splice(0,1)
        return 'sebelas '
      }
      return numberToWords(arrNum[1])+' '+'belas'
    }

    if(arrNum.length == 2){
      return numberToWords(arrNum[0])+' puluh '+numberToWords(arrNum[1])
    }else if(arrNum.length == 3){
      if(arrNum[0] == 1){
        let numAwal = arrNum.splice(0,1)
        return 'seratus '+numberToWords(+arrNum.join(''))
      }

      let numAwal = arrNum.splice(0,1)
      return numberToWords(numAwal)+' ratus '+numberToWords(+arrNum.join(''))
    }
  }
}

function numberToWords(number) {  //678
  // return basicToWords(number)
  let result = ""
  let digit = number.toString().length  //3

  if(digit < 4) {
    return basicToWords(number)
  }

  let mod_digit = digit % 3  //1
  if(mod_digit == 0) {
    mod_digit = 3
  }
  let frontNumber = number.toString().substring(0, mod_digit)  //2
  result += basicToWords(frontNumber)  //dua

  let sisaDigit = digit - mod_digit  //3
  //console.log(sisaDigit);
  if(sisaDigit == 3) {
    result += " ribu"  //dua ribu
    // sisanumber = 678
    let sisanumber = number - frontNumber*1000
    result += " "+numberToWords(sisanumber)
  }
  if(sisaDigit == 6){
    result += "juta"
    let sisanumber = number - frontNumber*1000000
    result += " "+numberToWords(sisanumber)
  }
  if(sisaDigit == 9){
    result += " miliyar"
    let sisanumber = number - frontNumber*1000000000
    result += " "+numberToWords(sisanumber)
  }
  if(sisaDigit == 12){
    result += " triliyun"
    let sisanumber = number - frontNumber*1000000000000
    result += " "+numberToWords(sisanumber)
  }
  return result
}

// Driver code
console.log(numberToWords(456))
console.log(numberToWords(2678));  //1
console.log(numberToWords(32999));  //2
console.log(numberToWords(900000));  //0
console.log(numberToWords(1111111111011));  //1


module.exports = {
  numberToWords: numberToWords
}
