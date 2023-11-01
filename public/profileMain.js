import { artistWrapper } from './mainLogic.js';

//goes to page, grabs from profileButton  
export async function populateProfilePage(artistID) {
    let ARTIST_BANK = await artistWrapper();
    let currArtist = ARTIST_BANK[artistID]

    //updating image based on 'virality' (aka popularity)
    let popularity = currArtist.popularity + 1;
    let imageLink;
    if (popularity < 10) {
        imageLink = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' + popularity + '.png';
    } else if (popularity < 100) {
      imageLink = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' + popularity + '.png';
    } else {
      imageLink = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + popularity + '.png';
    }

    document.getElementById("pfp-pokemonImage").src = imageLink;

    //updating text elements based on other artist data
    document.getElementById("pfp-pokemonName").innerText = currArtist.pokemon;

    document.getElementById("pfp-artistName").innerText = currArtist.name;

    document.getElementById("pfp-popularity").innerText = 'virality ' + currArtist.popularity;
    
};

/*
#pfp-artistName{
    font-weight: bold;
}
#pfp-popularity{
    font-weight: lighter;
    font-size: large;
}
#pfp-pokemonName{
    font: large;
}
#pfp-pokemonImage{
    display: flex;
    align-items: center;
}
*/