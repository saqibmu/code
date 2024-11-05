// JavaScript Variable Scope
// Global Scope
// Local (Function) Scope
// Blocl-Level Scope

// Level Scope

function abc() {
    // local variable
   let msg = 'Hello Python Class'
    console.log('Message is:', msg)
}
abc()
// console.log(msg)
// Global scope

let msg = 'Hellow msg two'
function abc1() {
    console.log('Local Message:', msg)
}
abc1()

// Block Level 
function display(){
    // Local
    let msg1 = 'Local Scope'
    if (true){
        // Block level variable
        console.log('INNER SCOPE:', msg1)
    }
    console.log('Outer Scope:', msg1)
}
// call a function
display()

let test = 5
console.log(test)

// Hoisting in Javascript
// there are generally two types of hoistings in Javascript:

// variable Hoisting 
// Function Hoisting

// var let const 
// let abc = 'Hello'

// call function before define
abc()
abc()
abc()

function abc(){
    console.log('Function Hoisting')
}

// ES6 
// Arrow Function

const addnum = (a , b) => a + b
// call a function

const result = addnum(5 , 3)
console.log(result)

// Syntax

// let myfun = (arg1 , arg2 ,...) =>{
    // console.log()
    // }

    // abc = myfun(2 , 3 , 4)

    let sayhello = () => 'Hello World'
    console.log(sayhello)

    const square = x => x*x
    console.log(square (5))