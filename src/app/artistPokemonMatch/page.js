'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { populateProfilePage } from '../../../public/profileMain';
import styles from './artistPokemonMatch.css';

export default function ProfilePages(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let artistID = searchParams.get('artistID');
  populateProfilePage(artistID);

    return (    
      <div className="pfp-centerScroll">
        <script type="module" src='./profileMain.js'></script>

        <div id='pfp-pokemonName'>
          loading... 
        </div>

        <img id="pfp-pokemonImage" src='/timerball.png' onClick={() => router.back()}></img>

        <div id='pfp-artistName'></div>
        <div id='pfp-popularity'></div>
        <div id='pfp-genre'></div>

      </div>
  
    )
}

/*
<div id='pfp-spotifyUrl'>
          <a href='https://www.youtube.com/watch?v=k8ozVkIkr-g&ab_channel=ShiroSagisu-Topic'>
            <img src='/spotifyLogo.png'></img>
          </a>
        </div>
*/
