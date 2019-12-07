function changeMe(arr) {

    if(arr.length === 0){
        console.log('""')
    }

    var obj={}

    for(var i=0; i<arr.length;i++){
        
            obj["firstName"] = arr[i][0];
            obj["lastName"] = arr[i][1];
            obj["gender"] = arr[i][2];

            if(arr[i][3] < 2019){
                obj["age"] = 2019-arr[i][3]
            } else{
                obj["age"] = "invalid Birth Year"
            }
            console.log((i+1)+". "+obj["firstName"]+" "+obj["lastName"]+":")
            console.log(obj)
        }
    }
    
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""