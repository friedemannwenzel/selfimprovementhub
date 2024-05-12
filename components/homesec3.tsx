import React from 'react'
import Link from 'next/link'
import {Button, ButtonGroup} from "@nextui-org/button";
import Image from 'next/image';


const homesec3 = () => {
    return (
    <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-1 m-auto lg:max-w-screen-xl mt-8 border-1 rounded-xl'>
      <div className='bg-white text-black px-10 py-32 min-h-[400px] '>
        <h2 className='text-5xl font-bold mb-3'>Discover interesting insides</h2>
        <p className='text-2xl'>
          <span>We have created an amazing library of resources</span>
          <span className='font-bold'> open for everybody!</span>
        </p>
        <Button color="primary" size="lg" className='mt-4 text-xl' variant="shadow">Start reading</Button>
      </div>
      <div className='p-5 min-h-[400px] flex items-center'>
        <Image src='/person2badgekey.svg' alt='svg' width={500} height={200} className='rounded-xl'/>
      </div>
    </div>
    )
}

export default homesec3
