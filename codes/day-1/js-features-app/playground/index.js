//object literal syntax
// var joydipObj = {
//     name: 'joydip',
//     id: 1,
//     salary: 1000,
//     print: function () {
//         return this.name + ' ' + this.salary
//     }
// }

//constructor function
// function person(name, id, salary) {
//     // var x = 100
//     this.name = name
//     this.id = id
//     this.salary = salary
// }
// person.prototype.print = function () {
//     return this.name + ' ' + this.salary
// }
class Person {
    #_name
    #_id
    #_salary
    constructor(name, id, salary) {
        this.#_name = name
        this.#_id = id
        this.#_salary = salary
    }
    get id() {
        return this.#_id
    }
    set id(val) {
        this.#_id = val
    }
    get name() {
        return this.#_name
    }
    set name(val) {
        this.#_name = val
    }
    get salary() {
        return this.#_salary
    }
    set salary(val) {
        this.#_salary = val
    }
    //method
    print() {
        return this.#_name + ' ' + this.#_salary
    }
}
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}
//console.log(Person.prototype)
var joydipObj = new Trainer('joydip', 1, 1000, 'JS')
console.log(joydipObj.name)
console.log(joydipObj['salary'])
// console.log(joydipObj.hasOwnProperty('print'))
// console.log(person.prototype.hasOwnProperty('print'))
// console.log(Object.prototype.hasOwnProperty('print'))
console.log(joydipObj.print())

joydipObj.location = 'Bangalore'
joydipObj.sayHi = function () {
    console.log('Hi....')
}