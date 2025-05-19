let names= ["ram", "raj", "ravi", "raju"]


names.forEach((val, idx, arr) => {
       if(val.length == 3){
                  console.log(val)
       }
       })

       

names.forEach(name_oper);

function name_oper(val, idx, arr){
    if(val.length== 4){
        console.log(idx, val)
    }
}


names.forEach(function(val, idx, arr){
    if(val.length != 4){
        console.log(idx, val)
    }
})