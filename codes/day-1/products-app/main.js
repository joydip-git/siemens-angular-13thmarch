const exportableObject = require('./utility')
// const addFnRef = exportableObject.addFn
// const subFnRef = exportableObject.subFn
const { addFn: addFnRef, subFn: subFnRef } = exportableObject

var addRes = addFnRef(12, 13)
var subRes = subFnRef(12, 13)
console.log(addRes)
console.log(subRes)
console.log(module)

/*
const info = [{
    id: 1,
    name: 'anil',
    projects: [{
        id: 1,
        name: 'CITA',
        startdate: '',
        endDate: '',
        members: [{
            id: 2,
            name: 'sunil'
        }]
    }]
}]

const { members: [{ name }] } = info[0].projects[0]

const numbers = new Array(10, 20, 30, 40)
const [, , c] = numbers
console.log(c)
*/