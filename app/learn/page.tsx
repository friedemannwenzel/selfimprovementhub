import React from 'react'
import Link from 'next/link';
import {Button} from "@nextui-org/button";
import article from '@/json/learn.json'


const learn = () => {
  return (
    <div className=''>
      <h1 className='text-5xl font-bold text-center my-28'>Explore endless possibilities to grow!</h1>
      <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 m-auto max-w-screen-xl'>
      {article.map((article) => (
        <Link href={`learn/articles/${article.id}`} key={article.id}>
        <div className='bg-emerald-100 rounded-xl min-h-[325px] hover:scale-105 transition-all text-black'>
          <div className='p-8'>
            <h1 className='text-4xl font-bold my-3'>{article.title}</h1>
            <p className='text-lg mb-3'>{article.description}</p>
            <Button color="secondary" size="lg" variant="shadow" className=' font-medium'>Explore</Button>
            </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default learn
