let info= [ ["Raj", "BCA", 21], ["Ram", "BCA", 22], ["Ravi", "BSC", 23] ]

console.log(`Length= ${info.length}`)

// Accesiingg Array Elements Of Specific Position
console.log(`specific position elements`)
console.log(info[0])
console.log(info[2])
console.log(info[0][0])
console.log(info[1][1])
console.log(info[2][2])

// Accesiing Array Elements Using Nested-for-loop
console.log("\n Accessing Elements Using nested-for-loop")
for(let i= 0; i< info.length; i++)
{
    for(j= 0; j< info[i].length; j++)
    {
        console.log(info[i][j])
    }
}

// Accessing Elements Using forEach
console.log("\nAccesing elements Using for-Each")
info.forEach(data => {
    data.forEach(val => {
        console.log(val)
    })
})

// Accessing Elements Using for of
console.log("\nAccessing Elements Using for of")
for(let arr of info){
    for(let i of arr){
        console.log(i)
    }
}

// Adding Elements in Array 
// using push()
let mat= [ [1, 2, 3], [4, 5, 6] ]
console.log(mat)
mat.push([7, 8, 9]);
console.log(mat)

// Using Unshift
mat.unshift([0, 0, 0])
console.log(mat)
console.log(mat.length)

//Using Index
mat[0]= [-1, -1, -1]
console.log(mat)
mat[0][2]= -100
console.log(mat)


// Deleting Or Removing Array Elements
// Using pop()
mat.pop()
console.log(mat)

// Using shift()
mat.shift()
console.log(mat)

// Using Index
delete mat[0]
delete mat[1][1]
console.log(mat)