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

let mapNames = function() {
    let animalMap = Animals.map(e => e.name);
    return animalMap;
}
let map1 = mapNames(Animals);
console.log(map1);

//get rid of all cats with filter - chaining

let noCats = function(array) {
    return array.filter(e => e.species != 'cat')
        .map(e => e.name);
};
let filterCats = noCats(Animals)
console.log(filterCats)
