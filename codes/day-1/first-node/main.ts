var num = 12
var floatNum = 12.34
var nameVal = 'siemens'
var isCorrect = true
var value: any = undefined
var ref: any = null

if (value)
    console.log(value)
else
    console.log(typeof value)

ref = 13
ref = 'joydip'
console.log(ref.toExponential(2))

//declaration
function add(a: number, b: number): number {
    return a + b
}
//expression
var subtract = function (a: number, b: number): number {
    return a - b
}

console.log(typeof num)
console.log(typeof nameVal)
console.log(typeof floatNum)
console.log(typeof isCorrect)
console.log(typeof add)
console.log(typeof subtract)