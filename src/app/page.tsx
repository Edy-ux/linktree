'use client';
import LinkCardItem from '../components/LinkItem';
import Image from 'next/image';
import data from '../data.json';
import { Data } from '../types';

export default function HomePage() {
  const links: Data = data;

  return (
    <div className="flex flex-col w-full items-center justify-center mt-16 px-8 ">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={100}
        height={100}
      />
      <h1 className="text-xl mt-4 mb-8 font-bold text-white">Ednei Lopes</h1>
      <LinkCardItem links={links.links} />
    </div>
  );
}

/* 
 {links.links.map((link, i) => (
          <li key={i}>{link.title}</li>
        ))} */
