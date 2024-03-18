// 3. Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um
// argumento X e retorne true ou false caso haja no array uma combinação de soma entre dois
// números que resulte no input X. Exemplo: Se X=2, a função deve retornar true pois existem dois
// números 1 dentro do array 1+1 = 2. Caso X=1231 a função deve retornar false pois não existe
// uma combina de dois números capazes de somar 1231.

let list = [1, 15, 2, 7, 2, 5, 7, 1, 4];

function verificarSoma(x) {
    const tam = array.length
    let consultados = new Set()

    for (let i = 0; i < tam; i++) {
        let res = x - list[i]

        if (consultados.has(list[i])) {
            console.log(`Há combinação de soma entre dois números que resulte em ${x} `)
            return true;
            }
        consultados.add(res)
    }
    
    console.log(`Não há combinação de soma entre dois números que resulte em ${x} `)
    return false;
}

console.log(verificarSoma(2)) // true
console.log(verificarSoma(17)) // true
console.log(verificarSoma(31)) //false
console.log(verificarSoma(1231)) //false
