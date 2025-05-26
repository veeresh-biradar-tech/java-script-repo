// Map Method In JS 

// Using Regular Function
let nums= [1, 2, 3, 4, 5]
function find_square(val)
{
    return val** 2
}

let sq_number= nums.map(find_square)
console.log("Square Number= ", sq_number)


//Using Arrow Function
let cube_number= [1, 2, 3, 4, 5].map(function(num) {
    return num** 3
})
console.log("Cube =", cube_number)


// Using Arrow Function
let number= [10, 20, 30]
let double_number= number.map(input => {
    return input* 2})
console.log("Double= ",double_number)