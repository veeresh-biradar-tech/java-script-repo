// Rest Parameter In js
// without Rest Parameter

function sum(a, b, c, d, e)
{
    return a+b+c+d+e
}

let result= sum(10, 20, 30, 40, 50)
console.log(`Total Sum= ${result}`)


//Using Rest Parameter
function multi(...num)
{
    multipication= 1
    for(let i of num)
    {
        multipication= multipication* i
    }
    return multipication
}

let total= multi(1, 2, 3, 4, 5)
console.log(`Multiplication = ${total}`)



// using Rest Parameter
function multi(...n)
{
    let s= 0;
    n.forEach(val =>{
        s= s+ val
    })
    return s
}

let ans= multi(1, 2, 3, 4, 5)
console.log("addition= ", ans)


// Using Rest Parameter with other parameter

let variable= (a, b, ...n)=>{
    
         return a
}

let r= variable("Ram", "Raj", "Ravi", "Sham", "Sundar")
console.log(r)