function Primo(x) {
    let y = 2
    while (y <= x && x % y != 0) {
        y++
    }
    return x === y ? `${x}, ` : ''
}

let numerosprimos = ''
let numero = 1000
for (let x = 1 ; x <= numero; x++) {
    numerosprimos += Primo(x)   
}
console.log(numerosprimos)