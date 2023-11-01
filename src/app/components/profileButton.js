'use client'
import styles from './profile.css'
import { useRouter } from 'next/navigation'
import { getArtistData } from '../../../public/mainLogic';
import Link from 'next/link';

let artistNumber;

export default function Profile(props) {
  const router = useRouter();
  artistNumber = props.artistNumber;
  const artistNameID = 'ArtistName-' + artistNumber
  const artistImageID = 'ArtistImage-' + artistNumber
  return (    
    //profile stores both image + name

    <div className='centerScroll'>
      <div className="profile">
      <img className='artistImage' id={artistImageID} src='/ultraball.png'></img>

      <div className='artistName'>
      <Link href={{
        pathname: '/artistPokemonMatch',
        query: {
          artistID: artistNumber
        }
      }}>
        <div id={artistNameID}> 
          loading artist...
        </div>
      </Link>
      </div>
    </div>
    </div>

  )
}

//
 /*
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
*/