// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[1].location)


// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students['2222'].address.city)
// console.log(students['3333'].name)






// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name)
// console.log(data2.data[1].bookCategory)





// practise task 
const array = [1, 3, 5, 7, 9];
// way 1
for(let arr of array){
    let result = arr + 1
    // console.log(result)
}
// console.log(a)
// way - 2
const result = array.map(n => n + 1);
// console.log(result)

//practise task
const array2 = [33, 50, 79, 78, 90, 101, 30];
const result2 = array2.find(n => n % 2 == 0)
// console.log(result2)


//task filter
const instructor = [
    {name: 'nodi', age:20, position: 'senior'},
    {name: 'robi', age:20, position: 'junior'},
    {name: 'roni', age:20, position: 'senior'}
]
const filter = instructor.filter(e => e.position == 'senior')
for(let element of filter){
    let name = element.name;
    // console.log(name)
}

//task map
const people = [
    {name : 'Meena', age:20},
    {name : 'Rina', age:15},
    {name : 'Suchorita', age:22}
]
const fill = people.filter(n => n.age)
for(let i of fill){
    let sum = 0
    let total = i + sum
    console.log(total)
}


