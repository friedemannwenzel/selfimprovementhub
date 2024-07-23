import article from '@/json/learn.json';
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import Image from 'next/image';
export const runtime ="edge";

const selectedArticle = {
  title: 'Article Title',
  description: 'Article Description',
  creator: 'Creator Name',
  date: '2024-05-12 12:00:00',
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
    { heading: 'Heading 10', paragraph: 'Paragraph 10', imageUrl: 'https://example.com/image10.jpg', imageAlt: 'Image 10' },
    { heading: 'Heading 11', paragraph: 'Paragraph 11', imageUrl: 'https://example.com/image11.jpg', imageAlt: 'Image 11' },
    { heading: 'Heading 12', paragraph: 'Paragraph 12', imageUrl: 'https://example.com/image12.jpg', imageAlt: 'Image 12' },
    { heading: 'Heading 13', paragraph: 'Paragraph 13', imageUrl: 'https://example.com/image13.jpg', imageAlt: 'Image 13' },
    { heading: 'Heading 14', paragraph: 'Paragraph 14', imageUrl: 'https://example.com/image14.jpg', imageAlt: 'Image 14' },
    { heading: 'Heading 15', paragraph: 'Paragraph 15', imageUrl: 'https://example.com/image15.jpg', imageAlt: 'Image 15' },
    { heading: 'Heading 16', paragraph: 'Paragraph 16', imageUrl: 'https://example.com/image16.jpg', imageAlt: 'Image 16' },
    { heading: 'Heading 17', paragraph: 'Paragraph 17', imageUrl: 'https://example.com/image17.jpg', imageAlt: 'Image 17' },
    { heading: 'Heading 18', paragraph: 'Paragraph 18', imageUrl: 'https://example.com/image18.jpg', imageAlt: 'Image 18' },
    { heading: 'Heading 19', paragraph: 'Paragraph 19', imageUrl: 'https://example.com/image19.jpg', imageAlt: 'Image 19' },
    { heading: 'Heading 20', paragraph: 'Paragraph 20', imageUrl: 'https://example.com/image20.jpg', imageAlt: 'Image 20' },
  ],
};

export default function Page({ params }: { params: { id: string } }) {
  const selectedArticle = article.find((item) => item.id === params.id);
  return (
    <>
    <Link href={`/learn`}>
        <Button color="default" size="sm" variant="light" className='fixed top-26 left-6 font-medium'>back</Button>
    </Link>
    <article className='max-w-screen-md m-auto px-2'>
      <h1 className='mt-8 text-5xl font-bold'>{selectedArticle?.title}</h1>
      <p className='text-xl font-medium mt-2'>{selectedArticle?.description}</p>
      <p className='mt-2 text-sm text-slate-500 italic'>by {selectedArticle?.creator}</p>
      <p className='text-sm text-slate-500 italic'>{selectedArticle?.date}</p>
      {selectedArticle?.content.map((section, index) => (
        <div key={index}>
          <h1 className='mt-8 text-2xl font-bold'>{section.heading}</h1>
          <p className='mt-2 text-lg'>{section.paragraph}</p>
          {section.imageUrl && <Image src={section.imageUrl} alt={section.imageAlt} width={1000} height={200} className='mt-4 rounded-md' />}
        </div>
      ))}
    </article>
    </>
  );
}