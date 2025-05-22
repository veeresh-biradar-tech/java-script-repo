
let originalarray1= [1, 2, 3]
let copyarray1= [...originalarray1]

console.log("original array1= ", originalarray1)
console.log("copy array1= ", copyarray1)

originalarray1.push(4, 5, 6)
originalarray1.unshift(0, 0, 0)
console.log("original array2= ", originalarray1)

let copyarray2= [...originalarray1]
console.log("copy array2= ", copyarray2)

console.log("origina array1= ", originalarray1)
console.log("copy array1= ", copyarray1)

let arr1= [1, 2, 3]
let arr2= [0, 0, ...arr1, -1, -1]

console.log("arr1= ", arr1)
console.log("arr2= ", arr2)

let arr3= [...arr2]
arr3.push(100, 200)
arr3.unshift(500, 600)
console.log("arr3= ", arr3)

let arr4= [...arr3]
console.log("arr4=", arr4)
arr4.pop()
arr4.pop()
arr4.shift()
arr4.shift()
console.log("arr4= ", arr4)

console.log("arr1= ", arr1)
console.log("arr2= ", arr2)
console.log("arr3=", arr3)
console.log("arr4= ", arr4)