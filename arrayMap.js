const Animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

function sort(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {

        // console.log(array[i])
        results.push(array[i].name);


    }
    return results;
}
let names = sort(Animals)
console.log(names);
