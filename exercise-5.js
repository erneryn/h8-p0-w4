function ubahHuruf(kata) {

    var alp='abcdefghijklmnopqrstuvwxyz'
    var result=''
    
    for(var i=0;i<kata.length;i++){
        for(var j=0; j<alp.length;j++){

            if(kata[i]=== alp[j]){

                if(alp[j] === 'z'){
                    result+= 'a'
                } else{
                    result += alp[j+1]
                    
                }
            }
        }
     
    }
return result


  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu