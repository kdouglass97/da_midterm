const clientId = '3b9d7abaf26b4d9ba2c740d87556480c'
const clientSecret = '801cbb185f064ea5a70cd7975d5191bb'

const tokenCall = 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' +clientSecret

export async function getToken() {
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await res.json();
    return data.access_token;
}

console.log('inshallah spotify token')


/*
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon.results[1]))
    */