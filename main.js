const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//   ---------------Milestone 2-----------------

//  2.1  Print out an array of the inventors whose name starts with 'A'.
let nameOutput = inventors.filter((item) =>{
    return item.charAt(0) == ('A')
})
console.log(nameOutput)

// 2.2 Print out an array of the inventors whose name contains 'n'.
let nameOutput2 = inventors.filter((item) => {
 return item.includes("n")
})
console.log(nameOutput2)


// 2.3 Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let nameOutput3 = inventors.filter((item, index) => {
    let letter = item.split('')
    let result = letter.filter((char, index) =>{
        return letter[index] === letter[index +1]
    })
        return result.length >= 1
   })

   console.log(nameOutput3)


//   2.4 Print out an array of the numbers which are odd.
let numberOutput4 = numbers.filter((item) =>{
    return item % 2 === 1
})
console.log(numberOutput4)


// 2.5 Print out an array of the numbers that have two digits.
let numberOutput2 = numbers.filter((item) =>{
    if( item > 9 && item <= 99){
        return item
    }
})
console.log(numberOutput2)


// 2.6 Print out an array of the numbers which are prime.

let primeNumber = numbers.filter(num =>{
    
    if (num <2){
        return false
    }
    for (let i=2; i < num; i++){
        if (num % i == 0)
        return false
    }

    return true
})

console.log (primeNumber)


//  --------Milestone 3-----------

// 3.1 Print out the first name of each inventor

let mapNameOutput = inventors.map((item) =>{
    let firstName = item.split(' ')
    return firstName[0]
})
console.log(mapNameOutput)

// 3.2 Print out the length of every inventor's full name.
let mapNameOutput2 = inventors.map((item) =>{
    let fullName = item.split(' ')
    return fullName.reduce((total, item, index) => total += item.length, 0)
})
console.log(mapNameOutput2)

// 3.3 Print out all the inventors' names in uppercase

let mapNameOutput3 = inventors.map((item, index) => {
    return item.toUpperCase()
})
console.log(mapNameOutput3)

// 3.4 Print out initials of all inventors(e.g. A.E., I.N., ...)

let initalleter = inventors.map ((name) =>{
    let inventorSplit = name.split(' ')
    let result3 =''
    for (let i=0; i < inventorSplit.length; i++){
        result3 += inventorSplit[i][0] + '.' 
    }
    
    return result3
})

console.log(initalleter)

// ----------Milestone 4----------

// 4.1 Sort all the inventors in alphabetical order, A-Z.

sortNameOutput = inventors.sort()
console.log(sortNameOutput)

// 4.2 Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method

let sortNameOutput2 = inventors.sort((a, b) =>{

})

console.log("i can understand, sorry")
// 4.3 Sort all the inventors by length of name, shortest name first.


let sortByLength = inventors.sort((a, b)=>{
    return a.length - b.length
})
console.log(sortByLength)

// 4.4 Sort all the inventors by length of name, longest name first. Do not use the reverse method.

let sortNameOutput3 =inventors.sort((a, b) =>{
    return b.length -a.length
})

console.log(sortNameOutput3)


// -----------------Milestone 5-----------

// 5.1 Find the sum of all the numbers.

let findNumberOutput = numbers.reduce((total, item) => {
    return total += item
}, 0)

console.log(findNumberOutput)
// 5.2 Find the sum of all the even numbers.

let findNumberOutput2 = numbers.reduce((total, item) => {
    if( item % 2 === 0){
        return total += item
    }else {
        return total +=0
    }
})
console.log(findNumberOutput2)


// 5.3 Create a string that has the first name of every inventor.

let firstName2 = inventors.reduce((total, name) =>{
    total += name.split(' ')[0]
    return total
}, '' )
console.log(firstName2)

// ------------Milestone 6------------

// 6.1 Does any inventor have the letter 'y' in their name?

let someNameOutput = inventors.some((item) =>{
    return item.includes('y')
})
console.log(someNameOutput)

// 6.2 Does every inventor have the letter 'e' in their name?

let everyNameOutput = inventors.every((item) => {
    return item.includes('e')
})
console.log(everyNameOutput)

// 6.3 Does every inventor have first name that's longer than 4 characters?

let everyNameOutput2 = inventors.every((item) =>{
    let name2 = item.split(' ')[0]
    return name2.length >4
})
console.log(everyNameOutput2)

// ---------milestone 7-------------

// 7.1 Find the inventor that has a middle name.

let haveMidleName = inventors.find((name) => name.split(' ').length >= 3)
console.log(haveMidleName)

// 7.2 Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

let haveMidleName2 = inventors.filter((name) => name.split(' ').length <= 2)
console.log(haveMidleName2)

// 7.3 Find the number divisible by 7.

let findNumber1 = numbers.find((item) =>{
    return item % 7 === 0
})

console.log(findNumber1)

// 7.4 Bonus: Return a new array, that only has the numbers that are not divisible by 7.

let findNumber2 = numbers.find((item) =>{
    return item % 7 !== 0
})

console.log(findNumber2)
