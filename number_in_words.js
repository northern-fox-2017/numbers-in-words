function numberInWords(number) {

  let kata = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga  belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];

    if(number < 20) {
        hasil = kata[number]
    } else if(number < 100) {
        hasil = kata[Math.floor(number / 10)] + ' puluh ' + numberInWords(number % 10);
    } else if(number < 200) {
        if(number % 100 === 0) {
          hasil = 'seratus';
        } else {
            hasil = 'seratus ' + numberInWords(number % 100)
        }
    } else if(number < 1000) {
        hasil = kata[Math.floor(number / 100)] + ' ratus ' + numberInWords(number % 100);
    } else if(number < 2000) {
        if(number % 1000 === 0) {
          hasil = 'seribu';
        } else {
            hasil = 'seribu ' + numberInWords(number % 1000);
        }
    } else if(number < 10000) {
        hasil = kata[Math.floor(number / 1000)] + ' ribu ' + numberInWords(number % 1000);
    } else if(number < 20000) {
        if(number % 10000 === 0) {
          hasil = 'sepuluh ribu';
        } else {
          hasil = kata[Math.floor(number / 1000)] + ' ribu ' + numberInWords(number % 10000);
        }
    } else if(number < 100000) {
        if(number % 10000 === 0) {
          hasil = kata[Math.floor(number / 10000)] + ' puluh ribu';
        } else if(number % 10000 < 100){
            hasil = kata[Math.floor(number / 10000)] + ' puluh ribu ' + numberInWords(number % 10000);
        } else {
            hasil = kata[Math.floor(number / 10000)] + ' puluh ' + numberInWords(number % 10000);
        }
    } else if(number < 200000) {
        if(number % 100000 === 0) {
          hasil = 'seratus ribu';
        } else if(number % 100000 < 1000) {
          hasil = 'seratus ' + 'ribu ' + numberInWords(number % 100000)
        } else {
          hasil = 'seratus ' + kata[Math.floor(number / 100000)] + ' ' + numberInWords(number % 100000)
        }
    }
  return hasil;
}

// console.log(numberInWords(10000000));
