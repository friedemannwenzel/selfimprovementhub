import creator from '@/json/creator.json';
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import Image from 'next/image';
export const runtime ="edge";

const selectedArticle = {
  title: 'Creator Name',
  description: 'Creator Description',
  content: [
    { heading: 'Heading 1', paragraph: 'Paragraph 1', imageUrl: 'https://example.com/image1.jpg', imageAlt: 'Image 1' },
    { heading: 'Heading 2', paragraph: 'Paragraph 2', imageUrl: 'https://example.com/image2.jpg', imageAlt: 'Image 2' },
    { heading: 'Heading 3', paragraph: 'Paragraph 3', imageUrl: 'https://example.com/image3.jpg', imageAlt: 'Image 3' },
    { heading: 'Heading 4', paragraph: 'Paragraph 4', imageUrl: 'https://example.com/image4.jpg', imageAlt: 'Image 4' },
    { heading: 'Heading 5', paragraph: 'Paragraph 5', imageUrl: 'https://example.com/image5.jpg', imageAlt: 'Image 5' },
    { heading: 'Heading 6', paragraph: 'Paragraph 6', imageUrl: 'https://example.com/image6.jpg', imageAlt: 'Image 6' },
    { heading: 'Heading 7', paragraph: 'Paragraph 7', imageUrl: 'https://example.com/image7.jpg', imageAlt: 'Image 7' },
    { heading: 'Heading 8', paragraph: 'Paragraph 8', imageUrl: 'https://example.com/image8.jpg', imageAlt: 'Image 8' },
    { heading: 'Heading 9', paragraph: 'Paragraph 9', imageUrl: 'https://example.com/image9.jpg', imageAlt: 'Image 9' },
  ],
};

export default function Page({ params }: { params: { id: string } }) {
  const selectedCreator = creator.find((item) => item.id === params.id);
  return (
    <>
    <Link href={`/creator`}>
        <Button color="default" size="sm" variant="light" className='fixed top-26 left-6 font-medium'>back</Button>
    </Link>
    <article className='max-w-screen-md m-auto'>
      <h1 className='mt-8 text-5xl font-bold'>{selectedCreator?.title}</h1>
      <p className='text-xl font-medium mt-2'>{selectedCreator?.description}</p>
      {selectedCreator?.content.map((section, index) => (
        <div key={index}>
          <h1 className='mt-8 text-2xl font-bold'>{section.heading}</h1>
          <p className='mt-2 text-lg'>{section.paragraph}</p>
          {section.imageUrl && <Image src={section.imageUrl} alt={section.imageAlt} width={800} height={200} className='mt-4' />}
        </div>
      ))}
    </article>
    </>
  );
}