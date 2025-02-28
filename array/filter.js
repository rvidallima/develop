const brands = ['nike', 'adidas', 'lacoste', 'calvin klein']

const brandsComA = brands.filter(brand => 
    brand.includes('a')
)

console.log(brandsComA)

const brandsComB = brands.filter(brand => 
    brand.includes('ad') || brand.includes('la')
)

console.log(brandsComB)


const brandsComC = brands.filter(brand => 
    brand.charAt(1)
)

console.log(brandsComC)