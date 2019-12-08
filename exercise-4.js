function cariModus(arr) {

    var result=[] // 5,1 10.1
    for (let i = 0; i < arr.length; i++) { // 5 10 10 6 5
         cek= false
        for (let j = 0; j < result.length; j++) {
            if (arr[i]==result[j][0]) {
                result[j][1]+=1
                cek = true
            }
            
        }
        if (cek== false) {
            result.push([arr[i],1])
        }
    }
  
    var temp=1
    var lok=0
    for (var k=0 ; k<result.length;k++){
        if (result[k][1]> temp) {
            temp = result[k][1]
            lok = k
        }
    }
  if (temp == 1 || result[lok][1]==arr.length){
      return -1
  }

    return result[lok][0]


  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1