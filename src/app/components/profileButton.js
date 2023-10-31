'use client'
import styles from './profile.css'
import { useRouter } from 'next/navigation'

export default function Profile(props) {
  const router = useRouter();
  return (    
    <div className="profile">
      <img src='https://i.scdn.co/image/ab6761610000f178b99cacf8acd5378206767261' onClick={() => router.push('/artistPokemonMatch')}></img>
      <div className="profileButton"> 
       {props.title}

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