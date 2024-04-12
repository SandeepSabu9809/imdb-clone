import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex justify-center mt-24'>
      <Image width={100} height={100} src="/spinner.svg" alt="loading..." />
    </div>
  );
}
