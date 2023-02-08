/*
    Object
        - Propriedades/ atributos
        - Funcionalidades / metodos

        { propriedade : valor}
        Object entre chaves;
*/


console.log({

    name: "Luiz",
    idade: 16,
    correr: function(){
        console.log("");
    }
})


var person = {
    name: "Luiz",
    idade: 16,
    weight: 60,
    altura: 173,
}

console.log(person.name);


var somebody = {
    name: "Luiz",
    idade: 16,
    weight: 60,
    numero:[
        15,
        13,
        17
    ]
}


console.log(`Meu nome é ${somebody.name} e eu tenho ${somebody.idade} e depois eu terei ${somebody.numero[2]}`)


