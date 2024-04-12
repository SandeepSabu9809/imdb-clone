'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search,setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
    console.log(search);
  return (
    <form className='flex justify-between px-4 max-w-6xl mx-auto' onSubmit={handleSubmit} >
      <input type="text" placeholder='search keywords...' className='w-full h-14 rounded-md placeholder-gray-300 outline-none bg-transparent flex-1 '
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button className='text-amber-400 disabled:text-gray-300 ' disabled={search===''} >Search</button>
    </form>
  )
}
