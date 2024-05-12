// creator.tsx
import React from 'react'
import articleData from '@/json/creator.json';
import ArticleCard from '@/components/ArticleCard';
export const runtime ="edge";

const creator = () => (
  <div className=''>
    <h1 className='text-5xl font-bold text-center my-28'>Discover your favorite creator</h1>
    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 m-auto max-w-screen-xl'>
      {articleData.slice().reverse().map((data, index) => (
        <ArticleCard data={data} path="creator" key={index} />
      ))}
    </div>
  </div>
);

export default creator;