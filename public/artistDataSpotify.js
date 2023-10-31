import {
    getToken
}from './fetchAccessToken.js';

export async function getArtist(artistId) {
    const myToken = await getToken();
    const artistData = await getArtistHelper(myToken,artistId);
    return artistData;
}

async function getArtistHelper(access_token,artistId){
    //console.log(access_token);
    const res = await fetch("https://api.spotify.com/v1/artists/"+ artistId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + access_token
        },
        //body: 'grant_type=client_credentials'
    });

    const data = await res.json();
    return data
}

