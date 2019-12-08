function digitPerkalianMinimum(angka) {
    
  var tampung1=0
  var tampung2=0
  var digit=0
  for(var i=1;i<= angka; i++ ){
    if(angka % i === 0){
      tampung1 = i
      tampung2 = angka/i
      var join= Number(String(tampung1).length + String(tampung2).length)
    }
  
    if(digit==0){
      digit=join
    } else if ( join < digit) {
      digit = join
    }
    }
    return digit
  }

  
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2