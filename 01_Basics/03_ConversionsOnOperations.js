let num1 = "333"
let num2 = "333abc"
let Var1 = null
let Var2 = undefined
let bool = true

let NumInNum = Number(num1)
let NumInStr = Number(num2)
let VartoNum1 = Number(Var1)
let VartoNum2 = Number(Var2)
let booltonum = Number(bool)


console.log(typeof VartoNum1)
console.log(typeof VartoNum2)
console.log(typeof NumInNum)
console.log(typeof NumInStr)
console.log(typeof booltonum )
console.log(NumInNum)
console.log(NumInStr) // NaN (Not a Number)
console.log(VartoNum1)
console.log(VartoNum2)
console.log(booltonum )

// Conversions To Number
// "33" => 33
// "33abc" => NaN
// true => 1, false =>0
// null => 0
// undefined => NaN


// Conversions to Boolean

let isLoggedIn1 = 1
let isLoggedIn2 = ""
let isLoggedIn3 = "Tarif"


let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

console.log(booleanIsLoggedIn1);
console.log(booleanIsLoggedIn2);
console.log(booleanIsLoggedIn3);

// 1 => true ; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let StringNumber = String(someNumber)
console.log(typeof StringNumber)
console.log(StringNumber)