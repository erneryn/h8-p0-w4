function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];


    if (arrPenumpang.length === 0) {
        return '[]'
    }
    var hasil=[]
    for(var i =0 ; i<arrPenumpang.length;i++){
        var penumpang=""
        var awal=0
        var jaraktempuh=1
        
        for(var j=0; j<rute.length;j++){
            if (arrPenumpang[i][1] === rute[j]) {
                awal = j
               
            } 
            else if (arrPenumpang[i][2] == rute[j]) {
               jaraktempuh = j  - awal
            }
        }
    
       
        var biaya=jaraktempuh*2000
    
        
        hasil.push({
            penumpang:arrPenumpang[i][0] ,
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: biaya  ,
        })
    }
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]