// ForEach IN JS

// // For Each Using Regular Function Without Return 
const num= [1, 2, 3, 4, 5]
let multi= []

function multi_function(val)
{
        multi.push(val* 2)
}
num.forEach(multi_function)
console.log("Multi number= ", multi)



// ForEach Using Anonumus Function
let n= [1, 2, 3, 4, 5]
let sq_number= []

n.forEach(function(val)
{
        sq_number.push(val** 2)
})

console.log("Square= ", sq_number)



// ForEach Using Arrow Function
let nums= [1, 2, 3, 4, 5]
let cube_numbers= []

nums.forEach((val) => {
    cube_numbers.push(val** 3)
})

console.log("Cube= ", cube_numbers)