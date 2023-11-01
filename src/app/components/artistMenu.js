import Profile from './profileButton'

import { populateCatalogueData } from '../../../public/artistCatalogue';

export default function ArtistMenu() {
  populateCatalogueData();
  return (
   
    <div id = "buttonContainer"> 
        <script type="module" src='./artistCatalogue.js'>
        </script>
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

  )
}
