const sum = function(n1, n2) {
      total = n1 + n2
      return total
}


let n1 = 15;
let n2 = 10;
console.log(`O numero 1 é ${n1}`)
console.log(`O numero 2 é ${n2}`)
console.log(`A soma é ${sum(n1, n2)}`)





function createthink(fruta1, fruta2) {
    return fruta1 + fruta2
}


var copo = createthink('melancia', 'uva')

console.log(copo)



//callback : chamar de volta


function sayMyName(name) {
    console.log("Esta é a primeira menssagem")

    name()

    console.log("Esta vai ser a minha terceira menssagem")
}

sayMyName(
    () => {
        console.log("Esta é a segunda menssagem")
    }
)





