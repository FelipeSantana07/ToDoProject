// 4. Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o
// intervalo 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro
// do array.

let list = [9, 2, 3, 1, 4];

function completarList(list) {
    const maxNum = Math.max(...list);
    const newList = [];

    for (let i = 0; i <= maxNum; i++) {
        if (!list.includes(i)) {
            newList.push(i);
        }
    }

    list.push(...newList);
    return list;
}

console.log(completarList(list));
