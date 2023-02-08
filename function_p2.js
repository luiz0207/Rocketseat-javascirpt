function Person(name){
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const luiz = new Person("Luiz")

console.log(luiz.walk())