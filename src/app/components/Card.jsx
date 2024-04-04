import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({result}) {
  return (
    <div>
     <Link href={'/movie/${result.id}'} >
     <Image 
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
          width={500}
          height={300}
          className='sm:rounded-t-lg'
      />
     </Link>
    </div>
  )
}
