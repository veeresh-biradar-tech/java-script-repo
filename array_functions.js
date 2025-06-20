let nums= [10, 20, 30, 40, 50]
let nums2= [0, 0, 0]

let len= nums.length
console.log("length =", len)

nums.push(60)
nums.push(70)
console.log("push =", nums)

nums.pop()
nums.pop()
console.log("pop =", nums)

nums.unshift(0)
nums.unshift(-1)
console.log("unshift =", nums)

nums.shift()
nums.shift()
console.log("shift =", nums)

console.log("at index =", nums.at(3))

console.log("index of =", nums.indexOf(30))

console.log("includes =", nums.includes(20))

let combine= nums.concat(nums2)
console.log("concatinate =", combine)