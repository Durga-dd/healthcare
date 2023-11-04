import bg from '../../assets/bg1.jpg';
import Image from 'next/image';

export const Dental = () => {
  return (
    <div className='relative bg-cover bg-center bg-no-repeat' style={{
      // backgroundColor:'#004320',
      height:'400px',
      backgroundImage: `url(${bg.src})`,
    }}>
      <div className='flex flex-row item-center justify-between h-full sm:flex flex-col item-center justify-between h-full'>
        <div className='basis-1/4 mx-16 py-28 flex-wrap text-white font-sans md:w-1/4'><div><h1 className='text-4xl font-bold tracking-wide'>Healthcare for all</h1></div><div><p className="leading-loose">Providing accessible & affordable primary healthcare needs for everyone.</p></div></div>
        <div className='basis-3/4 absolute bottom right-0 pt-28 '>
          <Image className ="bg-emerald-900"
          src="/images/image1.jpg"
          alt="Image1"
          width='800'
          height='400'
          objectFit='cover'
          quality={100}
          style={{borderRadius:'5px'}}
        /></div>
        
      </div>
    </div>
  )
}

export default Dental;  