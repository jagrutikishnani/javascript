// ADDITION 5+3 
// SUBSTRACTION  5-3 
// MULTIPLICATION  5*3
// DIVISION  5/3
// % GIVE REMINDER 5%3

//-----------------ASSIGNMENT OPERATORS-------------
let n = 10
n += 5
console.log(n)
n *=2
console.log(n)

//----------------comparison operator-------------------
// a==b   it check equality of both variable
// a!=b    it check ineqality of both variables
// a===b   it compares value and type of both operators(strict eqality)
// a!==b   it compares ineqality with type
// a>b      
//a>=b
//a<b
//a<=b
//result shows in [true or false]

// -------------LOGICAL OPERATORS --------------
// LOGICAL && (AND)
let idproof = "meher"
let age =16
if(age>=18 &&  idproof)
{
    console.log("allowed")

}
console.log("not allowed")

// if first operators is (0 ,null , undefined) it stop the process and return first value
// if first operator is true it evalute second operator nd return value

 let y = null
let b= 10
let z= y && b 
console.log(z)

let p =10
let q  = 5
let r = p && q
console.log(r)


//-------------------logical ||(OR) operator ---------------
// IT CHECKS AT LEAST ONE CONDITION IS TRUE GIVES TRUE VALUW 
// IF BOTH CONDITION IS FALSE RESULT IS FALSE
// IF VALUES ARE  = 0 , NULL , UNDEFINED " "  => FALSE RESULT
