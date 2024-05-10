import React from 'react'
import creator from '@/json/creator.json'
import Link from 'next/link'
import Image from 'next/image'
import {Button, ButtonGroup} from "@nextui-org/button";

const homesec2 = () => {
  return (
    <>
    <div className='bg-black text-white py-24 mt-44'>
      <h1 className='text-5xl font-bold m-auto max-w-screen-xl mb-8'>Explore your favorite creators</h1>
      <div className='grid gap-6 lg:grid-cols-3 grid-rows-1 md:grid-cols-2 sm:grid-cols-1 m-auto max-w-screen-xl'>
      {creator.map((creator) => (
        <Link href={`creator/${creator.id}`} key={creator.id}>
        <div className='bg-emerald-100 rounded-xl min-h-[350px] hover:scale-105 transition-all text-black'>
          <Image src={creator.imageURL} alt={creator.altText} width={500} height={200} className='rounded-tl-xl rounded-tr-xl'/>
          <div className='p-5'>
            <h1 className='text-4xl font-bold my-3'>{creator.title}</h1>
            <p className='text-lg mb-3'>{creator.description}</p>
            <Button color="secondary" size="lg" variant="shadow" className=' font-medium'>Explore</Button>
            </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
    </>
  )
}
export default homesec2