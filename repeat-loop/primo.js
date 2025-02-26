let numerosprimos = ''
for (let x = 1 ; x <= 1000; x++)
{
    for (let y = 2 ; y <= x ; y++ )
    {
        if (x % y == 0)
        {
            if (x === y) {
                numerosprimos += `${x}, `
            }
            else {
                break
            }
        }
    }
}
console.log(numerosprimos)

numerosprimos = ''
for (let x = 1 ; x <= 1000; x++)
{
    let y = 2
    while (y <= x && x % y != 0) {
        y++
    }
    numerosprimos += x === y ? `${x}, ` : ''
    
}
console.log(numerosprimos)