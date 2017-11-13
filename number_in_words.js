function numberToWords(number) {
  // Your code here
  let angka = ['','satu','dua','tiga','empat','lima','enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh','sebelas']
  let result = '';

  if(number == 0){
    return result
  }
  else if (number <= 11) {
    return angka[number]
  }
  else if(number < 20){
    return numberToWords(number % 10) + ' belas';
  }
  else if (number < 100) {
    return numberToWords( Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
  }
  else if (number < 200) {
    return "seratus " + numberToWords(number % 100)
  }
  else if (number < 1000) {
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords (number % 100)
  }
  else if(number < 2000) {
    return 'seribu ' + numberToWords(number % 1000)
  }
  else if(number < 10000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  else if (number < 100000) {
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  else if (number < 200000) {
    return "seratus " + numberToWords(number % 100000)
  }
  else if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }
  else if(number < 12000000){
    return angka[Math.floor(number / 1000000)] + ' juta ' + numberToWords(number.toString().slice(2))
  }
  else if(number < 20000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number.toString().slice(2))
  }
  else if (number < 100000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number.toString().slice(2))
  }
  else if (number < 200000000) {
    return 'Seratus ' + numberToWords(number.toString().slice(1))
  }
  else if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number.toString().slice(3))
  }
  else if (number < 12000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyard ' + numberToWords(number % 1000000000)
  }
  else if (number < 20000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyard ' + numberToWords(number % 1000000000)
  }
  else if (number < 100000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyard ' + numberToWords(number % 1000000000)
  }
  else if (number < 200000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyard ' + numberToWords(number % 1000000000)
  }
  else if (number < 1000000000000) {
  return numberToWords(Math.floor(number / 1000000000)) + ' milyard ' + numberToWords(number % 1000000000)
  }
  else if (number < 12000000000000) {
  return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
  }
  else if (number < 20000000000000) {
  return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
  }
  else if (number < 100000000000000) {
  return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
  }
  else if (number < 10000000000000000) {
  return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(11111000000000)); //sepuluh T 14 Digit
console.log(numberToWords(123456000000999)); //seratus T 15 Digit
console.log(numberToWords(999999999999999)); //seratus T 15 Digit
































//
