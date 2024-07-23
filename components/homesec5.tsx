import React from "react";
import articleData from "@/json/learn.json";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { Button } from "@nextui-org/button";
export const runtime = "edge";

const homesec5 = () => {
  return (
    <div className=" py-24 px-2">
      <h1 className="text-5xl font-bold m-auto max-w-screen-xl mb-8 text-center">featured articles</h1>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 m-auto max-w-screen-xl">
        {articleData
          .slice()
          .reverse()
          .map((data, index) => (
            <ArticleCard data={data} path="learn/articles" key={index}/>
          ))}
      </div>
      <div className='flex justify-center items-center mt-6'>
        <Link href={`/learn`}>
          <Button color='secondary' variant='shadow' size='lg'>become better -&gt;</Button>
        </Link>
      </div>
    </div>
  );
};

export default homesec5;
