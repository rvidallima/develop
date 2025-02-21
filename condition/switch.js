let nota = 9

switch (true) {
    case nota === 10:
        console.log('show')
        break;

    case nota > 8:
        console.log('bom')
        break;

    default:
        break;
}

switch (nota) {
    case 10: return console.log('show')
    case 9:  return console.log('bom')
    case 8:  return console.log('a tá')
    default: console.log('a tá');
}