// sum of numbes using regular function
// function sum_function(...input)
// {
//     sum= 0
//     for(let i of input)
//     {
//         sum= sum+ i;
//     }

//     return sum
// }

// let total= sum_function(1, 2, 3, 4, 5)
// console.log("Total= ", total)


// sum of numbers using ananymus function
// console.log("Ananymus Function ")
// let sum_function= function(...input)
// {
//     sum= 0
//     for(let i of input)
//     {
//         sum= sum+ i
//     }
//     return sum
// }

// let total= sum_function(1, 2, 3, 4, 5)
// console.log("Total= ", total)


// Sum Of nUmbers Using Arrow Function
// console.log("Arrow Function ")
// let sum_function= (...input) =>{
//     let sum= 0
//     for(let i of input)
//     {
//         sum= sum+ i
//     }
 
//     return sum
// }

// let total= sum_function(1, 2, 3, 4, 5)
// console.log("Total= ", total)


// Check Even Or Odd Using Regular Function
// let even_arr= []
// let odd_arr= []

// function find_even_odd(...input)
// {
//       for(let i of input)
//       {
//         if(i% 2== 0)
//         {
//                even_arr.push(i)
//         }
//         else
//         {
//             odd_arr.push(i)
//         }
//       }
//       console.log("Even Array= ", even_arr)
//       console.log("Odd array= ", odd_arr)
// }

// find_even_odd(2, 4)
// find_even_odd(1, 3)
// find_even_odd(2, 5)


// Check even Or Odd Using Anonymus Function
// let even_arr= []
// let odd_arr= []

// let find_even_odd= function(...input)
// {
//     for(let i in input)
//     {
//         if(input[i]% 2== 0)
//         {
//                 even_arr.push(input[i])
//         }

//         else
//         {
//             odd_arr.push(input[i])
//         }
//     }

//     console.log("Even Array= ", even_arr)
//     console.log("Odd array= ", odd_arr)
// }

// find_even_odd(1, 2);
// find_even_odd(2, 4);
// find_even_odd(5, 1);


// Sum Of Numbers Using Arrow Function
// let sum_function= (...input)=> {
//     let sum= 0
//     for(let i of input)
//     {
//         sum= sum+ i
//     }
//     return sum
// }

// let total= sum_function(1, 2, 3, 4, 5)
// console.log(`Total = ${total}`)


// Check Even Or Odd Using Arrow Function
// let find_even_odd= (...input) => {
//     let even_arr= []
//     let odd_arr= []
    
//     for(let i of input)
//     {
//         if(i% 2== 0)
//         {
//             even_arr.push(i)
//         }
//         else{
//             odd_arr.push(i)
//         }
//     }

//     console.log("Even Array= ", even_arr)
//     console.log("Odd Array= ", odd_arr)
// }

// find_even_odd(1, 5)
// find_even_odd(2, 4)