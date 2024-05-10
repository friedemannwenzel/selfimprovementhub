import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from 'next/link';

const homesec1 = () => {
  return (
    <div className='max-w-screen-xl m-auto mt-36'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold mb-2'>All you need in ONE place</h1>
        <p className='text-xl mb-4'>Self improvement hub is a place where you can find all the resources you need to improve yourself.</p>
        <Link href='/learn'>
          <Button color="success" size="lg" className=' font-medium' variant="shadow">
          start learning
          </Button> 
        </Link>
      </div>
    </div>
  )
}

export default homesec1
