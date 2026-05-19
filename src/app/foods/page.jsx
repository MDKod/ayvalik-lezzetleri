import { data } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';


const Foods = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Ayvalık Lezzet Rehberi</h1>


      <div>
        {data.map((item)=> <Link key={item.id} href={`/foods/${item.id}`}>
          <Image src={item.src} alt={item.name} className='aspect-square object-cover w-full rounded-md' />
          <h2>{item.name}</h2>
        </Link>)}
      </div>
    </div>
  )
}

export default Foods; 
