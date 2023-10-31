'use client'
 
//example case of a component
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className='profileButton' onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}