// Filter Method In JS

// Filtering Age Using Regular Function
let ages= [12, 16, 18, 23, 27, 10, 45]
function find_age(age)
{
       return age>= 18
}

let can_vote= ages.filter(find_age)
console.log("Age That Are Able To Vote Are= ", can_vote)


// Filtering Positive Numbers Using Anonymus Function
let numbers= [10, 323, -2, -18, 45, -100, 0, 70]
let positive_numbers= numbers.filter(function(num) 
{
    return num> 0
})

let negative_numbers= numbers.filter(function(num) {
    return num< 0
})
console.log("Positive Numbers= ", positive_numbers)
console.log("Negative Numbes= ", negative_numbers)


// Filtering Word Length > 6 using Arrow Function
const words= ["apple", "banana", "pine apple", "cucumbar", "lady finger"]
let word_length= words.filter(word => word.length>= 6)
console.log("Words are", word_length)