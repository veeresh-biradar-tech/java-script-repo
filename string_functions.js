let name= "harry bhai"

console.log("name= ", name)
console.log(`name= ${name}`)

let len= name.length
console.log(`Length = ${len}`)

let upper= name.toUpperCase()
console.log(`Upper Case= ${upper}`)
console.log(`Upeer Case= ${name.toUpperCase()}`)

let lower= name.toLowerCase()
console.log(`Lower Case= ${lower}`)
console.log(`Lower acse= ${name.toLowerCase()}`)

console.log(`Slice= ${name.slice(1)}`)
let slice_str= name.slice(1, 7)
console.log(`Slice= ${slice_str}`)

let name2= "sham bhai"
let frnd= name.concat(" is best frnd of ", name2)
console.log(`Concatinate= ${frnd}`)

let text= "Ram is a good boy of our class and he respect all stafs"
let changed_name= text.replace("Ram", "Sundar")
console.log(`Replace1= ${changed_name}`)

let changed_good= changed_name.replace("good", "bad")
console.log(`Replace2= ${changed_good}`)

let changed_respect= changed_good.replace("respect", "wont respect")
console.log(`Replace3= ${changed_respect}`)

let course= "   BCA   "
console.log(`Trim= ${course.trim()}`)
console.log(`Trim Start= ${course.trimStart()}`)
console.log(`Trim End= ${course.trimEnd()}`)

let repeat= course.repeat(3)
console.log(`Repeat= ${repeat}`)

console.log(`Char At= ${name.charAt(1)}`)
console.log(`Char At= ${name.charAt(0)}`)
console.log(`At= ${name.at(2)}`)

console.log(`Index Of= ${name.indexOf("ai")}`)
console.log(`Index of= ${text.lastIndexOf("a")}`)

console.log(`Ends With= ${text.endsWith("stafs")}`)
console.log(`Starts With= ${text.startsWith("veeresh")}`)
console.log(`Starts With= ${text.startsWith("Ram")}`)

console.log(`Includes= ${name.includes("harry")}`)

console.log(`Split= ${name.split("")}`)