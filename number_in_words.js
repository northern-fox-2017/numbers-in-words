const words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

const numberToWords = (num) => {
  if (num < 12) return words[num];

  else if (num < 20) return `${numberToWords(num % 10)} belas`;

  else if (num < 100) return `${numberToWords((num - (num % 10)) / 10)} puluh ${numberToWords(num % 10)}`;

  else if (num < 200) return `seratus ${numberToWords((num % 100))}`;

  else if (num < 1000) return `${numberToWords((num - (num % 100)) / 100)} ratus ${numberToWords(num % 100)}`;

  else if (num < 2000) return `seribu ${numberToWords((num % 1000))}`;

  else if (num < 1000000) return `${numberToWords((num - (num % 1000)) / 1000)} ribu ${numberToWords(num % 1000)}`;

  else if (num < 1000000000) return `${numberToWords((num - (num % 1000000)) / 1000000)} juta ${numberToWords(num % 1000000)}`;

  else if (num < 1000000000000) return `${numberToWords((num - (num % 1000000000)) / 1000000000)} milyar ${numberToWords(num % 1000000000)}`;

  else if (num < 1000000000000000) return `${numberToWords((num - (num % 1000000000000)) / 1000000000000)} trilyun ${numberToWords(num % 1000000000000)}`;
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
