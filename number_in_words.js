function numberToWords(number) {
  // Your code here
  satuan = ['satu','dua','tiga','empat','lima','enam','tuju','delapan','sebilan'];
  belasan = ['sebelas']
  puluhan = ['sepuluh']
  ratusan = ['seratus']

  for (var i = 1; i < satuan.length; i++) {
  	puluhan.push(satuan[i]+' puluh')
  	ratusan.push(satuan[i]+' ratus')
  	belasan.push(satuan[i]+' belas')
  }
  
  
  cekpanjang = String(number).length
  
  if(cekpanjang ===1){
    
    return satuan[number-1]
  }
  if(cekpanjang === 2){
    if(number<=19){
      var cek = String(number).split('')
      ambil = Number(cek[1])
      return belasan[ambil-1]
    }else {
      var cek = String(number).split('')
      puluh = Number(cek[0])
      satu = Number(cek[1])
      return puluhan[puluh-1] +" "+satuan[satu-1]
      
    }
   
  }
  if(cekpanjang === 3){
    var cek = String(number).split('')
      ratus = Number(cek[0])
      puluh = Number(cek[1])
      satu = Number(cek[2])
      
      return ratusan[ratus-1] + " "+ puluhan[puluh-1] + " "+satuan[satu-1]
    
  }
 

}

// Driver code
//console.log(numberToWords(1000000));

console.log(numberToWords(999));
console.log(numberToWords(4));
console.log(numberToWords(12));
console.log(numberToWords(24));

// module.exports = {
//   numberToWords: numberToWords
// }
