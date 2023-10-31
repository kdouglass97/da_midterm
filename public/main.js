import { 
    getArtist
} from './artistDataSpotify.js';

import {
    artistIds
} from './artistIdList.js';

import {
    getPokemon
} from './getPokemon.js'

//pull artist info from spotiy and puts into artist bank
async function artistWrapper() {
    let artistBank = []
    for (const artistname in artistIds) {
        if (artistIds.hasOwnProperty(artistname)) {
           let artistInfo = await getArtist(artistIds[artistname]); 
           let pokemonInfo = await getPokemon(artistInfo.popularity);
           artistBank.push(associationBank(artistInfo,pokemonInfo));
            //console.log(associationBank);
        }
    }
    return artistBank;
}

//adds pokemon info and helps above function
function associationBank(artistInfo,pokemonInfo) {
    let imageIndex = artistInfo.images.length-1
    return {name: artistInfo.name, 
        popularity: artistInfo.popularity, 
        imageLinks: artistInfo.images[imageIndex].url,
        pokemon: pokemonInfo.name, 
}
};

/*
export function getArtistBank() {
    return artistBank;
}*/

//
async function populateData() {
    let artistBank = await artistWrapper();
    const testDiv = document.getElementById('artistBox')
    console.log(artistBank)
};

populateData()

// console.log(`${artistname}: ${artistIds[artistname]}`); 