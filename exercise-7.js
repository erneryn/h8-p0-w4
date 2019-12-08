function urutkanAbjad(str) {
    var abj='abcdefghijklmnoprstuvw'
    var tampung=''
    for(var i=0;i<abj.length;i++){
        for(var j=0; j<str.length;j++){
            if (abj[i] === str[j]) {
                tampung+=abj[i]
            }
        }
    }
    return tampung
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'