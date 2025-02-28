const fruits = ['maça', 'banana', 'laranja']
console.log(fruits)
console.table(fruits)
console.log(fruits.length)

const fullname = 'JOSE MARIA FRANCISCO'
console.log(fullname.length)
console.log(fullname[0])

let nometrans = NameCapatlize(fullname)
console.log(nometrans)
let nomeseparado = nometrans.split(' ')
console.log(`Olá ${nomeseparado[0]} ${nomeseparado[nomeseparado.length - 1]}`)

function NameCapatlize(Nocompleto) {
    let splitName = fullname.toLowerCase().split(" ")
    nomealterado = ''
    for (i = 0; i < splitName.length; i++) {
        let palavra = splitName[i]
        //nomealterado += palavra[0].toUpperCase() + palavra.slice(1) + ' '
        nomealterado += palavra.charAt(0).toUpperCase() + palavra.slice(1) + ' '
    }
    return nomealterado.trim()
}
