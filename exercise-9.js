function checkAB(num) {
    var ab=[[],[]]

    for(var i=0; i<num.length;i++){
        if (num[i]=='a') {
            ab[0].push(i)
        } else if (num[i]=='b'){
           ab[1].push(i)
        }
    }
    console.log(ab)

    for(var j=0; j<ab[0].length; j++){
        for(var k=0; k<ab[1].length; k++){
            if(Math.abs(ab[0][j]-ab[1][k]) === 4){
                return true
            } 
        }
    }
    return false

  }

  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false