import Image from 'next/image'
//import styles from './page.module.css'
import Profile from './components/profileButton'
import ProfilePage from './components/profilePage'
import Counter from './components/counter'
//artist bank is array w/ info
import { getArtistBank } from '../../public/main'
import styles from './mainPage.css'

//<ProfilePage></ProfilePage>

export default function Home() {
  
  return (
   
    <body>  

      <div id= "artistBox">
        <script type="module" src='./main.js'></script>
      </div>

      <div id = "buttonContainer"> 
        <Profile artistNumber='0'></Profile>
        <Profile artistNumber='1'></Profile>
        <Profile artistNumber='2'></Profile>
        <Profile artistNumber='3'></Profile>
        <Profile artistNumber='4'></Profile>
        <Profile artistNumber='5'></Profile>
        <Profile artistNumber='6'></Profile>
        <Profile artistNumber='7'></Profile>
        <Profile artistNumber='8'></Profile>
      </div>

    </body>

  )
}

