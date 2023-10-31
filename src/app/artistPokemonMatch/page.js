'use client'

import { useRouter } from 'next/navigation'

export default function ProfilePages(props) {
  const router = useRouter();
    return (    
      <div className="ProfilePages">
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png' onClick={() => router.back()}></img>

      </div>
  
    )
  }

  /*
  export default function Profile(props) {
    const router = useRouter();
    return (    
      <div className="profile">
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'></img>
        <button className="profileButton" onClick={() => router.push('/artistPokemonMatch')}> 
         {props.title}
  
        </button>
      </div>
  
    )
  }
  */