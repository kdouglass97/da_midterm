import Image from 'next/image'
import styles from './page.module.css'
import Profile from './components/profileButton'
import ProfilePage from './components/profilePage'
import Counter from './components/counter'
//artist bank is array w/ info
import { getArtistBank } from '../../public/main'

//<ProfilePage></ProfilePage>

export default function Home() {
  
  return (
   
    <body>  

      <div id= "artistBox">
        <script type="module" src='./main.js'></script>
      </div>
      <Profile title='taytay'></Profile>
      <Profile title='jooooojiii'></Profile>

    </body>

  )
}

