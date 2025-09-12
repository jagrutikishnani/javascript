// Here we study conversion of variables

let score = "33abc"
console.log(typeof score)
console.log(typeof(score))

let valueinnumber = Number(score)
console.log(valueinnumber)


//NOTES FOR CONVERSION IN NUMBER DATATYPE
// "33"  AS A STRING = IT GIVES 33
// "33ABC"           = Nan  (not a number)
// true  as a boolean = it gives 1
// flase                =   0

let name = "hitesh"

let nameinboolean = Boolean(name)

console.log(nameinboolean)

// NOTE FOR CONVERSION IN BOOLEAN DATATYPE
// "MEHER"  = TRUE
// "" BLANK STRING = FALSE

let somenumber  = 33
console.log(typeof(somenumber))

let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)