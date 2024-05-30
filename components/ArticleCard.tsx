// ArticleCard.tsx
import React from 'react'
import Link from 'next/link';
import {Button} from "@nextui-org/button";
import Image from 'next/image';


const ArticleCard = ({ data, path }: { data: any, path: string }) => (
  <div className='rounded-xl min-h-[325px] lg:hover:scale-105 transition-all text-black relative shadow-sm border-1 hover:shadow-md pb-12' key={data.id}>
    {data.imageURL && <Image src={data.imageURL} alt={data.altText} width={420} height={200} className='rounded-tl-xl rounded-tr-xl'/>}
    <div className='p-8'>
      <h1 className='text-3xl line-clamp-2 font-bold mb-3'>{data.title}</h1>
      <p className='text-lg mb-3 line-clamp-3'>{data.description}</p>
      <Link href={`${path}/${data.id}`}>
        <Button color="secondary" size="lg" variant="shadow" className='absolute bottom-8 font-medium'>Explore</Button>
      </Link>
    </div>
  </div>
);

export default ArticleCard;