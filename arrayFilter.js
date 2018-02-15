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
        if (array[i].species == 'dog') {
            // console.log(array[i])
            results.push(array[i]);
        }

    }
    return results;
}

let dogs = sort(Animals);

console.log(dogs)

const species = function() {
    let dogSpecies = Animals.filter(e => e.species === 'dog')
    return dogSpecies;
};
var result = species(Animals);
console.log(result);
