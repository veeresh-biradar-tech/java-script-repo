let arr= [
    {user: 1, name: "jane"},
    {user: 2, name: "mike"},
    {user: 3, name: "johnd"}
]

// console.log(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[0].name)
// console.log(arr[1].user)
// console.log(arr[2].name)

// MANIPULATING ARRAY OBJECTS PUSH. POP, UNSHIFT, SHIFT, SPLICE, SLICE, FOREACH, MAP, FILTER
//push
// arr.push({user: 4, name: "will"})
// arr.push({user: 5, name: "dustin"})
// console.log(arr)

//pop
// arr.pop()
// console.log(arr)

//unshift
// arr.unshift({user: 0, name: "empty"})
// console.log(arr)

// //shift
// arr.shift()
// console.log(arr)

//forEach
// let new_arr= []
// function name_fun(item)
// {
//     if(item.name.length== 4)
//     {
//             new_arr.push(item.name)
//     }
//     console.log(`Newe Arry Name= ${new_arr}`)
// }

// arr.forEach(name_fun)

//map
let info= []
info= arr.map(function(items)
{
    for(let i= 0; i<= items.length; i++)
    {
        if(items[i].name.length== 4)
        {
            return items[i].name
        }
    }
})

console.log(info)