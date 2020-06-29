const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const optionTrue = { crossDomain: true };
var persons = prompt("Cunatas personas Quieres ver de StarWars");

var peronsResponError = (id) => { console.log(`No se pudo obtener el personaje #${id}`) }



var getcharacter = (i) => {
    return new Promise((resolve, reject) => {
        const people = `${API_URL}${PEOPLE_URL.replace(':id',i)}`;
        $
            .get(people, optionTrue, (data) => { resolve(data); })
            .fail(() => { reject(i); })
    })
}

async function getCharacters() {
    var ids = [];
    for (let index = 1; index <= persons; index++) {
        ids.push(index);
    }
    var promises = ids.map(id => getcharacter(id));
    try {
        var characters = await Promise.all(promises);
        console.log(characters);
    } catch (id) {
        peronsResponError(id)
    }
}
getCharacters();








// const PLANET_URL = 'planets/:id';
// function seeplanet(i) {
//     var planet = `${PLANET_URL.replace(':id', i)}`;
//     $.get(planet, { crossDomain: true }, function(data) { console.log(data.name) });
// }


// function recursiveCall(i, final) {
//     if (i === final) {
//         getcharacter(i).then((character) => {
//                 return (character)
//             })
//             .catch(peronsResponError);

//     }
//     getcharacter(i).then((character) => {
//             var data = recursiveCall(i + 1, final);
//             console.log(data.name);
//         })
//         .catch(peronsResponError);
// }

// function getCharacters(limit) {
//     for (let i = 1; i <= limit; i++) {
//         getcharacter(i).then((character) => {
//                 console.log(character.name);
//             })
//             .catch(peronsResponError);
//     }
// }