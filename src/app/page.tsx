import Image from 'next/image'
import About from './about'
import Dental from './components/dental'

export default function Home() {
  return (<>
  <div className='container mx-auto lg:px-32'>
    <Dental />
    </div></>
  )
    
}
