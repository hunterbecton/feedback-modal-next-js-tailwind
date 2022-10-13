import { FC } from 'react';

import { IconProps } from './_types';

export const IconOne: FC<IconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg
      aria-labelledby='svg-icon-one'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title className='pointer-events-none' id='svg-icon-one'>
        One
      </title>
      <path d='M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z' fill={color} />
    </svg>
  );
};
