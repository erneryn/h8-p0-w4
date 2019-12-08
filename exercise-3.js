function cariMedian(arr) {
    var m= Math.round(arr.length/2)

// console.log(arr[m])
            if (arr.length % 2 === 0) {
                return ((arr[m-1]+arr[m])/2)
            } else{
                return arr[m-1]
            }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5