let idade = 13
let dinheiro = true
let carro = true
let moto = false
let podeBeber = idade >= 18 && dinheiro && (!carro || !moto)

console.log(podeBeber)