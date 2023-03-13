function add(a, b) {
    return a + b
}
function subract(a, b) {
    return a - b
}

var exportableObject = {
    addFn: add,
    subFn: subract
}
module.exports = exportableObject
console.log(module)