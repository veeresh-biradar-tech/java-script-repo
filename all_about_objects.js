// Objects In JS

// Creating Objects using LIterals
// let obj= {
//     name: "aman",
//     class: 10,
//     age: 21,
//     town: "ram mandir"
// }

// console.log(obj)


// Creating Objects Using OBJECT Constructor
// let obj= new Object();
// obj.name= "aman"
// obj.class= 10
// obj.age= 21
// obj.town= "ram mandir"

// console.log(obj)


// Accessing Object Properties Using . and []
// let obj= {
//     name: "raj",
//     class: 10,
//     age: 21,
//     town: "bhandra"
// }
// console.log(obj.name)
// console.log(obj.town)
// console.log(obj["class"])
// console.log(obj["age"])


// Modifying Object Properties Using . and []
// let obj= {
//     name: "Sham",
//     age: 34,
//     company: "Google",
//     role: "HR"
// }
// obj.company= "Amazon"
// obj.role= "Manager"
// obj["age"]= 30
// obj["name"]= "Sundar"
// console.log("New Object Is=", obj)


// Modefying Object Using Object Method
// let obj= {
//     name: "Prakash",
//     age: 22,
//     company: "Micorsoft", 
//     role: "HR",
//     before_modify: function()
//     {
//        console.log(`Name= ${this.name}, Age= ${this.age}, Company= ${this.company}, Role= ${this.role}`)
//     },
//     re_name: function(new_name)
//     {
//         this.name= new_name;
//     },
//     re_role: function(new_role)
//     {
//         this.role= new_role
//     },
//     re_company: function(new_company)
//     {
//         this.company= new_company
//     },
//     display: function()
//     {
//         console.log(`Name= ${this.name}, Age= ${this.age}, Company= ${this.company}, Role= ${this.role}`)
//     }
// }
// obj.before_modify()
// obj.re_name("Aman Gupta")
// obj.re_role("Software Engineer")
// obj.re_company("Google")
// obj.display()



// Adding Propeerties To Object using . And []
// let info= {
//     name: "Raj",
//     course: "BCA",
//     regNo: 102
// }
// console.log(info)

// info.collage= "VIM"
// info.area= "Beside Andnd Hotel"
// info[princple name]= "Praveen Nayak"

// console.log(info)


// Adding Properties To The Object Using Object Method
// let info= {
//     name: "Ambrish",
//     course: "BCA",
//     age: 21,
//     before_adding: function()
//     {
//         return (`Name= ${this.name}, Course= ${this.course}, Age= ${this.age}`)
//     },
//        first: function()
//     {
//         Object.assign(info, {collage: 'VIM'})
//     },
//     Second: function()
//     {
//          Object.assign(info, {area: "Beside Anand Hotel"})
//     },
//     after_adding: function()
//     {
//         return (`Name= ${this.name}, Course= ${this.course}, Age= ${this.age}, Colage= ${this.collage}, Area= ${this.area}}`)
//     }
// }
// console.log("BEfore Adding Properties Information Is= ",info.before_adding())
// info.first()
// info.Second()
// console.log("After Adding Information= ", info.after_adding())


// Deleting An Property From Th eObject
// let info= {
//     name: "Ram",
//     class: 10,
//     rollNo: 102,
//     marks: 70,
//     school: "Asha Jyothi"
// }
// delete info.school
// console.log(info)


// Deleting Properties Using Object Method
// let info= {
//     name: "ram",
//     class: 10,
//     regNo: 102,
//     marks: 80,
//     school: "asha jyothi",
//     before_deleting: function()
//     {
//         return (`name= ${this.name}, class= ${this.class}, reg no= ${this.regNo}, marks= ${this.marks}, school= ${this.school}`)
//     },
//     delete: function()
//     {
//         Reflect.deleteProperty(info, "school")
//         return info
//     }
//   } 

// console.log("Before Deleting Th eInformation is= ", info.before_deleting())
// console.log("After Deleting One Information=", info.delete())


// Creating Multiple Objects Using Object Constructor
// function person(name, age, course, town)
// {
//        this.name= name
//        this.age= age
//        this.course= course
//        this.town= town
//        this.display= function()
//        {
//         console.log(`${name}, ${age}, ${course}, ${town}`)
//         console.log(`Nmae= ${name}`)
//        }
// }

// let person1= new person("aman", 21, "BCA", "Humanbad")
// let person2= new person("Swagat", 22, "B.COM", "Sedam")
// let person3= new person("Raj", 23, "BBA", "Pune")

// // console.log(person1)
// // console.log(person2)
// // console.log(person3)
// person1.display()
// person2.display()
// person3.display()