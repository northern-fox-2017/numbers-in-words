let numberToWords = (number) =>{

  // Your code here
  console.log(number % 1000000);
  // console.log((number-(number%1000000)) / 1000000);
  let Arr = ['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan']

  if (number<10) { return Arr[number] }
  else if (number === 10)     { return 'Sepuluh' }
  else if (number === 11)     { return 'Sebelas' }
  else if (number < 20)       { return `${Arr[number % 10]} Belas` }
  else if (number < 100)      { return `${numberToWords(Math.floor(number / 10))} Puluh ${numberToWords(number % 10)}`}
  else if (number < 200)      { return `Seratus ${numberToWords(number % 100)}`}
  else if (number < 1000)     { return `${numberToWords(Math.floor(number/100))} Ratus ${numberToWords(number % 100)}`}
  else if (number < 2000)     { return `Seribu ${numberToWords(number % 1000)}`}
  // else if (number < 10000)   { return `${numberToWords(Math.floor(number / 1000))} Ribu ${numberToWords(number % 1000)}`}
  else if (number < 1000000)   { return `${numberToWords(Math.floor(number / 1000))} Ribu ${numberToWords(number % 1000)}`}
  // else if (number < 200000)   { return `${numberToWords(Math.floor(number / 1000))}  Ribu ${numberToWords(Math.round(number % 1000))}`}
  else if (number < 100000000)  { return `${numberToWords(Math.floor(number / 1000000))} Juta ${numberToWords(number % 1000000)}`}

  else if (number < 10000000000000)  { return `${numberToWords(Math.floor(number / 1000000000))} Milyar ${numberToWords(number % 1000000000)}`}

  else if (number < 10000000000000000)  { return `${numberToWords(Math.floor(number / 1000000000000))} Triliun ${numberToWords(number % 1000000000000)}`}


  // else if (number < 100000000){ return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(Math.round(number % 1000000))}
  // else if(number < 200000000) { return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(Math.floor(number % 1000000))}
  // else if(number < 1000000000){ return numberToWords(Math.floor(number / 100000000)) + ' ratus ' + numberToWords(Math.floor(number % 100000000))}
  // else if(number < 100000000000){return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(Math.floor(number % 1000000000))}
  // else if(number < 1000000000000){return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(Math.floor(number % 1000000000))}
  // else if(number < 1000000000000000){return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(Math.floor(number % 1000000000000))}
}

// Driver code
console.log(numberToWords(9001000));
// console.log(9999999 % 1000000)

module.exports = {
  numberToWords: numberToWords
}
