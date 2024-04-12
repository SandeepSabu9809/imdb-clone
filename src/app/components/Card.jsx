import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuThumbsUp } from "react-icons/lu";

export default function Card({result}) {


  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200  ' >
     <Link href={`/movie/${result.id}`} >
     <div className="relative" style={{ paddingBottom: '56%' }}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            alt={result.title || result.name}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-t-lg hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      <div className='p-2'>
        <p className='line-clamp-2 text-md '>{result.overview}</p>
        <h2 className='text-md font-bold truncate'>{result.title || result.name}</h2>
        <p className='flex items-center '>
        {result.release_date || result.first_air_date}
        <LuThumbsUp className=' mr-1 ml-5'/>
        {result.vote_count}
        </p>
      </div>
     </Link>
    </div>
  )
}
