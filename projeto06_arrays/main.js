let futuraFamilia = ['Nelson','Maria', 'Levi', 'Amélie']
let familiaAtual = ['Nilberto', 'Nelson', 'Renata']
let idades = [23, 20, 0, 0, 46, 23, 43]

console.log(`Ultimo elemento da array "Futura Família":  ${futuraFamilia[futuraFamilia.length - 1]}`) 
console.log(`Primeiro elemento da array "Família Atual":  ${familiaAtual[0]}`)
console.log(`Exibindo lista de números: ${idades}`)

futuraFamilia[futuraFamilia.length - 1] = 'Anélie' // Mudando valor da lista / replace
console.log(`Último elemento da array 'Futura Família' (ATUALIZADO): ${futuraFamilia.length - 1}`)

futuraFamilia.push('Amélie') // adicionando valor a lista (fica na ultima posição)
console.log(`Exibindo item adicionado a "Futura Família": ${futuraFamilia[futuraFamilia.length - 1]}`)

console.log(`Exibindo toda a "Futura Família: ${futuraFamilia}`)
