const arr = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

const toNumber = (num) => {
  
  if (num < 12) {
   return arr[num];
  }
  else if (num < 20) {
    return toNumber(num % 10) + ' belas';
  }else if(num<100){
    return toNumber((num-(num%10))/10 )+' puluh ' +toNumber(num%10)
    
  }else if (num<200){
    
      return 'seratus ' + toNumber(num%100)
    
  }
  
  else if(num<1000){
    
    return toNumber((num-(num%100))/100) + ' ratus ' + toNumber(num%100)
  }
  
  else if(num<2000)
  {
    return "seribu "+toNumber(num%1000)
    
  }
  else if(num<1000000){
    
    return toNumber((num-(num%1000))/1000)+ " ribu"+toNumber(num%1000) 
  }else if (num<1000000000){
    
    return toNumber((num-(num%1000000))/1000000)+ " juta "+ toNumber(num%1000000)  
  }else if(num<1000000000000){
    return toNumber((num-(num%1000000000))/1000000000)+ " miliar "+ toNumber(num%1000000000)  
  }
  else if(num<1000000000000000){
    return toNumber((num-(num%1000000000000))/1000000000000)+ " triliun "+ toNumber(num%1000000000000)  
  }
}

console.log(toNumber(9990000000000));