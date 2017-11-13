function numberToWords(num) {
  console.log('-------------------------------------')
  var ori = num
  var str = ''
  function dtw(digit) {
    if (digit === 0) {
      return ''
    }
    var z =  ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'][digit - 1]
    return z ? z : digit
  }

  function thousand(num){
    var str = ''
    
    if(num >= 100 && num < 199){
      str += 'seratus '
      num -=100
    }
 
    if(num == 11){
      str+= 'sebelas '
      num -=11
    }
    if(num == 10){
      str+= 'sepuluh '
      num -= 10
    }
    if(num > 11 && num < 20){
      return  dtw(num % 10) + ' belas'
    }
    if(num % 100 !== num && num % 100 > 0){ // 801 mod 100  
      str += dtw(Math.floor(num / 100 )) + ' ratus '
      num = num % 100
    }
    if(num % 10 !== num && num % 10 >= 0){ 
      str += dtw(Math.floor(num / 10 )) + ' puluh '
      num = num % 10
    }
    str += dtw(num)
    return str
  }

  var xxx = [ //name -> maxnum
    ['milyar', 1000000000],
    ['juta', 1000000],
    ['ribu', 1000],
    ['ratus', 100],
    ['puluh', 10],
  ]

  // if(num % 1000000000 !== num && num % 1000000000 > 0){ 
  //   str += dtw(Math.floor(num / 1000000000 )) + ' milyar '
  //   num = num % 1000000000
  // }  

  if(num % 1000000 !== num && num % 1000000 > 0){
    if(num % 1000000 > 100000){
      console.log('tangkep')
      str += thousand(Math.floor(num / 1000000 )) + ' juta ' 
    }else{
      str += dtw(Math.floor(num / 1000000 )) + ' juta ' 
    }
    num = num % 1000000
  }

  if(num % 1000 !== num && num % 1000 >= 0){
    // if(num % 1000 === 0){
    //   return str += thousand(Math.floor(num / 1000 )) + ' ribu'
    // }
    if(num % 1000 > 100){
      str += thousand(Math.floor(num / 1000 )) + ' ribu '
    }else{
      str += dtw(Math.floor(num / 1000 )) + ' ribu '  
    }
    num = num % 1000
  } 

  return str += thousand(num).trim()
    // .split('satu puluh satu').join('sebelas')
    // .split('satu puluh').join('sepuluh')
    // .split('satu ratus').join('seratus').trim()
}

// driver code
var x = [
  [1000000000, 'satu milyar'],
  [1000000003, 'satu milyar tiga'],
  [1300000, 'satu juta tiga ratus'],
  [82102713, 'delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas'],
  // [1000001, 'satu juta satu'],
  // [11111, 'sebelas ribu seratus sebelas'],
  [95000, 'sembilan puluh lima ribu'],
  // [9956, 'sembilan ribu sembilan ratus lima puluh enam'],
  // [999, 'sembilan ratus sembilan puluh sembilan'],
  // [9900, 'sembilan ribu sembilan ratus'],
  [903, 'sembilan ratus tiga'],
  [920, 'sembilan ratus dua puluh'],
  [123, 'seratus dua puluh tiga'],
  [111, 'seratus sebelas'],
  [101, 'seratus satu'],
  [99, 'sembilan puluh sembilan'],
  [11, 'sebelas'],
  [12, 'dua belas'],
  [10, 'sepuluh'],
  [1, 'satu']
]
var mantap = true
for (var item of x) {
  var resx = numberToWords(item[0]).trim()
  if (resx !== item[1]) {
    mantap = false
  }
  console.log(resx === item[1], item[0], resx)
}
console.log(mantap ? 'GOOD' : 'TRY AGAIN')



// console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
// 99             puluh 
// 999            max ratus
// 9999         ribu
// 9.999      juta
// 1.000.000.000  milyar
