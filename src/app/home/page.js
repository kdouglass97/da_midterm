'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { populateProfilePage } from '../../../public/profileMain';
import ArtistMenu from '../components/artistMenu';

export default function ProfileHome(props) {
    return ( 
    <div>  
        <ArtistMenu></ArtistMenu>
    </div>
  
    )
}