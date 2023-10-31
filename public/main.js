import { 
    getArtist
} from './artistDataSpotify.js';

import {
    artistIds
} from './artistIdList.js';

let artistBank = []
async function artistWrapper() {
    for (const artistname in artistIds) {
        if (artistIds.hasOwnProperty(artistname)) {
           let artistInfo = await getArtist(artistIds[artistname]); 
           artistBank.push(artistInfo);
            console.log(artistInfo);
        }
    }
}
artistWrapper();
console.log(artistBank);


// console.log(`${artistname}: ${artistIds[artistname]}`); 