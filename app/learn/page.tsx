// learn.tsx
import React from 'react'
import articleData from '@/json/learn.json';
import ArticleCard from '@/components/ArticleCard';
export const runtime ="edge";

const learn = () => (
  <div className=''>
    <h1 className='text-5xl font-bold text-center my-28'>Explore endless possibilities to grow!</h1>
    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 m-auto max-w-screen-xl'>
      {articleData.slice().reverse().map((data, index) => (
        <ArticleCard data={data} path="learn/articles" key={index} />
      ))}
    </div>
  </div>
);

export default learn;