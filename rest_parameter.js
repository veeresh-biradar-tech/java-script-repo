// Without Rest Parameter
let sum_function= (a, b, c) =>
{
    return a+ b+ c
}

let total= sum_function(10, 10, 10)
console.log("Sum= ", total)


// Using Rest Parameter
let s_fun= (...inputs) =>
{
    let sum= 0
    for(let i of inputs)
    {
        sum= sum+ i
    }

    return sum
}

let result= s_fun(10, 20, 30)
console.log("sum- ", result)

//Without Rest Parameter
let name_function= (p, q, r, s) =>
{
    console.log(p)
    console.log(q)
    console.log(r)
    console.log(s)
    return p
}

let name= name_function("Ram", "Raj", "Ravi", "Sham")
console.log(name)


// Using Rest Parameter
let n_fun= (x, y, z, ...name_inputs) =>
{
        console.log(x)
        console.log(y)
        console.log(z)
        console.log(name_inputs)
        console.log(name_inputs[1])
        console.log(name_inputs[2])
        console.log(name_inputs.length)
}

n_fun("Mike", "Eleven", "Will", "lucus", "Dustin", "Max")