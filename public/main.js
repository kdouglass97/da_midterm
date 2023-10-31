import { 
    getArtist
} from './artistDataSpotify.js';

import {
    artistIds
} from './artistIdList.js';

import {
    getPokemon
} from './getPokemon.js'

let artistBank = []
async function artistWrapper() {
    for (const artistname in artistIds) {
        if (artistIds.hasOwnProperty(artistname)) {
           let artistInfo = await getArtist(artistIds[artistname]); 
           let pokemonInfo = await getPokemon(artistInfo.popularity);
           artistBank.push(associationBank(artistInfo,pokemonInfo));
            //console.log(associationBank);
        }
    }
}

function associationBank(artistInfo,pokemonInfo) {
    return {name: artistInfo.name, 
        popularity: artistInfo.popularity, 
        pokemon: pokemonInfo.name, 
}
};

artistWrapper();
console.log(artistBank);


// console.log(`${artistname}: ${artistIds[artistname]}`); 