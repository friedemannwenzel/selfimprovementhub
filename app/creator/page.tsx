// creator.tsx
import React from 'react'
import articleData from '@/json/creator.json';
import ArticleCard from '@/components/ArticleCard';

const creator = () => (
  <div className=''>
    <h1 className='text-5xl font-bold text-center my-28'>Discover your favourite creator</h1>
    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 m-auto max-w-screen-xl'>
      {articleData.slice().reverse().map((data) => (
        <ArticleCard data={data} path="creator"/>
      ))}
    </div>
  </div>
);

export default creator;