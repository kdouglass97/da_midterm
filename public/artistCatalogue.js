import { artistWrapper } from './mainLogic.js';

//goes to page, grabs from profileButton  
export async function populateCatalogueData() {
    let ARTIST_BANK = await artistWrapper();

    for (let index = 0; index < ARTIST_BANK.length; index++) {
        let artistDiv = document.getElementById('ArtistName-' + index)
        artistDiv.innerText = ARTIST_BANK[index].name
        let artistImage = document.getElementById('ArtistImage-' + index)
        artistImage.src = ARTIST_BANK[index].imageLink
    }
    console.log('a;sdlkfjas')
};