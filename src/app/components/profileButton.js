'use client'
import styles from './profile.css'
import { useRouter } from 'next/navigation'

export default function Profile(props) {
  const router = useRouter();
  const artistNameID = 'ArtistName-' + props.artistNumber
  const artistImageID = 'ArtistImage-' + props.artistNumber
  return (    
    //profile stores both image + name
    <div className="profile">
      <img id={artistImageID} src='/ultraball.png' onClick={() => router.push('/artistPokemonMatch')}></img>
      <div id={artistNameID} className="profileButton"> 
      loading artist...''
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