import { FC } from 'react';
import { Data } from '../../types';
import LinkCard from '../LinkCard';

const LinkCardItem: FC<Data> = ({ links }) => {
  return (
    <div className="flex flex-col justify-between w-full items-center gap-y-3">
      {links?.map((link, index) => (
        <LinkCard key={index} {...link} />
      ))}
    </div>
  );
};

export default LinkCardItem;
