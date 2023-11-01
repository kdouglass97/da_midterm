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
    console.log(artistInfo.images[imageIndex].width)
    return {name: artistInfo.name, 
        popularity: artistInfo.popularity, 
        imageLink: artistInfo.images[imageIndex].url,
        pokemon: pokemonInfo.name, 
}
};

//goes to page, grabs from profileButton  
async function populateData() {
    let artistBank = await artistWrapper();
    console.log(artistBank)

    for (let index = 0; index < artistBank.length; index++) {
        let artistDiv = document.getElementById('ArtistName-' + index)
        artistDiv.innerText = artistBank[index].name
        let artistImage = document.getElementById('ArtistImage-' + index)
        artistImage.src = artistBank[index].imageLink
    }

    /*const header = document.createElement('h1');
    const headerContent = document.createTextNode('hey its mario~');
    header.appendChild(headerContent)
    testDiv.appendChild(header);*/
};

populateData()

// console.log(`${artistname}: ${artistIds[artistname]}`); 